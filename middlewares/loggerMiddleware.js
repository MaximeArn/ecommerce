const logger = require("../errors/logger");
module.exports = (err, req, res, next) => {
  try {
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
  } catch (err) {
    res.status(err.statusCode || 500).send(err.message);
  } finally {
    res.status(err.statusCode || 500).send(err.message);
  }
};

const anonymizePassword = (password) => "*".repeat(password.length);
