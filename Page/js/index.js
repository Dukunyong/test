$(function(){
	$(".sch_in").focus(function(){
		if($(".sch_in").val("请输入商品名称或货号")){
			$(".sch_in").val('');
		}
	})
	$(".sch_in").blur(function(){
		$(".sch_in").val("请输入商品名称或货号");
	})
})
//--------------------------广告轮播
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
//--------------------------banner轮播
	$(function(){
	 var index=0;
	 var fig = true;
	 
	 var timer= setInterval(autoP,4000);
	 function autoP(){
   			if(fig){
   				index++;
   			if(Math.abs(index)>=$(".scroll ul li").size()) {
			index=0;
			}
   				fig = false;
   				$(".icc i").eq(index).addClass("active").siblings().removeClass("active");
		 		$(".scroll ul").animate({"margin-left":-1920},3000,function(){
		 		$(".scroll ul").css("margin-left",0).find("li:first").appendTo( $(".scroll ul") );
	 			fig =true;
	 		})
   			}	
	}
//	 $(".icc i").eq(index).addClass("active").siblings().removeClass("active");
	 $(".banner_1").mouseenter(function(){
			clearInterval(timer);
		})
	  $(".banner_1").mouseleave(function(){
		timer= setInterval(autoP,4000);
		})
	  $(".banner_1 .right").click(function(){
	  	/*$(".scroll ul").eq(index).animate({"margin-left":-1920},1000,function(){
	  	$(".scroll ul").eq(index).css("margin-left",0).find("li:first").appendTo( $(".scroll ul") );
	  	})*/
	  	clearInterval(timer);
  	    autoP();
	  })
	  $(".banner_1 .left").click(function(){
	  	clearInterval(timer)
	  		$(".scroll ul").find("li:last").prependTo($(".scroll ul"))
	  	$(".scroll ul").css("margin-left",-1920)
	  	$(".scroll ul").animate({"margin-left":0},1000)
	  	/*index--
	  	if(index<0) {
			index=1;
			}
	  
	  	$(".icc i").eq(index).addClass("active").siblings().removeClass("active");*/
	
	  	
	  	autoP()
	  })
	  $(".icc i").mouseenter(function(){
	  	$(this).addClass("active").siblings().removeClass("active");
	  	console.log(index)
	  	autoP()
	  })
    })  

//--------------------------每日精选轮播
$(function(){
	 var timer =setInterval(auto,3000);
     var index=0;
	function auto(){
            index++;
            index %= 4; 
     $(".eight_list .show i").removeClass("active");
     $(".eight_list .show i").eq(index).addClass("active");   
	 $(".day_img ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	}
	$(".eight_list .show").mouseenter(function(){
		clearInterval(timer);
		index=$(this).index()-1;
            auto();
	})
	$(".eight_list .show").mouseout(function(){
		timer =setInterval(auto,3000);
	})
	$(".eight_list .show").mouseenter(function(){
		clearInterval(timer);
	})
	$(".day_img ul li").mouseenter(function(){
		clearInterval(timer);
	})
	$(".day_img ul").mouseout(function(){
		clearInterval(timer);
		timer =setInterval(auto,3000);
	});
	$(".next").click(function(){
		clearInterval(timer);
		auto();
	})
	$(".prev").click(function(){
		clearInterval(timer);
		index -=2;  
		auto();
	})
	})
//------------------------------------------倒计时
	$(function(){
	var n=60;
	var tiemr=null;
	var h=0;
	var m=28;
	var s=n;
        timer=setInterval(function(){
			//以变量n来改变h,m,s,ml的值
		n--;
		//一毫秒为单位求其他变量
		s=parseInt(n%(100*60*60)%(100*60)%100);
		
		$(".tv_time")[0].innerHTML=x(h)+':'+x(m)+':'+x(s);
		//改变边界范围
		if(n<=0){
			n=60;
		}
		if(s==0){
			m--;
		}
		if(m<=0){
			 m=60;
			 h--;
		}
		},1000)
	function x(n){
			      return n<10?"0"+n:""+n;
          }
})
//----------------------------------------24小时直播
$(function(){
	var index = 0;
		$(".f_next").click(function(){
		index++;
		if(index > $(".foreshow_list ul li a").length - 3){
			index = $(".foreshow_list ul li a").length - 3;
			return;
		}
		$(".foreshow_list ul").animate({"marginLeft":-index*90});
		})
		
		$(".f_prev").click(function(){
		index--;
		if(index < 0){
			index = 0;
			return;
		}
		$(".foreshow_list ul").animate({"marginLeft":-index*90});
})
})
		
//----------------------------------------左广告跟随
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
//----------------------------------------Json的调用
$.ajax({
		type:"get",
		url:"../index.json",
		async:true,
		success:function(res){
			var html = "";
			for (var i  in  res) {
				//导航信息加载
				//页面信息加载
				for(var j = 0 ; j < res[i].list.length ; j++){
					var child = res[i].list[j];
					html += `<li>
								<div class="box_s">
								<a href="###">
									<div class="img_box">
									<img class="lazy-loading" src="../imgs/${child.src}" alt="" />
									</div>
									<p class="box_tit">
										<em class="img_ti">${child.name}</em>
									</p>
									<p class="three_subtit">
										${child.about}
									</p>
									<div class="three_yuan">
										<span class="price">
											<i>¥</i>
											${child.price}
										</span>
										<span class="sale_p">
											<p class="i_abs">
												<em class="i_by">包邮</em>
												</p>
											</span>
										
										<span class="fr">
											<i>${child.num}人</i>
											已购买
										</span>
									</div>
								</a>
								<div class="tax_box"></div>
								</div>
							</li>`;
				}
			}
			$(".shoplist").html(html);
				
		}
});