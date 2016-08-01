/*
 *
 * @authors H君 (qq:262281610)
 * @date    2014-10-23 19:54:33
 * @version $Id$
 */

// define(['jquery','text!../template/shake.html','shake'],function ($,shakeViewTmp,shake){
	
	 
	 
// 		var indexView={
// 			el:'#main',
	
// 			rander:function(){ 
// 				$(this.el).html(juicer(shakeViewTmp,{}));
// 				$(this.el).shake();
// 			}
// 		};

// 		return indexView;
// });

define(function(require, exports, module) {  

		var shakeViewTmp=require('text!template/shake.html');
	 	var shake=require('shake');
		var indexView={
				el:'#main',
		
				rander:function(){ 
					var html = ejs.render(shakeViewTmp, {});
					$(this.el).html(html);
					$(this.el).shake();
				}
			};

		return indexView;
	
})  
  
