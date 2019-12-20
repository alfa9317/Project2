module.exports = function(sequelize, DataTypes) {
  var Foods = sequelize.define("Foods", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        len: [1]
      }
    },
    FoodName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    FoodType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  });
  return Foods;
};
