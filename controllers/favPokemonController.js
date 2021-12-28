const models = require("../models");
const favPokemonController = {};

favPokemonController.index = async (req, res) => {
  try {
    const favPokemon = await models.favPokemon.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.json({ favPokemon });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// favPokemonController.create = async (req, res) => {
//   console.log(req.body.name);
//   try {
//     const findId = await models.user.findOne({
//       where: {
//         id: req.body.id,
//       },
//     });
//     console.log(findId);

//     const newFavPokemon = await models.favPokemon.create({
//       name: req.body.name,
//       userId: req.body.id, //added
//     });

//     findId.addFavPokemon(newFavPokemon); //added
//     res.json({ newFavPokemon });
//     // res.json({ findId });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// favPokemonController.create = async (req, res) => {
//   console.log(req.body.name);
//   try {
//     const findId = await models.user.findOne({
//       where: {
//         id: req.body.id,
//       },
//     });
//     console.log(findId);

//     const newFavPokemon = await models.favPokemon.create({
//       name: req.body.name,
//       userId: req.body.id, //added
//     });

//     findId.addFavPokemon(newFavPokemon); //added
//     res.json({ newFavPokemon });
//     // res.json({ findId });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
////////////////////////////////////
// favPokemonController.create = async (req, res) => {
//   try {
//     const newFavPokemon = await models.favPokemon.create({
//       name: req.body.name,
//       // userId: req.body.id,
//     });

//     res.json({ newFavPokemon });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
favPokemonController.create = async (req, res) => {
  try {
    const newFavPokemon = await models.favPokemon.create({
      name: req.body.name,
      userId: req.body.userId,
    });
    console.log(newFavPokemon);
    res.status(201).json({ newFavPokemon });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

favPokemonController.destroy = async (req, res) => {
  try {
    const deleteResult = await models.favPokemon.destroy({
      where: { name: req.params.name },
    });
    res.json({ deleteResult });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = favPokemonController;
