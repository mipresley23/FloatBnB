const express = require('express');
const asyncHandler = require('express-async-handler');
const {Spot, Booking} = require('../../db/models');
const router = express.Router();
const {check} = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation');

const validateSpot = [
  check('name')
    .exists({checkFalsy: true})
    .isLength({min: 1, max: 100})
    .withMessage('Spot name is required.'),
  check('price')
    .exists({checkFalsy: true})
    .isInt({min: 1})
    .withMessage('Spot price is required.'),
  check('description')
    .exists({checkFalsy: true})
    .isLength({max: 1000})
    .withMessage('Spot description is required.'),
  check('image')
    .exists({checkFalsy: true})
    .isLength({max: 2000})
    .withMessage('Spot image is required.'),
  check('marinaId')
    .exists({checkFalsy: true})
    .withMessage('Please choose a location.')
]

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
    const { name, price, image, description, userId, marinaId } = req.body;
      const spot = await Spot.create({
        name,
        price,
        image,
        description,
        userId,
        marinaId
      });
      return res.json(spot);
  })
);

router.put('/:id(\\d+)', asyncHandler(async(req, res) => {
  const spotEdit = await Spot.findByPk(req.params.id);
  const {name, price, image, description, userId, marinaId} = req.body;
  const spot = await spotEdit.update({
    name,
    price,
    image,
    description,
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
