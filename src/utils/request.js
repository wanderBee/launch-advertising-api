const config = require('../config');
const request = require('request');
const { assignIn, trimStart, startsWith } = require('lodash');
const proxy = config.get('proxy');

const httpRequest = option => {
    const opts = assignIn(proxy, option);
    opts.url = startsWith(opts.url, 'http') ? opts.url : opts.target + '/' + trimStart(opts.url, '/');
    
    request(opts, opts.success);
};

module.exports = httpRequest;
