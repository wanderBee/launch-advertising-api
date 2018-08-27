'use strict';

const handlers = require('./handlers');
const schemas = require('./schemas');
;
const routes = [
    {
        method: 'get',
        path: '/v1/advPosition',
        handler: handlers.getAdvPosition,
        // middleware: ['checkauth'],
        schema: schemas.swagger
    }
];

module.exports = routes;
