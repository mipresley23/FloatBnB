const express = require('express')
const asyncHandler = require('express-async-handler')
const { Review } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
  const reviews = await Review.findAll({
    include: [
      'User',
      'Spot'
    ]
  });
  return res.json(reviews)
}))

router.post('/new', asyncHandler(async(req, res) => {
  const { content, rating, userId, spotId } = req.body;
  const review = await Review.create({
    content,
    rating,
    userId,
    spotId
  });
  return res.json(review);
}))

router.put('/:id(\\d+)', asyncHandler(async(req, res) => {
  const editReview = await Review.findByPk(req.params.id);
  const {content, rating, userId, spotId} = req.body;
  const review = await editReview.update({
    content,
    rating,
    userId,
    spotId
  })
  return res.json(review)
}))

router.delete('/:id(\\d+)', asyncHandler(async(req, res) => {
  const review = await Review.findByPk(req.params.id)
  await review.destroy()
  return res.json(review)
}))


module.exports = router;
