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
    else if ( scrollTop > 6200 ) {
        scrollTop = '6200';
    }
    
    $main_item1.css('top', scrollTop);
});


$('.sign-top').hover(function(){
    $(this).animate({        
        marginTop:'200px',
        opacity:0,        
    },200);
});

$('.btn').click(function(){
    var scrollTop = window.scrollY;
    alert(scrollTop);
});