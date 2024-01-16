const User = require("../models/user");

module.exports = {
  renderAdminPage: (req, res, next) => {
    res.render("admin/adminPage.ejs");
  },
};
