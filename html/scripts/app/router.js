/*
 *
 * @authors H君 (qq:262281610)
 * @date    2014-10-23 19:54:33
 * @version $Id$
 */

define(['jquery','juicer','text!../../template/main.html'],function ($,j,addTmp){
		

		var init=function(){
				var data={
					num:1,
					list:[
						{name:'guokai',show:true},
						{name:'benben',show:false},
						{name:'dier',show:true}
					],
					blah:[
						{num:1},
						{num:2},
						{num:3,inner:[
							{'time':'15:00'},
							{'time':'16:00'},
							{'time':'17:00'},
							{'time':'18:00'}
						]},
						{num:4}
					]
				};
				$('#main').html(juicer(addTmp,data))

				$('#bbb').click(function(event) {
						require(['../view/shake'],function(shake){
								  shake.rander();
							})
					
				});

		};
		return{
			initlalize:init	
		}
});


