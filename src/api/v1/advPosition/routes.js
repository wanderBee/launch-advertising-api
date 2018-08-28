'use strict';

const handlers = require('./handlers');
const schemas = require('./schemas');
;
const routes = [
    {
        method: 'get',
        path: '/v1/advPosition',
        handler: handlers.getAdvPosition,
        middleware: ['checkAuthLocal'],
        schema: schemas.swagger
    }
];

module.exports = routes;
