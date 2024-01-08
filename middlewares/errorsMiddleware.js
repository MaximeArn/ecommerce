const AuthenticationError = require("../errors/authError");
const logger = require("../errors/logger");

//TODO: at the end of the project rejactorize this middlewre (maybe map on an object with all the error codes )
module.exports = (error, req, res, next) => {
  try {
    // 11000 is the mongodb code for unique index constraint violation
    if (error.code === 11000 && error.keyPattern.username) {
      throw new AuthenticationError("Le nom d'utilisateur est déjà pris.", 400);
    } else if (error.code === 11000 && error.keyPattern.email) {
      throw new AuthenticationError("L'adresse e-mail est déjà utilisée.", 400);
    } else if (
      error.name === "JsonWebTokenError" &&
      error.message === "invalid signature"
    ) {
      throw new AuthenticationError("your token is invalid", 401);
    } else if (
      error.name === "TokenExpiredError" &&
      error.message === "jwt expired"
    ) {
      throw new AuthenticationError(
        "your token is no longer valid. Please log in again",
        401
      );
    } else {
      throw error;
    }
  } catch (error) {
    error.statusCode === 401
      ? res.status(401).render("errors/error401.ejs", { error })
      : next(error);
  }
};
