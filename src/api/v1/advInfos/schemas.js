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
        description: '获取广告列表信息',
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
                                pos_id: { type: 'integer' },
                                adv_name: { type: 'string' },
                                delivery_date_type: { type: 'string' },
                                delivery_begin_date: { type: 'string' },
                                delivery_end_date: { type: 'string' },
                                adv_status: { type: 'integer' },
                                adv_status_name: { type: 'string' },
                                price: { type: 'number' },
                                create_time: { type: 'string' }
                            }
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
        },
        security: [
            {
                Authorization: []
            }
        ]
    }
};
