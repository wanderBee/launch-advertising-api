require('make-promises-safe'); // installs an 'unhandledRejection' handler
const server = require('./server');
const base = require('app-module-path');
const config = require('./config');
base.addPath(__dirname);

const app = server();

// app.ready().then(() => app.log.info(app.printRoutes()))

app.listen(config.get('port'), '0.0.0.0', err => {
    if (err) throw err;
});

const buildFastify = () => {
    return app;
};

module.exports = buildFastify;
