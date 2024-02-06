const express = require('express');

const bibleRouter = express.Router();

const cors = require('cors');

bibleRouter.use(cors());
bibleRouter.use(express.json());

bibleRouter.get('/', (req, res) => {
    console.log('bible');
    res.send('bible');
})

bibleRouter.get('/books', (req, res) => {
    console.log('books');
    res.send('books');
})

module.exports = bibleRouter;