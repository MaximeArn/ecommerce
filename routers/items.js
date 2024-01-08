const { Router } = require("express");
const { feedDatabase } = require("../controllers/items");

const itemsRouter = Router();

itemsRouter.post("/feedDatabase", feedDatabase);

module.exports = itemsRouter;
