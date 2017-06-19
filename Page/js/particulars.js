$(function(){
	// $("#mm").siblings().css("border","#006699 3px solid") 
	//鼠标移入到底部小图时，显示对应的中图和大图
	
	$(".items ul li").click(function(){
		var index = $(this).index();
		$(".preview1 img").eq(index).show().siblings("img").hide();
		$("#big img").eq(index).show().siblings().hide();
	})
	$(".items ul li").mouseover(function(){
		var index = $(this).index();
	$(".items ul li").eq(index).addClass("active").siblings().removeClass("active");
	})
	//鼠标移入移出small盒子  显示或隐藏大图显示区big  和 mask
	$(".preview1").mouseover(function(){
		$("#big").show();
		$(".sale-out").show();
	})
	$(".preview1").mouseout(function(){
		$("#big").hide();
		$(".sale-out").hide();
	})
	//scrollTop = document.document.scrollTop || document.body.scrollTop
	$(".preview1").mousemove(function(e){
		var e=e||event;
		var x = e.pageX - $(".preview1").offset().left - $(".sale-out").width()/2;
		var y = e.pageY - $(".preview1").offset().top - $(".sale-out").height()/2;
	
		var mx = $(".preview1").width()  - $(".sale-out").width();
		var my = $(".preview1").height()  - $(".sale-out").height();
		x = x<=0 ? 0 : x>=mx ? mx : x;
		y = y<=0 ? 0 : y>=my ? my : y;
		//大图宽度/小图宽度 = 大图偏移 / mask的偏移
		var bigImageX = -x * $(".bigImage").width() / $(".preview1").width();
		var bigImageY = -y * $(".bigImage").height() / $(".preview1").height();
		console.log($(".preview1").scrollTop())
		$(".sale-out").css({
			"left":x + "px",
			"top":y+"px"
		})
		$(".bigImage").css({
			"left" : bigImageX+"px",
			"top" : bigImageY+"px"
		})
	})
		var index = 0;
		$(".next_1").click(function(){
		
		index++;
		if(index > $(".bigImage").length - 5){
			index = $(".bigImage").length - 5;
			return;
		}
		$(".items ul").animate({"marginLeft":-index*70});
		})
		
		$(".prev_1").click(function(){
		index--;
		if(index < 0){
			index = 0;
			return;
		}
		$(".items ul").animate({"marginLeft":-index*70});
	})
		//---------------------------------------------详情页
		$.ajax({
		type:"get",
		url:"../Json/baiyangdian.json",
		async:true,
		success:function(res){
			var html = "";
			for (var i  in  res) {
				//导航信息加载
				//页面信息加载
				var child = res[i];
					html += `<p>
							<img src="../imgs/${child.src}" />
							</p>`;
			}
			$(".pic").html(html);
				
		}
	});
	//--------------------------------------------------楼层加固定导航栏
//	$(function(){
//	//点击左侧楼层号  除了 top
//	$(".ddss a").click(function(){
//		
//		//当前点击的span的文字红色  其余默认
//		$(".ddss a").eq(index).addClass("active").siblings().removeClass("active");
//			   
//			   alert()
//			  });
//			  })
	//----------------------------------------------------楼梯
	$(window).scroll(function(){
		var sTop =  $(document).scrollTop();
		if( sTop>=1050 ){
			$(".tab_clearfx").css({"position":"fixed","top":0})
		}else{
			$(".tab_clearfx").css({"position":""})
		}
	})
})
