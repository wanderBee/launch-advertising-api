const path = require('path');
const _ = require('lodash');
const srcPath = '../../../';
const { readJsonAync } = require(path.join(srcPath, 'utils/file'));
const enumObject = require('./enum');

const simple = (req, reply) => {
    reply.send({ result: 'get from v1/advPosition!' });
};

const swagger = async (req, reply) => {
    const { type } = req.params;
    const pos_id = enumObject[type] || 0;

    try {
        // 获取测试数据
        // 发布需要改成 JAVA API Todo ...
        let mockData = await readJsonAync(path.resolve(__dirname, srcPath, 'mock/ap_advertise_impression.json'));

        // 进一步处理成前端需要的数据
        const advData = _.chain(mockData)
        .filter(adv => {
            return adv.pos_id == pos_id;
        })
        .value();

        reply.send({
            code: 10000,
            msg: 'Success',
            data: advData
        });
    } catch (e) {
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
    swagger
};
