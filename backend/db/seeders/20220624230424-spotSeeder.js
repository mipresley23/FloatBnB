'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Spots', [
          {
            name: 'Go With The Flow',
            price: 1500,
            userId: 1,
            marinaId: 1,
          },
          {
            name: 'Seasick',
            price: 3000,
            userId: 1,
            marinaId:1,
          },
          {
            name: 'The Great Gatsea',
            price: 8000,
            userId: 1,
            marinaId: 1,
          },
          {
            name: 'Come Sail Away',
            price: 1500,
            userId: 2,
            marinaId: 2,
          },
          {
            name: 'Hydro-Therapy',
            price: 3000,
            userId: 2,
            marinaId: 2,
          },
          {
            name: 'Fantasea',
            price: 8000,
            userId: 2,
            marinaId: 2,
          },
          {
            name: 'Knot Working',
            price: 1800,
            userId: 3,
            marinaId: 3,
          },
          {
            name: 'No Regrets',
            price: 4000,
            userId: 3,
            marinaId: 3,
          },
          {
            name: 'Up To No Good',
            price: 10000,
            userId: 3,
            marinaId: 3,
          },
          {
            name: 'Bottoms Up',
            price: 1200,
            userId: 4,
            marinaId: 4,
          },
          {
            name: 'Life Is Good',
            price: 2500,
            userId: 4,
            marinaId: 4,
          },
          {
            name: 'Missing Link',
            price: 6000,
            userId: 4,
            marinaId: 4,
          },
          {
            name: 'No Worries',
            price: 1500,
            userId: 5,
            marinaId: 5,
          },
          {
            name: 'Relentless',
            price: 3000,
            userId: 5,
            marinaId: 5,
          },
          {
            name: 'Seas The Day',
            price: 8000,
            userId: 5,
            marinaId: 5,
          },
          {
            name: 'Tide Runner',
            price: 1500,
            userId: 6,
            marinaId: 6,
          },
          {
            name: 'Uptown Girl',
            price: 3000,
            userId: 6,
            marinaId: 6,
          },
          {
            name: 'Winning Ticket',
            price: 8000,
            userId: 6,
            marinaId: 6,
          },
          {
            name: 'Kerplunk',
            price: 1200,
            userId: 7,
            marinaId: 7,
          },
          {
            name: 'Jolly Roger',
            price: 2500,
            userId: 7,
            marinaId: 7,
          },
          {
            name: 'Hakuna Matata',
            price: 6500,
            userId: 7,
            marinaId: 7,
          },
          {
            name: 'Exhibit A',
            price: 1347,
            userId: 8,
            marinaId: 8,
          },
          {
            name: 'Calypso',
            price: 2659,
            userId: 8,
            marinaId: 8,
          },
          {
            name: 'Blue Moon',
            price: 6324,
            userId: 8,
            marinaId: 8,
          },
          {
            name: 'Amazing Grace',
            price: 1500,
            userId: 9,
            marinaId: 9,
          },
          {
            name: 'Mahalo',
            price: 3000,
            userId: 9,
            marinaId: 9,
          },
          {
            name: 'The Black Pearl',
            price: 8000,
            userId: 9,
            marinaId: 9,
          },
          {
            name: 'On The Rocks',
            price: 1000,
            userId: 10,
            marinaId: 10,
          },
          {
            name: 'Queen Of Hearts',
            price: 2250,
            userId: 10,
            marinaId: 10,
          },
          {
            name: 'Under The Sea',
            price: 5000,
            userId: 10,
            marinaId: 10,
          },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Spots', null, {});
  }
};
