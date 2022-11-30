"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "cards",
      [
        {
          name: "Bunny",
          imageUrl: "",
          charisma: 15,
          intelligence: 5,
          strength: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bugs",
          imageUrl: "",
          charisma: 10,
          intelligence: 7,
          strength: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Frodo",
          imageUrl: "",
          charisma: 20,
          intelligence: 17,
          strength: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "Abel",
          imageUrl: "",
          charisma: 10,
          intelligence: 10,
          strength: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zelena",
          imageUrl: "",
          charisma: 5,
          intelligence: 15,
          strength: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cards", null, {});
  },
};