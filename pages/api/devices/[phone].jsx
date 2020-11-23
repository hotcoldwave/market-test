const connectToMongo = require('../../../lib/api/connectToMongo');
const mongoose = require('mongoose');
let Phone;

async function handler(req, res) {
    if (req.method === 'GET') {
        if (mongoose.models.Phone) {
            Phone = mongoose.model('Phone');
        } else {
            Phone = await connectToMongo('mongodb://localhost/phonesdb');
        }

        const data = await Phone.findById(req.query.phone).exec();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    }
}

export default handler;
