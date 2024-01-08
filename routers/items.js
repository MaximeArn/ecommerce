const { Router } = require("express");
const {
  feedDatabase,
  renderItemDetail,
  addItemToCart,
} = require("../controllers/items");

const itemsRouter = Router();

itemsRouter.post("/feedDatabase", feedDatabase);
itemsRouter.get("/:id", renderItemDetail);
itemsRouter.post("/addCart/:id", addItemToCart);

module.exports = itemsRouter;
