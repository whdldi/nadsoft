$(function () {
    $('#portfolio').fullpage({
        anchors: ['p01', 'p02', 'p03', 'p04', 'p05'],
        // 이제 스크롤하면 주소에 p01 p02 붙음
        /*  afterRender: function () {
             $('.section').eq(0).addClass('on');
         }, */
        afterLoad: function (anchorLink, index) {
            const delayClass = () => {
                $(this).addClass('on').siblings().removeClass('on');
            }
            //settimeout: ??
            setTimeout(delayClass)
            $('.nb li').eq(index - 1).addClass('on').siblings().removeClass('on');
        },
    });

    $('.cover_open').on('click', function () {
        $('#cover').toggleClass('on')
    });

    $('#cover a').on('click', function () {
        $('#cover').removeClass('on')
    });
})