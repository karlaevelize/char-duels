const { Router } = require("express");

const Tour = require("../models").tournament;
const Char = require("../models").char;
const Duel = require("../models").duel;

const router = new Router();

router.post("/:id/start", async (request, response, next) => {
  try {
    const { id } = request.params;
    //get a tournament with its participants
    const tour = await Tour.findByPk(2, {
      include: { model: Char, attributes: ["id"], through: { attributes: [] } },
    });

    //get only the participants id
    const tourChars = tour.chars.map((c) => c.id);

    //define the pairs for the duels
    let pairs = [];

    while (tourChars.length >= 2) {
      const random1 = Math.random() * tourChars.length;
      const person1 = tourChars.splice(random1, 1)[0];

      const random2 = Math.random() * tourChars.length;
      const person2 = tourChars.splice(random2, 1)[0];

      pairs.push({ charA: person1, charB: person2 });
    }

    //create round 1 duels
    const duelsRoundOne = pairs.map(async (duel) => {
      const allDuels = await Duel.create({
        charA: duel.charA,
        charB: duel.charB,
        round: 1,
      });
      return allDuels;
    });

    await Promise.all(duelsRoundOne);

    response.send(tour);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
