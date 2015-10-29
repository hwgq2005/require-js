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
		'juicer':'frames/juicer',
		'shake': 'app/shake',
		'text': 'frames/text'
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
	}
});
require(['app/router'],function(router){
	router.initlalize();
})