'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    marinaId: DataTypes.INTEGER
  }, {});
  Spot.associate = function(models) {
    Spot.belongsTo(models.User, { foreignKey: 'userId' });
    Spot.belongsTo(models.Marina,  { foreignKey: 'marinaId' });
    Spot.hasMany(models.Review, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks:true })
    Spot.hasMany(models.Booking, {foreignKey: 'spotId', onDelete:'CASCADE', hooks:true } )
    const columnMapping = { through: 'Favorites', otherKey: 'userId', foreignKey: 'spotId'}
    Spot.belongsToMany(models.User, columnMapping)
  };
  return Spot;
};
