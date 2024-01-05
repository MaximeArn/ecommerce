const jwt = require("jsonwebtoken");
const User = require("../models/user");
const AuthenticationError = require("../errors/authError");

module.exports = async (req, res, next) => {
  console.log(req.headers.authorization);
  const token = req.headers.authorization?.split(" ")[1];

  try {
    if (!token) throw new AuthenticationError("Authentication required", 401);
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decodedToken.userId);
    if (!user) throw new AuthenticationError("User not found", 404);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};
