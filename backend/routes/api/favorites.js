const express = require('express');
const asyncHandler = require('express-async-handler');
const {Favorite, Spot} = require('../../db/models');

const router = express.Router()

router.get('/', asyncHandler(async(req, res) => {
  const favorites = await Favorite.findAll();
  return res.json(favorites)
}))

router.post('/', asyncHandler(async(req, res) => {
  const favorite = await Favorite.create(req.body);
  return res.json(favorite)
}))

router.delete('/:id', asyncHandler(async(req, res) => {
  const spot = await Spot.findByPk(req.params.id)
  const favorite = await Favorite.findOne({where: {spotId: spot.id}})
  await favorite.destroy()
  return res.json(favorite)
}))

module.exports = router
