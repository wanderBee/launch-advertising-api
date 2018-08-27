'use strict';

const handlers = require('./handlers');
const schemas = require('./schemas');

const routes = [
    {
        method: 'post',
        path: '/v1/login',
        handler: handlers.login,
        // middleware: ['checkauth'],
        schema: schemas.swagger
    }
];

module.exports = routes;
