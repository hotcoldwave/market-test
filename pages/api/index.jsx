const connectToMongo = require('../../lib/api/connectToMongo');
const mongoose = require('mongoose');

async function handler(req, res) {
    let Phone;
    if (mongoose.models.Phone) {
        Phone = mongoose.model('Phone');
    } else {
        Phone = await connectToMongo('mongodb://localhost/phonesdb');
    }

    if (req.method === 'GET') {
        let data;
        let { searchQuery, minPrice, maxPrice } = req.query;

        if (minPrice === '') {
            minPrice = 0;
        }

        if (maxPrice === '') {
            maxPrice = 300000;
        }

        if (Object.keys(req.query).length !== 0) {
            data = await Phone.find({
                model: { $regex: `${searchQuery}`, $options: 'i' },
                'characteristics.price': { $gt: minPrice, $lt: maxPrice },
            }).exec();
        } else {
            data = await Phone.find().exec();
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ data }));
    }

    if (req.method === 'POST') {
        const item = req.body;
        const phone = new Phone({
            model: item.model,
            description: item.description,
            characteristics: {
                ...item.characteristics,
            },
        });
        await phone.save(function (error) {
            if (error) return console.error(error);
        });
        res.statusCode = 200;
        res.end();
    }
}

export default handler;
