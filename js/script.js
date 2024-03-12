$(".nav-link").click(function () {
  if ($(this).hasClass("active")) return false;

  const tg = $(this).attr("data-target");
  $(this).siblings(".nav-link").removeClass("active").end().addClass("active");

  // simple (show, hide)
  //   $(".tab-pane").css("display", "none").filter(tg).css("display", "block");
  //   $(".tab-pane:visible").hide(222, function () {
  //     $(tg).show(222);
  //   });

  // sliding (slideUp, slideDown)
  //   $(".tab-pane:visible").slideUp(222, function () {
  //     $(tg).slideDown(222);
  //   });

  // fading (fadeOut, fadeIn)
  $(".tab-pane:visible").fadeOut(222, function () {
    $(tg).fadeIn(222);
  });
});
