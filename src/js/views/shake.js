/*
 *
 * @authors H君 (qq:262281610)
 * @date    2014-10-23 19:54:33
 * @version $Id$
 */

// AMD写法(推荐这种)
define([
	'jquery',
	'text!template/shake.ejs',
	'shake'
],function ($,shakeViewTmp,shake){
	 
		var indexView={
			el:'#main',
			rander:function(){ 
				var html = ejs.render(shakeViewTmp, {});
				$(this.el).html(html);
				$(this.el).shake();
			}
		};

		return indexView;
});

// CMD写法
// define(function(require, exports, module) {  

// 		var shakeViewTmp=require('text!template/shake.html');
// 	 	var shake=require('shake');
// 		var indexView={
// 				el:'#main',
		
// 				rander:function(){ 
// 					var html = ejs.render(shakeViewTmp, {});
// 					$(this.el).html(html);
// 					$(this.el).shake();
// 				}
// 			};

// 		return indexView;
	
// })  
  
