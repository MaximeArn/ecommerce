const { Router } = require("express");
const {
  renderSellerPage,
  renderUpdateItemPage,
  updateItem,
  deleteItem,
  renderCreateItem,
  createItem,
} = require("../controllers/sellers");

const sellersRouter = Router();

sellersRouter.get("/", renderSellerPage);
sellersRouter.get("/item/:itemId", renderUpdateItemPage);
sellersRouter.get("/addItem", renderCreateItem);
sellersRouter.post("/addItem", createItem);
sellersRouter.patch("/item/:id", updateItem);
sellersRouter.delete("/item/:id", deleteItem);

module.exports = sellersRouter;
