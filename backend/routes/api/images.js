const express = require('express');
const asyncHandler = require('express-async-handler');

const { Image } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
  const images = await Image.findAll({
    include:'Spot'
  })
  return res.json(images)
}))

module.exports = router;
