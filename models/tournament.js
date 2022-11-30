"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tournament extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tournament.belongsToMany(models.char, {
        through: "tourParticipants",
        foreignKey: "tournamentId",
      });
    }
  }
  tournament.init(
    {
      name: DataTypes.STRING,
      participants: DataTypes.INTEGER,
      winnerId: DataTypes.INTEGER,
      rounds: DataTypes.INTEGER,
      location: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tournament",
    }
  );
  return tournament;
};
