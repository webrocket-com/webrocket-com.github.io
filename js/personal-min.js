!function(a){"use strict";var t=a("body").attr("data-page-url"),e=document.title,o=window.History;function n(){a(".page__content").find(".hero__image").imagesLoaded({background:!0},(function(){a(".portfolio-wrap").imagesLoaded((function(){a(".portfolio-wrap").masonry({itemSelector:".portfolio-item",transitionDuration:0})})),a(".blog-wrap").imagesLoaded((function(){a(".blog-wrap").masonry({itemSelector:".blog-post",transitionDuration:0})})),a("body").removeClass("loading"),a("body").removeClass("menu--open")})),a(".active-link").removeClass("active-link"),a('a[href="'+t+'"]').addClass("active-link"),Waypoint.destroyAll();var e=0;a(".gallery").each((function(){var t=a(this),o="gallery-"+ ++e;t.attr("id",o);var n=t.attr("data-columns");t.append('<div class="gallery__wrap"></div>'),t.children("img").each((function(){a(this).appendTo("#"+o+" .gallery__wrap")})),t.find(".gallery__wrap img").each((function(){var t=a(this).attr("src");a(this).wrapAll('<div class="gallery__item"><a href="'+t+'" class="gallery__item__link"></div></div>').appendTo()})),t.imagesLoaded((function(){if("1"===n){t.addClass("gallery--carousel"),t.children(".gallery__wrap").addClass("owl-carousel"),t.children(".gallery__wrap").owlCarousel({items:1,loop:!0,mouseDrag:!1,touchDrag:!0,pullDrag:!1,dots:!0,autoplay:!1,autoplayTimeout:6e3,autoHeight:!0,animateOut:"fadeOut"});new Waypoint({element:document.getElementById(o),handler:function(a){"down"===a&&t.children(".gallery__wrap").trigger("stop.owl.autoplay"),"up"===a&&t.children(".gallery__wrap").trigger("play.owl.autoplay")},offset:"-100%"}),new Waypoint({element:document.getElementById(o),handler:function(a){"down"===a&&t.children(".gallery__wrap").trigger("play.owl.autoplay"),"up"===a&&t.children(".gallery__wrap").trigger("stop.owl.autoplay")},offset:"100%"})}else t.addClass("gallery--grid"),t.children(".gallery__wrap").masonry({itemSelector:".gallery__item",transitionDuration:0}),t.find(".gallery__item__link").fluidbox({loader:!0});t.addClass("gallery--on")}))})),a(".single p > img").each((function(){var t=a(this).parent("p");a(this).insertAfter(t),a(this).wrapAll('<div class="image-wrap"></div>'),t.remove()})),a(".single iframe").each((function(){if(a(this).attr("src").indexOf("youtube")>=0||a(this).attr("src").indexOf("vimeo")>=0){var t=a(this).attr("width"),e=a(this).attr("height")/t*100;a(this).wrapAll('<div class="video-wrap"><div class="video" style="padding-bottom:'+e+'%;"></div></div>')}})),a(".single table").each((function(){a(this).wrapAll('<div class="table-wrap"></div>')}))}o.Adapter.bind(window,"statechange",(function(){var l=o.getState();a("body").addClass("loading"),a(".page-loader").load(l.hash+" .page__content",(function(){a("body, html").animate({scrollTop:0},300);setTimeout((function(){a(".page .page__content").remove(),a(".page-loader .page__content").appendTo(".page"),a("body").attr("data-page-url",window.location.pathname),t=a("body").attr("data-page-url"),e=a(".page__content").attr("data-page-title"),document.title=e,n()}),400)}))})),a("body").hasClass("ajax-loading")&&a(document).on("click","a",(function(n){n.preventDefault();var l=a(this).attr("href");a(this).hasClass("js-no-ajax")||l.indexOf("#")>=0||l.indexOf("mailto:")>=0||l.indexOf("tel:")>=0?window.location=l:a(this).is(".gallery__item__link")||(l.indexOf("http")>=0?window.open(l,"_blank"):(t=l,o.pushState(null,e,l)))})),n(),a(document).on("click",".js-menu-toggle",(function(){a("body").hasClass("menu--open")?a("body").removeClass("menu--open"):a("body").addClass("menu--open")})),a(document).on("click",".menu__list__item__link",(function(){a(".menu").hasClass("menu--open")&&a(".menu").removeClass("menu--open")})),a(document).on("click",".post",(function(){var n=a(this).find(".post__title a").attr("href");a("body").hasClass("ajax-loading")?(t=n,o.pushState(null,e,n)):window.location=n})),a(document).on("submit","#contact-form",(function(t){a(".contact-form__item--error").removeClass("contact-form__item--error");var e=a('.contact-form__input[name="email"]'),o=a('.contact-form__input[name="name"]'),n=a('.contact-form__input[name="category"]'),l=a('.contact-form__textarea[name="message"]'),i=a(".contact-form__gotcha");""===e.val()&&e.closest(".contact-form__item").addClass("contact-form__item--error"),""===o.val()&&o.closest(".contact-form__item").addClass("contact-form__item--error"),null===n.val()&&n.closest(".contact-form__item").addClass("contact-form__item--error"),""===l.val()&&l.closest(".contact-form__item").addClass("contact-form__item--error"),""!==e.val()&&""!==o.val()&&"select"!==n.val()&&""!==l.val()&&0===i.val().length||t.preventDefault()}))}(jQuery)