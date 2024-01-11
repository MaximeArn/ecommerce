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
      const parsedUser = { ...user._doc };
      parsedUser.cart = groupItemsById(user.cart);
      parsedUser.totalCart = getCartTotal(user.cart);
      parsedUser.cartLength = user.cart.length;
      res.render("users/cartDetails.ejs", { user: parsedUser });
    } catch (error) {
      next(error);
    }
  },

  emptyCart: async (req, res, next) => {
    try {
      const user = req.user;
      user.cart = [];
      await user.save();
      res.end();
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

const getCartTotal = (cart) => {
  let total = 0;
  cart.forEach((item) => {
    total = total + item.price;
  });
  return total;
};
