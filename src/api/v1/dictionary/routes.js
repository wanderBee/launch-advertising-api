'use strict';

const handlers = require('./handlers');
const schemas = require('./schemas');

const routes = [
    {
        method: 'get',
        path: '/v1/dictionary/:type',
        handler: handlers.getDictionary,
        middleware: ['checkAuthLocal'],
        schema: schemas.swagger
    }
];

module.exports = routes;
