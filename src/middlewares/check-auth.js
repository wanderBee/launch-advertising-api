const { getUserFromHeader } = require('../utils/auth');

const checkauth = function(req, reply, next) {
    try {
        const loggedUser = getUserFromHeader(req);

        if (!loggedUser) {
            reply.code(401).send('401 Authorization!');
        }
    } catch (e) {
        reply.code(401).send('401 Authorization!');
    }
};

module.exports = checkauth;
