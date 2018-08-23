module.exports = {
  routePath: 'api',
  secretKey: "launch-jiuzhang-sec",
  env: {
    doc: 'The application environment',
    format: ['production', 'development'],
    default: 'development',
    env: 'NODE_ENV'
  },
  host: {
    doc: 'The IP address to bind',
    // format: 'ipaddress',
    default: '127.0.0.1',
    env: 'HOST'
  },
  port: {
    doc: 'The port to listen on',
    format: 'port',
    default: 3030,
    env: 'PORT',
    arg: 'port'
  },
  logger: {
    level: {
      doc: 'The log level',
      format: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
      default: 'debug',
      env: 'LOGGER_LEVEL'
    }
  }
};
