
const mongoose = require("mongoose");


const verifySchema = new mongoose.Schema({
    fullname:{
        type: String,
        default: "your fullname"
    },
    email:{
        type: String,
        default: "your email address"
    },
    gender:{
        type: String,
        default: "select your gender "
    },
    country_code:{
        type: String,
        default: "country code "
    },
    country:{
        type: String,
        default: "select your country"
    },
    tel:{
        type: String,
        default: "your "
    },
    year:{
        type: String,
        default: "your year of birth"
    },
    month:{
        type: String,
        default: "your month of birth "
    },

    day:{
        type: String,
        default: "your day of birth "
    },
   image:{
    type: String
   },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        // required: true
    }
},{timestamps: true})


const Verify = mongoose.model('verify', verifySchema);

module.exports = Verify;