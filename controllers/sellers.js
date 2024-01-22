const Item = require("../models/item");

module.exports = {
  renderSellerPage: async ({ user: { role, username } }, res, next) => {
    try {
      const sellerItems = await Item.find({ seller: username });
      res.render("sellers/sellerPage.ejs", { items: sellerItems, role });
    } catch (error) {
      next(error);
    }
  },
  renderUpdateItemPage: async (
    { params: { itemId }, user: { role } },
    res,
    next
  ) => {
    try {
      const item = await Item.findOne({ _id: itemId });
      res.render("sellers/updateItem.ejs", { item, role });
    } catch (error) {
      next(error);
    }
  },
  renderCreateItem: async ({ user: { role } }, res, next) => {
    try {
      res.render("sellers/addItem.ejs", { role });
    } catch (error) {
      next(error);
    }
  },
  updateItem: async ({ params: { id }, body }, res, next) => {
    try {
      const item = await Item.findOne({ _id: id });
      if (body.tags.length < 3)
        throw new Error("your need at least 3 tags to describe your item");
      if (body.price !== "" && Number(body.price) <= 0)
        throw new Error("Price has to be positiv");
      if (body.stock !== "" && Number(body.stock) <= 0)
        throw new Error("Stock has to be positiv");

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
  createItem: async ({ body, user }, res, next) => {
    try {
      if (body.tags.length < 3)
        throw new Error("you need at least 3 tags to describe your item.");
      if (body.price !== "" && Number(body.price) <= 0)
        throw new Error("Price has to be positiv");
      if (body.stock !== "" && Number(body.stock) <= 0)
        throw new Error("Stock has to be positiv");
      Object.entries(body).map(([key, value]) => {
        if (typeof value === "string" && value.trim() === "")
          throw new Error(`${key} field is required.`);
      });
      await new Item({ ...body, seller: user.username }).save();
      res.end();
    } catch (error) {
      next(error);
    }
  },
};
