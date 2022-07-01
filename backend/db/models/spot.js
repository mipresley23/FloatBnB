'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER,
    marinaId: DataTypes.INTEGER
  }, {});
  Spot.associate = function(models) {
    Spot.belongsTo(models.User, { foreignKey: 'userId' });
    Spot.belongsTo(models.Marina,  { foreignKey: 'marinaId' });
    Spot.hasMany(models.Image, { foreignKey: 'spotId' });
    Spot.hasMany(models.Booking, {foreignKey: 'spotId' })
  };
  return Spot;
};
