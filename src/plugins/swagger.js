'use strict';

const swagger = require('fastify-swagger');
const config = require('../config');

const install = server => {
    server.register(swagger, {
        exposeRoute: true,
        routePrefix: '/documentation',
        swagger: {
            info: {
                title: '广告平台',
                description: '元征广告平台前端 API接口文档',
                version: '0.1.0'
            },
            externalDocs: {
                url: 'https://swagger.io',
                description: '了解swagger'
            },
            host: config.get('host') + ':' + config.get('port'),
            schemes: ['http'],
            consumes: ['application/json'],
            produces: ['application/json'],
            tags: [
                { name: '授权校验', description: '授权Authorization' },
                { name: '心跳检测', description: '和服务器保持联系' }
            ],
            securityDefinitions: {
                Authorization: {
                    type: 'apiKey',
                    name: 'Authorization',
                    in: 'header'
                }
            }
        }
    });
};

module.exports = { install };
