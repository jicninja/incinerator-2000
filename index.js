const express = require('express');
const { logger } = require('./utils/logger');
const { hasRandomCorsError } = require('./modules/cors');
const { setStatusCode } = require('./modules/status');
const { sendRandomResponse } = require('./modules/responses');
const { generateDelayOrTimeout } = require('./modules/timeout');

const app = express();
const PORT = 3000;

const makeEvilPipes = () => {
  let finalLog = {};

  // CORS error
  const corsMiddleware = (req, res, next) => {
    const loggerCors = (log) => {
      const message = JSON.stringify(log);
      logger.error(message);
      console.log(message);
    };

    const middleware = hasRandomCorsError(req, res, next, loggerCors);
    return middleware;
  };

  // TIMEOUT error
  const timeOutMiddleware = (req, res, next) => {
    const loggerTimeout = (timeError) => {
      const message = JSON.stringify(timeError);

      logger.error(message);
      console.log(message);
    };

    const middleware = generateDelayOrTimeout(req, res, next, loggerTimeout);
    return middleware;
  };

  // STATUS error
  const statusMiddleware = (req, res, next) => {
    const loggerStatus = (code) => {
      Object.assign(finalLog, code);
    };

    const middleware = setStatusCode(req, res, next, loggerStatus);
    return middleware;
  };

  // RESPONSE error
  const sendResponseMiddleware = (req, res, next) => {
    const loggerResponse = (response) => {
      Object.assign(finalLog, response);

      const message = JSON.stringify(finalLog);

      if (finalLog.statusCode < 300) {
        logger.info(message);
      } else {
        logger.error(message);
      }

      console.log(message);
    };

    const middleware = sendRandomResponse(req, res, next, loggerResponse);
    return middleware;
  };

  return [
    '*',
    corsMiddleware,
    timeOutMiddleware,
    statusMiddleware,
    sendResponseMiddleware,
  ];
};

app.get(...makeEvilPipes());
app.post(...makeEvilPipes());
app.put(...makeEvilPipes());
app.delete(...makeEvilPipes());
app.options(...makeEvilPipes());

app.listen(PORT, () => {
  console.log(`Make a big disaster at http://localhost:${PORT}`);
});
