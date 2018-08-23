'use strict';

const logger = require('../logger');
const fastify = require('fastify')({
    // logger
});

const { installPlugins } = require('../plugins');

const server = () => {
    installPlugins(fastify);
    return fastify;
};

module.exports = server;
