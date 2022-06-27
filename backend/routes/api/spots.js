const express = require('express');
const asyncHandler = require('express-async-handler');
const {Spot} = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
  const spots = await Spot.findAll({
    include: [
        'Marina',
        'User'
    ]
  });
  console.log(spots.Marina)
  return res.json(spots);
}))

router.get('/:id', asyncHandler(async(req, res) => {
  const spot = await Spot.findByPk(req.params.id, {
    include: [
      'Marina',
      'Spot'
    ]
  });
  return res.json(spot);
}))


router.post('/new', asyncHandler(async (req, res, next) => {
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

router.put('/:id', asyncHandler(async(req, res) => {
  const {name, price, userId, marinaId} = req.body;
  const spot = await Spot.update({
    name,
    price,
    userId,
    marinaId
  })
  return res.json(spot)
}))
module.exports = router;
