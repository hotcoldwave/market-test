const mongoose = require('mongoose');
const phoneSchema = require('../../data/models/PhoneSchema');
const initData = require('../../data/initialData.json');
const seedingPhones = require('./seedingPhones');

async function connectToMongo(url) {
    const connection = await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const Phone = mongoose.model('Phone', phoneSchema);

    await seedingPhones(Phone, initData.phones);

    return Phone;
}

module.exports = connectToMongo;
