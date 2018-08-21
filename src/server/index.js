'use strict';

const fastify = require('fastify')({
    // logger: true
});

const { installPlugins } = require('./plugins');

const server = () => {
    installPlugins(fastify);

    fastify.ready(err => {
        if (err) throw err;
    });

    return fastify;
};

module.exports = server;
