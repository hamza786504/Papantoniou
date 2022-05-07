$(document).ready(function(){
    $('#team_persons').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        navText: ["&#8592;", "&#8594;"],
        responsive:{
            400:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
    $('#blog_posts').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        navText: ["&#8592;", "&#8594;"],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('#services').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        navText: ["&#8592;", "&#8594;"],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1100:{
                items:3
            }
        }
    });
    



    var multipleCardCarousel = document.querySelector(
        "#services_carousel"
      );
      if (window.matchMedia("(min-width: 768px)").matches) {
        var carousel = new bootstrap.Carousel(multipleCardCarousel, {
          interval: false,
        });
        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();
        var scrollPosition = 0;
        $("#services_carousel .carousel-control-next").on("click", function () {
          if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition += cardWidth;
            $("#services_carousel .carousel-inner").animate(
              { scrollLeft: scrollPosition },
              600
            );
          }
        });
        $("#services_carousel .carousel-control-prev").on("click", function () {
          if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            $("#services_carousel .carousel-inner").animate(
              { scrollLeft: scrollPosition },
              600
            );
          }
        });
      } else {
        $(multipleCardCarousel).addClass("slide");
      }







      var multipleCardCarousel_for_news = document.querySelector(
        "#our_news_carousel"
      );
      if (window.matchMedia("(min-width: 768px)").matches) {
        var carousel = new bootstrap.Carousel(multipleCardCarousel_for_news, {
          interval: false,
        });
        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();
        var scrollPosition = 0;
        $("#our_news_carousel .carousel-control-next").on("click", function () {
          if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition += cardWidth;
            $("#our_news_carousel .carousel-inner").animate(
              { scrollLeft: scrollPosition },
              600
            );
          }
        });
        $("#our_news_carousel .carousel-control-prev").on("click", function () {
          if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            $("#our_news_carousel .carousel-inner").animate(
              { scrollLeft: scrollPosition },
              600
            );
          }
        });
      } else {
        $(multipleCardCarousel_for_news).addClass("slide");
      }

















      
})





