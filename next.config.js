const path = require('path');
module.exports = {
	reactStrictMode: false,
	images: {
		domains: ['cdn.sanity.io', 'i.imgur.com'],
		minimumCacheTTL: 1500000,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `@import "./styles/Base/_variables.scss";`,
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.pdf$/,
			use: 'url-loader',
		}),
			config.module.rules.push({
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ['@svgr/webpack'],
			})

		return config;
	},
	compiler: {
		styledComponents: true
	}
};
