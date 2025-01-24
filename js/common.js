$(document).ready(function() {


    //search
    $('.search-main form input').keyup(function() {
		var input = $(this);

		if( input.val() == "" ) {
            $(".popup-search").fadeOut(200);
            $(".search-main").removeClass("filled");
		} else {
			$(".popup-search").fadeIn(200);

            $("body").addClass("body_search");
            $(".search-overlay").fadeIn(200);
            $(".search-main").addClass("filled");
		}
	});

    $('.search-main form input').blur(function() {
        
        // $(".search-main").removeClass("active");
        // $("body").removeClass("body_search");
        // $(".search-overlay").fadeOut(200);
      })
      .focus(function() {
        $(".search-overlay").fadeIn(200);
        $(".search-main").addClass("active");
        $("body").addClass("body_search");
      });

      $(".search-overlay").click(function() {
		$(".search-main").removeClass("active");
        $("body").removeClass("body_search");
        $(".search-overlay").fadeOut(200);
        $(".popup-search").fadeOut(200);
        $(".search-main").removeClass("filled");
        $('.search-main form input').val("");
	});

    $(".clear-search").click(function() {
		$(".search-main").removeClass("active");
        $("body").removeClass("body_search");
        $(".search-overlay").fadeOut(200);
        $(".popup-search").fadeOut(200);
        $(".search-main").removeClass("filled");
        $('.search-main form input').val("");
        {
            if ($(window).width() < 992) { 
                $(".search-main").fadeOut(200);
            }
        }
	});

    $(".btn-header_search").click(function(e) {
        e.preventDefault();

        if ($(".search-main").is(":hidden")) {
            $(".search-main").fadeIn(200);
            $(".search-overlay").fadeIn(200);
		} else {
            $(".search-main").fadeOut(200);
            $(".search-overlay").fadeOut(200);
		}
	});

    $(".search-upload").click(function(e) {
        e.preventDefault();
		$(".popup-search-image").fadeIn(200);
        $(".search-overlay-image").fadeIn(200);
        $("body").addClass("body_search");

        $(".search-main").removeClass("active");
        $("body").removeClass("body_search");
        {
            if ($(window).width() > 992) { 
                $(".search-overlay").fadeOut(200);
            }
        }
       
        $(".popup-search").fadeOut(200);
        $(".search-main").removeClass("filled");
        $('.search-main form input').val("");
	});

    $(".search-overlay-image, .popup-search-image__close").click(function(e) {
        e.preventDefault();
		$(".popup-search-image").fadeOut(200);
        $(".search-overlay-image").fadeOut(200);
        $("body").removeClass("body_search");
        
	});


    $(".image-upload input[type='file']").change(function(){
        var filename_text = $(this).parents(".image-upload").find(".image-upload__name");
        var filename = $(this).val().replace(/.*\\/, "");
        filename_text.html(filename);
      });

      {
		if ($(window).width() < 992) { 
			$(document).mouseup(function (e) {
				var container = $(".search-main");
				if (container.has(e.target).length === 0){
                    $(".search-main").fadeOut(200);
				}
			  });

              $(".search-overlay").click(function() {
                $(".search-main").fadeOut(200);
                $(".search-overlay").fadeOut(200);
            });
		}
	}

    $(".catalog-dropdown__menu a").on( "mouseover", function() {
        $(this).parent().siblings().removeClass("active");
       $(this).parent().addClass("active");
       $(".catalog-dropdown__block").fadeOut(0);
       var activeMenu = $(this).attr("href");
       $(activeMenu).fadeIn(0);
      });
    

//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }
  
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }

  $('.card-thumbs__item').hover(
    function() {
        var newSrc = $(this).find('img').attr('src');
        $(this).closest('.item-card').find('.item-card__image img').attr('src', newSrc);
    },
    function() {

    }
);


    /*input file*/
	$(".search-upload input[type='file']").change(function(){
		var filename = $(this).val().replace(/.*\\/, "");
	});

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
    $(".sandwich_mobile").click(function() {
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
			$(".sandwich_mobile").addClass("active");
			$("body").addClass("no-scroll");
			$(".menu-overlay").fadeIn(200);
		} else {
			$(".menu-mobile").slideUp(200);
			$(".sandwich_mobile").removeClass("active");
			$("body").removeClass("no-scroll");
			$(".menu-overlay").fadeOut(200);
		}
	});

	$(".menu-overlay, .menu-mobile__close").click(function() {
		$(".menu-mobile").slideUp(200);
		$(".sandwich_mobile").removeClass("active");
		$("body").removeClass("no-scroll");
		$(".menu-overlay").fadeOut(200);
        $(".catalog-dropdown").slideUp(200);
	});

    $(".catalog-dropdown__back").click(function() {
        $(".catalog-dropdown").slideUp(200);
	});
    $(".catalog-subdropdown__back").click(function() {
        $(".catalog-dropdown__block").fadeOut(0);
	});


    $(".btn-catalog, .btn-catalog-mob").click(function(e) {
        e.preventDefault();
		if ($(".catalog-dropdown").is(":hidden")) {
			$(".catalog-dropdown").slideDown(200);
            $(".btn-catalog .sandwich").addClass("active");
		} else {
			$(".catalog-dropdown").slideUp(200);
            $(".btn-catalog .sandwich").removeClass("active");
		}
	});

    $(document).mouseup(function (e) {
        var container = $(".catalog-dropdown");
        if (container.has(e.target).length === 0){
            $(".catalog-dropdown").slideUp(200);
            $(".btn-catalog .sandwich").removeClass("active");
        }
      });

    if ($('.numbers-about__value').length > 0) {
        var show = true;
          var countbox = ".numbers-about__value";
          $(window).on("scroll load resize", function () {
              if (!show) return false; 
              var w_top = $(window).scrollTop(); 
              var e_top = $(countbox).offset().top; 
              var w_height = $(window).height();
              var d_height = $(document).height(); 
              var e_height = $(countbox).outerHeight(); 
              if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                  $('.numbers-about__value span').css('opacity', '1');
                  $('.numbers-about__value span').spincrement({
                      from: 0,
                      thousandSeparator: " ",
                      duration: 1000
                  });
      
                  show = false;
              }
          });
        }
    
        //locations
        $(".location-main__value").click(function() {
            $(".location-popup").fadeIn(200);
            $(".location-overlay").fadeIn(200);
            $("body").addClass("body_locations");
        });

        $(".location-overlay, .location-popup__close").click(function() {
            $(".location-popup").fadeOut(200);
            $(".location-overlay").fadeOut(200);
            $("body").removeClass("body_locations");
        });

	//слайдер

    $('.slider-gallery').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"><div/>',
        responsive: [
			{
				breakpoint: 1200,
				settings: {
                    slidesToShow: 3,
				}
			},
            {
				breakpoint: 992,
				settings: {
                    slidesToShow: 1,
                    arrows: false,
                    variableWidth: true,
				}
			}
			]
		});

	$('.slider-cards').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
        responsive: [
			{
				breakpoint: 992,
				settings: {
                    arrows: false,
				}
			}
			]
		});

    $('.slider-news').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
        responsive: [
            {
				breakpoint: 992,
				settings: {
                    slidesToShow: 1,
                    arrows: false,
                    variableWidth: true,
				}
			}
			]
		});

	
