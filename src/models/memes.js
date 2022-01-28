const mongoose = require("mongoose");


const memScheme = new mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    event: {
        type: String,
        default: "100m"
    },
})

//We are creating new colletion
const MensRanking = new mongoose.model("MenRanking", memScheme)

module.exports = MensRanking;