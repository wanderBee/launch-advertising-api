'use strict';

const handlers = require('./handlers');
const schemas = require('./schemas');

const routes = [
    {
        method: 'post',
        path: '/v1/heartBreak',
        // name: '心跳检测',
        // version: '0.1.0',
        handler: handlers.simple,
        middleware: ['checkauth'],
        schema: schemas.swagger
    }
];

module.exports = routes;
