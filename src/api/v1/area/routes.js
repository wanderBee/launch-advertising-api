'use strict';

const handlers = require('./handlers');
const schemas = require('./schemas');

const routes = [
    {
        method: 'get',
        path: '/v1/area',
        handler: handlers.getArea,
        middleware: ['checkauth'],
        schema: schemas.swagger
    }
];

module.exports = routes;
