

$(document).ready(function(){
$('ul.favorite__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('favorite__tab_active').siblings().removeClass('favorite__tab_active')
      .closest('div.container').find('div.favorite__content').removeClass('favorite__content_active').eq($(this).index()).addClass('favorite__content_active');
  });
});
new Swiper('.image-slider', {
  slidesPerView: 3.1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.about__arrow_next'
  },
      
    breakpoints: {
      900: {
        slidesPerView: 3,
        spaceBetween: 10
    
      },
      300: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      
  },
  
});
$(document).ready(function(){
$('.header__burger').on('click', function(){
  $('.header__burger_list').toggleClass('header__burger_list_active')
  $('.header__burger').toggleClass('header__burger_active')
  $('body').toggleClass('lock')
});
});