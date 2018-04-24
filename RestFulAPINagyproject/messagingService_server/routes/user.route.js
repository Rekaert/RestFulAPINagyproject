const passport = require('passport');
const userRouter = require('express').Router();
const User = require('../controllers/user.controller');

// Login and registrate
// a metódus (pl. get) és az url megmondja, h. mi történjen, a controllerből hívja meg a register, login, getUser, logout metódusokat
// localhost:3000/ --> getUser
// localhost:3000/register --> register
// localhost:3000/login --> login
// localhost:3000/logout --> logout
userRouter.get('/', User.getUser);
userRouter.post('/register', User.register);
//userRouter.post('/login', passport.authenticate('local'), User.login);
userRouter.post('/login', passport.authenticate('local'), User.login);
userRouter.get('/logout', User.logout);

module.exports = userRouter;