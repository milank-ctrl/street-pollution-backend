const mongoose = require('mongoose');

const monitorSchema = mongoose.Schema({
    sample_datetime: Date,
    pm10: Number,
    pm25: Number,
    istest: Number
})

module.exports = mongoose.model('monitor', monitorSchema);