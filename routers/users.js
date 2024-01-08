const { Router } = require("express");

const usersRouter = Router();

usersRouter.get("/profile", (req, res, next) => {
  res.json(req.user);
});
usersRouter.get("/home", (req, res, next) => {
  res.render("home");
});

module.exports = usersRouter;
