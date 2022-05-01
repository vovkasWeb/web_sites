$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu,.header__btn').toggleClass('active');
      $('.header__btn-main').toggleClass('active-none');
      $('body').toggleClass('lock');
   });
});