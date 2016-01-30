$(document).ready(function(){
    //Nav Large --------------------------------------------------------------------
    $(window).scroll(function () {
        var $this = $(this);
        if ($this.scrollTop() > 0) {
           $('.header').addClass('header-scroll');
           $('.brand').addClass('brand-scroll');
           $('.nav-ul').addClass('nav-ul-scroll');
           $('.container').addClass('container-scroll');
        } else {
           $('.header').removeClass('header-scroll');
           $('.brand').removeClass('brand-scroll');
           $('.nav-ul').removeClass('nav-ul-scroll');
           $('.container').removeClass('container-scroll');
        }
    });

    $('.a-sub').hover(function(){
        $('.a-dropdown').addClass('a-dropdown-active');
        $('.dropdown-menu-test').addClass('dropdown-menu-test-active');
    }, function(){
        $('.a-dropdown').removeClass('a-dropdown-active');
        $('.dropdown-menu-test').removeClass('dropdown-menu-test-active');
    });

    //Nav Small (less than 768px)---------------------------------------------------
    $('.nav-button').on('click', function(){
        if(!$(this).hasClass('nav-button-active')) {
            $(this).addClass('nav-button-active');
        }else{
            $(this).removeClass('nav-button-active');
        }

        if(!$('.nav-ul').hasClass('nav-ul-active')) {
            $('.nav-ul').addClass('nav-ul-active');
        }else{
            $('.nav-ul').removeClass('nav-ul-active');
        }
    });
});