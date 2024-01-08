const { Router } = require("express");
const { feedDatabase, renderItemDetail } = require("../controllers/items");

const itemsRouter = Router();

itemsRouter.post("/feedDatabase", feedDatabase);
itemsRouter.get("/:id", renderItemDetail);

module.exports = itemsRouter;
