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
        description: 'the first api for test',
        tags: ['授权校验'],
        body: {
            type: 'object',
            properties: {
                secret: { type: 'string' }
            },
            required: ['secret']
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    Authorization: { type: 'string' }
                }
            }
        }
    }
};
