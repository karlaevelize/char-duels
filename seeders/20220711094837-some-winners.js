"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "winners",
      [
        {
          name: "Bunny",
          points: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bugs",
          points: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Frodo",
          points: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zelena",
          points: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Abel",
          points: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("winners", null, {});
  },
};
