const Item = require("../models/item");

module.exports = {
  renderSellerPage: async (req, res, next) => {
    try {
      const sellerItems = await Item.find({ seller: req.user.username });
      res.render("sellers/sellerPage.ejs", { items: sellerItems });
    } catch (error) {
      next(error);
    }
  },
};
