const path = require('path');
const _ = require('lodash');
const { readFilePromise } = require('../../../utils/file');

const simple = (req, reply) => {
    reply.send({ result: 'get from v1/area!' });
};

const getArea = async (req, reply) => {
    // 获取测试数据
    let mockData = await readFilePromise(path.resolve(__dirname, '../../../mock/ap_area.json'));
    mockData = JSON.parse(mockData);
    areaData = _.chain(mockData)
        .map(item => {
            return {
                value: item['code'],
                label: item['cn_name'],
                children: _.chain(mockData)
                    .filter(child => {
                        return child['parent_code'] == item['code'];
                    })
                    .map(child_item => {
                        return {
                            value: child_item['code'],
                            label: child_item['cn_name']
                        };
                    })
                    .value()
            };
        })
        .filter(item => {
            return item.children.length;
        })
        .value();

    reply.send({
        code: 10000,
        msg: 'Success',
        data: areaData
    });
};

module.exports = {
    simple,
    getArea
};
