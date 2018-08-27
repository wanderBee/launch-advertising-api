const path = require('path');
const _ = require('lodash');
const { readJsonAync } = require('../../../utils/file');
const enumObject = require('./enum');

const simple = (req, reply) => {
    reply.send({ result: 'get from v1/dictionary/:type!' });
};

const getDictionary = async (req, reply) => {
    const { type } = req.params;
    const dicType = enumObject[type] || 0;

    try {
        // 获取测试数据
        // JAVA API Todo ...
        let mockData = await readJsonAync(path.resolve(__dirname, '../../../mock/ap_dictionary.json'));

        const dicData = _.chain(mockData)
            .filter(dic => {
                console.log('item', dic);
                return dic.dic_type == dicType;
            })
            .sortBy('sort_no')
            .map(dic => {
                return {
                    id: dic['id'],
                    dic_value: dic['dic_value'],
                    dic_remark: dic['dic_remark']
                };
            })
            .value();

        reply.send({
            code: 10000,
            msg: 'Success',
            data: dicData
        });
    } catch (e) {
        reply.send({
            code: 20000,
            msg: '服务器内部错误，获取字典数据失败',
            data: null
        });
        return;
    }
};

module.exports = {
    simple,
    getDictionary
};
