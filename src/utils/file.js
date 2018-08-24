const fs = require('fs');
const readFilePromise = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err)  // 注意，这里执行 reject 是传递了参数，后面会有地方接收到这个参数
            } else {
                resolve(data.toString())  // 注意，这里执行 resolve 时传递了参数，后面会有地方接收到这个参数
            }
        })
    })
}

module.exports = {
    readFilePromise
}