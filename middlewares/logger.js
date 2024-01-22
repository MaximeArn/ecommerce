const logger = require("../errors/logger");
module.exports = (err, req, res, next) => {
  if (req.body.password) {
    req.body.password = anonymizePassword(req.body.password);
  }

  logger.error(err.message, {
    statusCode: err.statusCode,
    requestPayload: {
      body: req.body,
      params: req.params,
      rawHeaders: req.rawHeaders,
      route: req.route,
      originalUrl: req.originalUrl,
    },
  });

  err = {
    message: err.message,
    statusCode: err.statusCode,
  };

  err.statusCode === 401
    ? res.status(401).render("errors/error401.ejs", { error: err })
    : err.statusCode === 403
    ? res.status(403).render("errors/error403.ejs", { error: err })
    : res.status(err.statusCode || 500).send(err);
};

const anonymizePassword = (password) => "*".repeat(password.length);
