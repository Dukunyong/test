$(function(){
	'use strict';
	 var up=$('#yhm_text');
	 var pswd=$('.text_sun');
	$('.login-btn').click(function(){
		if(up.val()===''){
			var a="用户名不能为空";
			$('.uss').html(a);
			return;
	    }
		if(pswd.val()===''){
			var b="密码不能为空";
			$('.uss_1').html(b);
			return;
		}
		
//    
//	 $('input').focus(function(){
//		 $('.usecon').find('span').html('');
//		 $('.pswdcon').find('span').html('');
//	    })
//	 $('.butR').click(function(){
//	 	 location.href="login.html";

	 })

});