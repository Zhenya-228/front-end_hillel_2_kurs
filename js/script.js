$(function () {
  let timer_all = null;

  $(".nav-link")
    .on("mouseenter", function () {
      if (timer_all) {
        clearInterval(timer_all);
        timer_all = null;
      }
      $(".sub_menu").addClass("hidden");
      $(this).siblings().removeClass("sel").end().addClass("sel");

      let tg = $(this).attr("tg");
      let left_pos = $(this).offset().left;
      $("#" + tg)
        .css("left", left_pos + "px")
        .removeClass("hidden");
    })
    .on("mouseleave", function () {
      timer_all = setTimeout(hide_all, 50);
    });

  $(".sub_menu")
    .on("mouseenter", function () {
      if (timer_all) {
        clearInterval(timer_all);
        timer_all = null;
      }
      if ($(this).prop("timer")) {
        clearInterval($(this).prop("timer"));
        $(this).removeProp("timer");
      }
    })
    .on("mouseleave", function () {
      timer_all = setTimeout(hide_all, 50);
    });

  $(".sub_menu > a")
    .on("mouseenter", function () {
      $(this)
        .siblings("[tg]")
        .each(function () {
          let tg = $(this).attr("tg");
          $("#" + tg).addClass("hidden");
        });
      $(this).siblings().removeClass("sel").end().addClass("sel");

      let tg = $(this).attr("tg");
      let pos = $(this).offset();
      let width = $(this).parent().width();

      $("#" + tg)
        .css("left", pos.left + width + "px")
        .css("top", pos.top + "px")
        .removeClass("hidden");
    })
    .on("mouseleave", function () {
      let tg = $(this).attr("tg");
      $("#" + tg).prop(
        "timer",
        setTimeout(function () {
          $("#" + tg)
            .addClass("hidden")
            .removeProp("timer");
        }, 50)
      );
    });
});

function hide_all() {
  $(".sub_menu").addClass("hidden").find("a").removeClass("sel");
  $(".nav-link").removeClass("sel");
}
