const express = require('express');
const asyncHandler = require('express-async-handler');
const {Spot, Booking} = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
  const spots = await Spot.findAll({
    include: [
        'Marina',
        'User'
    ]
  });
  return res.json(spots);
}))

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
  const spot = await Spot.findByPk(req.params.id);
  return res.json(spot);
}))


router.post('/', asyncHandler(async (req, res, next) => {
    const { name, price, userId, marinaId } = req.body;
    const spot = await Spot.create({
       name,
       price,
       userId,
       marinaId
     });
    return res.json(spot);
  })
);

router.put('/:id(\\d+)', asyncHandler(async(req, res) => {
  const spotEdit = await Spot.findByPk(req.params.id);
  const {name, price, userId, marinaId} = req.body;
  const spot = await spotEdit.update({
    name,
    price,
    userId,
    marinaId
  })
  return res.json(spot)
}))

router.delete('/:id(\\d+)', asyncHandler(async(req, res) => {
  const spot = await Spot.findByPk(req.params.id)
  await spot.destroy()
  return res.json(spot)
}))
module.exports = router;
