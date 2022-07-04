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

router.post('/', asyncHandler(async (req, res, next) => {
  const { startDate, endDate, spotId, userId } = req.body;
  const booking = await Booking.create({
     startDate,
     endDate,
     spotId,
     userId
   });
  return res.json(booking);
})
);



//Delete Booking

router.delete('/:id(\\d+)', asyncHandler(async(req, res) => {
  const booking = await Booking.findByPk(req.params.id)
  await booking.destroy();
  return res.json(booking)
}))




module.exports = router;
