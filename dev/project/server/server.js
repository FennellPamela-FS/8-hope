// Set up a basic Express server
// Backend Server

const http = require('http');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const port = process.env.PORT || 5000;

// import routes
// const verseDayRouter = require('./routes/verseDayRouter');
const verseRouter = require('./routes/verseRouter');


const app = express();

app.use(cors())
app.use(express.json())
// app.use(require('./routes/verseDayRouter'))
app.use(require('./routes/verseRouter.js'))


app.get('/', (req, res) => {
    // res.status(200).json({ message: `Service us up on ${port}!` })
    res.send(`Hello from Express on ${port}!`)
})

// Router: verseDay 
// app.use('/vod', verseDayRouter);
app.use('/verse', verseRouter);

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


// get driver connection
const dbo = require('./db/conn')

// request listener
http.createServer(app).listen(port, () => {
    console.log(`Server running on ${port}`);
});
