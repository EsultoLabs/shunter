// Load configuration
const config = require('config');

// Load modules
const { createLogger, format, transports } = require('winston');

// Init logger
const logger = createLogger({
  level: config.get('logger.level'),
  format: format.combine(
    format.splat(),
    format.simple()
  ),
  transports: [
    new transports.Console()
  ]
});

// Exports module
module.exports = logger;