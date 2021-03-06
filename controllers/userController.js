const models = require("../models");
const userController = {};

userController.createUser = async (req, res) => {
  try {
    const newUser = await models.user.create({
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

userController.getUser = async (req, res) => {
  try {
    const foundUser = await models.user.findOne({
      where: { email: req.body.email },
    });
    if (foundUser && foundUser.password === req.body.password) {
      req.userId = foundUser.id;

      res.status(200).json({ user: foundUser });
    } else {
      res.status(404).json({ error: "user not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

userController.verifyUser = async (req, res) => {
  try {
    const verfiedUser = await models.user.findOne({
      where: { id: req.headers.authorization },
    });
    console.log(verfiedUser);
    if (verfiedUser) {
      res.json({ verfiedUser });
    } else {
      console.log("not matched");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = userController;
