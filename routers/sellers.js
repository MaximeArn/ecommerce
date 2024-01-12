const { Router } = require("express");
const { renderSellerPage } = require("../controllers/sellers");

const sellersRouter = Router();

sellersRouter.get("/", renderSellerPage);

module.exports = sellersRouter;
