const path = require('path');
const _ = require('lodash');
const { signin } = require('./signin');
const { setToken } = require('../../../utils/auth');
const { Error_401_i18n } = require('../../../utils/error');

const simple = (req, reply) => {
    reply.send({ result: 'get from v1/area!' });
};

const login = async (req, reply) => {
    const { username, password } = req.body;
    // 登录信息返回token
    try {
        let result = await signin(username, password);
        result = JSON.parse(result);
        if (result.code === '0000') {
            setToken(req, result.bo.token);
            let dd = new Date(result.bo.createTime);
            dd.setDate(dd.getDate() + 1);
            reply.send({
                code: result.code,
                msg: 'Success',
                data: {
                    authorization: 'Bearer ' + result.bo.token,
                    expires: dd,
                    username: result.bo.username
                }
            });
        } else {
            reply.send({
                code: result.code,
                msg: 'Error login, invalid!'
            });
        }
    } catch (err) {
        const err_result = JSON.parse(err);
        _.each(Error_401_i18n, (value, key)=>{    
            if(new RegExp(key).test(err_result.message)){
                err_result.message = value;
                return false;
            }
        });
        reply.code(err_result.status || 500).send({
            code: err_result.status,
            msg: _.replace(err_result.message, 'Authentication Failed:', ''),
            data: null
        });
    }
};

module.exports = {
    simple,
    login
};
