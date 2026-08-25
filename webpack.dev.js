const path = require('path');
const config = require('./webpack.config.js');

module.exports = {
	...config,
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'docs/dist/'),
		publicPath: '/dist/',
	},
	devServer: {
		compress: true,
		liveReload: true,
		host: '0.0.0.0',
		port: 8080,
		static: {
			directory: path.resolve(__dirname, 'docs/'),
		},
	},
}
