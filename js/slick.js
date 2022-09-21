$(function () {
    $(".arrow_right").click(function () {
        $(".move").animate({ "margin-left": "-1800px" }, 300, 'swing', function () {
            $(".move>li:first-child").insertAfter(".move>li:last-child");
            $(".move").css({ "margin-left": "0px" });
        });
    });
    $(".arrow_left").click(function () {
        $(".move").animate({ "margin-left": "1800px" }, 300, 'swing', function () {
            $(".move>li:last-child").insertBefore(".move>li:first-child");
            $(".move").css({ "margin-left": "0px" });
        });
    });
});