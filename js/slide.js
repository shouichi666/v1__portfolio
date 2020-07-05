$(function(){
  var $slide = $('#scroll-back-img');
  var count = 0;
  var total = $slide.find('li').length;
  $slide.find('li').eq(0).show();

  setInterval(function(){
    if(count < total){
      $slide.find('li').fadeOut(1000);
      count++;
      setTimeout(function(){
        $slide.find('li').eq(count).fadeIn(1000);
      },1000);
    }else if(count == total){
      $slide.find('li').fadeOut(1000);
      count = 0;
      setTimeout(function(){
        $slide.find('li').eq(count).fadeIn(1000);
      },1000);
    }
  },10000);
});

// $(window).load(function(){
// // 画像を取得
//   var img = $('.scroll-back-img').children('img');
// // 画像の数を数える
//   var number = img.length;
// // 現在何枚目を表示しているかのカウンター
//   var count = 0; 
// // 次の画像に切り替わるまでの時間
//   var intarval = 1000;
// // 最初のイメージにshowクラスを付与
//   img.eq(0).addClass('show');
// // slide関数をタイマーセット
//   setTimeout(slide, intarval);
//   function slide(){
//     img.eq(count).removeClass(`show`);
//     count++;
//     if(count >= number){
//         count = 0;
//     }
//     img.eq(count).addClass('show');
//     setTimeout(slide,intarval);
//   }
// });