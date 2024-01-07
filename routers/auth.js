const { Router } = require("express");
const {
  register,
  renderRegisterPage,
  login,
  renderLoginPage,
} = require("../controllers/auth");

const authRouter = Router();

authRouter.get("/register", renderRegisterPage);
authRouter.post("/register", register);
authRouter.get("/login", renderLoginPage);
authRouter.post("/login", login);

module.exports = authRouter;
