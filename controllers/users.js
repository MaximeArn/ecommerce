const User = require("../models/user");
const Item = require("../models/item");
module.exports = {
  renderProfile: ({ user }, res, next) => {
    res.render("users/profile", { user, role: user.role });
  },
  renderHome: async ({ user: { role } }, res, next) => {
    try {
      console.log("renderHome");
      const items = await Item.find();
      res.render("users/home", { items, role });
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
      res.render("users/cartDetails.ejs", {
        user: parsedUser,
        role: user.role,
      });
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

  searchItems: async (
    { params: { searchQuery }, user: { role } },
    res,
    next
  ) => {
    try {
      let filteredItems = await Item.find({
        name: {
          // return name that contains searchQuery followed by a alphabetic symbol or that contains searchQuery as last word
          $regex: `${searchQuery}[^a-zA-Z]|${searchQuery}$`,
          $options: "i",
        },
      });
      if (filteredItems.length === 0) {
        // second step if no match by name search in tags
        const searchQueryWords = searchQuery.split(" ");
        filteredItems = await Item.find({
          tags: { $in: searchQueryWords },
        });
      }
      res.render("users/home.ejs", { items: filteredItems, role });
    } catch (error) {
      next(error);
    }
  },
};

// utils :

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
