
/*banner轮播控制*/
$(function () {
	//轮播自动播放
	$('#myCarousel').carousel({
		//自动4秒播放
		interval : 3000,
	});
	//设置垂直居中
	$('.carousel-control').css('line-height', $('.carousel-inner img').height() + 'px');
	$(window).resize(function () {
		var $height = $('.carousel-inner img').eq(0).height() || 
					  $('.carousel-inner img').eq(1).height() ||
					  $('.carousel-inner img').eq(2).height();
		$('.carousel-control').css('line-height', $height + 'px');
	});
});
/*banner轮播控制结束*/


$(function(){
	$("footer ul li").css({"height":$("footer ul").height()+"px"});
})


//内页侧面导航
$(function(){
// 当屏小余等余991的时候UL隐藏，点击i的时候UL展开
	  function aaa (){
	  	 var pmW = $(window).width();
	  	 if ( pmW <= 991 ){
	  	 	$(".neiye .nav1").hide();
	  	 }else{
	  	 	$(".neiye .nav1").show();
	  	 }
	  }
	  aaa();
	  $(window).resize(function(){
	  	aaa();
	  })
	  $(".neiye .title4 i").click(function(){
	     	if ( $(".neiye .nav1").is(':hidden') ){
	     		$(".neiye .nav1").slideDown();
	     	}else{
	     		$(".neiye .nav1").stop().slideUp();
	     	}
	  })
	  
	  // 点击一级导航时二级导航收缩隐藏
	   $(".neiye .nav_box .nav2").click(function(){
	    $(this).next(".neiye .nav1 ul").slideToggle(300).siblings(".neiye .nav1 ul").slideUp(500);
	  });  
	    

		//一级导航选中状态
	    $(".neiye .nav_box .nav2").click(function(){
	    $(".neiye .nav_box .nav2").removeClass("active");
	    	$(this).addClass("active");
	  	})
	    
	    //一级导航选中状态
	    $(".neiye .nav1 ul li a").click(function(){
	    $(".neiye .nav1 ul li a").removeClass("active");
	    	$(this).addClass("active");
	  	})
	    

});


	


// PC端导航下拉缓冲效果
$(function(){
	$("header nav li").hover(function(){
		$(this).find("ul").slideDown();	
	},function(){
		$(this).find("ul").stop().slideUp();	
	})
})
// PC端导航下拉缓冲效果结束



// 手机端导航
$(function(){
		
		$(".ydd_btn").click(function(){
				if($(this).hasClass('click')){
						$(this).removeClass("click");
				} else{
						$(this).addClass("click");
				}
		});
		$(".ydd_btn").hover(function(){
				$(this).addClass("hover");	
		},function(){
				$(this).removeClass("hover");	
		});
		$(".ydd_btn").bind("click",function(){
				$(".sjdnav").slideToggle();	
		});	
});

// 手机端导航结束


$(function(){
	$('#tabBar .clickbtn').click(function(){
		if( $('#tabBar .navigation').hasClass('active') ){
			$('#tabBar').removeClass('active');
			$('#tabBar .clickbtn').removeClass('active').addClass('on');
			$('#tabBar .navigation').removeClass('active');
		}else{
			$('#tabBar').addClass('active');
			$('#tabBar .clickbtn').addClass('active').removeClass('on');
			$('#tabBar .navigation').addClass('active');
		}
	})
})




// 等比例缩放
$(function(){
	
		function imgs (){
			
			

//			var imgbox3W= $(".lxwm .con .ditu").width();
//			$(".lxwm .con .ditu").css("height",imgbox3W*0.51438848+"px");
			
//		
//			 var imgs4W= $(".gywm .img").width();
//			 $(".gywm .img").css("height",imgs4W*0.6220095+"px");
			
		
//			 var imgs5W= $(".main5 .ditu").width();
//			 $(".main5 .ditu").css("height",imgs5W*0.313043+"px");
		}

		imgs();	
		$(window).resize(function(){
			imgs();	
		});
		
})


// 设置为主页 
function SetHome(obj,vrl){ 
try{ 
	obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl); 
} 
catch(e){ 
	if(window.netscape) { 
		try { 
			netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
		} 
catch (e) { 
	alert("此操作被浏览器拒绝！"); 
} 
var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch); 
	prefs.setCharPref('browser.startup.homepage',vrl); 
}else{ 
		alert("您的浏览器不支持!"); 
		} 
} 
} 
// 加入收藏 兼容360和IE6 
function shoucang(sTitle,sURL) 
{ 
	try{ 
		window.external.addFavorite(sURL, sTitle); 
		} 
catch (e){ 
	try{ 
		window.sidebar.addPanel(sTitle, sURL, "");
	} 
catch (e){ 
	alert("加入收藏失败，请使用Ctrl+D进行添加"); 
	} 
} 
}