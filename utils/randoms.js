const getRandomRange = (max = 1, min = 0) =>
  Math.round(Math.random() * max + min);

const getRandomMills = (max = 10000, min = 0) => getRandomRange(max, min);

const getBinaryRandom = () => getRandomMills(1); // Binary Random

const getPercentChance = (change = 0.1) => Math.random() < change; // 10% chance by default to return true

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = {
  getRandomInt,
  getRandomMills,
  getRandomRange,
  getBinaryRandom,
  getPercentChance,
};
