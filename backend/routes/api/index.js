const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotRouter = require('./spots.js');
const bookingRouter = require('./bookings');
const marinaRouter = require('./marinas');
const reviewRouter = require('./reviews');
const favoriteRouter = require('./favorites');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/spots', spotRouter);

router.use('/bookings', bookingRouter);

router.use('/marinas', marinaRouter);

router.use('/reviews', reviewRouter)

router.use('/favorites', favoriteRouter);

module.exports = router;
