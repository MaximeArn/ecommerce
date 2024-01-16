const AuthenticationError = require("../errors/authError");

module.exports = async ({ user: { role } }, res, next) => {
  try {
    if (role !== "seller")
      throw new AuthenticationError(
        "You do not have the necessary permissions to access this resource. This action is reserved for sellers. ",
        403
      );
    next();
  } catch (error) {
    next(error);
  }
};
