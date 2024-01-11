const fs = require("fs");
const Item = require("../models/item");
const User = require("../models/user");

module.exports = {
  feedDatabase: async (req, res, next) => {
    try {
      const data = fs.readFileSync(__dirname + "/../products.json");
      const items = JSON.parse(data);
      let insertionNumber = 0;
      for (const item of items) {
        const newItem = new Item(item);
        console.log(newItem);
        await newItem.save();
        insertionNumber++;
      }
      res.end(
        `Insertion terminée : ${insertionNumber} items have been iserted`
      );
    } catch (error) {
      next(error);
    }
  },
  renderItemDetail: async ({ params: { id } }, res, next) => {
    try {
      const [item] = await Item.find({ _id: id });
      res.render("items/itemDetails", { item });
    } catch (error) {
      next(error);
    }
  },

  addItemToCart: async (req, res, next) => {
    try {
      const [user] = await User.find({ _id: req.user._id });
      user.addItem(req.params.id);
      user.save();
      res.end();
    } catch (error) {
      next(error);
    }
  },
  removeItemFromCart: async (
    { params: { itemId }, user: { id } },
    res,
    next
  ) => {
    try {
      const user = await User.findOne({ _id: id });
      const indexToDelete = user.cart.findIndex((cartItemId) => {
        return cartItemId.toString() === itemId;
      });
      if (indexToDelete === -1) {
        throw new Error("this item is not in the database !");
      } else {
        user.cart.splice(indexToDelete, 1);
      }
      await user.save();
      res.end();
    } catch (error) {
      next(error);
    }
  },
};
