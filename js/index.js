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

    // document.querySelector(".owl-item.active")[1].style.marginTop = "20px !important";
})