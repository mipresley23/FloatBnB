'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Marinas', [
          {
            name: 'Duncan L. Clinch Marina',
            address: '111 E. Grandview Pkwy',
            city: 'Traverse City',
            state: 'MI',
            country: 'USA'
          },
          {
            name: 'Marina Del Rey Marina',
            address: '13524 Bali Way',
            city: 'Los Angeles',
            state: 'CA',
            country: 'USA'
          },
          {
            name: 'MiaMarina',
            address: '401 Biscayne Blvd',
            city: 'Miami',
            state: 'FL',
            country: 'USA'
          },
          {
            name: '5th Street Marina',
            address: '341 NW S River Dr',
            city: 'Miami',
            state: 'FL',
            country: 'USA'
          },
          {
            name: 'Orleans Marina',
            address: '221 Lake Marina Ave',
            city: 'New Orleans',
            state: 'LA',
            country: 'USA'
          },
          {
            name: 'Elliot Bay Marina',
            address: '2601 W Marina Pl',
            city: 'Seattle',
            state: 'WA',
            country: 'USA'
          },
          {
            name: 'Yacht Haven Grande',
            address: '5304 Yacht Haven Grande, Suite 100',
            city: 'St. Thomas',
            state: 'US Virgin Islands',
            country: 'U.S. Virgin Islands'
          },
          {
            name: 'Van Isle Marina',
            address: '2320 Harbour Road',
            city: 'Sidney',
            state: 'BC',
            country: 'Canada'
          },
          {
            name: 'Outer Harbour Marina',
            address: '475 Unwin Ave',
            city: 'Toronto',
            state: 'ON',
            country: 'Canada'
          },
          {
            name: 'Friday Harbor',
            address: '3800 Sunreef Ave',
            city: 'Innisfill',
            state: 'ON',
            country: 'Canada'
          },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Marinas', null, {});
  }
};
