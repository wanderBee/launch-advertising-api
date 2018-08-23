require('make-promises-safe'); // installs an 'unhandledRejection' handler
const server = require('./server');
const base = require('app-module-path');
const config = require('./config');
base.addPath(__dirname);

const app = server();

app.ready().then(() => console.log(app.printRoutes()))

app.listen(config.get('port'), config.get('host'), err => {
    if (err) throw err;
    console.debug('> server listening on on %o:%o', app.server.address().address, app.server.address().port);
});

const buildFastify = () => {
    return app;
};

module.exports = buildFastify;
