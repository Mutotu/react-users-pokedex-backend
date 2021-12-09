const userRoutes = require("express").Router();
const userController = require("../controllers/userController");

userRoutes.post("/", userController.createUser);
userRoutes.post("/login", userController.getUser);
userRoutes.get("/verify", userController.verifyUser);

module.exports = userRoutes;
