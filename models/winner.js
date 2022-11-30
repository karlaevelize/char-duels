"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class winner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  winner.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      points: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "winner",
    }
  );
  return winner;
};
