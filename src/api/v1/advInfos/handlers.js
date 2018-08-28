const path = require('path');
const _ = require('lodash');
const srcPath = '../../../';
const { readJsonAync } = require(path.join(srcPath, 'utils/file'));

const simple = (req, reply) => {
    reply.send({ result: 'get from v1/advPosition!' });
};

const swagger = async (req, reply) => {
    try {
        // 获取测试数据
        // JAVA API Todo ...
        let mockData = await readJsonAync(path.resolve(__dirname, srcPath, 'mock/ap_advertise_infos.json'));

        // 进一步处理成前端需要的数据
        const dicData = mockData;
        _.each(dicData, item => {
            switch (item.adv_status) {
                case 0:
                    item.adv_status_name = '待审核';
                    break;
                case 1:
                    item.adv_status_name = '审核不通过';
                    break;
                case 2:
                    item.adv_status_name = '投放中';
                    break;
                case 3:
                    item.adv_status_name = '已删除';
                    break;
                case 4:
                    item.adv_status_name = '投放结束';
                    break;
                default:
                    break;
            }
            return item;
        });

        reply.send({
            code: 10000,
            msg: 'Success',
            data: dicData
        });
    } catch (e) {
        console.log('err', e);
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
