const User = require("../models/user");
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

  renderCartDetails: async (req, res, next) => {
    try {
      const user = await User.findOne(req.user._id).populate("cart");
      user.cart = groupItemsById(user.cart);
      res.render("users/cartDetails.ejs", { user });
    } catch (error) {
      next(error);
    }
  },
};

function groupItemsById(cart) {
  const groupedItems = {};

  cart.forEach((item) => {
    const itemId = item._id.toString();
    if (groupedItems[itemId]) {
      groupedItems[itemId].push(item);
    } else {
      groupedItems[itemId] = [item];
    }
  });
  const result = Object.values(groupedItems);
  return result;
}
