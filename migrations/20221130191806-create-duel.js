"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("duels", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      charA: {
        type: Sequelize.INTEGER,
      },
      charB: {
        type: Sequelize.INTEGER,
      },
      round: {
        type: Sequelize.INTEGER,
      },
      winnerId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("duels");
  },
};
