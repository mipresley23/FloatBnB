'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Images', [
          {
            url: 'https://onboat.co/wp-content/uploads/2021/09/cocokai-1.jpg',
            spotId: 1
          },
          {
            url: '',
            spotId: 2
          },
          {
            url: '',
            spotId: 3
          },
          {
            url: '',
            spotId: 4
          },
          {
            url: '',
            spotId: 5
          },
          {
            url: '',
            spotId: 6
          },
          {
            url: '',
            spotId: 7
          },
          {
            url: '',
            spotId: 8
          },
          {
            url: '',
            spotId: 9
          },
          {
            url: '',
            spotId: 10
          },
          {
            url: '',
            spotId: 11
          },
          {
            url: '',
            spotId: 12
          },
          {
            url: '',
            spotId: 13
          },
          {
            url: '',
            spotId: 14
          },
          {
            url: '',
            spotId: 15
          },
          {
            url: '',
            spotId: 16
          },
          {
            url: '',
            spotId: 17
          },
          {
            url: '',
            spotId: 18
          },
          {
            url: '',
            spotId: 19
          },
          {
            url: '',
            spotId: 20
          },
          {
            url: '',
            spotId: 21
          },
          {
            url: '',
            spotId: 22
          },
          {
            url: '',
            spotId: 23
          },
          {
            url: '',
            spotId: 24
          },
          {
            url: '',
            spotId: 25
          },
          {
            url: '',
            spotId: 26
          },
          {
            url: '',
            spotId: 27
          },
          {
            url: '',
            spotId: 28
          },
          {
            url: '',
            spotId: 29
          },
          {
            url: '',
            spotId: 30
          },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Images', null, {});
  }
};
