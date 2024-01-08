const Item = require("../models/item");
module.exports = {
  renderProfile: ({ user }, res, next) => {
    res.render("users/profile", { user });
  },
  renderHome: async (req, res, next) => {
    try {
      const items = await Item.find();
      res.render("users/home", { items });
    } catch (error) {
      next(error);
    }
  },
};
