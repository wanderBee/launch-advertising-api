const path = require('path');
const _ = require('lodash');
const { signin } = require('./signin');

const simple = (req, reply) => {
    reply.send({ result: 'get from v1/area!' });
};

const login = async (req, reply) => {
    const { username, password } =  req.body;

    let dd = new Date();
    dd.setDate(dd.getDate() + 1);

    // 登陸信息返回token
    try {
        let result = await signin(username, password);
        result = JSON.parse(result);
        if (result.code === '0000') {
            reply.send({
                code: result.code,
                msg: 'Success',
                data: {
                    authorization: 'Bearer ' + result.bo.token,
                    expires: dd
                }
            });
        } else {
            reply.send({
                code: result.code,
                msg: 'Error login, invalid!'
            });
        }
    } catch (e) {
        reply.send({
            code: 20000,
            msg: '服务器内部错误，获取字典数据失败',
            data: null
        });
    }
};

module.exports = {
    simple,
    login
};
