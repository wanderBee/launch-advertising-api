'use strict';

const handlers = require('./handlers');
const schemas = require('./schemas');
const { createToken } = require('./services');

const routes = [
    {
        method: 'post',
        path: '/v1/authenticate',
        handler: handlers.swagger,
        service: [createToken],
        schema: schemas.swagger
    }
];

module.exports = routes;
