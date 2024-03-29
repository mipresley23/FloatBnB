const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
  const users = await User.findAll();
  return res.json(users);
}))


const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 8 })
    .withMessage('Password must be 8 characters or more.'),
  handleValidationErrors
];

router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username, bio, profileImage } = req.body;
    const user = await User.signup({ email, username, password, bio, profileImage });

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);


module.exports = router;
