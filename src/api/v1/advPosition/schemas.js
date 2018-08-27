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
        description: '获取广告版位列表信息',
        tags: ['基础数据'],
        response: {
            200: {
                type: 'object',
                properties: {
                    code: { type: 'number' },
                    msg: { type: 'string' },
                    data: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                id: { type: 'string' },
                                device_type: { type: 'string' },
                                pos_name: { type: 'string' },
                                pos_remark: { type: 'string' },
                                image_count: { type: 'integer' },
                                image_width: { type: 'number' },
                                image_height: { type: 'number' },
                                audience: { type: 'string' }
                            }
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
