/*
 *
 * @authors H君
 * @date    2016-08-01 14:48:20
 * @version $Id$
 */

define([
	'jquery',
	'ejs',
	'text!template/one.ejs'
],function ($,Ejs,addTmp){
		
		var box = $('#main');

		var APP = {

			//初始化
			init : function(){
				APP.bindEvents();
				APP.getData();
			},

			// 请求数据
			getData:function(){
				$.ajax({
					url: 'src/js/website.json',
					type: 'get',
					dataType: 'json'
				})
				.done(function(data) {
					var data = data.data;
					var html = ejs.render(addTmp, data);
					box.html(html);
				});
			},

			// 事件绑定
			bindEvents:function(){
				box.on('click', '.bar-tab a', function(event) {
					var $self = $(this),
					    type = $self.data('type');

					if (type === 'activity') {
						require(['js/views/shake'],function(shake){
							shake.rander();
						})
					}

				});

			}
		}
		
		return{
			init:APP.init	
		}

});


