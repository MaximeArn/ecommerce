const { Router } = require("express");
const {
  renderSellerPage,
  renderUpdateItemPage,
} = require("../controllers/sellers");

const sellersRouter = Router();

sellersRouter.get("/", renderSellerPage);
sellersRouter.get("/item/:itemId", renderUpdateItemPage);

module.exports = sellersRouter;
