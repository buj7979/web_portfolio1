$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop == 0) {
        $(".top-menu").css("background-color", "rgba(0,0,0,0)");   
        $('.top-menu > .menu-bar > ul ul').css("background-color", "rgba(0,0,0,0)");
        $('.top-menu > .menu-bar > ul > .sub').css("display", "none");
        
    }
    if (scrollTop > 50) {
        $(".top-menu").css("background-color", "white");
        $('.top-menu > .menu-bar > ul ul').css("background-color", "white");        
    }
    if (scrollTop > 80) {
         $('.top-menu > .menu-bar > ul > .sub').css("display", "block");
    }
});