const express = require("express");
const {
    watchService,
    // watchServiceById,
    // verseDayServiceByName
} = require('../services/watchService');
const watchRouter = express.Router();

const cors = require('cors');
const { default: axios } = require("axios");

watchRouter.use(cors());
watchRouter.use(express.json());

watchRouter.get('/', (req, res, next) => {
    watchService()
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

watchRouter.get('/:watchId', (req, res, next) => {
    const watchId = req.params.watchId;
    watchServiceById(watchId)
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
    console.log(watchId);
})


module.exports = watchRouter;