const fs = require('fs');
const path = require('path');
const { isArray, map, forEach, padStart } = require('lodash');
const pinyin = require('js-pinyin');

module.exports = function() {
    /*
    * 扁平化区域数据，生成如下结构：
    * {
    *   code : [String | Required],
    *   parentCode: [String],
    *   cn_name: [String | Required],
    *   en_name: [String| Required]
    * }
    * 
    * @return area [String]
    */
    const flattenProvince = () => {
        const provinceFile = path.resolve(__dirname, 'province.json'); // 这个文件由第三方提供，需要过滤
        return new Promise(function(resolve, reject) {
            let area = [];
            fs.readFile(provinceFile, function(err, data) {
                if (err || !data) {
                    reject(err);
                }

                var province = data.toString(); // 将二进制的数据转换为字符串
                province = JSON.parse(province); // 将字符串转换为json对象

                // ToDo ...
                let index = 0;
                forEach(province, (value, key) => {
                    const provinceCode = padStart(++index, 2, '0');
                    area.push({
                        code: provinceCode,
                        parent_code: null,
                        cn_name: key,
                        en_name: pinyin.getCamelChars(key)
                    });
                    if (isArray(value)) {
                        forEach(value, (item, index) => {
                            area.push({
                                code: provinceCode + padStart(++index, 3, '0'),
                                parent_code: provinceCode,
                                cn_name: item,
                                en_name: pinyin.getCamelChars(item)
                            });
                        });
                    }
                });

                resolve(area);
            });
        });
    };

    const produceAreaFile = () => {
        const areaFile = path.resolve(__dirname, 'ap_area.json');
        fs.exists(areaFile, async exists => {
            if (!exists) {
                const flattenedArea = await flattenProvince();
                // 因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
                fs.writeFile(areaFile, JSON.stringify(flattenedArea), function(err) {
                    if (err) {
                        console.error(err);
                    }
                    console.log('----------新增 区域测试数据 成功！-------------');
                });
            }
        });
    };

    produceAreaFile();
};
