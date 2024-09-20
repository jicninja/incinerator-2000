const { getRandomMills, getPercentChance } = require('../utils/randoms');

const generateDelayOrTimeout = (req, res, next, loggerCollector = () => {}) => {
  const timeOutChance = getPercentChance(0.1);

  if (timeOutChance) {
    return loggerCollector({ timeout: true });
  }

  setTimeout(next, getRandomMills(1000, 100));
};

module.exports = { generateDelayOrTimeout };
