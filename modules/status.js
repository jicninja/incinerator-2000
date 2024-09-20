const {
  getErrorStatusCodeWithSuccessPossibility,
} = require('../utils/statusCodes');

const setStatusCode = (req, res, next, loggerCollector = () => {}) => {
  const statusCode = getErrorStatusCodeWithSuccessPossibility();
  const loggerStatus = { statusCode };

  loggerCollector(loggerStatus);

  res.status(statusCode);

  next();
};

module.exports = { setStatusCode };
