

const mongoose = require('mongoose');


const widthdrawSchema = new mongoose.Schema({
    balance_type:{
        type:String
    },
    select_button: {
        type: String,
    },

    amount_input:{
        type:String
    },
    pin:{
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

const Widthdraw = mongoose.model('widthdraw', widthdrawSchema);

module.exports = Widthdraw;