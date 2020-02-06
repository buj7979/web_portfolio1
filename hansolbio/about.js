console.clear();
//탑 메뉴바 fixed 스크롤이벤트
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop == 0) {
        $(".top-bar").css("background-color", "rgba(0,0,0,0)");
        $(".top-bar").css("height", "110px");
    }
    if (scrollTop > 50) {
        $(".top-bar").css("background-color", "rgba(0,0,0,0.8)");
        $(".top-bar").css("height", "90px");
    }
});

$(".menu-bar > ul > li").click(function() {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".menu-bar > ul > li > a span").removeClass("active");
    } else {
        $(this).addClass("active");
        $(".menu-bar > ul > li > a span").addClass("active");
    }
});

$(".menu-bar > ul > li").click(function() {
    var $menu_bar = $(this).hasClass("active");

    if ($menu_bar) {
        $(".menu-bar > ul > li.active > ul")
            .find("> ul")
            .slideDown(500);
    }
});


$(function() {
    $(".side-menu-bg ,.side-menu-close-btn ").on("click", function() {
        $(".side-menu-bg , .side-menu-bar").fadeOut(300);
    });
    $(".side-btn").on("click", function() {
        $(".side-menu-bg , .side-menu-bar").fadeIn(300);
    });
});

$(function() {
    $(".menu-bar > ul > li").on("click",function (){
        $(this).find('ul').slideToggle(300);
    })
})

//슬라이드 작업

$('.slider-1 > .owl-carousel').owlCarousel({
    autoplay:true, // 오토 플레이
    autoplayTimeout:6000, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기, 2초
    loop:true,
    margin:0,
    nav:true,
    navText:['<img src="https://i.ibb.co/cbL026V/nav-arrow-left.png">', '<img src="https://i.ibb.co/NNm06CF/nav-arrow-right.png">'],
    responsive:{
        0:{
            items:1
        }
    }
});

var $firstDot = $('.slider-1 > .owl-carousel > .owl-dots > .owl-dot.active');

$firstDot.removeClass('active');

setTimeout(function() {
    $firstDot.addClass('active');
}, 10);

//상품리스트 버튼 작업

var listBox1DataCurrentIndex = -1;

$('.down-btn').click(function() {
    listBox1DataCurrentIndex++;
    
    var $data = $('.list-box-data > li').eq(listBox1DataCurrentIndex);
    
    $('.list > .row').append($data.html());
    
    if ( $data.next().length == 0 ) {
        $(this).hide();
    }
});
$('.slider-2 > .owl-carousel').owlCarousel({
    autoplay:false,
    loop:true,
    margin:0,
    nav:true,
    navText:['<img src="https://i.ibb.co/72P9pYK/top-arrow-right.png">', '<img src="https://i.ibb.co/s2TzNYc/bottom-arrow-left.png">'],
    responsive:{
        0:{
            items:1
        }
    }
});

//슬라이드 3
//

function My1__updateCurrentPageNumber(event) {
    var totalItemNo = $('.slide-3').attr('date-total-items');
    var currentItemNo = $('.slide-3 > .owl-carousel > .owl-stage-outer > .owl-stage > .owl-item.active > .item-3').attr('data-no');    
    var widthP = parseInt(currentItemNo / totalItemNo * 100);
    
    $('.slide-3 > .indicator > div').stop().animate({width:widthP + '%'}, 0);
}

function My1__init() {
    // 전체 개수 세팅해서 `.my-1`의 `date-total-items` 속성에 값 넣기
    var totalItemNo = $('.slide-3 .item-3').length;
    $('.slide-3').attr('date-total-items', totalItemNo);
    
    // 각 아이템에 번호 매기기
    $('.slide-3 .item-3').each(function(index, node) {
        $(node).attr('data-no', index + 1);
    });
    
    $('.slide-3 > .owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 100000,
        dots:false,
        singleItem : true,
        responsive:{
            0:{
                items:4
            },
        },
        onInitialized: My1__updateCurrentPageNumber,
        onTranslated: My1__updateCurrentPageNumber,
    });
}

My1__init();
// 슬라이드 4
function My2__updateCurrentPageNumber(event) {
    var totalItemNo = $('.slider-4').attr('date-total-items');
    var currentItemNo = $('.slider-4 > .owl-carousel > .owl-stage-outer > .owl-stage > .owl-item.active > .item-4').attr('data-no');
    
    $('.slider-4 .item-counter .total-item-no').html(totalItemNo);
    $('.slider-4 .item-counter .current-item-no').html(currentItemNo);
}

function My2__init() {
    // 전체 개수 세팅해서 `.my-1`의 `date-total-items` 속성에 값 넣기
    var totalItemNo = $('.slider-4 .item-4').length;
    $('.slider-4').attr('date-total-items', totalItemNo);
    
    // 각 아이템에 번호 매기기
    $('.slider-4 .item-4').each(function(index, node) {
        $(node).attr('data-no', index + 1);
    });
    
    $('.slider-4 > .owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        navText:['<img src="https://i.ibb.co/cbL026V/nav-arrow-left.png">', '<img src="https://i.ibb.co/NNm06CF/nav-arrow-right.png">'],
        singleItem : true,
        responsive:{
            0:{
                items:1
            },
        },
        animateOut: 'fadeOut',
        onInitialized: My2__updateCurrentPageNumber,
        onTranslated: My2__updateCurrentPageNumber,
    });
}

My2__init();
//카운트 박스

function test() {
  var options = {
    useEasing : true, 
    useGrouping : true, 
    separator : '', 
    decimal : '.', 
    prefix: '',
    suffix: '',
  };
  var demo = new CountUp("number", 0, 8, 0, 5, options);
    demo.start();
  var demo = new CountUp("number1", 0, 46, 0, 5, options);
    demo.start();
  var demo = new CountUp("number2", 0, 1144, 0, 5, options);
    demo.start();
  var demo = new CountUp("number3", 0, 1021, 0, 5, options);
    demo.start();
}

var testDone = false;

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 3000) {        
        if ( testDone == false ) {
            test();
            testDone = true;
        }
    };  
});

$('.checkbox').click(function(){
    if($('.checkbox > .check-img').hasClass('active')){
        $('.checkbox > .check-img').removeClass('active');
        $('.checkbox-box').removeClass('active');
    }
    else{
        $('.checkbox > .check-img').addClass('active');
        $('.checkbox-box').addClass('active');
    }
});