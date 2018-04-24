const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const db = require('./config/database');
const helmet = require('helmet');
const morgan = require('morgan');
const fs = require('fs');
const browserSync = require('browser-sync');
const path = require('path');
const rfs = require('rotating-file-stream');
const cors = require('cors');
const passportLocal = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const http = require('http');


const messageRouter = require('./routes/message.route')
const userRouter = require('./routes/user.route')
const User = require('./models/user.model');
const Message = require('./models/message.model');

const logDirectory = path.join(__dirname, 'log');
const port = process.env.PORT || 3000;
const app = express();


//connect to mongoDB
mongoose.connect(db.uri, db.options, () => {
        console.log('MongoDB connected.');
    },
    err => {
        console.error('MongoDB error.: ' + err)
    });


// Logging
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
let accessLogStream = rfs('access.log', {
    interval: '1d',
    path: logDirectory
});

app.use(morgan('combined', {
    stream: accessLogStream,
    skip: (req, res) => res.statusCode < 400
}));

// Security
app.use(helmet());

// Enable CORS
app.use(cors());

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//Cookie handling
app.use(cookieParser());

//Session handling
app.use(session({
    secret: 'YOUR_SECRET_KEY',
    resave: true,
    saveUninitialized: true
}));

//Passport AUTH
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//User router, Message router
//localhost:3000/ és localhost:3000/message
app.use('/', userRouter);
app.use('/message', messageRouter);

// Start Browser-Sync
//if (app.get('env') === 'development') {
//    const browserSync = require('browser-sync')
//    const config = {
//        files: ['views/**/*.html'],
//        logLevel: 'info',
//        logSnippet: false,
//        reloadDelay: 3000,
//        reloadOnRestart: true
//    }
//    const bs = browserSync(config)
//    app.use(require('connect-browser-sync')(bs))
//}

// Start server
app.listen(port);
console.log("Server is listening on port" + port);

module.exports = app;