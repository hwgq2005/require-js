/*
 *
 * @authors H君
 * @date    2016-08-03 10:13:26
 * @version 1.0
 */

require.config({

	// 相对路径(可不配置)
	baseUrl:'src',

	// 基于baseUrl路径配置
	paths: {
		'jquery' : 'js/plugins/jquery.min',
		'ejs'	 : 'js/plugins/ejs',
		'text'	 : 'js/plugins/text',
		'shake'	 : 'js/plugins/t-shake'
	},

	// 依赖关系
	shim: {
		jquery: {
			exports: '$',
		},
		shake:{
			deps: ['jquery','css!../src/css/views/shake.css'],
			exports: 'Shake'
		},
		ejs: {
			exports: 'ejs'
		}
	},

	map: {
		'*': {
			'css': 'js/plugins/require-css/css'
		}
	},

	// 避免加载超时
	waitSeconds: 0
	
});