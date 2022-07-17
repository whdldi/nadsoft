// document.querySelector('.top_banner i').addEventListener('click', bannerClose);
// function bannerClose() {
//     document.querySelector('.top_banner').style.display = 'none';
// }
//bannerclose라는 이름을 붙혀줘서 X(banner i)를 클릭시 display none이라는걸 실행시켜줌 배너를 없애는 거(괜히 이름을 만들어준것임)



// var bannerClose = function () {
//     document.querySelector('.top_banner').style.display = 'none';
// }

// document.querySelector('.top_banner i').addEventListener('click', bannerClose);
//서순이 위밑이 바뀌면 또 안됨



$(function () {
    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp();
    });


    //afterChange는 슬릭 깃헙에 있는 만들어놓은 기능임
    // 슬라이드 후에 이벤트 지정하는거고.. 여기서는 슬라이드 후에 on이라는 클래스를 붙히겠다는 뜻으로 사용 (on을 붙혔을때 무슨 효과줄건지는 css에 지정해뒀음ㅇㅇ)
    // https://github.com/kenwheeler/slick/

    //console log esc..로 번호찍히는게 보임

    $('.main_slider').on('init afterChange', function (e, s, c) {
        //console.log(e, s, c);//슬라이드가 0,1,2 로 변함
        //$('.main_slider figure').eq(c + 1).addClass('on').siblings().removeClass('on')
        //즉, eq에 c가 붙을때 클래스 on을 붙히고 형제들(siblings)인 e,s에는 on을 빼서 c에만 'on'을 주게 됨..이전꺼이 효과가 붙어서 +1으로 다음꺼인 c에 해준듯
        let current = $('.main_slider .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.slideNum').text((c ? + c + 1 : 1) + "/" + s.slideCount)
    });


    $('.main_slider').slick({
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        //autoplaySpeed: 14000,
    });




    $('.slideArrows i:nth-child(1)').on('click', function () {
        $('main_slider').slick('slickPrev')
    });
    $('.slideArrows i:nth-child(2)').on('click', function () {
        $('main_slider').slick('slickNext')
    });

    /* 작은 비디오 play / pause 버튼 */
    $('.movie_arrows i:nth-child(1)').on('click', function () {
        $('.movie video').trigger('play');
    });
    /* 아래 n-th child 까지 이어 붙인걸 제이쿼리 메소드 체인이라고 함 */
    $('.movie_arrows i:nth-child(2)').on('click', function () {
        $('.movie video').trigger('pause');
    });

    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/8js1mCjsOSM',
        containment: '.utb',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,
        /* 보일때만 플레이 하라 */
    });


    /* 큰 비디오 play / pause 버튼 */
    $('.utb i:nth-child(1)').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });
    $('.utb i:nth-child(2)').on('click', function () {
        $('#bgndVideo').YTPPause();
    });
    $('.utb i:nth-child(3)').on('click', function () {
        $('#bgndVideo').YTPFullscreen();
    });

    /* 제품 슬릭 5개 */
    $('.product_slider').slick({
        centerMode: true,
        /* 이걸 주면 좌우에 아이템 있다는걸 알 수 있고(잘린이미지)계산하지 않아도 중앙정렬이 됨.< 원래라면 1200px을 1230px으로 줘야함 */
        slidesToShow: 5,
        arrows: false,
        dots: true,
        Responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    /* Tb일때 슬라이드 1개만 보여줌 */
                }
            }
        ]

        /* autoPlay: true, */
    });

    /* 슬릭슬라이더 화살표 */
    $('.product_arrows i:nth-child(1)').on('click', function () {
        $('.product_slider').slick('slickPrev');
    });
    $('.product_arrows i:nth-child(2)').on('click', function () {
        $('.product_slider').slick('slickNext');
    });



    /* 뉴스 이미지 슬릭슬라이더 */
    $('.hd_left_slider').slick({
        arrows: false,
        fade: true,
        asNavFor: '.hd_right_slider',
        /* 슬릭 슬라이더 홈피에 있는 메소드로, 이 두개의 슬릭을 연동시킨다는 뜻..즉 두개 같이 움직이게 됨 */
    });

    $('.hd_right_slider').slick({
        arrows: false,
        slidesToShow: 4,
        asNavFor: '.hd_left_slider',
        /* 슬릭 슬라이더 홈피에 있는 메소드로, 이 두개의 슬릭을 연동시킨다는 뜻..즉 두개 같이 움직이게 됨 */
    });

    $('.hd_section .hd_arrows i:nth-child(1)').on('click', function () {
        $('.hd_right_slider').slick('slickPrev')
    });

    $('.hd_section .hd_arrows i:nth-child(2)').on('click', function () {
        $('.hd_right_slider').slick('slickNext')
    });



    /* tab menu */
    $('.tab_menu li a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $(this).parent().addClass('on').siblings().removeClass('on');
        $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on')
    });

    $('#fl').on('change', function () {
        var lik = $(this).val();
        lik && window.open(lik);
    });


    /* 탑 올라가는 버튼...누르면 올라가야함 */
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });


    /* 탑 올라가는 버튼.. 일정구간부터 보이게됨*/
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        sct > 800
            ? $('.to_top').fadeIn()
            : $('.to_top').fadeOut(1000);
    })
    /* 리액트용으로 다르게 할 수도 있는데 그건 0624 9시사진 참고 */

    $('.mopen').on('click', function () {
        $(this).toggleClass('on');
        $('nav').toggleClass('on');
    });

    $('.header ul>li>a').on('click', function (event) {
        var idx = $(this).parent().index();
        if ($('nav').hasClass('on') && idx < 3) {
            /* 4번째부터는 false라서 작동안하게 됨 */
            event.preventDefault();
            /* a를 작동하지 않게함 */
            $(this).next().stop().slideToggle();
            /* stop으로 여러번 반복안되게 함 */
            $(this).parent().siblings().find('ul').slideUp();
            /* 하나 열었을때 다른메뉴 닫히게 함 (중요 팁) */
        }
    });

    $(window).on('resize', function () {
        $('nav').removeClass('on');
        $('.header ul ul').removeAttr('style')
        /* 스타일을 없애준다 */
    })
})
