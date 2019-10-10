var express = require("express");
var UserController = require("../controllers/users.controller");

const initRouter = (router, controller) => {
  router.get("/", controller.getAllUsers.bind(controller));
  router.get("/:userid", controller.getUser.bind(controller));
  router.post("/", controller.newUser.bind(controller));
  router.put("/:userid", controller.editUser.bind(controller));
  return router;
};

module.exports = initRouter(express.Router(), new UserController());
