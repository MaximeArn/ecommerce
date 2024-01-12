const { Router } = require("express");
const { renderAdminPage } = require("../controllers/admins");

const adminsRouter = Router();

adminsRouter.get("/", renderAdminPage);

module.exports = adminsRouter;
