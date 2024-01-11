const { Router } = require("express");
const {
  renderProfile,
  renderHome,
  renderCartDetails,
  emptyCart,
} = require("../controllers/users");

const usersRouter = Router();

usersRouter.get("/profile", renderProfile);
usersRouter.get("/home", renderHome);
usersRouter.get("/cart", renderCartDetails);
usersRouter.patch("/emptyCart", emptyCart);

module.exports = usersRouter;
