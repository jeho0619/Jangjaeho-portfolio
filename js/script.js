// 패턴해제 이펙트
$(function(){
    setInterval(function(){
        $('.pattern').animate({'opacity': '1'}, 300);
        $('.l1').animate({'height': '225px'}, 500, 'swing');
        $('.w1').animate({'width': '80px','height': '80px','top': '-18px','left': '-18px','opacity': '0'}, 500, 'swing', function(){
            $('.l2').animate({'width': '225px'}, 500, 'swing');
            $('.w2').animate({'width': '80px','height': '80px','top': '-18px','left': '-18px','opacity': '0'}, 500, 'swing', function(){
                $('.l3').animate({'height': '450px'}, 500, 'swing');
                $('.w3').animate({'width': '80px','height': '80px','top': '-18px','left': '-18px','opacity': '0'}, 500, 'swing', function(){
                    $('.l4').animate({'width': '225px'}, 500, 'swing');
                    $('.w4').animate({'width': '80px','height': '80px','top': '-18px','left': '-18px','opacity': '0'}, 500, 'swing', function(){
                        $('.l5').animate({'width': '450px'}, 500, 'swing');
                        $('.w5').animate({'width': '80px','height': '80px','top': '-18px','left': '-18px','opacity': '0'}, 500, 'swing', function(){
                            $('.effect').animate({'width': '1000px','height': '1000px','top': '-260px','left': '-260px','opacity': '0'}, 500, 'swing');
                            $('.effect').css('visibility','visible');
                            $('.pattern_wrap').animate({'opacity': '0'}, 600, function(){
                                $('.pattern_wrap').css('display','none');
                            });
                        });
                    });
                });
            });
        });
    });
});