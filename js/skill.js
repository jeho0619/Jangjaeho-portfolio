$(function(){
    $(window).scroll(function(){
        if ($(document).scrollTop() >= 750 && $(document).scrollTop() <= 1450) {
            $('.skill_wrap').stop().animate({'height': '0px'}, 800);}
         else {
             $('.skill_wrap').stop().animate({height: $('.skills>div>img').height() +1}, 100);
        }
    });
    $(window).scroll(function(){
        if ($(document).scrollTop() >= 1500 && $(document).scrollTop() <= 2300) {
            $('.box_top').css({'margin': '0 auto'});
            $('.box_top').stop().animate({width: $('.container>div>div:nth-child(1)').width() +$('.container>div>div:nth-child(2)').width()}, 300, function(){
                $('.box_middle').css({'margin': '0 auto'});
                $('.box_middle').stop().animate({width: $('.container>div>div:nth-child(1)').width() +$('.container>div>div:nth-child(2)').width()}, 300, function(){
                    $('.box_bottom').css({'margin': '0 auto'});
                    $('.box_bottom').stop().animate({width: $('.container>div>div:nth-child(1)').width() +$('.container>div>div:nth-child(2)').width()}, 300);
                });
            });
        }
        else {
            $('.box_top').stop().animate({'width': '100vw'}, 100, function(){
                $('.box_middle').stop().animate({'width': '100vw'}, 100, function(){
                    $('.box_bottom').stop().animate({'width': '100vw'}, 100)
                });
            });
        }
    });
});