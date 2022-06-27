const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot } = require('../../db/models');
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

module.exports = router;
