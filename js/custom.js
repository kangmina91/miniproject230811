$(function () {

  // 스크롤 시 헤더 
  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    if (sct > 172) {
      $('.Header').addClass('on');
    } else {
      $('.Header').removeClass('on');
    }
  });




  // 메인 비디오
  $('#bgndVideo').YTPlayer({
    videoURL: 'MQJ2Edjos8g',
    containment: '#MainVisual',
    autoPlay: true,
    showControls: false,
    playOnlyIfVisible: true,
  });

  // 메인 비디오 컨트롤
  $('#MainVisual .pause').on('click', function () {
    $('#bgndVideo').YTPPause();
  })
  $('#MainVisual .play').on('click', function () {
    $('#bgndVideo').YTPPlay();
  })

  /* 첫번째 섹션 */
  const CardSwiper = new Swiper('.news_slide', {
    effect: 'fade',
    speed: 500,
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
  });

  /* 두번째 연구 성과 섹션 */
  const ResearchSlide = new Swiper('.research_slide', {
    loop: true,
    speed: 600,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    on: {
      slideChangeTransitionStart: function () {
        $('.MainResearch .dots li')
          .eq(this.realIndex)
          .addClass('on')
          .siblings()
          .removeClass('on')
      }
    }
  });
  $('.MainResearch .arrows .left').on('click', function () {
    ResearchSlide.slidePrev();
  });
  $('.MainResearch .arrows .right').on('click', function () {
    ResearchSlide.slideNext();
  });


  $('.MainResearch .dots li').on('click', function () {
    const idx = $(this).index();
    $(this).addClass('on').siblings().removeClass('on')
    ResearchSlide.slideTo(idx);
  })

  // 세번째 행사 섹션 슬라이드
  const EventSlide = new Swiper('.event_slide', {
    loop: false,
    slidesPerView: 1,
    slidesPerGroupSkip: 1,
    spaceBetween: 0,
    on: {
      slideChangeTransitionStart: function () {
        $('.MainEvent .dots li')
          .eq(this.realIndex)
          .addClass('on')
          .siblings()
          .removeClass('on')
      }
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 36,
      }

    }
  });

  $('.MainEvent .dots li').on('click', function () {
    const idx = $(this).index();
    $(this).addClass('on').siblings().removeClass('on')
    EventSlide.slideTo(idx);
  })



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
