"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tourParticipants",
      [
        {
          charId: 1,
          tournamentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          charId: 2,
          tournamentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          charId: 3,
          tournamentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          charId: 4,
          tournamentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          charId: 1,
          tournamentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          charId: 2,
          tournamentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          charId: 3,
          tournamentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          charId: 4,
          tournamentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          charId: 5,
          tournamentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          charId: 6,
          tournamentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          charId: 7,
          tournamentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          charId: 8,
          tournamentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tourParticipants", null, {});
  },
};
