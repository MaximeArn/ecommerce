const User = require("../models/user");

module.exports = {
  renderAdminPage: ({ user: { role } }, res, next) => {
    res.render("admin/adminPage.ejs", { role });
  },
};
