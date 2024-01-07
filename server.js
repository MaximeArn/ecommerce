require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDb = require("./db/dbConection");
const authMiddleware = require("./middlewares/auth");
const adminsMiddleware = require("./middlewares/admins");
const errorsMiddleware = require("./middlewares/errorsMiddleware");
const loggerMiddleware = require("./middlewares/loggerMiddleware");
const authRouter = require("./routers/auth");
const usersRouter = require("./routers/users");
const adminsRouter = require("./routers/admins");

const server = express();
const PORT = process.env.PORT || 3000;
connectDb();

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use(express.static(path.join(__dirname, "public")));

server.use(express.json());
server.use("/auth", authRouter);
// routes that needs a valid token to be accessed
server.use("/", authMiddleware, usersRouter);
// routes that needs a admin role to be accessed
server.use("/admin", adminsMiddleware, adminsRouter);
server.use(errorsMiddleware);
server.use(loggerMiddleware);

server.listen(PORT, () => {
  console.log(`server started on port : ${PORT}`);
});
