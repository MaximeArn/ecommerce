const { Router } = require("express");
const { feedDatabase, renderHome } = require("../controllers/items");

const itemsRouter = Router();

itemsRouter.post("/feedDatabase", feedDatabase);
itemsRouter.get("/home", renderHome);

module.exports = itemsRouter;
