const { getUserFromHeader } = require('../utils/auth');

const checkAuthLocal = function(req, reply, next) {
    try {
        const loggedUser = getUserFromHeader(req, { isLocal: true });

        if (!loggedUser) {
            reply.code(401).send('401 Unauthorized!');
        }
    } catch (err) {
        console.log('checkAuthLocal error:', err);
        reply.code(401).send(err.message);
    }
};

module.exports = checkAuthLocal;
