module.exports = function(sequelize, DataTypes) {
  var OrderLines = sequelize.define("OrderLines", {
    OrderPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  });
  OrderLines.associate = function(models) {
    OrderLines.belongsTo(models.Foods, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return OrderLines;
};
