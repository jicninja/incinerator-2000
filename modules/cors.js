const cors = require('cors');
const { getPercentChance } = require('../utils/randoms');

const corsOptions = {
  origin: 'http://unusedDomain.evil',
  optionsSuccessStatus: 400,
};

const hasRandomCorsError = (res, req, next, loggerCollector = () => {}) => {
  const corsErrorChance = getPercentChance(0.1);
  if (corsErrorChance) {
    const corsError = { corsError: true };
    loggerCollector(corsError);
    return cors(corsOptions);
  }
  next();
};

module.exports = { hasRandomCorsError, corsOptions };
