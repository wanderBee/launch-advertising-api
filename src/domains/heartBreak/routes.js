'use strict';

const middleware = require('./middlewares');
const schemas = require('./schemas');

const routes = [
    {
        method: 'get',
        path: '/heartBreak',
        handler: middleware.simple,
        schema: schemas.swagger
    }
];

module.exports = routes;
