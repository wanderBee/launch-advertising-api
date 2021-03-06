module.exports = {
    simple: {
        response: {
            200: {
                type: 'object',
                properties: {
                    result: { type: 'string' }
                }
            }
        }
    },
    swagger: {
        description: '登陸獲取token',
        tags: ['注册登录'],
        body: {
            type: 'object',
            properties: {
                username: { type: 'string' },
                password: { type: 'string' }
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    code: { type: 'number' },
                    msg: { type: 'string' },
                    data: {
                        type: 'object',
                        properties: {
                            authorization: { type: 'string' },
                            expires: { type: 'string' },
                            username: { type: 'string' }
                        }
                    }
                }
            },
            default: {
                type: 'object',
                properties: {
                    code: { type: 'number' },
                    msg: { type: 'string' }
                }
            }
        }
    }
};
