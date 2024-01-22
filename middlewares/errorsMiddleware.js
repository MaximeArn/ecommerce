const AuthenticationError = require("../errors/authError");

//TODO: at the end of the project rejactorize this middlewre (maybe map on an object with all the error codes )
module.exports = (error, req, res, next) => {
  // 11000 is the mongodb code for unique index constraint violation
  if (error.code === 11000 && error.keyPattern.username) {
    next(new AuthenticationError("Le nom d'utilisateur est déjà pris.", 400));
  } else if (error.code === 11000 && error.keyPattern.email) {
    next(new AuthenticationError("L'adresse e-mail est déjà utilisée.", 400));
  } else if (
    error.name === "JsonWebTokenError" &&
    error.message === "invalid signature"
  ) {
    next(new AuthenticationError("your token is invalid", 401));
  } else if (
    error.name === "TokenExpiredError" &&
    error.message === "jwt expired"
  ) {
    next(
      new AuthenticationError(
        "your token is no longer valid. Please log in again",
        401
      )
    );
  } else {
    next(error);
  }
};
