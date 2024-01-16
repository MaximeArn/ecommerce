const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");
const AuthenticationError = require("../errors/authError");
const Item = require("./item");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (!isEmail(value)) {
          throw new AuthenticationError("invalid email adress provided", 400);
        }
      },
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "seller", "admin"],
      default: "user",
    },
    cart: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Item",
      default: [],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.addItem = async function (itemId) {
  try {
    this.cart.push(itemId);
  } catch (error) {
    return next(error);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
