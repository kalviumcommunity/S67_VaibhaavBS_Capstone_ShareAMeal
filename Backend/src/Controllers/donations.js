const express = require('express');
const router = express.Router();
const Donation = require('../Models/donationModel');

router.post('/', async(req,res)=>{
    try{
        const{
            title,
            tags,
            quantity,
            location,
            availableUntil,
            donorName
        } = req.body;

        const newDonation = new Donation({
            title,
            tags,
            quantity,
            location,
            availableUntil,
            donorName
        });

        const savedDonation = await newDonation.save();
        res.status(201).json(savedDonation);
    } catch (error) {
        console.error('Error creating donation:', error);
        res.status(500).json({error: 'Failed to create donation'});
    }
});

module.exports = router;