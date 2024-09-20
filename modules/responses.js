const { getBinaryRandom, getPercentChance } = require('../utils/randoms');
const {
  HTML_ERROR,
  MESSAGE_ERROR,
  OBJECT_ERROR,
} = require('../utils/messages');

const sendRandomResponse = (req, res, next, loggerCollector = () => {}) => {
  const textOrJsonChance = getBinaryRandom();
  const changeOfThrowError = getPercentChance(0.2);

  // HTML error  1 / 10 chances
  if (changeOfThrowError) {
    res.set('Content-Type', 'text/html');

    const responseHTML = getBinaryRandom() ? OBJECT_ERROR : HTML_ERROR;

    const loggerHTML = {
      headers: {
        'Content-Type': 'text/html',
      },
      response: responseHTML,
    };

    loggerCollector(loggerHTML);

    return res.send(responseHTML);
  }

  // JSON error  1 / 2 chances
  if (!textOrJsonChance) {
    const responseJSON = {
      error: { message: getBinaryRandom() ? MESSAGE_ERROR : null },
    };

    const loggerJSON = {
      headers: {
        'Content-Type': 'application/json',
      },
      response: responseJSON,
    };

    loggerCollector(loggerJSON);

    return res.json(responseJSON);
  }

  // TEXT error  1 / 2 chances

  const responseText = getBinaryRandom() ? MESSAGE_ERROR : null;
  res.set('Content-Type', 'text/plain');

  const loggerText = {
    headers: {
      'Content-Type': 'text/plain',
    },
    response: responseText,
  };

  loggerCollector(loggerText);

  return res.send(responseText);
};

module.exports = { sendRandomResponse };
