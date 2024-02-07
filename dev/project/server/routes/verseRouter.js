const express = require("express");
const {
    verseService,
    verseServiceById,
    // verseDayServiceByName
} = require('../services/verseService');
const verseRouter = express.Router();

const cors = require('cors');
const { default: axios } = require("axios");

verseRouter.use(cors());
verseRouter.use(express.json());

verseRouter.get('/', (req, res, next) => {
    verseService()
        .then(result => {
            res.status(200).json(result.data);
        })
        .catch(err => {
            res.status(500).json({
                error: {
                    message: err.message,
                    method: req.method
                },
            });
        });

})

verseRouter.get('/:verseId', (req, res, next) => {
    const verseId = req.params.verseId;
    verseServiceById(verseId)
        .then(result => {
            res.status(200).json(result.data);
        })
        .catch(err => {
            res.status(500).json({
                error: {
                    message: err.message,
                    method: req.method
                },
            });
        });
    console.log('Inside Verse Router')
    console.log(verseId);
})


module.exports = verseRouter;