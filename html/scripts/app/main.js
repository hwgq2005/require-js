/*
 *
 * @authors H君 (qq:262281610)
 * @date    2014-10-21 13:42:47
 * @version $Id$
 */
require.config({
	baseUrl:'html/scripts',
	paths: {
		'jquery': 'frames/jquery.min',
		'underscore': 'frames/underscore',
		'backbone': 'frames/backbone',
		'shake': 'app/shake',
		'text': 'frames/text'
	},
	shim: {
		zepto: {
			exports: '$',

		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['jquery','underscore'],
			exports: 'Backbone'
		},
		shake:{
			deps: ['jquery'],
			exports: 'Shake'
		}
	}
});
require(['app/router'],function(router){
	router.initlalize();
})