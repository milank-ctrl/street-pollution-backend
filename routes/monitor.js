const express = require('express');
const router = express.Router();
const monitorS = require('../models/db');




//get last row
router.get('/lastrow', async (req, res) => {

    try{
    const monitorData = await monitorS.find().sort({_id:-1}).limit(1);
        res.status(200).json(monitorData);

    } catch(err){
        res.status(400).json({message: err.message});
    }
           
});

//get all rows back
router.get('/', async (req, res) => {

    try{
    const monitorData = await monitorS.find();
        res.status(200).json(monitorData);

    } catch(err){
        res.status(400).json({message: err.message});
    }
           
});

//add new line
router.post('/', async (req, res) => {
    const monitorData = new monitorS ({
        sample_datetime: req.body.sample_datetime,
        pm10: req.body.pm10,
        pm25: req.body.pm25,
        istest: req.body.istest
    })

    try {
        const newMonitorData = await monitorData.save()
        res.status(201).json(newMonitorData);

    } catch(err) {
        res.status(400).json({message: err.message});
    }
});


module.exports = router;