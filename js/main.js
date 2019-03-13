/* main.js */
$(document).ready(function(){
	//윈도우 시작하면 화면 맨위로 이동
	$("body,html").stop().animate({"scrollTop":0},1500,"swing"); //처음에 딱열면 항상 스크롤탑 값이 0 새로고침해도 0
	
	//윈도우 시작하면 퀵메뉴 위치
	var t = ($(window).height()/2 -$("#quick").height()/2); //윈도우의 높이값 - 퀵메뉴 높이값

		$("#quick").stop().animate({top:t},700,"linear");
	
	//브라우저의 높이값을 div의 높이값으로
	var ht = $(window).height();
	$("#content > div").height(ht);

	$(window).resize(function(){
		var ht = $(window).height();
		$("#content > div").height(ht);
	});

	//첫번째 div 실행
	firstOn();
	function firstOn(){
		setTimeout(function(){
			$("#content > div > section").eq(0).addClass("on");
		},2500);
	}
	//scroll 움직일때
	$(window).scroll(function(){
		//퀵메뉴 위치 정하기
		var t = $(this).scrollTop() + ($(this).height()/2 -$("#quick").height()/2); // 현재 스크롤 탑값에서 윈도우 높이값을 2 나눈거를 뺀다음에 거기서 또 2나눈값을 더한다.

		$("#quick").stop().animate({top:t},700,"linear");

		var ht = $(window).height();
		$("#content > div").height(ht);
		var scroll = $(this).scrollTop(); //현재scroll위치값
		var content = $("#content > div");

		if(scroll>= content.eq(0).offset().top-$("#content").offset().top){//content
			$(".gnb li a").removeClass();
			$(".gnb li a").eq(0).addClass("on");

			$(".quick li a").removeClass();
			$(".quick li a").eq(0).addClass("on");
			
			//움직임 시작
			$("#content > div > section").eq(0).addClass("on");
		}else{//움직임 취소
			$("#content > div > section").eq(0).removeClass("on");
		}

		if(scroll>= content.eq(1).offset().top-$("#content").offset().top){//content
			$(".gnb li a").removeClass();
			$(".gnb li a").eq(1).addClass("on");

			$(".quick li a").removeClass();
			$(".quick li a").eq(1).addClass("on");
			
			//움직임 시작
			$("#content > div > section").eq(1).addClass("on");
			
		}else{//움직임 취소
			$("#content > div > section").eq(1).removeClass("on");
		}

		if(scroll>= content.eq(2).offset().top-$("#content").offset().top){//content
			$(".gnb li a").removeClass();
			$(".gnb li a").eq(2).addClass("on");

			$(".quick li a").removeClass();
			$(".quick li a").eq(2).addClass("on");
			
			//움직임 시작
			$("#content > div > section").eq(2).addClass("on");
		}else{//움직임 취소
			$("#content > div > section").eq(2).removeClass("on");
		}

		if(scroll>= content.eq(3).offset().top-$("#content").offset().top){//content1
			$(".gnb li a").removeClass();
			$(".gnb li a").eq(3).addClass("on");

			$(".quick li a").removeClass();
			$(".quick li a").eq(3).addClass("on");

			//움직임 시작
			$("#content > div > section").eq(3).addClass("on");
		}else{//움직임 취소
			$("#content > div > section").eq(3).removeClass("on");
		}

		if(scroll>= content.eq(4).offset().top-$("#content").offset().top){//content1
			$(".gnb li a").removeClass();
			$(".gnb li a").eq(4).addClass("on");

			$(".quick li a").removeClass();
			$(".quick li a").eq(4).addClass("on");
			
			//움직임 시작
			$("#content > div > section").eq(4).addClass("on");
		}else{//움직임 취소
			$("#content > div > section").eq(4).removeClass("on");
		}

		if(scroll>= content.eq(5).offset().top-$("#content").offset().top){//content1
			$(".gnb li a").removeClass();
			$(".gnb li a").eq(5).addClass("on");

			$(".quick li a").removeClass();
			$(".quick li a").eq(5).addClass("on");
			
			//움직임 시작
			$("#content > div > section").eq(5).addClass("on");
		}else{//움직임 취소
			$("#content > div > section").eq(5).removeClass("on");
		}

		//한페이지씩 이동
		$("#content > div").mousewheel(function(event,delta){
			//마우스 휠을 올렸을때
			if (delta > 0){
				
				var prev = $(this).prev().offset().top;
				
				$("html,body").stop().animate({"scrollTop":prev},1400,"easeOutBounce");

			//마우스 휠을 내렸을때
			}else if (delta < 0){
			
				var next = $(this).next().offset().top;

				$("html,body").stop().animate({"scrollTop":next},1400,"easeOutBounce");

			}
			
		});//mousewheel
	});//scroll
	
	//상단메뉴 높이가 있는 경우
	$(".gnb li,.quick li").click(function(){

		var ht = $(window).height();
		$("#content > div").height(ht);
		
		

		var i = $(this).index();

		var target = $("#content>div").eq(i).offset().top-$("#content").offset().top; // 디브의 높이값에다가 gnb 높이값을 빼라

		$("body,html").stop().animate({"scrollTop":target},1500,"swing");

	});

	/* starsBox */
	var cols = ['#f5d76e','#f7ca18','#f4d03f','#ececec','#ecf0f1','#a2ded0'];
	var stars = 250;

	for (var i = 0; i <= stars; i++) {

		var size = Math.random()*7;
		var color = cols[parseInt(Math.random()*4)];

		$('#starsBox').prepend('<span style=" width: ' + size + 'px; height: ' + size + 'px; top: ' + Math.random()*100 + '%; left: ' + Math.random()*100 + '%; background: ' + color + '; box-shadow: 0 0 '+ Math.random()*10 +'px' + color + ';"></span>') ;
	};

	setTimeout(function(){ 
		$('#starsBox span').each(function(){  
		$(this).css('top', Math.random()*100 + '%').css('left', Math.random()*100 + '%'); 
	  });
	}, 1);

	setInterval(function(){ 
		$('#starsBox span').each(function(){  	
		$(this).css('top', Math.random()*100 + '%').css('left', Math.random()*100 + '%'); 
	  });
	}, 100000); 

	/* svg */
	TweenLite.set('#w2',{opacity:0})

	var tl = new TimelineMax({delay:.5,repeat:-1})
	tl.fromTo('#w1', 3,{x:-700,y:-180},{bezier:[{x:12, y:-200},{x:300, y:-200},{x:700, y:-180}],ease:Linear.easeInOut})
	.set('#w1',{opacity:0})
	.set('#w2',{opacity:1})
	.fromTo('#w2', 3,{x:700,y:-180},{bezier:[{x:-10, y:0},{x:-300, y:0},{x:-700, y:-180}],ease:Linear.easeInOut})
	
	
	$("ul.arrow li").click(function(e){
		e.preventDefault();
		var i = $(this).index();

		$("div#m4 section> div").removeClass("on");
		$("div#m4 section> div").eq(i).addClass("on");

		$("ul.arrow > li a").removeClass("on");
		$("ul.arrow > li a").eq(i).addClass("on");
	});
	
	$("div#m3 section ul li.DETAIL").click(function(e){
		e.preventDefault();
		$("div#m3 section div:nth-of-type(3)").removeClass();
		$("div#m3 section div:nth-of-type(3)").addClass("on");
	});
	
	$("div#m3 section div:nth-of-type(3) p.close").click(function(e){
		e.preventDefault();
		$("div#m3 section div:nth-of-type(3)").removeClass("on");
		$("div#m3 section div:nth-of-type(3)").addClass();
	});


$("div#m4 section > div:nth-of-type(2) div.web2_txt ul:nth-of-type(2) li.DETAIL").click(function(e){
		e.preventDefault();
		$("div#m4 section div:nth-of-type(2) div:nth-of-type(3)").removeClass();
		$("div#m4 section div:nth-of-type(2) div:nth-of-type(3)").addClass("on");
	});
	
	$("div#m4 section div:nth-of-type(2) div:nth-of-type(3) p").click(function(e){
		e.preventDefault();
		$("div#m4 section div:nth-of-type(2) div:nth-of-type(3)").removeClass("on");
		$("div#m4 section div:nth-of-type(2) div:nth-of-type(3)").addClass();
	});

	$("div#m4 section div:nth-of-type(2) div:nth-of-type(3) dl.sub dd a").bind("click foucs",function(e){
		e.preventDefault();
		$("div#m4 section div:nth-of-type(2) div:nth-of-type(3) dl.sub dt").hide();
		$(this).parent().children().show();

	});

/* 5번째 페이지 */
	var $bnnNum=0;

	$(".next").click(function(e){
		e.preventDefault();
		if( $bnnNum>8) return false;
		$bnnNum++;
			$book_w=$("#m5>section").width(); 
			$("div#m5 section div.bannerzone").animate({"left":-$book_w*$bnnNum},300,"linear",function(){}); 
	});
	
	$(".prev").click(function(e){
		e.preventDefault();
		if( $bnnNum<1)  return false;
		$bnnNum--;
		$book_w=$("#m5>section").width();

		$("div#m5 section div.bannerzone").animate({"left":-$book_w*$bnnNum},300,"linear");
	});

});