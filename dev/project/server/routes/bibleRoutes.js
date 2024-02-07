const express = require('express');
const {
    bibleService,
} = require('../services/bibleService');
const bibleRouter = express.Router();

const cors = require('cors');

bibleRouter.use(cors());
bibleRouter.use(express.json());

bibleRouter.get('/', (req, res) => {
    console.log('bible');
    // res.send('bible');
    bibleService()
        .then(result => {
            res.status(200).json(result.data);
        })
        .catch(err => {
            res.status(500).json({
                error: {
                    message: err.message,
                    method: req.method,
                },
            });
            console.log(err);
        })

})

bibleRouter.get('/books', (req, res) => {
    console.log('books');
    res.send('books');
})

module.exports = bibleRouter;