/*
 *
 * @authors H君 (qq:262281610)
 * @date    2014-10-21 13:42:47
 * @version $Id$
 */
require.config({
	baseUrl:'html',
	paths: {
		'jquery': 'scripts/frames/jquery.min',
		'ejs':'scripts/frames/ejs',
		'shake': 'scripts/app/shake',
		'text': 'scripts/frames/text'
	},
	shim: {
		jquery: {
			exports: '$',
		},
		// underscore: {
		// 	exports: '_'
		// },
		// backbone: {
		// 	deps: ['jquery','underscore'],
		// 	exports: 'Backbone'
		// },
		shake:{
			deps: ['jquery'],
			exports: 'Shake'
		}
		,ejs: {
			exports: 'ejs'
		}
	}
	
});
require(['scripts/app/router'],function(router){
	router.initlalize();
})