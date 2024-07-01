const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0/practice');

const Schema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: false
        },
        name: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: falses
        }
    }, { strict: false }
);

const model = mongoose.model('users', Schema);
module.exports = model;
