const Message = require('../models/message.model');
const User = require('../models/user.model');

module.exports = {
    // getAll
    list: (req, res) => {

        Message.find({}, (err, message) => {
            if (err) {
                return res.send(err)
            }
            res.json(message)
        })
    },
    // getOne
    find: (req, res) => {
        Message.findById(req.params.id, (err, message) => {
            if (err) {
                return res.send(err)
            }
            res.json(message)
        })
    },

    create: (req, res) => {
        Message.create(req.body, (err, message) => {
            if (err) {
                return res.send(err)
            }
            res.json(message);
            console.log('New message is add to the database');
        })
    },

    update: (req, res) => {
        req.body.updateAt = new Date().toLocaleString();
        Message.findByIdAndUpdate(req.params.id, req.body, (err, message) => {
            if (err) {
                return res.send(err)
            }
            res.json(message)
        })
    },

    remove: (req, res) => {
        Message.findByIdAndRemove(req.params.id, (err, message) => {
            if (err) {
                return res.send(err)
            }
            res.json(message);
            console.log('message: The message is deleted');
        })
    }
}