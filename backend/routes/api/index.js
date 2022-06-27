const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotRouter = require('./spots.js');
const bookingRouter = require('./bookings');
const imageRouter = require('./images');


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/spots', spotRouter);

router.use('/bookings', bookingRouter);

router.use('/images', imageRouter);

module.exports = router;
