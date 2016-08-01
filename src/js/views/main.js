/*
 *
 * @authors H君
 * @date    2016-08-01 14:48:20
 * @version $Id$
 */

define([
	'jquery',
	'ejs',
	'text!template/main.ejs',
	'text!template/add.ejs',
],function ($,Ejs,indexTmp,addTmp){
		
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
					var html = ejs.render(indexTmp, data);
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
					}else if ( type === 'addsite') {
						var html = ejs.render(addTmp);
						box.html(html);
					}

				});

				box.on('click', '.isedit', function(event) {
					var html = ejs.render(addTmp);
					box.html(html);
				});

				

			}
		}
		
		return{
			init:APP.init	
		}

});


