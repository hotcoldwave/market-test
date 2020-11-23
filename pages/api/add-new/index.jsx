const connectToMongo = require('../../../lib/api/connectToMongo');
const mongoose = require('mongoose');
let Phone;

async function handler(req, res) {
    if (req.method === 'POST') {
        if (mongoose.models.Phone) {
            Phone = mongoose.model('Phone');
        } else {
            Phone = await connectToMongo('mongodb://localhost/phonesdb');
        }
        const item = req.body;
        const phone = new Phone({
            model: item.model,
            description: item.description,
            characteristics: {
                color: item.color,
                display: item.display,
                price: item.price,
                color: item.color,
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
