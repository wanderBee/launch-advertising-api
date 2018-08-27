const signin = (username, password) => {
    return new Promise((resolve, reject) => {
        var request = require('request');
        const url = 'http://39.108.139.215:8080/user/login';
        const requestData = {
            username: username,
            password: password
        };
        request(
            {
                url: url,
                method: 'POST',
                // json: true,
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(requestData)
            },
            function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    resolve(body);
                } else {
                    reject(body);
                }
            }
        );

        // var http = require('http');

        // var qs = require('querystring');

        // var data = {  //这是需要提交的数据
        //     username: username,
        //     password: password,
        //     time: new Date().getTime()
        // };

        // var content = data;//qs.stringify(data);

        // var options = {
        //     hostname: '39.108.139.215',
        //     port: 8080,
        //     path: '/user/login?',
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Content-Length': Buffer.byteLength(data)
        //     }
        // };

        // var req = http.request(options, function (res) {
        //     console.log('STATUS: ' + res.statusCode);
        //     console.log('HEADERS: ' + JSON.stringify(res.headers));
        //     res.setEncoding('utf8');
        //     if(res.statusCode == '500'){
        //         reject('500 Internal Server Error!')
        //     }
        //     res.on('data', function (chunk) {
        //         console.log('BODY: ' + chunk);
        //         resolve(chunk);
        //     });
        // });

        // req.on('error', function (err) {
        //     console.log('problem with request: ' + e.message);
        //     reject(err)
        // });

        // // write data to request body
        // req.write(content);

        // req.end();
    });
};

module.exports = {
    signin
};
