require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const connectDb = require("./db/dbConection");

const authMiddleware = require("./middlewares/auth");
const adminsMiddleware = require("./middlewares/admins");
const sellerMiddleware = require("./middlewares/sellers");
const errorsMiddleware = require("./middlewares/errors");
const loggerMiddleware = require("./middlewares/logger");

const itemsRouter = require("./routers/items");
const authRouter = require("./routers/auth");
const usersRouter = require("./routers/users");
const adminsRouter = require("./routers/admins");
const sellersRouter = require("./routers/sellers");

const server = express();
const PORT = process.env.PORT || 3000;
connectDb();

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use(express.static(path.join(__dirname, "public")));

server.use(cookieParser());
server.use(express.json());
server.get("/", (req, res, next) => {
  res.render("auth/landing");
});
server.use("/auth", authRouter);
// routes that needs a valid token to be accessed
server.use("/", authMiddleware, usersRouter);
server.use("/item", itemsRouter);
// routes that needs a "seller" role to be accessed
server.use("/seller", sellerMiddleware, sellersRouter);
// routes that needs an "admin" role to be accessed
server.use("/admin", adminsMiddleware, adminsRouter);

server.use(errorsMiddleware);
server.use(loggerMiddleware);

server.listen(PORT, () => {
  console.log(`server started on port : ${PORT}`);
});
