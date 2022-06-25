'use strict';
module.exports = (sequelize, DataTypes) => {
  const Marina = sequelize.define('Marina', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  Marina.associate = function(models) {
    Marina.hasMany(models.Spot, { foreignKey: 'marinaId' });
  };
  return Marina;
};
