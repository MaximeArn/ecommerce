const { Router } = require("express");
const {
  renderSellerPage,
  renderUpdateItemPage,
  updateItem,
  deleteItem,
} = require("../controllers/sellers");

const sellersRouter = Router();

sellersRouter.get("/", renderSellerPage);
sellersRouter.get("/item/:itemId", renderUpdateItemPage);
sellersRouter.patch("/item/:id", updateItem);
sellersRouter.delete("/item/:id", deleteItem);

module.exports = sellersRouter;
