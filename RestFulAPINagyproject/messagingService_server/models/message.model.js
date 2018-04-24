const mongoose = require('mongoose');
const UserSchema = require('./user.model');


const MessageSchema = mongoose.Schema({
    /*
        id: {
            type: mongoose.Schema.Types.ObjectId,
            default: new mongoose.Types.ObjectId()
        },*/

    text: {
        type: String,
        required: true
    },

    sender: {
        type: String,
        required: true
    },

    mailingTo: {
        type: String,
        required: true
    },

    read: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: true

});

// új metódusokat írhatunk hozzá
// Methods
MessageSchema.method({})

// Static Methods
MessageSchema.static({})

// ezt a táblát MessageSchema néven tudjuk elérni
module.exports = mongoose.model('Message', MessageSchema)