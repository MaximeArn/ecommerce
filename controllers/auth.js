const AuthenticationError = require("../errors/authError");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = {
  renderRegisterPage: (req, res, next) => {
    res.render("register");
  },

  register: async ({ body: { username, password, email } }, res, next) => {
    try {
      const newUser = new User({ username, password, email });
      await newUser.save();
      res.status(200).end();
    } catch (error) {
      next(error);
    }
  },

  renderLoginPage: (req, res, next) => {
    res.render("login");
  },

  login: async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user)
        throw new AuthenticationError("User not found : invalid username", 404);

      const passwordMatch = await user.comparePassword(password);
      if (!passwordMatch)
        throw new AuthenticationError("Incorrect password", 401);

      const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.cookie("authToken", token, { httpOnly: true });
      res.status(200).json({ message: "well loged in " });
    } catch (error) {
      next(error);
    }
  },
};
