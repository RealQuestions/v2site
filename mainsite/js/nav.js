$(document).ready(function(){
      var isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    };

    var menu_active;

    if(!isMobile.any()) {
        $('.a-dropdown').hover(function(){
            $('.dropdown-menu-test').addClass('dropdown-menu-test-active');
        }, function(){
            if(menu_active === true){
              $('.dropdown-menu-test').addClass('dropdown-menu-test-active');
            }else{
              $('.dropdown-menu-test').removeClass('dropdown-menu-test-active');
            }
        });
    }else{
        $('.a-dropdown').on('click', function() {
          $('.dropdown-menu-test').toggleClass('dropdown-menu-test-active');
        });
    }

    //Nav Large --------------------------------------------------------------------
    $(window).scroll(function () {
        var $this = $(this);
        if ($this.scrollTop() > 0) {
           $('.header').addClass('header-scroll');
           $('.logoR').addClass('logoR-scroll');
           $('.logoO').addClass('logoO-scroll');
           $('.question').addClass('question-scroll');
           $('.tagline').addClass('tagline-scroll');
           $('.nav-ul').addClass('nav-ul-scroll');
           $('.heading-wrapper').addClass('heading-wrapper-scroll');
        } else {
           $('.header').removeClass('header-scroll');
           $('.logoR').removeClass('logoR-scroll');
           $('.logoO').removeClass('logoO-scroll');
           $('.question').removeClass('question-scroll');
           $('.tagline').removeClass('tagline-scroll');
           $('.nav-ul').removeClass('nav-ul-scroll');
           $('.heading-wrapper').removeClass('heading-wrapper-scroll');
        }
    });
    
    $('.a-sub').hover(function(){
        menu_active = true;
        $('.a-dropdown').addClass('a-dropdown-active');
        $('.dropdown-menu-test').addClass('dropdown-menu-test-active');
    }, function(){
        menu_active =false;
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