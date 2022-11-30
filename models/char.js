"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class char extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      char.belongsToMany(models.tournament, {
        through: "tourParticipants",
        foreignKey: "charId",
      });
    }
  }
  char.init(
    {
      name: DataTypes.STRING,
      imageUrl: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "char",
    }
  );
  return char;
};
