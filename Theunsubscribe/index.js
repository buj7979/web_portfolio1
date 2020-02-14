$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 7200){
        $('.top-bar a').css('color','white');   
        $('.top-bar').css('background-color','#FF0098');
        $('.left-txt a::after').css('background-color','#FF0098');
    }
    else {
        $('.top-bar a').css('color','#FF0098');   
        $('.top-bar').css('background-color','white');
        $('.left-txt a::after').css('background-color','white');
    }
});



var $main_item1 = $('.main-item');

$(window).scroll(function() {
    var scrollTop = window.scrollY;
    
    if ( scrollTop < 400) {
        scrollTop = '';
    }
    else if ( scrollTop > 6500 ) {
        scrollTop = '6500';
    }
    
    $main_item1.css('top', scrollTop);
});



/*var offsetTop;
var offset400 = -400;
$(function() {
    $(window).resize(function() {
        offsetTop = $('body').offset().top;
    });
    
    $(window).resize();
    
    $(window).scroll(function() {
        var ScrollTop = $(window).scrollTop();

        if ( ScrollTop > offsetTop + offset400 ) {
            ScrollTop = '';
        }
        else {
            $('html').removeClass('active');
        }
    });
    $('.main-item').css('top', scrollTop);
    console.log(offsetTop);
    
    $(window).scroll();
});*/

$('.btn').click(function(){
    var scrollTop = window.scrollY;
    alert(scrollTop);
})
