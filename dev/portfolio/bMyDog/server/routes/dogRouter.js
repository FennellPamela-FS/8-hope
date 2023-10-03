const express = require('express');
const {
    dogDataService,
    dogDataServiceById,
    dogDataServiceByName
} = require('../services/dogDataService');
const dogRouter = express.Router();

const cors = require('cors');

dogRouter.use(cors());
dogRouter.use(express.json());

dogRouter.get('/', (req, res, next) => {
    dogDataService()
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

});

dogRouter.get('/:name', (req, res, next) => {
    dogDataServiceByName(req.params.name)
        .then(result => {
            res.status(200).json({
                result: result.data
            });
        })
        .catch(err => {
            res.status(500).json({
                error: {
                    message: err.message
                },
            });
        });
});

dogRouter.get('/:id', (req, res, next) => {
    dogDataServiceById(req.params.id)
        .then(result => {
            res.status(200).json({
                result: result.data
            });
        })
        .catch(err => {
            res.status(500).json({
                error: {
                    message: err.message
                },
            });
        });
});


module.exports = dogRouter;