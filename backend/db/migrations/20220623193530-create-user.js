'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(30),
        unique: true
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(256),
        unique: true
      },
      bio: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      profileImage: {
        type: Sequelize.STRING(2000),
        allowNull: true,
        defaultValue: 'https://truckeetrails.org/wp-content/uploads/2022/04/025baa5b2cd7e46b6b4730247f6663ed.png'
      },
      hashedPassword: {
        allowNull: false,
        type: Sequelize.STRING.BINARY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
