$(function () {



  /* visual */
  const MainSwiper = new Swiper('.main_slide', {
    effect: 'fade',
    speed: 1400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.vnext',
      prevEl: '.vprev',
    },
    pagination: {
      el: '.vpaging',
      clickable: true,
    },
    on: {
      slideChange: function () {
        $(".swiper-slide:eq(" + (this.realIndex + 1) + ")").addClass('on').siblings().removeClass("on")
      }
    },
  });


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
