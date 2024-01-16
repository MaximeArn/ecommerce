const { Router } = require("express");
const {
  register,
  renderRegisterPage,
  login,
  renderLoginPage,
  logOut,
} = require("../controllers/auth");

const authRouter = Router();

authRouter.get("/register", renderRegisterPage);
authRouter.post("/register", register);
authRouter.get("/login", renderLoginPage);
authRouter.post("/login", login);
authRouter.post("/logOut", logOut);

module.exports = authRouter;
