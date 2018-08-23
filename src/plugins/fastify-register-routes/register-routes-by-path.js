'use strict';

const { loadRoutesByPath, loadMiddlewaresbyPath } = require('./load-files');
const registerRoutes = require('./register-router');
// const displayRoutes = require('./display-routes')
const registerService = require('./register-service');
const registerMiddleware = require('./register-middleware');

const { pick } = require('lodash');

/**
 * @method registerRouter
 * @param  {Object}    server
 * @param  {Object}    options
 * @param  {Function}    next
 */
function registerRouter(server, options, next) {
    const opts = pick(options, ['path', 'showTable', 'useService']);
    const dirname = opts.path;
    const showTable = opts.showTable || false;
    const useService = opts.useService || false;

    if (!dirname) {
        return next(new Error('`path` parameter is required to load files'));
    }
    const routes = loadRoutesByPath(dirname, options);

    const middlewares = loadMiddlewaresbyPath(dirname);
    
    routes.forEach(route => registerRoutes(server, route));

    if (useService) {
        registerService(server, routes);
    }
    
    registerMiddleware(server, routes, middlewares);

    // if (showTable) {
    //   displayRoutes(routes)
    // }
}

module.exports = registerRouter;
