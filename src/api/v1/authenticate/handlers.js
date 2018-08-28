const { setToken } = require('../../../utils/auth');

const simple = (req, reply) => {
    reply.send({ result: 'I am alive!' });
};

const swagger = async (req, reply) => {
    if (req.$service) {
        const token = req.$service.createToken(req.body);
        setToken(req, token);
        reply.send({ Authorization: req.cookies.Authorization });
    } else {
        reply.send({});
    }
};

module.exports = {
    simple,
    swagger
};
