module.exports = function(sequelize, DataTypes) {
  var OrderHeader = sequelize.define("OrderHeader", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      validate: {
        len: [1]
      }
    },
    OrderStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    OrderDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
      validate: {
        len: [1]
      }
    }
  });
  // WHEN A HEADER IS DELETED, ALSO IS DELETED THE ASSOCIATED LINES
  OrderHeader.associate = function(models) {
    OrderHeader.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return OrderHeader;
};
