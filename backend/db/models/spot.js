'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER
  }, {});
  Spot.associate = function(models) {
    Spot.hasMany(models.Booking, { foreignKey: 'spotId' });
    Spot.belongsTo(models.User, { foreignKey: 'userId' });
    Spot.hasMany(models.Image, { foreignKey: 'spotId' });
  };
  return Spot;
};
