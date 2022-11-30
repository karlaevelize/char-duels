"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "chars",
      [
        {
          name: "Gandalf",
          imageUrl:
            "https://cdna.artstation.com/p/assets/images/images/020/833/710/original/francesco-montibello-gandalf-1.gif?1569345311",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saruman",
          imageUrl: "https://art.pixilart.com/f7b154cf7c8d316.gif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dumbledore",
          imageUrl:
            "https://unismithy.files.wordpress.com/2015/04/wizard2attackgray.gif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Grindelwald",
          imageUrl:
            "https://cdnb.artstation.com/p/assets/images/images/026/322/549/original/janaka-volpe-wizard.gif?1588469829",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Merlin",
          imageUrl:
            "https://cdna.artstation.com/p/assets/images/images/024/414/460/original/ruben-van-zijst-wizard-idle-animation-1280x1280px.gif?1582326963",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cogumelo",
          imageUrl: "https://nftz.forgottenrunes.com/wizards/6001.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hulky",
          imageUrl:
            "https://streak.club/img/Mix1c2VyX2NvbnRlbnQvdXBsb2Fkcy9pbWFnZS8yMjk2LmdpZg==/600x600%23/YMMFCl.gif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Azulil",
          imageUrl:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/859e6c24-9340-4f00-9614-faad3dc8a827/daddc1h-4a0cec9d-94c4-47df-b8d4-4f12d3e158df.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg1OWU2YzI0LTkzNDAtNGYwMC05NjE0LWZhYWQzZGM4YTgyN1wvZGFkZGMxaC00YTBjZWM5ZC05NGM0LTQ3ZGYtYjhkNC00ZjEyZDNlMTU4ZGYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DbPbVVcE9ab3eZ4U5_5g04r--FYP0jVGbLx-KuauODI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("chars", null, {});
  },
};
