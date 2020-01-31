// ハンバーガーメニューのコード
// toggle()とはHTML要素を簡単に表示・非表示することができるメソッド
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  // ハンバーガークリックでナビをオープン
  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  //黒い部分クリックでナビをクローズ
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();

// 画像の自動スライドのコード
$(function() {
  var $width = 1568; //高さ
  var $height = 757; //横幅
  var $interval = 4000; //インターバル
  var $fade_speed = 1000; //フェードのスピード
  $("#slide ul li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
  $("#slide ul li").hide().css({"position":"absolute","top":0,"left":0});
  $("#slide ul li:first").addClass("active").show();
  setInterval(function(){
  var $active = $("#slide ul li.active");
  var $next = $active.next("li").length?$active.next("li"):$("#slide ul li:first");
  $active.fadeOut($fade_speed).removeClass("active");
  $next.fadeIn($fade_speed).addClass("active");
  },$interval);
});
// .lengthの後の?が謎　これ消したら崩れた
// なぜそんな重要なのか不明



// マウスオーバー時にアイコンを変えます
// ※左側しか反応しないのなんで？←隣の文字のpaddingが上に乗ってる
// attr()はHTML要素の属性を取得したり設定することができるメソッド
// mouseoverで特定の要素内にカーソルが入る時に切り替え
// mouseoutでカーソルが出た時に切り替え←mouseleaveでも可
$('#wrap').mouseover(function() {
  $(this).attr('class', 'two');
}).mouseout(function() {
  $(this).attr('class', 'one');
});

/* 画像を拡大して文字を入れる
$(function(){
  $(window).load(function(){
      var thumbSize = 150;
      var magnifySize = 350;

      $(".activity-img").each(function(){
          $(this).css({width:(thumbSize)});
      });

      var objWidth = $('.activity-img').width();
      var objHeight = $('.activity-img').height();

      $(".activity-img").each(function(){
          $(this).wrapAll('<span class="magnify_cover"></span>');
          $(this).parent('.magnify_cover').css({
              margin: '0 10px 10px 0',
              width: (objWidth),
              height: (objHeight),
              float: 'left',
              position: 'relative'
          });
      });

      $(".activity-img").hover(function(){
          $(this).css({top:'0',left:'0',position: 'absolute'});
          $(this).stop().animate({width:(magnifySize)},500,function(){
              $(this).addClass('shadow');
          });
      }, function(){
          $(this).stop().animate({width:(thumbSize)},300,function(){
              $(this).css({top:'',left:'',position: 'relative'});
              $(this).removeClass('shadow');
          });
      });
  });
});
*/