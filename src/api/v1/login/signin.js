const httpRequest = require('../../../utils/request');

const signin = (username, password) => {
    return new Promise((resolve, reject) => {
        const requestData = {
            username: username,
            password: password
        };
        httpRequest({
            url: '/user/login',
            method: 'POST',
            // json: true,  // 自动转换结果为json
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestData),
            success: function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    resolve(body);
                } else {
                    reject(body);
                }
            }
        });
    });
};

module.exports = {
    signin
};
