const express = require('express');
const asyncHandler = require('express-async-handler');
const {Favorite} = require('../../db/models');
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
  const favorite = Favorite.findByPk(req.params.id)
  await favorite.destroy()
  return res.json(favorite)
}))

module.exports = router
