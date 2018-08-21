'use strict';

const path = require('path');
const registerRoutes = require('fastify-register-routes');
const defaultPath = path.resolve('src/domains');

const install = server => {
	server.register(registerRoutes, { path: defaultPath, showTable: true, useService: false });
};

module.exports = { install };
