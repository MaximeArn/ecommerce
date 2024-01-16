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
  renderUpdateItemPage: async ({ params: { itemId } }, res, next) => {
    try {
      const item = await Item.findOne({ _id: itemId });
      res.render("sellers/updateItem.ejs", { item });
    } catch (error) {
      next(error);
    }
  },
  updateItem: async ({ params: { id }, body }, res, next) => {
    try {
      const item = await Item.findOne({ _id: id });
      const filteredBodyEntries = Object.entries(body).filter(
        ([key, value]) => {
          if (typeof value === "string") {
            value = value.trim();
          }
          if (value !== "") {
            return [key, value];
          }
        }
      );
      filteredBodyEntries.forEach(([key, value]) => {
        item[key] = value;
      });
      await item.save();
      res.end();
    } catch (error) {
      next(error);
    }
  },

  deleteItem: async ({ params: { id } }, res, next) => {
    try {
      await Item.deleteOne({ _id: id });
      res.status(200).send("Item has been deleted");
    } catch (error) {
      next(error);
    }
  },
};
