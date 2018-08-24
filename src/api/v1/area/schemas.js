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
        description: '获取区域数据（省、市）',
        tags: ['基础数据'],
        response: {
            200: {
                type: 'object',
                properties: {
                    code: { type: 'integer' },
                    msg: { type: 'string' },
                    data: {
                        type: 'array',
                        items: {
                        }
                        
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
