'use strict';

const cookie = require('fastify-cookie');

const install = server => {
	server.register(cookie);
};

module.exports = { install };
