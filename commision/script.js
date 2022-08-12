$(document).ready(function() {

    $("#btn0").hover( function (e) {
        $(this).toggleClass('animated swing', e.type === 'mouseenter');
    });

    $("#btn1").hover( function (e) {
        $(this).toggleClass('animated swing', e.type === 'mouseenter');
    });

    $("#btn2").hover( function (e) {
        $(this).toggleClass('animated swing', e.type === 'mouseenter');
    });

    $("#btn3").hover( function (e) {
        $(this).toggleClass('animated swing', e.type === 'mouseenter');
    });

    $("#btn0").click(function(){
        $(".standing").fadeOut(0);
        $(".half").fadeOut(0);
        $(".headShot").fadeOut(0);
        $("#notice").fadeIn(); 
    })

    $("#btn1").click(function(){
        $(".standing").fadeOut(0);
        $(".half").fadeOut(0);
        $("#notice").fadeOut(0);
        $(".headShot").fadeIn();
    })

    $("#btn2").click(function(){
        $(".standing").fadeOut(0);
        $(".headShot").fadeOut(0);
        $("#notice").fadeOut(0);
        $(".half").fadeIn();
    })

    $("#btn3").click(function(){
        $(".headShot").fadeOut(0);
        $("#notice").fadeOut(0);
        $(".half").fadeOut(0);
        $(".standing").fadeIn();
    })
  
});