'use strict';

const config = require('../config');
const CacheLRU = require('../utils/cache');
const cache = new CacheLRU(config.get('cachCapacity'));

const install = server => {

    // 增加缓存属性
    server.decorateRequest('cache', cache);
    // server.decorateReply('cache', cache);
    
};

module.exports = { install };
