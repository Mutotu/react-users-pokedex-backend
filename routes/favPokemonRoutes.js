const favPokemonRoutes = require("express").Router();
const favPokemonController = require("../controllers/favPokemonController");
const auth = require("../middleWare/verfiy");
/////[auth.verify] to evaluate if the user is still logged in
favPokemonRoutes.get("/:userId", [auth.verify], favPokemonController.index);
favPokemonRoutes.post("/", [auth.verify], favPokemonController.create);
favPokemonRoutes.delete("/:name", [auth.verify], favPokemonController.destroy);
// favPokemonRoutes.post("/save", favPokemonController.post);
module.exports = favPokemonRoutes;

// const favPokemonRoutes = require("express").Router();
// const favPokemonController = require("../controllers/favPokemonController");

// /////[auth.verify] to evaluate if the user is still logged in
// favPokemonRoutes.get("/", favPokemonController.index);
// favPokemonRoutes.post("/", favPokemonController.create);
// favPokemonRoutes.delete("/:id", favPokemonController.destroy);
// // favPokemonRoutes.post("/save", favPokemonController.post);
// module.exports = favPokemonRoutes;
