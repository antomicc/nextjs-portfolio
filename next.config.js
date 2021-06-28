const path = require('path');
module.exports = {
	reactStrictMode: false,
	images: {
		domains: ['cdn.sanity.io'],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `@import "./styles/Base/_variables.scss";`,
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.pdf$/,
			use: 'url-loader',
		});

		return config;
	},
};
