// 마우스오버시 가운데 효과
$(function(){
    $(window).resize(function(){
        if ($(window).width() > 1024) {
            $('.menu1>a').mouseover(function(){
                $('.c1').stop().animate({'height': '370px', 'width': '370px'}, 300);
                $('.c1').css('display','block');
                $('.menu2').stop().animate({'opacity': '0'}, 200);
                $('.menu3').stop().animate({'opacity': '0'}, 200);
            }).mouseout(function(){
                $('.menu2').stop().animate({'opacity': '1'}, 200);
                $('.menu3').stop().animate({'opacity': '1'}, 200);
                $('.c1').stop().animate({'height': '10px', 'width': '10px'}, 300, function(){
                    $('.c1').css('display','none');
                });
            });
            $('.menu2>a').mouseover(function(){
                $('.c2').stop().animate({'height': '370px', 'width': '370px'}, 300);
                $('.c2').css('display','block');
                $('.menu1').stop().animate({'opacity': '0'}, 200);
                $('.menu3').stop().animate({'opacity': '0'}, 200);
            }).mouseout(function(){
                $('.menu1').stop().animate({'opacity': '1'}, 200);
                $('.menu3').stop().animate({'opacity': '1'}, 200);
                $('.c2').stop().animate({'height': '10px', 'width': '10px'}, 300, function(){
                    $('.c2').css('display','none');
                });
            });
            $('.menu3>a').mouseover(function(){
                $('.c3').stop().animate({'height': '370px', 'width': '370px'}, 300);
                $('.c3').css('display','block');
                $('.menu1').stop().animate({'opacity': '0'}, 200);
                $('.menu2').stop().animate({'opacity': '0'}, 200);
            }).mouseout(function(){
                $('.menu1').stop().animate({'opacity': '1'}, 200);
                $('.menu2').stop().animate({'opacity': '1'}, 200);
                $('.c3').stop().animate({'height': '10px', 'width': '10px'}, 300, function(){
                    $('.c3').css('display','none');
                });
            });
        } else {
            $('.menu1>a').mouseover(function(){
                $('.c1').stop().animate({height: $('.response').width(), width: $('.response').width()}, 300);
                $('.c1').css('display','block');
            }).mouseout(function(){
                $('.c1').stop().animate({'height': '10px', 'width': '10px'}, 300, function(){
                    $('.c1').css('display','none');
                });
            });
            $('.menu2>a').mouseover(function(){
                $('.c2').stop().animate({height: $('.response').width(), width: $('.response').width()}, 300);
                $('.c2').css('display','block');
            }).mouseout(function(){
                $('.c2').stop().animate({'height': '10px', 'width': '10px'}, 300, function(){
                    $('.c2').css('display','none');
                });
            });
            $('.menu3>a').mouseover(function(){
                $('.c3').stop().animate({height: $('.response').width(), width: $('.response').width()}, 300);
                $('.c3').css('display','block');
            }).mouseout(function(){
                $('.c3').stop().animate({'height': '10px', 'width': '10px'}, 300, function(){
                    $('.c3').css('display','none');
                });
            });
        }
    });
    $(window).trigger("resize");
});