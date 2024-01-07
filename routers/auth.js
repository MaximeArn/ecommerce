const { Router } = require("express");
const { register, renderRegister, login } = require("../controllers/auth");

const authRouter = Router();

authRouter.get("/register", renderRegister);
authRouter.post("/register", register);
authRouter.post("/login", login);

module.exports = authRouter;
