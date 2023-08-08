$(function () {



  const MainSlide = new Swiper('.main_slide', {
    loop: false,
    parallex: true,
    speed: 600,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    on: {
      slideChangeTransitionStart: function () {
        $('.MainVisual .dots li')
          .eq(this.realIndex)
          .addClass('on')
          .siblings()
          .removeClass('on')
      }
    }
  });
  $('.MainVisual .arrows .left').on('click', function () {
    MainSlide.slidePrev();
  });
  $('.MainVisual .arrows .right').on('click', function () {
    MainSlide.slideNext();
  });


  $('.MainVisual .dots li').on('click', function () {
    const idx = $(this).index();
    $(this).addClass('on').siblings().removeClass('on')
    MainSlide.slideTo(idx);
  })



  // 스와이퍼 카드 뉴스 슬라이드
  const newsSlide = new Swiper('.news_slide', {
    loop: false,
    slidesPerView: 1,
    slidesPerGroupSkip: 1,
    spaceBetween: 0,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    pagination: {
      el: ".swiper-pagination02",
      type: "fraction",
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      }

    }
  });



  // 모바일 메뉴 작동
  $('.gnb>ul>li>a').on('click', function (e) {
    if ($('.header .gnb').hasClass('on')) {
      e.preventDefault();
      $(this).next().stop().slideToggle();
      $(this).parent().siblings().find('.sub_menu').slideUp();
    }

  });

  // 모바일 버튼  작동
  $('.mobile_btn').on('click', function () {
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
  });

  $(window).on('resize', function () {
    $('.gnb').removeClass('on');
    $('.sub_menu').removeAttr('style');

  });

});
