const express = require('express');
const {
    fakerDataService,
    fakerDataServiceById,
    fakerDataServiceByName
} = require('../services/fakerDataService');
const fakerRouter = express.Router();

const cors = require('cors');

fakerRouter.use(cors());
fakerRouter.use(express.json());

fakerRouter.get('/', (req, res, next) => {
    fakerDataService()
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

fakerRouter.get('/:name', (req, res, next) => {
    fakerDataServiceByName(req.params.name)
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

fakerRouter.get('/:id', (req, res, next) => {
    fakerDataServiceById(req.params.id)
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


module.exports = fakerRouter;