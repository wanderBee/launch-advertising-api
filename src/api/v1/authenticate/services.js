const createUser = user => {
    return { id: 1, name: user && user.name };
};

const createToken = req => {
    const jwt = require('jsonwebtoken');
    const payload = {
        //payload
        id: 1
    };
    const token = jwt.sign(payload, req.secret, {
        expiresIn: Math.floor(Date.now() / 1000) + 24 * 60 * 60 // 一天
    });

    console.log('token', token);
    return token;
};

module.exports = {
    createUser,
    createToken
};
