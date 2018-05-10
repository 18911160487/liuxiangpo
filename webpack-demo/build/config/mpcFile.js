const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let Mpc = function() {
	let obj = {},
		static_json_obj = {},
		mpcJs = {},
		mpcHtml = [],
		mpcJson = [];
	let arr = glob.sync('./src/html/*.html');
	let static_json_arr = glob.sync('./src/static/*.json');
	for(let i = 0; i < arr.length; i++) {
		obj[arr[i].substring(arr[i].lastIndexOf('\/') + 1, arr[i].lastIndexOf('.'))] = arr[i];
	}
	for(let i = 0; i < static_json_arr.length; i++) {
		static_json_obj[static_json_arr[i].substring(static_json_arr[i].lastIndexOf('\/') + 1, static_json_arr[i].lastIndexOf('.'))] = static_json_arr[i];
	}
	for(o in obj) {
		mpcJs[o] = './src/script/' + o + '/' + o + '.js';
		mpcHtml.push(new HtmlWebpackPlugin({
			filename: o + '.html',
			template: './src/html/' + o + '.html',
			inject: 'body',
			chunks: ['jq', o],
			minify: {
				removeComments: true, //删除html里的注释
				collapseWhitespace: true //删除html里的空格obj
			}
		}))
	}
	for(o in static_json_obj) {
		mpcJson.push({
			from: './src/static/' + o + '.json',
			to: './static/' + o + '.json'
		});
	}
	return {
		'mpcJs': mpcJs,
		'mpcHtml': mpcHtml,
		'mpcJson': mpcJson
	}
}
module.exports = Mpc;