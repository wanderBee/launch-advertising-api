const jwt = require('jsonwebtoken');
const config = require('../config');
const { startsWith } = require('lodash');
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

const setToken = (reply, token) => {
    if (process.SERVER_BUILD) return;
    if (!token) return;
    var in3Minutes = 1 / 480;
    reply.setCookie('Authorization', bearerPrefix + token, {
        path: '/'
    });
};

const unsetToken = reply => {
    if (process.SERVER_BUILD) return;
    reply.setCookie('Authorization', null, {
        path: '/'
    });
};

const getUserFromHeader = req => {
    if (!req.cookies) return undefined;
    const auth = req.headers.authorization;
    if (!auth || !startsWith(auth, bearerPrefix)) return undefined;
    const token = auth.split(" ")[1];
    const payload = jwt.verify(token, config.get('secretKey'));
    return payload;
};

const setSecret = secret => window.localStorage.setItem('secret', secret);

const checkSecret = secret => window.localStorage.secret === secret;

module.exports = {
    extractInfoFromHash,
    setToken,
    unsetToken,
    getUserFromHeader,
    setSecret,
    checkSecret
};
