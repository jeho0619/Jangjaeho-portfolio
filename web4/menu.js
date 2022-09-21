$(function(){
    $('.menu_wrap').css('position','fixed').css('right','-100%');
    $(".menu_btn").click(function () {
        $(".menu_wrap").animate({ "right": "0" }, 300);
    });
    $(".menuclose_btn").click(function () {
        $(".menu_wrap").animate({ "right": "-100%" }, 300);
    });
});
$(function(){
    $(".menu_btn_m").click(function () {
        $(".menu_wrap").animate({ "right": "0" }, 300);
    });
    $(".menuclose_btn").click(function () {
        $(".menu_wrap").animate({ "right": "-100%" }, 300);
    });
});