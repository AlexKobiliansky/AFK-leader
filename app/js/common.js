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

    $('#objects-mnu').smartmenus();

    $('.filter-select').styler();









    /*slider counters functionality*/
    $('.slider-count').each(function () {
        var $this = $(this);
        var $slider = $this.find('.slider-item');
        var $slides = $slider.find('.slide');
        var $totalSlides = $slides.length;
        var $info = $this.find('.cur');

        console.log($totalSlides);

        if($totalSlides < 10) {
            $this.find('.total').text('0'+$totalSlides);
        } else {
            $this.find('.total').text($totalSlides);
        }

        //three-items slider
        if($slider.hasClass('three-items')) {
            $slider.on('changed.owl.carousel', function (e) {

                if ($(window).width() < 480) {
                    var currentItem = e.item.index + 1;
                } else {
                    var currentItem = e.item.index + 3;
                }

                if(currentItem < 10) {
                    $info.text('0'+currentItem);
                } else {
                    $info.text(currentItem);
                }
            });
            $slider.on('initialize.owl.carousel', function (e) {
                var currentItem = e.item.index + 3;
                $info.text('0'+currentItem);
            });
        } else

            //eight-items-slider
            if ($slider.hasClass('eight-items')) {
                $slider.on('changed.owl.carousel', function (e) {
                    if ($(window).width() < 480) {
                        var currentItem = e.item.index + 1;
                    } else if (($(window).width() >= 480) && ($(window).width() < 992)) {
                        var currentItem = e.item.index + 2;
                    } else


                    {
                        var currentItem = e.item.index + 4;
                    }


                    if(currentItem < 10) {
                        $info.text('0'+currentItem);
                    } else {
                        $info.text(currentItem);
                    }
                });

                $slider.on('initialize.owl.carousel', function (e) {
                    var currentItem = e.item.index + 4;
                    $info.text('0'+currentItem);
                });
        } else

            {
            $slider.on('changed.owl.carousel', function (e) {
                var currentItem = e.item.index + 1;
                $info.text('0'+currentItem);
            });

            $slider.on('initialize.owl.carousel', function (e) {
                var currentItem = e.item.index + 3;
                $info.text('0'+currentItem);
            });
        }
    });
    /*end slider counters functionality*/










    //*** SLIDERS ***//
    $('.objects-slider').owlCarousel({
        loop:false,
        nav: true,
        items: 3,
        margin: 30,
        dots: false,
        autoHeight: false,
        navText: ["<img class='svg' src='../img/icons/arr-btn.svg'>","<img class='svg' src='../img/icons/arr-btn.svg'>"],
        responsive: {
            0: {
                items: 1,
                autoHeight: true,
            },
            480: {
                items: 3,
            }
        }
    });

    $('.objects-slider-large').owlCarousel({
        loop:false,
        nav: true,
        items: 4,
        margin: 30,
        dots: false,
        autoHeight: false,
        navText: ["<img class='svg' src='../img/icons/arr-btn.svg'>","<img class='svg' src='../img/icons/arr-btn.svg'>"],
        responsive: {
            0: {
                items: 1,
                autoHeight: true,
            },
            480: {
                items: 2,
            },
            992: {
                items: 4,
            }
        }
    });

    $('.add-slider').owlCarousel({
        loop:false,
        nav: true,
        items: 4,
        margin: 30,
        dots: false,
        autoHeight: true,
        navText: ["<img class='svg' src='../img/icons/arr-btn.svg'>","<img class='svg' src='../img/icons/arr-btn.svg'>"],
        responsive: {
            0: {
                items: 1,
                autoHeight: true,
            },
            480: {
                items: 2,
            },
            992: {
                items: 4,
            }
        }
    });



    $('.station-slider').owlCarousel({
        loop:true,
        nav: false,
        items: 1,
        margin: 0,
        dots: false,
        autoHeight: false,
        mouseDrag: false,
        touchDrag: false,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        thumbs: true,
        thumbsPrerendered: true,
    });



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
                items: 1
            },
            480: {
                dots: false,
                nav: false,
                items: 1
            },
            768: {
                dots: true,
                nav: true,
                items: 1
            }
        }
    });









    //*** END SLIDERS ***//

    $('.about-tabs').tabs();


    function heightses() {


        if ($(window).width()>=992) {
            $('.product-item-subs').height('auto').matchHeight({ byRow: true});
        }

        if ($(window).width()>=768) {
            $('.ben-item-title').height('auto').equalHeights();
            $('.vac-item-title').height('auto').matchHeight({ byRow: true});
            $('.vac-item-list').height('auto').matchHeight({ byRow: true});
            $('.news-item-title').height('auto').matchHeight({ byRow: true});
        }

        if ($(window).width()>=480) {
            $('.objects-slider-large .objects-slide-title').height('auto').equalHeights();
            $('.doc-item').height('auto').equalHeights();
        }

        if ($(window).width()<480) {

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


    $('.preloader').fadeOut();

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










    /**
     * YA-MAPS
     */
    //Переменная для включения/отключения индикатора загрузки
    var spinner = $('.loader');
    //Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
    var check_if_load_objectsmap = false;
    var check_if_load_contactsmap = false;
    var check_if_load = false;
    //Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
    //var myMapTemp, myPlacemarkTemp;








    function init_objectsmap () {
        var mapId = $('#objectsmap'),
            attitude = mapId.data("att"),
            longtitude = mapId.data("long"),
            zoom = mapId.data("zoom"),
            marker = mapId.data("marker"),
            objMap = new ymaps.Map("objectsmap", {
                center: [attitude, longtitude],
                controls: ['zoomControl'],
                zoom: zoom
            });

        var i;
        var placemark;
        var dataObjects = [];

        $('#objectslist .om-item').each(function(){
            var  omAtt = $(this).data('att'),
                omLong = $(this).data('long'),
                omImg = $(this).data('img'),
                omTitle = $(this).data('title'),
                omLink = $(this).data('link'),
                omData = [omAtt, omLong, omImg, omTitle, omLink];

            dataObjects.push(omData);
        });

        for (i = 0; i < dataObjects.length; ++i) {
            placemark = new ymaps.Placemark([[dataObjects[i][0]], dataObjects[i][1]], {
                balloonContent: '<div class="baloon-item"><div class="baloon-title">'+dataObjects[i][3]+'</div><div class="baloon-img" style="background-image: url('+ dataObjects[i][2] +');"></div><div class="baloon-desc">Мы постоянно расширяем нашу географию. С помощью этой интерактивной карты. Вы можете более подробно ознакомиться с нашими объектами.</div><div class="btn-wrap"><a href='+dataObjects[i][4]+'>Подробнее об объекте</a></div>'
            }, {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: marker,
                // Размеры метки.
                iconImageSize: [31, 31],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0],
                // Балун будем открывать и закрывать кликом по иконке метки.
                hideIconOnBalloonOpen: false,
                // Отключаем кнопку закрытия балуна.
                balloonCloseButton: true,
            });
            objMap.geoObjects.add(placemark);
        }

        objMap.behaviors.disable('scrollZoom');

        // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
        var layer = objMap.layers.get(0).get(0);

        // Решение по callback-у для определения полной загрузки карты
        waitForTilesLoad(layer).then(function() {
            // Скрываем индикатор загрузки после полной загрузки карты
            spinner.removeClass('is-active');
        });
    }// end init








    //Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
    function init_contactsmap () {
        var mapId = $('#contactsmap'),
            attitude = mapId.data("att"),
            longtitude = mapId.data("long"),
            zoom = mapId.data("zoom"),
            marker = mapId.data("marker"),
            map = new ymaps.Map("contactsmap", {
                center: [attitude, longtitude],
                controls: ['zoomControl'],
                zoom: zoom
            }),

            myPlacemark = new ymaps.Placemark(map.getCenter(), {}, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: marker,
                // Размеры метки.
                iconImageSize: [25, 40],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0]
            });

        map.geoObjects.add(myPlacemark);
        map.behaviors.disable('scrollZoom');


        //Если нужно сместить центр карты на странице:
        //var position = map.getGlobalPixelCenter();
        //map.setGlobalPixelCenter([ position[0] - 350, position[1] ]);

        //if ($(window).width() <= 1500) {
        //map.setGlobalPixelCenter([ position[0] - 250, position[1]]);
        //}

        // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
        var layer = map.layers.get(0).get(0);

        // Решение по callback-у для определения полной загрузки карты
        waitForTilesLoad(layer).then(function() {
            // Скрываем индикатор загрузки после полной загрузки карты
            spinner.removeClass('is-active');
        });
    }








    //Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
    function init () {
        var mapId = $('#map'),
            attitude = mapId.data("att"),
            longtitude = mapId.data("long"),
            zoom = mapId.data("zoom"),
            marker = mapId.data("marker"),
            map = new ymaps.Map("map", {
                center: [attitude, longtitude],
                controls: ['zoomControl'],
                zoom: zoom
            }),

            myPlacemark = new ymaps.Placemark(map.getCenter(), {}, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: marker,
                // Размеры метки.
                iconImageSize: [25, 40],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, 0]
            });

        map.geoObjects.add(myPlacemark);
        map.behaviors.disable('scrollZoom');


        //Если нужно сместить центр карты на странице:
        //var position = map.getGlobalPixelCenter();
        //map.setGlobalPixelCenter([ position[0] - 350, position[1] ]);

        //if ($(window).width() <= 1500) {
        //map.setGlobalPixelCenter([ position[0] - 250, position[1]]);
        //}

        // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
        var layer = map.layers.get(0).get(0);

        // Решение по callback-у для определения полной загрузки карты
        waitForTilesLoad(layer).then(function() {
            // Скрываем индикатор загрузки после полной загрузки карты
            spinner.removeClass('is-active');
        });
    }


    // Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов)
    function waitForTilesLoad(layer) {
        return new ymaps.vow.Promise(function (resolve, reject) {
            var tc = getTileContainer(layer), readyAll = true;
            tc.tiles.each(function (tile, number) {
                if (!tile.isReady()) {
                    readyAll = false;
                }
            });
            if (readyAll) {
                resolve();
            } else {
                tc.events.once("ready", function() {
                    resolve();
                });
            }
        });
    }

    function getTileContainer(layer) {
        for (var k in layer) {
            if (layer.hasOwnProperty(k)) {
                if (
                    layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
                    || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
                ) {
                    return layer[k];
                }
            }
        }
        return null;
    }


    // Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
    function loadScript(url, callback){
        var script = document.createElement("script");

        if (script.readyState){  // IE
            script.onreadystatechange = function(){
                if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {  // Другие браузеры
            script.onload = function(){
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    // Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
    var ymap = function() {
        $('.map-wrapper').on( "mouseenter", function(){
            if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

                // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
                check_if_load = true;

                // Показываем индикатор загрузки до тех пор, пока карта не загрузится
                $(this).find('.loader').addClass('is-active');

                // Загружаем API Яндекс.Карт
                loadScript("https://api-maps.yandex.ru/2.1/?apikey=e470b388-a1d0-4edf-acdc-34b4bc5bedee&lang=ru_RU&loadByRequire=1", function(){
                    // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
                    ymaps.load(init);
                });
            }
        });
    };



    var objectsmap = function() {
        $('.objectsmap-wrap').on( "mouseenter", function(){
            if (!check_if_load_objectsmap) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

                // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
                check_if_load_objectsmap = true;

                // Показываем индикатор загрузки до тех пор, пока карта не загрузится
                // spinner.addClass('is-active');
                $(this).find('.loader').addClass('is-active');

                // Загружаем API Яндекс.Карт
                loadScript("https://api-maps.yandex.ru/2.1/?apikey=e470b388-a1d0-4edf-acdc-34b4bc5bedee&lang=ru_RU&loadByRequire=1", function(){
                    // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
                    ymaps.load(init_objectsmap);
                });
            }
        });
    };


    var contactsmap = function() {
        $('.contactsmap-wrapper').on( "mouseenter", function(){
            if (!check_if_load_contactsmap) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

                // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
                check_if_load_contactsmap = true;

                // Показываем индикатор загрузки до тех пор, пока карта не загрузится
                // spinner.addClass('is-active');
                $(this).find('.loader').addClass('is-active');

                // Загружаем API Яндекс.Карт
                loadScript("https://api-maps.yandex.ru/2.1/?apikey=e470b388-a1d0-4edf-acdc-34b4bc5bedee&lang=ru_RU&loadByRequire=1", function(){
                    // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
                    ymaps.load(init_contactsmap);
                });
            }
        });
    };


    ymap();
    objectsmap();
    contactsmap();


});
