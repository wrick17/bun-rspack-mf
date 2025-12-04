const rspack = require('@rspack/core');
const { RspackDevServer } = require('@rspack/dev-server');

const config = require('./rspack.config.mjs').default;

const startServer = async devServer => {
	await devServer.start();
};

const startRspackDevServer = async () => {
	const { devServer: devServerConfig, ...rspackConfig } = config;
	const compiler = rspack(rspackConfig);
	const devServer = new RspackDevServer(devServerConfig, compiler);
	startServer(devServer);
};

startRspackDevServer()