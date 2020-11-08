// Load configuration
const config = require('config');

// Load modules
const logger = require('./logger');
const ring = require('ring-election');

try {
  // Start cluster with election
  ring.follower.createClient();

  if (config.get('cluster.monitoring')) {
    ring.follower.startMonitoring();
  }

  // to get ring info
  ring.follower.ring();
} catch (err) {
  console.error(err);
  process.exit(1);
}

// Catch process events
process.on('uncaughtException', (err) => {
  logger.error('Uncaught exception: ', err);
});
process.on('unhandledRejection', (reason, p) => {
  logger.error('Unhandled Rejection at: Promise ', p, reason);
});