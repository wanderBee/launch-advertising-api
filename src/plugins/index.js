'use strict';

const plugins = [
	require('./swagger'),
	require('./helmet'),
	require('./cookie'),
	require('./routes')
];

const installPlugins = server => {
	plugins.forEach(({ install }) => {
		install(server);
	});
};

module.exports = { installPlugins };
