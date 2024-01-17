const { Router } = require("express");
const {
  renderProfile,
  renderHome,
  renderCartDetails,
  emptyCart,
  searchItems,
} = require("../controllers/users");

const usersRouter = Router();

usersRouter.get("/profile", renderProfile);
usersRouter.get("/home/:searchQuery", searchItems);
usersRouter.get("/home", renderHome);
usersRouter.get("/cart", renderCartDetails);
usersRouter.patch("/emptyCart", emptyCart);

module.exports = usersRouter;
