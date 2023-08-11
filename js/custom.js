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
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.vpaging',
      clickable: true,
    },
  });

  /* 두번째 연구 성과 섹션 */
  const ResearchSlide = new Swiper('.research_slide', {
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 1,
    slidesPerGroupSkip: 1,
    speed: 600,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.vpaging',
      clickable: true,
    },
  });



  // 세번째 행사 섹션 슬라이드
  const EventSlide = new Swiper('.event_slide', {
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 1,
    slidesPerGroupSkip: 1,
    spaceBetween: 0,
    pagination: {
      el: '.vpaging',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 36,
      },
    }
  });




  // 모바일 메뉴 작동
  $('.gnb>.depth1>li>a').on('click', function (e) {
    if ($('.Header .gnb').hasClass('on')) {
      e.preventDefault();
      $(this).next().stop().slideToggle();
      $(this).parent().siblings().find('.Header .gnb .depth2').slideUp();

      $('.depth2>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.Header .gnb .depth3').stop().slideUp();
      });

    }

  });



  // 모바일 버튼  작동
  $('.mobile_btn').on('click', function () {
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
  });

  $(window).on('resize', function () {
    $('.gnb').removeClass('on');
    $('.Header .gnb .depth2').removeAttr('style');

  });

});
