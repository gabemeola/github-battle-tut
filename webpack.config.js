var path = require("path"),
	webpack = require("webpack"),
	HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	resolve: { //Resolves ES2015 Imports
		extensions: ["", ".js", ".jsx"]
	},
	entry: { //Entry Point for Webpack
		app: ["./app/index.js"]
	},
	output: {
		path: __dirname + "/dist",
		filename: "index_bundle.js" //Bundled Javascript Webpack Spits out.
	},
	devServer: { //Allows webpack-dev-server to be live reloaded
		inline: true,
		hot: true,
		port: 3333,
		watch: true
	},
	module: {
		loaders: [
			{ //Babel loader for converting ES2015 to ES5
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.html",
			filename: "index.html",
			inject: "body"
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};