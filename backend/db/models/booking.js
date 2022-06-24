'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Spot, { foreignKey: 'spotId' });
    Booking.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Booking;
};
