$(function(){
    $('.gallery_box.banner>div:nth-child(2)').click(function(){
        $('.gallery_box.card').stop().animate({'margin-top': $('.banner>.index>li:nth-child(5)').width() +$('.banner>.index>li:nth-child(4)').width() +$('.banner>.index>li:nth-child(3)').width() +$('.banner>.index>li:nth-child(2)').width() +$('.banner>.index>li:nth-child(1)').width() +60}, 1000);
        $('.banner>.index>li:nth-child(1)').stop().animate({right: -$('.banner>.index>li:nth-child(1)').width() -10}, 1000);
        $('.banner>.index>li:nth-child(2)').stop().animate({right: -$('.banner>.index>li:nth-child(1)').width() -$('.banner>.index>li:nth-child(2)').width() -20}, 1000);
        $('.banner>.index>li:nth-child(3)').stop().animate({right: -$('.banner>.index>li:nth-child(3)').width() -$('.banner>.index>li:nth-child(2)').width() -$('.banner>.index>li:nth-child(1)').width() -30}, 1000);
        $('.banner>.index>li:nth-child(4)').stop().animate({right: -$('.banner>.index>li:nth-child(4)').width() -$('.banner>.index>li:nth-child(3)').width() -$('.banner>.index>li:nth-child(2)').width() -$('.banner>.index>li:nth-child(1)').width() -40}, 1000);
        $('.banner>.index>li:nth-child(5)').stop().animate({right: -$('.banner>.index>li:nth-child(5)').width() -$('.banner>.index>li:nth-child(4)').width() -$('.banner>.index>li:nth-child(3)').width() -$('.banner>.index>li:nth-child(2)').width() -$('.banner>.index>li:nth-child(1)').width() -50}, 1000);
        $('.gallery_box.banner').css('overflow','inherit');
        $('.banner>div:nth-child(2)').css('display','none');
        $('.banner>div:nth-child(3)').css('display','block');
        $(window).resize(function(){
            $('.banner>.index>li:nth-child(1)').css("right", -$('.banner>.index>li:nth-child(1)').width() -10);
            $('.banner>.index>li:nth-child(2)').css("right", -$('.banner>.index>li:nth-child(1)').width() -$('.banner>.index>li:nth-child(2)').width() -20);
            $('.banner>.index>li:nth-child(3)').css("right", -$('.banner>.index>li:nth-child(3)').width() -$('.banner>.index>li:nth-child(2)').width() -$('.banner>.index>li:nth-child(1)').width() -30);
            $('.banner>.index>li:nth-child(4)').css("right", -$('.banner>.index>li:nth-child(4)').width() -$('.banner>.index>li:nth-child(3)').width() -$('.banner>.index>li:nth-child(2)').width() -$('.banner>.index>li:nth-child(1)').width() -40);
            $('.banner>.index>li:nth-child(5)').css("right", -$('.banner>.index>li:nth-child(5)').width() -$('.banner>.index>li:nth-child(4)').width() -$('.banner>.index>li:nth-child(3)').width() -$('.banner>.index>li:nth-child(2)').width() -$('.banner>.index>li:nth-child(1)').width() -50);
            $('.gallery_box.card').css("margin-top", $('.banner>.index>li:nth-child(5)').width() +$('.banner>.index>li:nth-child(4)').width() +$('.banner>.index>li:nth-child(3)').width() +$('.banner>.index>li:nth-child(2)').width() +$('.banner>.index>li:nth-child(1)').width() +60)
        });
    });
    $('.gallery_box.banner>div:nth-child(3)').click(function(){
        $('.gallery_box.card').stop().animate({'margin-top': '0'}, 1000);
        $('.banner>.index>li:nth-child(1)').stop().animate({right: '0'}, 1000);
        $('.banner>.index>li:nth-child(2)').stop().animate({right: '0'}, 1000);
        $('.banner>.index>li:nth-child(3)').stop().animate({right: '0'}, 1000);
        $('.banner>.index>li:nth-child(4)').stop().animate({right: '0'}, 1000);
        $('.banner>.index>li:nth-child(5)').stop().animate({right: '0'}, 1000, function(){
            $('.gallery_box.banner').css('overflow','hidden');
        });
        $('.banner>div:nth-child(3)').css('display','none');
        $('.banner>div:nth-child(2)').css('display','block');
        $(window).resize(function(){
            $('.gallery_box.card').css("margin-top", "10px")
        });
    });
    $('.gallery_box.card>div:nth-child(2)').click(function(){
        $('.gallery_box.ci').stop().animate({'margin-top': $('.card>.index>li:nth-child(5)').width() +$('.card>.index>li:nth-child(4)').width() +$('.card>.index>li:nth-child(3)').width() +$('.card>.index>li:nth-child(2)').width() +$('.card>.index>li:nth-child(1)').width() +60}, 1000);
        $('.card>.index>li:nth-child(1)').stop().animate({right: -$('.card>.index>li:nth-child(1)').width() -10}, 1000);
        $('.card>.index>li:nth-child(2)').stop().animate({right: -$('.card>.index>li:nth-child(1)').width() -$('.card>.index>li:nth-child(2)').width() -20}, 1000);
        $('.card>.index>li:nth-child(3)').stop().animate({right: -$('.card>.index>li:nth-child(3)').width() -$('.card>.index>li:nth-child(2)').width() -$('.card>.index>li:nth-child(1)').width() -30}, 1000);
        $('.card>.index>li:nth-child(4)').stop().animate({right: -$('.card>.index>li:nth-child(4)').width() -$('.card>.index>li:nth-child(3)').width() -$('.card>.index>li:nth-child(2)').width() -$('.card>.index>li:nth-child(1)').width() -40}, 1000);
        $('.card>.index>li:nth-child(5)').stop().animate({right: -$('.card>.index>li:nth-child(5)').width() -$('.card>.index>li:nth-child(4)').width() -$('.card>.index>li:nth-child(3)').width() -$('.card>.index>li:nth-child(2)').width() -$('.card>.index>li:nth-child(1)').width() -50}, 1000);
        $('.gallery_box.card').css('overflow','inherit');
        $('.card>div:nth-child(2)').css('display','none');
        $('.card>div:nth-child(3)').css('display','block');
        $(window).resize(function(){
            $('.card>.index>li:nth-child(1)').css("right", -$('.card>.index>li:nth-child(1)').width() -10);
            $('.card>.index>li:nth-child(2)').css("right", -$('.card>.index>li:nth-child(1)').width() -$('.card>.index>li:nth-child(2)').width() -20);
            $('.card>.index>li:nth-child(3)').css("right", -$('.card>.index>li:nth-child(3)').width() -$('.card>.index>li:nth-child(2)').width() -$('.card>.index>li:nth-child(1)').width() -30);
            $('.card>.index>li:nth-child(4)').css("right", -$('.card>.index>li:nth-child(4)').width() -$('.card>.index>li:nth-child(3)').width() -$('.card>.index>li:nth-child(2)').width() -$('.card>.index>li:nth-child(1)').width() -40);
            $('.card>.index>li:nth-child(5)').css("right", -$('.card>.index>li:nth-child(5)').width() -$('.card>.index>li:nth-child(4)').width() -$('.card>.index>li:nth-child(3)').width() -$('.card>.index>li:nth-child(2)').width() -$('.card>.index>li:nth-child(1)').width() -50);
            $('.gallery_box.ci').css("margin-top", $('.card>.index>li:nth-child(5)').width() +$('.card>.index>li:nth-child(4)').width() +$('.card>.index>li:nth-child(3)').width() +$('.card>.index>li:nth-child(2)').width() +$('.card>.index>li:nth-child(1)').width() +60)
        });
    });
    $('.gallery_box.card>div:nth-child(3)').click(function(){
        $('.gallery_box.ci').stop().animate({'margin-top': '0'}, 1000);
        $('.card>.index>li:nth-child(1)').stop().animate({right: '0'}, 1000);
        $('.card>.index>li:nth-child(2)').stop().animate({right: '0'}, 1000);
        $('.card>.index>li:nth-child(3)').stop().animate({right: '0'}, 1000);
        $('.card>.index>li:nth-child(4)').stop().animate({right: '0'}, 1000);
        $('.card>.index>li:nth-child(5)').stop().animate({right: '0'}, 1000, function(){
            $('.gallery_box.card').css('overflow','hidden');
        });
        $('.card>div:nth-child(3)').css('display','none');
        $('.card>div:nth-child(2)').css('display','block');
        $(window).resize(function(){
            $('.gallery_box.ci').css("margin-top", "10px")
        });
    });
    $('.gallery_box.ci>div:nth-child(2)').click(function(){
        $('.gallery_box.etc').stop().animate({'margin-top': $('.ci>.index>li:nth-child(2)').width() +$('.ci>.index>li:nth-child(1)').width() +30}, 1000);
        $('.ci>.index>li:nth-child(1)').stop().animate({right: -$('.ci>.index>li:nth-child(1)').width() -10}, 1000);
        $('.ci>.index>li:nth-child(2)').stop().animate({right: -$('.ci>.index>li:nth-child(1)').width() -$('.ci>.index>li:nth-child(2)').width() -20}, 1000);
        $('.gallery_box.ci').css('overflow','inherit');
        $('.ci>div:nth-child(2)').css('display','none');
        $('.ci>div:nth-child(3)').css('display','block');
        $(window).resize(function(){
            $('.ci>.index>li:nth-child(1)').css("right", -$('.ci>.index>li:nth-child(1)').width() -10);
            $('.ci>.index>li:nth-child(2)').css("right", -$('.ci>.index>li:nth-child(1)').width() -$('.ci>.index>li:nth-child(2)').width() -20);
            $('.gallery_box.etc').css("margin-top", $('.ci>.index>li:nth-child(2)').width() +$('.ci>.index>li:nth-child(1)').width() +30)
        });
    });
    $('.gallery_box.ci>div:nth-child(3)').click(function(){
        $('.gallery_box.etc').stop().animate({'margin-top': '0'}, 1000);
        $('.ci>.index>li:nth-child(1)').stop().animate({right: '0'}, 1000);
        $('.ci>.index>li:nth-child(2)').stop().animate({right: '0'}, 1000, function(){
            $('.gallery_box.ci').css('overflow','hidden');
        });
        $('.ci>div:nth-child(3)').css('display','none');
        $('.ci>div:nth-child(2)').css('display','block');
        $(window).resize(function(){
            $('.gallery_box.etc').css("margin-top", "10px")
        });
    });
    $('.gallery_box.etc>div:nth-child(2)').click(function(){
        $('.gallery_box.none').stop().animate({'margin-top': $('.etc>.index>li:nth-child(3)').width() +$('.etc>.index>li:nth-child(2)').width() +$('.etc>.index>li:nth-child(1)').width() +40}, 1000);
        $('.etc>.index>li:nth-child(1)').stop().animate({right: -$('.etc>.index>li:nth-child(1)').width() -10}, 1000);
        $('.etc>.index>li:nth-child(2)').stop().animate({right: -$('.etc>.index>li:nth-child(1)').width() -$('.etc>.index>li:nth-child(2)').width() -20}, 1000);
        $('.etc>.index>li:nth-child(3)').stop().animate({right: -$('.etc>.index>li:nth-child(3)').width() -$('.etc>.index>li:nth-child(2)').width() -$('.etc>.index>li:nth-child(1)').width() -30}, 1000);
        $('.gallery_box.etc').css('overflow','inherit');
        $('.etc>div:nth-child(2)').css('display','none');
        $('.etc>div:nth-child(3)').css('display','block');
        $(window).resize(function(){
            $('.etc>.index>li:nth-child(1)').css("right", -$('.etc>.index>li:nth-child(1)').width() -10);
            $('.etc>.index>li:nth-child(2)').css("right", -$('.etc>.index>li:nth-child(1)').width() -$('.etc>.index>li:nth-child(2)').width() -20);
            $('.etc>.index>li:nth-child(3)').css("right", -$('.etc>.index>li:nth-child(3)').width() -$('.etc>.index>li:nth-child(2)').width() -$('.etc>.index>li:nth-child(1)').width() -30);
            $('.gallery_box.none').css("margin-top", $('.banner>.index>li:nth-child(3)').width() +$('.banner>.index>li:nth-child(2)').width() +$('.banner>.index>li:nth-child(1)').width() +40)
        });
    });
    $('.gallery_box.etc>div:nth-child(3)').click(function(){
        $('.gallery_box.none').stop().animate({'margin-top': '0'}, 1000);
        $('.etc>.index>li:nth-child(1)').stop().animate({right: '0'}, 1000);
        $('.etc>.index>li:nth-child(2)').stop().animate({right: '0'}, 1000);
        $('.etc>.index>li:nth-child(3)').stop().animate({right: '0'}, 1000, function(){
            $('.gallery_box.etc').css('overflow','hidden');
        });
        $('.etc>div:nth-child(3)').css('display','none');
        $('.etc>div:nth-child(2)').css('display','block');
        $(window).resize(function(){
            $('.gallery_box.none').css("margin-top", "10px")
        });
    });
});