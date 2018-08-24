'use strict';

const initMock = require('../mock')

const install = server => {
    // 初始化mock数据
    initMock();
};

module.exports = { install };
