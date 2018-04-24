const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const MessageSchema = require('./message.model');


const UserSchema = mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },
    /*
        messages: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
        }],*/
}, {
    timestamps: true
});

UserSchema.plugin(passportLocalMongoose, {
    maxAttempts: 5
});

module.exports = mongoose.model('User', UserSchema);