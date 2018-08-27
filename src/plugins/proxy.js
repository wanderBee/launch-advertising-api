'use strict';

const proxy = require('fastify-http-proxy');

const install = server => {
	server.register(proxy,  {
        upstream: 'http://39.108.139.215:8080/',
        prefix: '/api', // optional
        http2: false // optional
    });
};

module.exports = { install };