const slideCount =  $(".banner-slider .item").length;
const indexCount = slideCount - 1;
for(let i = 0; i < slideCount; i++){
    $(".progressBarContainer").append(`
        <div class="item"><span data-slick-index="${i}" class="progressBar"></span></div>
    `)
}

$(".banner-slider").slick({
  infinite: true,
  arrows: false,
  dots: false,
  autoplay: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
        breakpoint: 992,
        settings: {
            dots: true,
        }
    }
    ]
});


 //ticking machine
    var percentTime;
    var tick;
    var time = .1;
    var progressBarIndex = 0;
    

   

    $('.progressBarContainer .progressBar').each(function(index) {
        var progress = "<div class='inProgress inProgress" + index + "'></div>";
        $(this).html(progress);
    });

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if (($('.banner-slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
            progressBarIndex = $('.banner-slider .slick-track div[aria-hidden="false"]').data("slickIndex");
            startProgressbar();
        } else {
            percentTime += 1 / (time + 5);
            $('.inProgress' + progressBarIndex).css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $('.single-item').slick('slickNext');
                progressBarIndex++;
                if (progressBarIndex > indexCount) {
                    progressBarIndex = 0;
                }
                startProgressbar();
            }
        }
    }

    function resetProgressbar() {
        $('.inProgress').css({
            width: 0 + '%'
        });
        clearInterval(tick);
    }
    startProgressbar();
    // End ticking machine

    $('.item').click(function () {
    	clearInterval(tick);
    	var goToThisIndex = $(this).find("span").data("slickIndex");
    	$('.single-item').slick('slickGoTo', goToThisIndex, false);
    	startProgressbar();
    });

    $(".more-about").click(function() {
		if ($(".about__content").hasClass("active")) {
			$(".about__content").removeClass("active");
            $(this).removeClass("active");
            $(this).find("span").html("Читать дальше");
		} else {
			$(".about__content").addClass("active");
            $(this).addClass("active");
            $(this).find("span").html("Свернуть");
		}
	});


	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

