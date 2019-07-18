$(document).ready(function(){


    // *** MOBILE MNU *** //
    var mmenu = $('#mobile-mnu');
    var menuLogo = mmenu.data("logo");
    var $mmenu = mmenu.mmenu({
        navbars: [{
            content: [ "<img src=" + menuLogo + " class=\"img-responsive mm-logo\" alt=\"alt\"/>" ],
            height: 3
        }],
        "pageScroll": true,

        "navbar": {
            "title" : "",
        },
        "extensions": [
            "theme-dark",
            "pagedim-black",
            "position-front",
            "fx-listitems-slide",
        ],
    }, {
        offCanvas: {
            pageSelector: "#page-container"
        },
    });

    var mmenuBtn = $("#mmenu-btn");
    var API = $mmenu.data("mmenu");

    mmenuBtn.click(function() {
        API.open();
        $(this).addClass('is-active')
    });


    API.bind( "close:start", function() {
        setTimeout(function() {
            mmenuBtn.removeClass( "is-active" );
        }, 300);
    });
    // *** END MOBILE MNU *** //


    //*** SLIDERS ***//
    $('.intro-slider').owlCarousel({
        loop:false,
        nav: true,
        items: 1,
        margin: 0,
        dots: true,
        autoHeight: true,
        navText: ["",""],
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        thumbs: true,
        thumbsPrerendered: true,
        responsive: {
            0: {
                dots: true,
                nav: true,
            },
            480: {
                dots: false,
                nav: false,
            },
            768: {
                dots: true,
                nav: true,
            }
        }
    });


    /*slider counters functionality*/
    $('.slider-count').each(function () {
        var $this = $(this);
        var $slider = $this.find('.slider-item');
        var $slides = $slider.find('.slide');
        var $totalSlides = $slides.length;
        var $info = $this.find('.cur');

        // if ($totalSlides < 2) {
        //     $this.find('.slider-counters').hide();
        // }

        $this.find('.total').text('0'+$totalSlides);
        $info.text('01');



        $slider.on('changed.owl.carousel', function (e) {
            var currentItem = e.item.index + 1;
                $info.text('0'+currentItem);
        })
    });
    /*end slider counters functionality*/


    //*** END SLIDERS ***//


    function heightses() {


        if ($(window).width()>=768) {
            $('.ben-item-title').height('auto').equalHeights();
        }
    }

    $(window).resize(function() {
        heightses();
    });
    heightses();


    $('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });


    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });
});
