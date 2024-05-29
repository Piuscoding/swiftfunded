const mongoose = require('mongoose');


const depositSchema = new mongoose.Schema({

    select_input:{
        type: String,
    },
    input_amount: {
        type: String
    },
   
    status: {
        type: String,
        default: 'pending'
    },

    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        // required: true
    }
}, {timestamps: true});

const Deposit = mongoose.model('deposit', depositSchema);

module.exports = Deposit;
