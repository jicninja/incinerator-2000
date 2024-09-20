const {
  getRandomInt,
  getBinaryRandom,
  getPercentChance,
} = require('./randoms');

const getSpecificStatusCode = (statusBase = 500, specificErrorRange = 9) =>
  statusBase + getRandomInt(0, specificErrorRange);

const getErrorStatusCode = () => {
  const baseStatusCode = getBinaryRandom() ? 400 : 500;

  const specificErrorRange = baseStatusCode === 400 ? 51 : 11;

  return getSpecificStatusCode(baseStatusCode, specificErrorRange);
};

const getErrorStatusCodeWithSuccessPossibility = () =>
  getPercentChance() ? getSpecificStatusCode(200) : getErrorStatusCode();

module.exports = {
  getSpecificStatusCode,
  getErrorStatusCode,
  getErrorStatusCodeWithSuccessPossibility,
};
