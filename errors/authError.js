class AuthenticationError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = "AuthError";
  }
}

module.exports = AuthenticationError;
