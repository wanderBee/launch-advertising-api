const { getUserFromHeader } = require('../utils/auth');

const checkauth = function(req, reply, next) {
    try {
        const loggedUser = getUserFromHeader(req);

        if (!loggedUser) {
            reply.code(401).send('401 Unauthorized!');
        }
    } catch (e) {
        reply.code(401).send('401 Unauthorized!');
    }
};

module.exports = checkauth;
