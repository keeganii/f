const express = require("express");
const Router = express.Router();
const userController = require("../controllers").User;
router
  .route("/usuarios")
  .get(userController.showLogin)
  .post(userController.auth);
module.exports = Router;
