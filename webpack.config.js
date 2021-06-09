const path = require('path');
const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js',
	},
	devtool: 'eval-source-map',

	devServer: {
		// before: function (app, server) {
		// 	server._watch('./src/sub/**/*.html')
		// },
		// contentBase: 'docs',
		contentBase: path.join(__dirname, 'dist'),
		open: true,
		hot: true,
		// writeToDisk: true,
		// port: 3000,
		// host: '0.0.0.0',
	},

	module: {
		rules: [
			{
				test: /\.css|\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							// options...
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'css/mystyles.css',
		}),
		new webpack.ProvidePlugin({
			$$: '/src/js/shortJS.js',
			// bulmaCalendar:
			// 	'/node_modules/bulma-extensions/bulma-calendar/dist/js/bulma-calendar.min.js',
				// './node_modules/bulma-extensions/bulma-calendar/dist/js/bulma-calendar.min.js',
		}),
	],
}
