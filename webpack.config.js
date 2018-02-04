const webpack = require("webpack");
const uglify = require("uglifyjs-webpack-plugin");

module.exports = {
	devServer: {
		inline: true,
		contentBase: ".",
		port: 8080,
		host: "0.0.0.0",
		historyApiFallback: true
	},
	devtool: "cheap-module-eval-source-map",
	entry: "./src/index.js",
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ["babel"],
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				loaders: [
					"style-loader",
					"css-loader",
					"postcss-loader",
					"less-loader"
				]
			},
			{
				test: /\.(png|jpe?g|svg|gif|pdf)$/,
				loader: "file-loader?emitFile=false&name=[path][name].[ext]"
			},
			{
				test: /\.json$/,
				loader: "json-loader"
			}
		]
	},
	output: {
		path: "public",
		filename: "js/app.min.js"
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new uglify({
			comments: false,
			compress: {
				warnings: true,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				booleans: true,
				if_return: true,
				join_vars: true,
			}
		})
	]
};
