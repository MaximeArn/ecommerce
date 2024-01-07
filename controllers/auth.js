const AuthenticationError = require("../errors/authError");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = {
  register: async ({ body: { username, password, email } }, res, next) => {
    try {
      console.log("register");
      const newUser = new User({ username, password, email });
      await newUser.save();
      res.status(200).json(newUser);
    } catch (error) {
      next(error);
    }
  },

  renderRegister: (req, res, next) => {
    res.render("register");
  },

  login: async (req, res, next) => {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username });
      if (!user)
        throw new AuthenticationError("User not found : invalid suername", 404);

      const passwordMatch = await user.comparePassword(password);
      if (!passwordMatch)
        throw new AuthenticationError("Incorrect password", 401);

      const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  },
};
