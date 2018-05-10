const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
let mpcCss = {
	test: /\.css$/,
	include: path.resolve(__dirname, '../../src'),
	use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use: [{
				loader: 'css-loader?importLoaders=1',
				options: {
					minimize: true //css压缩
				}
			},
			{
				loader: 'postcss-loader',
				options: {
					plugins: function() {
						return [
							require('postcss-import'),
							autoprefixer({
								browsers: ['last 10 versions']
							})
						];
					}
				}
			}
		],
		allChunks: true,
		publicPath: '../'
	}))
}
module.exports = mpcCss;