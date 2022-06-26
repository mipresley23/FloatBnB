const express = require('express');
const asyncHandler = require('express-async-handler');

const { Booking } = require('../../db/models')

const router = express.Router();

//Get all Bookings
router.get('/', asyncHandler(async(req, res) => {
  const bookings = await Booking.findAll({
    include: [
      'Spot',
      'User'
    ]
  })
  return res.json(bookings)
}))


//Create Booking



//Delete Booking




module.exports = router;
