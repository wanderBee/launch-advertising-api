'use strict';

const swagger = require('fastify-swagger');
const config = require('../../config')[process.env.NODE_ENV];

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
            host: config.host + ':' + config.port,
            schemes: ['http'],
            consumes: ['application/json'],
            produces: ['application/json'],
            tags: [
                { name: '心跳检测', description: '和服务器保持联系' }
            ]
            // securityDefinitions: {
            //     apiKey: {
            //         type: 'apiKey',
            //         name: 'apiKey',
            //         in: 'header'
            //     }
            // }
        }
    });
};

module.exports = { install };
