const { Router } = require("express");
const { renderProfile, renderHome } = require("../controllers/users");

const usersRouter = Router();

usersRouter.get("/profile", renderProfile);
usersRouter.get("/home", renderHome);

module.exports = usersRouter;
