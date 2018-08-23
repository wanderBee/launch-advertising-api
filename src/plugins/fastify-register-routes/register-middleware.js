'use strict';

const { pick, isEmpty, has } = require('lodash');
const wrapMiddleware = require('./wrap-middleware')

/**
 * @method toParseObject
 * @returning {Object}
 **/
const toParseObject = (acc, cur, key, list) => {
    acc[cur.name] = cur;
    return acc;
};

/**
 * @method parseMiddleware
 * @param {Array|Function} middlewares
 **/
const parseMiddleware = middlewares => middlewares.reduce(toParseObject, {});

/**
 * @description Get a current route using onRequest
 * @method getRoute
 * @param  {Array|Route} routes routes of all application
 * @param  {String} url  current url the request
 */
const getRoute = (routes, url) => routes.filter(route => url.includes(route.path));

/**
 * @method hookFilter
 * @param {Object|Instance} server
 * @param  {Array|Route} routes routes of all application
 * @param  {Array|Middleware} global_middleware middleware of all application
 **/
const hookFilter = (server, routes, global_middleware) => {
    server.addHook('preHandler', (req, reply, next) => {
        const { url } = req.req;

        const route = getRoute(routes, url);
        const route_middleware = pick(...route, ['middleware']);

        if (!isEmpty(route_middleware)) {
            route_middleware['middleware'].forEach(name => {
                if(has(global_middleware, name)){
                    let fn = global_middleware[name];
                    try {
                        fn.call(server, req, reply, next);
                    }catch(e){
                        next(new Error(e.message))
                        return false;
                    }
                }
            });
        }
        next();
    });

};

/**
 * @method registerMiddleware
 * @param {Object|Instance} server
 **/
const registerMiddleware = (server, routes, middlewares) => {
    if (!isEmpty(middlewares)) {
        const global_middleware = parseMiddleware(middlewares);
        hookFilter(server, routes, global_middleware);
    }
};

module.exports = registerMiddleware;
