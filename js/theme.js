jQuery(function ($) {

    let scrollPosition = '0';

    $('.header-menu__element').on('mouseenter', function (e) {
        $('.header__burger').toggleClass('header__burger--open');
        $('.header').toggleClass('header--open')
        $('.header-menu').toggleClass('header-menu--open');
        if (!$('body').hasClass('fixed')) scrollPosition = window.scrollY;

        $('body').toggleClass('fixed');

    })

    $('.header__burger').on('click', function () {
        $(this).toggleClass('header__burger--open');
        $('.header-menu').toggleClass('header-menu--open')
        $('.header').toggleClass('header--open')

        if (!$('body').hasClass('fixed')) scrollPosition = window.scrollY;

        $('body').toggleClass('fixed');
    })

    function viewportHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    document.documentElement.clientWidth <= 700 && (
        window.addEventListener('resize', viewportHeight),
        viewportHeight()
    )

    $('#searchform').on('submit', function (e) {
        e.preventDefault();
    });

    if (Cookies.get('searchService')) {
        $('#' + Cookies.get('searchService')).addClass('choise__modal--open');
        $('#active-link-' + Cookies.get('searchService')).addClass('choise__list-element--active');
    }

    Cookies.remove('searchService');

    var searchTerm = '';

    $('.search-input').keydown(function () {
        searchTerm = $.trim($(this).val());
    });

    // $('.search-input').keyup(function () {
    //     if ($.trim($(this).val()) != searchTerm) { // Если новое значение не равно старому, идем дальше
    //         searchTerm = $.trim($(this).val());
    //         if (searchTerm.length > 3) { // Если введено больше 2-х символов, идем дальше
    //             $.ajax({
    //                 url: '/wp-admin/admin-ajax.php', // Ссылка на AJAX обработчик WP
    //                 type: 'POST', // Отправляем данные методом POST
    //                 data: {
    //                     'action': 'ba_ajax_search', // Вызываемое действие, которое мы описали в functions.php
    //                     'term': searchTerm // Отправляемые данные поля ввода
    //                 },
    //                 beforeSend: function () { // Перед отправкой данных
    //                     // $('.result-search .result-search-list').css('display', 'none'); // Скроем блок результатов
    //                     // $('.result-search .result-search-list').empty(); // Очистим блок результатов
    //                     // $('.result-search .preloader').css('display', 'block'); // Покажем загрузчик
    //                 },
    //                 success: function (result) { // После выполнения поиска
    //                     //$('.result-search .preloader').css('display', 'none'); // Скроем загрузчик
    //                     $('.search-block__result').css('display', 'block');
    //                     $('.search-block__result').addClass('search-block__result--active');
    //                     //$('.choise__list-element').data('active-link').addClass('choise__list-element--active');
    //                     //$('.choise__list-element').addClass('choise__list-element--active');
    //                     $('.search-block__result').fadeIn().html(result); // Покажем блок результатов и добавим в него полученные данные

    //                     $('a.result_link').on('click', function () {
    //                         var searchID = $(this).data('search');
    //                         Cookies.set('searchService', searchID, { expires: 1 })
    //                         //setCookie('searchService', searchID, '1');
    //                     });
    //                 }
    //             });
    //         }
    //     }
    // });


    $('.search-input').focusin(function () {
        $('.result-search').fadeIn();
    });

    $(document).mouseup(function (e) {
        if ((!$('.result-search').is(e.target) && $('.result-search').has(e.target).length === 0) && (!$('.search-input').is(e.target) && $('.search-input').has(e.target).length === 0)) {
            $('.result-search').fadeOut();
        }
    });
});

