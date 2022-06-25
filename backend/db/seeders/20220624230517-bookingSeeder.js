'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Bookings', [
          {
            startDate: '2022-07-29',
            endDate: '2022-07-31',
            spotId: 8,
            userId: 11
          },
          {
            startDate: '2022-08-11',
            endDate: '2022-08-15',
            spotId: 15,
            userId: 12
          },
          {
            startDate: '2022-08-04',
            endDate: '2022-08-08',
            spotId: 6,
            userId: 13
          },
          {
            startDate: '2022-09-01',
            endDate: '2022-09-04',
            spotId: 22,
            userId: 14
          },
          {
            startDate: '2022-08-19',
            endDate: '2022-08-22',
            spotId: 2,
            userId: 15
          }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Bookings', null, {});
  }
};
