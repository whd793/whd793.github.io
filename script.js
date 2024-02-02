function main() {
  (function () {
    "use strict";
    /* ==============================================
         Page Scrolling
         =============================================== */

    $("a.scroll-nav").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 40,
            },
            900
          );
          return false;
        }
      }
    });

    /*====================================
         Show Menu on Book
         ======================================*/
    $(window).bind("scroll", function () {
      var navHeight = $("#home").height() - 350;
      if ($(window).scrollTop() > navHeight) {
        $(".navbar-default").addClass("on");
      } else {
        $(".navbar-default").removeClass("on");
      }
    });

    // $(window).bind("scroll", function () {
    //   var navHeightstudio = $("#portfolio").height() - $("#studio").height();

    //   if (
    //     $(window).scrollTop() > navHeightstudio &&
    //     $(window).scrollTop() < navHeightstudio + 1250
    //   ) {
    //     $(".navbar-default").addClass("onred");
    //     // $(".navbar-default").removeClass("on");
    //   } else {
    //     $(".navbar-default").removeClass("onred");
    //   }
    // });

    $(window).bind("scroll", function () {
      var navHeight = $("#home").height() - 350;
      if ($(window).scrollTop() > navHeight) {
        $(".side").removeClass("on");
      } else {
        $(".side").removeClass("on");
      }
    });

    // $(window).bind("scroll", function () {
    //   var navHeight = $("#home").height() - 350;
    //   if ($(window).scrollTop() > navHeight) {
    //     $(".side").removeClass("onred");
    //   } else {
    //     $(".side").removeClass("onred");
    //   }
    // });
    /* ==============================================
         Scroll Spy
         =============================================== */
    $("body").scrollspy({
      target: ".navbar-default",
      offset: 80,
    });
  })();
}
main();
