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
        tags: ['心跳检测'],
        response: {
            200: {
                type: 'object',
                properties: {
                    result: { type: 'string' }
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
