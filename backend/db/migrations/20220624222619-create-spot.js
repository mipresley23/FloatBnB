'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      image: {
        type: Sequelize.STRING(2000),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(1000),
        allowNull: false
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      marinaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Marinas' }
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
    return queryInterface.dropTable('Spots');
  }
};
