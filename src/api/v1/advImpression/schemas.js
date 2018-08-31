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
        description: '根据广告版位获取广告',
        tags: ['基础数据'],
        params: {
            type: {
                type: 'string',
                description: '版位类型： (golo-home, 1) - golo汽修大师首页、（golo-banner, 2）- golo汽修大师banner'
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
                        items: {
                            type: 'object',
                            properties: {
                                adv_id: {type: 'integer'},
                                pos_id: { type: 'integer' },
                                image_url: { type: 'string' },
                                click_url: { type: 'string' }
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
        // security: [
        //     {
        //         Authorization: []
        //     }
        // ]
    }
};
