const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'User'
    }]
})

mongoose.model('Group', groupSchema);