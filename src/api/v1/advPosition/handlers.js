const path = require('path');
const _ = require('lodash');
const srcPath = '../../../';
const { readJsonAync } = require(path.join(srcPath, 'utils/file'));

const simple = (req, reply) => {
    reply.send({ result: 'get from v1/advPosition!' });
};

const getAdvPosition = async (req, reply) => {
    try {
        // 获取测试数据
        // JAVA API Todo ...
        let mockData = await readJsonAync(path.resolve(__dirname, srcPath, 'mock/ap_device_position.json'));

        const dicData = mockData;

        reply.send({
            code: 10000,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            msg: 'Success',
            data: dicData
        });
    } catch (e) {
        console.log('err', e)
        reply.send({
            code: 20000,
            msg: '服务器内部错误，获取广告版位信息失败',
            data: null
        });
        return;
    }
};

module.exports = {
    simple,
    getAdvPosition
};
