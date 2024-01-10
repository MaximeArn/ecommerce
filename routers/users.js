const { Router } = require("express");
const {
  renderProfile,
  renderHome,
  renderCartDetails,
} = require("../controllers/users");

const usersRouter = Router();

usersRouter.get("/profile", renderProfile);
usersRouter.get("/home", renderHome);
usersRouter.get("/cart", renderCartDetails);

module.exports = usersRouter;
