/*フェードイン*/
$(function(){
  $(window).scroll(function (){
      $('.fadeInLeft').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 100){
            $(this).addClass('active');
          }
      });
  });
});
$(function(){
  $(window).scroll(function (){
      $('.fadeInRight').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 100){
            $(this).addClass('active');
          }
      });
  });
});
$(function(){
  $(window).scroll(function (){
      $('.fadeIn').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 150){
            $(this).addClass('active');
          }
      });
  });
});

/*ナヴィゲーション入れ替え、リターンボタン出現*/
$(function () {
  const appearanceParts = $('#scrollIn');
  $(window).on('scroll',function(){
    const Bottom = $('header').height();
    if($(window).scrollTop() > Bottom){
      appearanceParts.addClass('on')
    }else{
      appearanceParts.removeClass('on')
    }
  }); 
});
$(function () {
  const appearanceParts = $('#scrollIn-return');
  $(window).on('scroll',function(){
    const Bottom = $('#work').height();
    if($(window).scrollTop() > Bottom){
      appearanceParts.addClass('on')
    }else{
      appearanceParts.removeClass('on')
    }
  }); 
});

/*ページ内リンクアニメーション*/
$(function(){
$('a[href^="#"]').click(function() {
  // スクロールの速度
  var speed = 400; // ミリ秒で記述
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
 });
});

/*モーダルウィンドウ*/
$(function(){
  $('.js-modal-open').each(function(){
    $(this).on('click',function(){
      const target = $(this).data('target');
      const modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
  });
  $('.js-modal-close').on('click',function(){
    $('.modal').fadeOut();
  });
});

/*アコーディオン*/
$(function(){
  const $title = $('.wrap');
  const $text = $('.acdtext');
  $text.hide();
  $title.on('click',function() {
    $(this).next($text).slideToggle(400);
  });
});



