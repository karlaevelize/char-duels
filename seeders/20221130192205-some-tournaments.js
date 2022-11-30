"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tournaments",
      [
        {
          name: "League of Wizards",
          participants: 4,
          rounds: 3,
          location: "Narnia",
          status: "live",
          winnerId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "League of Classics",
          participants: 8,
          rounds: 7,
          location: "Narnia",
          status: "planned",
          winnerId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tournaments", null, {});
  },
};
