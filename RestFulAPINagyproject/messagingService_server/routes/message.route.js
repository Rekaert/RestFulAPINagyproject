const messageController = require('../controllers/message.controller');
const express = require('express');
const messageRouter = express.Router();

// az összes üzenet lekérése és új üzenet létrehozása
messageRouter.route('/')
    .get(messageController.list)
    .post(messageController.create);
// adott id-jú üzenet lekérése, frissítése, törlése
messageRouter.route('/:id')
    .get(messageController.find)
    .put(messageController.update)
    .delete(messageController.remove);

module.exports = messageRouter;