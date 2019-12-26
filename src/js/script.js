$(".popup-navigation").hide();
$(".overlay").hide();
$(".navigation__button").on('click', function () {
  $('.popup-navigation').show("slow");
  $('.overlay').show("slow");
  if ($(window).width() > 768) {
    $('.buy-now').hide();
  }

});
$(".navigation__menu--close").on('click', function () {
  $('.popup-navigation').hide("slow");
  $('.overlay').hide("slow");
  if ($(window).width() > 768) {
    $('.buy-now').show();
  }
});
$(".popup-navigation a").on('click', function () {
  $('.popup-navigation').hide();
  $('.overlay').hide();
  if ($(window).width() > 768) {
    $('.buy-now').show();
  }
});




$(".btn-group").on('click', '.btn-group__btn', function () {
  var bIn = $(this).index();
  $(".btn-group").find('.btn-group__btn--active').first().removeClass('btn-group__btn--active');
  $(this).addClass('btn-group__btn--active');
  $(".slider__list").find('.active-slide').first().removeClass('active-slide');
  $(".slider__list").find('li:eq(' + bIn + ')').addClass('active-slide');

});

$(function () {
  var elWrap = $('.slider__list'),
    el = elWrap.find('li'),
    index = 1,
    indexMax = el.length;

  function change() {
    $(".btn-group").find('.btn-group__btn--active').first().removeClass('btn-group__btn--active');
    $(".slider__list").find('.active-slide').first().removeClass('active-slide');
    el.filter(':nth-child(' + index + ')').addClass('active-slide').fadeIn(3000);
    $(".btn-group").find('li').filter(':nth-child(' + index + ')').addClass('btn-group__btn--active');
  }

  function autoCange() {
    index++;
    if (index > indexMax) {
      index = 1;
    }
    change();
  }
  var interval = setInterval(autoCange, 3000);

  elWrap.mouseover(function () {
    clearInterval(interval);
  });
  elWrap.mouseout(function () {
    interval = setInterval(autoCange, 3000);
  });
});
