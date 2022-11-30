"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class duel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  duel.init(
    {
      charA: DataTypes.INTEGER,
      charB: DataTypes.INTEGER,
      round: DataTypes.INTEGER,
      winnerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "duel",
    }
  );
  return duel;
};
