const { Router } = require("express");
const {
  feedDatabase,
  renderItemDetail,
  addItemToCart,
  removeItemFromCart,
} = require("../controllers/items");

const itemsRouter = Router();

itemsRouter.post("/feedDatabase", feedDatabase);
itemsRouter.get("/:id", renderItemDetail);
itemsRouter.post("/addCart/:id", addItemToCart);
itemsRouter.post("/removeFromCart/:itemId", removeItemFromCart);
itemsRouter.patch("/:id", (req, res, next) => {
  console.log(req.params.id);
  console.log(req.body);
  res.end();
});

module.exports = itemsRouter;
