const mongoose = require('mongoose');

const PhoneSchema = new mongoose.Schema({
    model: String,
    description: String,
    characteristics: {
        color: String,
        display: Number,
        memory: Number,
        price: Number,
    },
});

module.exports = PhoneSchema;
