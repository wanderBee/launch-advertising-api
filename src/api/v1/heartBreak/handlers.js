const simple = async (req, reply) => {
    reply.send({ result: 'I am alive!' });
};
const swagger = (req, reply) => {
    reply.send({ result: 'swagger tell : I am alive!' });
};

module.exports = {
    simple,
    swagger
};
