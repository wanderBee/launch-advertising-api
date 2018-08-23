'use strict';

const path = require('path');
const registerRoutes = require('./fastify-register-routes');
const defaultPath = path.resolve('src/api');

const install = server => {	
	server.register(registerRoutes, { path: defaultPath, useService: true });
};

module.exports = { install };
