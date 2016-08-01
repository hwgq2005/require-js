/*
 *
 * @authors H君
 * @date    2014-10-21 13:42:47
 * @version $Id$
 */

require.config({

	// 相对路径(可不配置)
	baseUrl:'src',

	// 基于baseUrl路径配置
	paths: {
		'jquery': 'js/plugins/jquery.min',
		'ejs':'js/plugins/ejs',
		'text': 'js/plugins/text',
		'shake': 'js/plugins/shake'
	},

	// 依赖关系
	shim: {
		jquery: {
			exports: '$',
		},
		shake:{
			deps: ['jquery'],
			exports: 'Shake'
		}
		,ejs: {
			exports: 'ejs'
		}
	},

	// 避免加载超时
	waitSeconds: 0
	
});