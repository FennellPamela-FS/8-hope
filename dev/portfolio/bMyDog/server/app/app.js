// Express on Node.js
// Request Listener

require('dotenv').config();
const session = require('express-session')
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// store the user session id to mongodb
const MongoDBStore = require('connect-mongodb-session')(session)

// Import Routes
// const fakerRouter = require('../routes/fakerRouter');
const loginRouter = require('../routes/loginRouter');
const dogRouter = require('../routes/dogRouter');

const app = express();

// expiration date of the cookie
// valid for only 3 hours
const MAX_AGE = 1000 * 60 * 60 * 3;

// http://localhost:3080/ for incoming requests from client

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};

// API initial connection to database
// connect to mongodb
mongoose.connect(process.env.mongodbURL, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) {
        console.error("Error: ", err.message);
    }
    else {
        console.log("MongoDB is up and running");
    }
});


// setting up connect-mongodb-session store
const mongoDBstore = new MongoDBStore({
    uri: process.env.mongodbURL,
    collection: 'mySessions',
})


// Get the session object
app.use(session({
    secret: '1tw3fo5si7ei',
    name: 'session-id',
    store: mongoDBstore,
    cookie: {
        maxAge: MAX_AGE,
        sameSite: false,
        secure: false,
    },
    resave: true,
    saveUninitialized: false,
}));

// Middleware for JSON, CORS, BodyParser
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());


// React App.js
// app.use('/', homePage);

// login API
app.use('/api', loginRouter);

// Router: Dogs API 
app.use('/dogs', dogRouter);


// Posts / User
// app.use('/posts', postRouter);
// app.use('/users', userRouter);
// app.use('/api/users', ownerRouter);



//Get Routes
app.get('/', (req, res, next) => {
    res.status(200).json({ message: "Service is up" });
    // res.send('We are on HomePage');
});

// ****************************************************************
// Error handling 
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method
        },
    });
});


module.exports = app; 