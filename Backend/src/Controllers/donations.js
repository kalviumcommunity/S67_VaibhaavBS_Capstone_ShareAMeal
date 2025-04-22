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

router.get('/', async (req, res) => {
    try {
      const donations = await Donation.find().sort({ postedAt: -1 }); 
      res.status(200).json(donations);
    } catch (error) {
      console.error('Error fetching donations:', error);
      res.status(500).json({ error: 'Failed to fetch donations' });
    }
  });
  

router.put('/:id', async(req, res) => {
    try{
        const donationId = req.params.id;
        const updatedData = req.body;

        const updatedDonation = await Donation.findByIdAndUpdate(
            donationId,
            updatedData,
            { new: true, runValidators: true }
        );

        if(!updatedDonation){
            return res.status(404).json({error: 'Donation not found'});
        }

        res.status(200).json(updatedDonation);
    } catch (error) {
        console.error('Error updating donation', error);
        res.status(500).json({error: 'Failed to update donation'});
    }
});

module.exports = router;