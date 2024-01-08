const jwt = require("jsonwebtoken");
const User = require("../models/user");
const AuthenticationError = require("../errors/authError");

module.exports = async (req, res, next) => {
  const token = req.cookies.authToken;
  try {
    if (!token) throw new AuthenticationError("Authentication required", 401);
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decodedToken.userId);
    if (!user) throw new AuthenticationError("User not found", 404);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
