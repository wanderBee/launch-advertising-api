'use strict';

const plugins = [
	require('./swagger'),
	require('./helmet'),
	require('./decorate'),
	require('./routes'),

	require('./mock')
];

const installPlugins = server => {
	plugins.forEach(({ install }) => {
		install(server);
	});
};

module.exports = { installPlugins };
