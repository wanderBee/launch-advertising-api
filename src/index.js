require('make-promises-safe'); // installs an 'unhandledRejection' handler
const server = require('./server');
const log = require('debug')('APP');
const base = require('app-module-path');
const config = require('./config')[process.env.NODE_ENV];
base.addPath(__dirname);

const app = server();

app.listen(config.port, config.host, (err) => {
    if (err) throw err;
    log('> server listening on on %o:%o', app.server.address().address, app.server.address().port);
});

const buildFastify = () => {
	return app;
};

module.exports = buildFastify;