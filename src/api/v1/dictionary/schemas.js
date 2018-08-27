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
        description: '获取字典数据 [付费方式]',
        tags: ['基础数据'],
        params: {
            type: {
                type: 'string',
                description: '字典类型 payType - 付费方式'
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    code: { type: 'number' },
                    msg: { type: 'string' },
                    data: {
                        type: 'array',
                        items: {}
                    }
                }
            }
        },
        security: [
            {
                Authorization: []
            }
        ]
    }
};
