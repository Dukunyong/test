	$(function(){
		var timer;
		function autoPlay(){
		timer=setInterval(function(){
			$(".show_notice").animate({"margin-top":-30},1000,function(){
				$(".show_notice").css("margin-top",0).find("li:first").appendTo($(".show_notice"));
			})
		},2000);
		}
		autoPlay()
		$(".show_notice").mouseenter(function(){
			clearInterval(timer);
		})
		$(".show_notice").mouseleave(function(){
			autoPlay();
		})
})		

$(function(){
	$(window).scroll(function(){
		var sTop=$(document).scrollTop();
		$(".layer").animate({"top":sTop+615},50);
	})
})

//----------------------------------------右侧的广告
$(function(){
	$(".fly-heard .ser-to").click(function(){
		 $('html,body').animate({
              scrollTop:0
            })
	})
})