const jwt = require('jsonwebtoken');
const config = require('../config');
const { startsWith, isEqual } = require('lodash');
const bearerPrefix = 'Bearer ';

const getQueryParams = () => {
    const params = {};
    window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
        params[$1] = $3;
    });
    return params;
};

const extractInfoFromHash = () => {
    if (process.SERVER_BUILD) return;
    const { id_token, state } = getQueryParams();
    return {
        token: id_token,
        secret: state
    };
};

const setToken = (req, token) => {
    if (process.SERVER_BUILD) return;
    if (!token) return;
    var in3Minutes = 1 / 480;
    req.cache.put('token', token);
    console.log('req.cache', req.cache);
};

const unsetToken = req => {
    if (process.SERVER_BUILD) return;
    req.cache.remove('token');
};

const getUserFromHeader = (req, opts) => {
    if (!req.headers) return undefined;
    const auth = req.headers.authorization;
    if (!auth || !startsWith(auth, bearerPrefix)) return undefined;
    const token = auth.split(" ")[1];

    opts = opts || {};
    if(opts.isLocal){    // 取本地缓存校验
        const localToken = req.cache.get('token');
        if(!isEqual(token, localToken)) {
            throw new Error('token已过期或未登录，请重新登录!')
        }
        return true;
    }else {
        return jwt.verify(token, config.get('secretKey'));
    }
};

module.exports = {
    extractInfoFromHash,
    setToken,
    unsetToken,
    getUserFromHeader
};
