'use strict';

$(document).ready(function () {

  // Global variables
  // ====================
  var _window = $(window);
  var _document = $(document);
  // ====================


  var popUpLogic = function popUpLogic() {
    if ($(window).width() < 768) {
      initPopups();
    } else {
      $.magnificPopup.close();
      $('[popup-js]').off('click');
    }
  };

  // Popup control view
  // ====================
  if ($("#economicCalendarWidget").length > 0) {
    new economicCalendar({ width: "100%", height: "100%", mode: 2 });
  }
  // ====================

  // Popup control view
  // ====================
  _window.on('resize', function () {
    popUpLogic();
  });
  // ====================


  // Pre-loader
  // ====================
  _window.on('load', function () {
    var _body = $("body");

    var offsetTopValue = _window.scrollTop();

    popUpLogic();

    // if (offsetTopValue <= 10) {
    //   _body.removeClass("is-hidden").addClass("is-loader");
    // } else {
    //   _body.removeClass("is-loader is-hidden");
    //   _body.addClass("is-visible");
    //   $("body, html").removeClass("is-hideScroll");
    // }

    // animation runtime
    // setTimeout(function (e) {
    //   _body.removeClass("is-loader is-hidden").addClass("is-visible");
    // }, 100);

    // animation runtime
    // setTimeout(function (e) {
    //   $("body, html").removeClass("is-hideScroll");
    //   _body.removeClass("is-hidden").addClass("is-visible");
    // }, 1500);
  });
  // ====================


  // READY - triggered when PJAX DONE
  // ====================
  function pageReady() {
    svg4everybody();
    initScrollMonitor();
    initModals();
  }
  pageReady();
  // ====================


  // Prevent # behavior
  // ====================
  _document.on('click', '[href="#"]', function (e) {
    e.preventDefault();
  });
  // ====================


  // HEADER SCROLL
  // ====================
  function initHeaderScroll() {
    _window.on('scroll load', function (e) {
      var vScroll = _window.scrollTop();
      var header = $('.header').not('.header--static');

      if (vScroll > 15) {
        header.addClass('is-fixed');
      } else {
        header.removeClass('is-fixed');
      }
    });
  }
  initHeaderScroll();

  // HAMBURGER TOGGLER
  // ====================
  $("[js-hamburger]").on('click', function (e) {
    $(e.currentTarget).toggleClass('is-open');

    $('.header__mobile').toggleClass('is-active fadeIn');
    $("body, html").toggleClass("is-hideScroll");

    $("[menu-js]").removeClass("is-show-drop");
    $(".menu__dropdown").slideUp().removeClass("is-active-drop");
  });
  // ====================


  // SMOOTH SCROLL
  // ====================
  $("[anchor-js]").on("click", function (e) {
    var linkHref = $(e.currentTarget).attr('href'),
        navHeight = $(".header").outerHeight() || 0,
        topHeightOffset = $(linkHref).offset().top - navHeight;

    $('body, html').animate({
      scrollTop: topHeightOffset
    }, 1000);
  });
  // $("[dropdown-btn-js]").on("click", function (e) {
  //   var currentParent = $(e.target).attr("data-parent"),
  //       currentHrefVal = $(e.target).attr("href"),
  //       mainParent = $(e.target).closest("body").attr("data-body");
  //
  //   var linkHref = $(e.currentTarget).attr('href'),
  //       navHeight = $(".header").outerHeight() || 0,
  //       topHeightOffset = $(linkHref).offset().top - navHeight;
  //
  //   var currentBtn = $(e.target);
  //
  //   if (currentParent === mainParent) {
  //     $('body, html').animate({
  //       scrollTop: topHeightOffset
  //     }, 1000);
  //   } else {
  //     window.location.href = currentParent + ".html" + currentHrefVal;
  //   }
  //
  //   $("[js-hamburger]").removeClass('is-open');
  //   $('.header__mobile').removeClass('is-active fadeIn');
  //
  //   if (_window.width() <= 1365) {
  //     $("[menu-js]").removeClass("is-show-drop");
  //     $(".menu__dropdown").slideUp().removeClass("is-active-drop");
  //   }
  // });
  // _window.on("load", function (e) {
  //   var winHref = window.location.href,
  //       hrefPosition = winHref.indexOf("#"),
  //       hrefAnchor = winHref.substring(hrefPosition);
  //
  //   if (hrefPosition !== -1) {
  //     console.log("hrefPosition: ", hrefPosition);
  //     var linkHref = $(hrefAnchor),
  //         navHeight = $(".header").outerHeight() || 0,
  //         topHeightOffset = $(linkHref).offset().top - navHeight;
  //
  //     $('body, html').animate({
  //       scrollTop: topHeightOffset
  //     }, 1000);
  //   }
  // });
  // ====================


  // OBJECT-FIT POLYFILL
  // ====================
  var $someImages = $('[objectFit-js]');
  if ($someImages.length) {
    objectFitImages($someImages);
  }
  // ====================


  // Trade sub menu
  // ====================
  _document.on("click", "[trade-data-js]", function (e) {
    e.preventDefault();

    $("[trade-data-js]").removeClass('is-active');
    $(e.target).closest("li").addClass('is-active');
  });
  _document.on("click", "[trade-menu-js]", function (e) {
    e.preventDefault();

    var linkCount = $(e.target).closest("li").data("count");

    $("[trade-menu-js]").removeClass('is-active');
    $(".section__data-cover").removeClass('is-active');

    $(e.target).closest("li").addClass('is-active');
    $(".section__data-cover--" + linkCount).addClass('is-active');
  });
  // ====================


  // Main menu
  // ====================
  _document.on("click", "[menu-js]", function (e) {
    // e.preventDefault();

    $("[menu-js]").removeClass('is-active');
    $(e.target).closest("li").addClass('is-active');
  });
  _document.on("click", "[menu-js] > a.menu__link", function (e) {
    var elem = $(e.target);

    if (_window.width() <= 1365) {
      elem.closest("[menu-js]").toggleClass("is-show-drop");
      elem.siblings(".menu__dropdown").slideToggle().toggleClass("is-active-drop");
      return false;
    }
  });
  function closeMobileMenu() {
    $('[js-hamburger]').removeClass('is-active');
    $('.mobile-navi').removeClass('is-active');
  }
  // ====================


  // PARALLAX
  // ====================
  if ($("[parallax-js]").length) {
    $(window).stellar({
      positionProperty: 'transform',
      hideDistantElements: false
    });
  }
  // ====================


  // MAIN ABOUT MENU
  // ====================
  _document.on("click", "[mainAbout-js]", function (e) {
    e.preventDefault();

    $("[mainAbout-js]").removeClass('is-active');
    $(e.currentTarget).addClass('is-active');
  });
  // ====================


  // DROPDOWN MENU
  // ====================
  // $('.menu [menu-js]').hover(function () {
  //   if (_window.width() >= 1366) {
  //     $(this).find('.menu__dropdown').stop(true, false).delay(0).fadeIn(250);
  //   }
  // }, function () {
  //   if (_window.width() >= 1366) {
  //     $(this).find('.menu__dropdown').stop(true, false).delay(0).fadeOut(250);
  //   }
  // });
  // // ====================


  //
  // ====================
  $('[infoBlock-js]').hover(function () {
    if (_window.width() >= 768) {
      $('[infoBlock-js]').removeClass("is-active");
      $(this).stop(true, false).addClass("is-active");
    }
  }, function () {
    // $(this).stop(true, false).removeClass("is-active");
  });
  // ====================


  // ACCORDION
  // ====================
  $("[accordion-js]").on("click", function (e) {
    var curElem = $(e.target);

    curElem.closest(".main__accordion-wrap").toggleClass("is-active");
    curElem.closest(".main__accordion-header").siblings(".main__accordion-body").slideToggle();
  });
  // ====================


  // COLLAPSE
  // ====================
  $("[collapse-js]").on("click", function (e) {
    var curElem = $(e.target);

    curElem.closest(".info__collapse").toggleClass("is-active");
    curElem.closest(".info__collapse-header").siblings(".info__collapse-body").slideToggle();
  });
  // ====================


  // INPUT FORM - label animation
  // ====================
  var inputElem = $("[input-js]");
  inputElem.on("focus", function (e) {
    var curElem = $(e.target);

    curElem.closest(".form__field").addClass("is-focus");
  });
  inputElem.on("blur", function (e) {
    var curElem = $(e.target),
        curElemVal = curElem.val().trim();

    if (curElemVal === "") {
      curElem.closest(".form__field").removeClass("is-focus");
    }
  });
  // ====================


  // MODALS
  // ====================
  function initPopups() {

    var startWindowScroll = 0;

    $('[popup-js]').magnificPopup({
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 400,
      mainClass: 'show',
      callbacks: {
        beforeOpen: function beforeOpen(e) {
          startWindowScroll = _window.scrollTop();

          var modal = $("#modal"),
              idx = this.index,
              elem = $(".section__col-" + idx);

          var elemSvg = elem.find(".svg__wrap").html(),
              elemTitle = elem.find("h3").html(),
              elemText = elem.find("p").html();

          modal.find(".modal__svg").html(elemSvg);
          modal.find("h3").text(elemTitle);
          modal.find("p").text(elemText);

          this.st.mainClass = this.st.el.attr('data-effect');
        },
        close: function close() {
          _window.scrollTop(startWindowScroll);
        }
      }
    });
  }

  function initModals() {

    var startWindowScroll = 0;

    $('[thoughts-modal-js]').magnificPopup({
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 400,
      mainClass: 'show',
      callbacks: {
        beforeOpen: function beforeOpen(e) {
          startWindowScroll = _window.scrollTop();

          this.st.mainClass = this.st.el.attr('data-effect');

          var title = "Submit your ";
          var linkValue = $(this.st.el).find('span').text();
          var modalTitleGood = $('#modalthoughtsGood').find(".modal__title");

          modalTitleGood.html(title + linkValue.toLowerCase());

          var modalTitleBad = $('#modalthoughtsBad').find(".modal__title");

          modalTitleBad.html(title + linkValue.toLowerCase());
        },
        close: function close() {
          _window.scrollTop(startWindowScroll);
        }
      }
    });
    $('[director-js]').magnificPopup({
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 400,
      mainClass: 'show',
      callbacks: {
        beforeOpen: function beforeOpen(e) {
          startWindowScroll = _window.scrollTop();

          this.st.mainClass = this.st.el.attr('data-effect');

          var userName = $(this.st.el).data('name'),
              userPosition = $(this.st.el).data('position'),
              userDesc = $(this.st.el).data('description'),
              userImg = $(this.st.el).data('img');

          var nameElem = $("#modalDirectors [name]"),
              posElem = $("#modalDirectors [position]"),
              descElem = $("#modalDirectors [desc]"),
              imgElem = $("#modalDirectors [img]");

          nameElem.html(userName);
          posElem.html(userPosition);
          descElem.html(userDesc);
          imgElem.attr("src", "./img/" + userImg + ".png");
        },
        close: function close() {
          _window.scrollTop(startWindowScroll);
        }
      }
    });
  }
  // ====================


  // SCROLLMONITOR - WOW LIKE
  // ====================
  function initScrollMonitor() {
    $(".wow").each(function (i, el) {

      var elWatcher = scrollMonitor.create($(el));

      var delay = void 0;

      if ($(window).width() < 768) {
        delay = 0;
      } else {
        delay = $(el).data('animation-delay');
      }

      var animationClass = $(el).data('animation-class') || "wowFadeUp";
      var animationName = $(el).data('animation-name') || "wowFade";

      elWatcher.enterViewport(function () {
        $(el).addClass(animationClass);
        $(el).css({
          'animation-name': animationName,
          'animation-delay': delay,
          'visibility': 'visible'
        }).addClass("animation-go-js");
      });
    });
  }
  // ====================


  // SELECTRIC JS
  // ====================
  // $('[select-js]').selectric();
  // ====================
});
$( document ).ready(function() {

    if($('.slick').length > 0) {
        $('.slick').slick({
            arrows:true,
            dots:false,
            autoplay:false,
            responsive: [
                {
                    breakpoint: 560,
                    settings: {
                        arrows:false,
                        infinite: true,
                        dots: true
                    }
                }

            ]
        });
    }

    // console.log($('.small-slider'));
    if($('.small-slider').length > 0) {
        $('.small-slider').not('.slick-initialized').slick({
            arrows:false,
            infinite: true,
            dots: true,
            autoplay:true
        });
    }
    // $('.partners-list ul').slick({
    //     infinite: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     dots:false,
    //     autoplay:true,
    //     swipe:true,
    //     speed:2000,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 4
    //             }
    //         },
    //         {
    //             breakpoint: 780,
    //             settings: {
    //                 slidesToShow: 3
    //             }
    //         },
    //         {
    //             breakpoint: 560,
    //             settings: {
    //                 slidesToShow: 2
    //             }
    //         },
    //         {
    //             breakpoint: 420,
    //             settings: {
    //                 slidesToShow: 2
    //
    //             }
    //         }
    //     ]
    // });
    // if($(window).scrollTop()> 140){
    //     $('.header-top').addClass("active-fixed");
    // }
    $(window).scroll( function(){
        if($(window).scrollTop()> 130){
            $('.header-top').addClass("active-fixed");
        }
        else{
            $('.header-top').removeClass("active-fixed");

        }
    });

    $('.menu-mobile-btn').click(function(e){
        $('.header-top').toggleClass('active');
        e.preventDefault();
        $(this).toggleClass('active');
        $('body').toggleClass('is_opened');
        /*------------end mobile menu---------------*/
    });
    var itemHover = $('.step-list li');
        itemHover.hover(function () {
        itemHover.removeClass('active');
        $(this).addClass('active');
        var id = $(this).data('image-id');
        $(this).parents('.start-trading').attr('data','bg'+id);
    });
    $('.button-link, .h-info__btn-0').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'mfp-fade',
        callbacks: {
            beforeOpen: function beforeOpen() {
                this.st.mainClass = this.st.el.attr('data-effect');
            },
            close: function close() {}
        }
    });

    if ($(window).width() < 950) {
        $('.menu__item > a').click(function (e) {
            if($(this).next('.menu__dropdown')){                
                if( $(this).hasClass('button') ){console.log('yes');}else{
                    console.log($(this));
                    e.preventDefault();
                    $(this).next('.menu__dropdown').toggleClass('active');
                }
            }else {
                
            }

        })
    }


});
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i),k=h.getAttribute("xlink:href")||h.getAttribute("href");if(!k&&g.attributeName&&(k=h.getAttribute(g.attributeName)),j&&k){if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("scrollMonitor",[],e):"object"==typeof exports?exports.scrollMonitor=e():t.scrollMonitor=e()}(this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var s=i[o]={exports:{},id:o,loaded:!1};return t[o].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";var o=i(1),s=o.isInBrowser,n=i(2),r=new n(s?document.body:null);r.setStateFromDOM(null),r.listenToDOM(),s&&(window.scrollMonitor=r),t.exports=r},function(t,e){"use strict";e.VISIBILITYCHANGE="visibilityChange",e.ENTERVIEWPORT="enterViewport",e.FULLYENTERVIEWPORT="fullyEnterViewport",e.EXITVIEWPORT="exitViewport",e.PARTIALLYEXITVIEWPORT="partiallyExitViewport",e.LOCATIONCHANGE="locationChange",e.STATECHANGE="stateChange",e.eventTypes=[e.VISIBILITYCHANGE,e.ENTERVIEWPORT,e.FULLYENTERVIEWPORT,e.EXITVIEWPORT,e.PARTIALLYEXITVIEWPORT,e.LOCATIONCHANGE,e.STATECHANGE],e.isOnServer="undefined"==typeof window,e.isInBrowser=!e.isOnServer,e.defaultOffsets={top:0,bottom:0}},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t){return c?0:t===document.body?window.innerHeight||document.documentElement.clientHeight:t.clientHeight}function n(t){return c?0:t===document.body?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight):t.scrollHeight}function r(t){return c?0:t===document.body?window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop}var h=i(1),c=h.isOnServer,a=h.isInBrowser,l=h.eventTypes,p=i(3),u=!1;if(a)try{var w=Object.defineProperty({},"passive",{get:function(){u=!0}});window.addEventListener("test",null,w)}catch(t){}var d=!!u&&{capture:!1,passive:!0},f=function(){function t(e,i){function h(){if(a.viewportTop=r(e),a.viewportBottom=a.viewportTop+a.viewportHeight,a.documentHeight=n(e),a.documentHeight!==p){for(u=a.watchers.length;u--;)a.watchers[u].recalculateLocation();p=a.documentHeight}}function c(){for(w=a.watchers.length;w--;)a.watchers[w].update();for(w=a.watchers.length;w--;)a.watchers[w].triggerCallbacks()}o(this,t);var a=this;this.item=e,this.watchers=[],this.viewportTop=null,this.viewportBottom=null,this.documentHeight=n(e),this.viewportHeight=s(e),this.DOMListener=function(){t.prototype.DOMListener.apply(a,arguments)},this.eventTypes=l,i&&(this.containerWatcher=i.create(e));var p,u,w;this.update=function(){h(),c()},this.recalculateLocations=function(){this.documentHeight=0,this.update()}}return t.prototype.listenToDOM=function(){a&&(window.addEventListener?(this.item===document.body?window.addEventListener("scroll",this.DOMListener,d):this.item.addEventListener("scroll",this.DOMListener,d),window.addEventListener("resize",this.DOMListener)):(this.item===document.body?window.attachEvent("onscroll",this.DOMListener):this.item.attachEvent("onscroll",this.DOMListener),window.attachEvent("onresize",this.DOMListener)),this.destroy=function(){window.addEventListener?(this.item===document.body?(window.removeEventListener("scroll",this.DOMListener,d),this.containerWatcher.destroy()):this.item.removeEventListener("scroll",this.DOMListener,d),window.removeEventListener("resize",this.DOMListener)):(this.item===document.body?(window.detachEvent("onscroll",this.DOMListener),this.containerWatcher.destroy()):this.item.detachEvent("onscroll",this.DOMListener),window.detachEvent("onresize",this.DOMListener))})},t.prototype.destroy=function(){},t.prototype.DOMListener=function(t){this.setStateFromDOM(t)},t.prototype.setStateFromDOM=function(t){var e=r(this.item),i=s(this.item),o=n(this.item);this.setState(e,i,o,t)},t.prototype.setState=function(t,e,i,o){var s=e!==this.viewportHeight||i!==this.contentHeight;if(this.latestEvent=o,this.viewportTop=t,this.viewportHeight=e,this.viewportBottom=t+e,this.contentHeight=i,s)for(var n=this.watchers.length;n--;)this.watchers[n].recalculateLocation();this.updateAndTriggerWatchers(o)},t.prototype.updateAndTriggerWatchers=function(t){for(var e=this.watchers.length;e--;)this.watchers[e].update();for(e=this.watchers.length;e--;)this.watchers[e].triggerCallbacks(t)},t.prototype.createCustomContainer=function(){return new t},t.prototype.createContainer=function(e){"string"==typeof e?e=document.querySelector(e):e&&e.length>0&&(e=e[0]);var i=new t(e,this);return i.setStateFromDOM(),i.listenToDOM(),i},t.prototype.create=function(t,e){"string"==typeof t?t=document.querySelector(t):t&&t.length>0&&(t=t[0]);var i=new p(this,t,e);return this.watchers.push(i),i},t.prototype.beget=function(t,e){return this.create(t,e)},t}();t.exports=f},function(t,e,i){"use strict";function o(t,e,i){function o(t,e){if(0!==t.length)for(E=t.length;E--;)y=t[E],y.callback.call(s,e,s),y.isOne&&t.splice(E,1)}var s=this;this.watchItem=e,this.container=t,i?i===+i?this.offsets={top:i,bottom:i}:this.offsets={top:i.top||w.top,bottom:i.bottom||w.bottom}:this.offsets=w,this.callbacks={};for(var d=0,f=u.length;d<f;d++)s.callbacks[u[d]]=[];this.locked=!1;var m,v,b,I,E,y;this.triggerCallbacks=function(t){switch(this.isInViewport&&!m&&o(this.callbacks[r],t),this.isFullyInViewport&&!v&&o(this.callbacks[h],t),this.isAboveViewport!==b&&this.isBelowViewport!==I&&(o(this.callbacks[n],t),v||this.isFullyInViewport||(o(this.callbacks[h],t),o(this.callbacks[a],t)),m||this.isInViewport||(o(this.callbacks[r],t),o(this.callbacks[c],t))),!this.isFullyInViewport&&v&&o(this.callbacks[a],t),!this.isInViewport&&m&&o(this.callbacks[c],t),this.isInViewport!==m&&o(this.callbacks[n],t),!0){case m!==this.isInViewport:case v!==this.isFullyInViewport:case b!==this.isAboveViewport:case I!==this.isBelowViewport:o(this.callbacks[p],t)}m=this.isInViewport,v=this.isFullyInViewport,b=this.isAboveViewport,I=this.isBelowViewport},this.recalculateLocation=function(){if(!this.locked){var t=this.top,e=this.bottom;if(this.watchItem.nodeName){var i=this.watchItem.style.display;"none"===i&&(this.watchItem.style.display="");for(var s=0,n=this.container;n.containerWatcher;)s+=n.containerWatcher.top-n.containerWatcher.container.viewportTop,n=n.containerWatcher.container;var r=this.watchItem.getBoundingClientRect();this.top=r.top+this.container.viewportTop-s,this.bottom=r.bottom+this.container.viewportTop-s,"none"===i&&(this.watchItem.style.display=i)}else this.watchItem===+this.watchItem?this.watchItem>0?this.top=this.bottom=this.watchItem:this.top=this.bottom=this.container.documentHeight-this.watchItem:(this.top=this.watchItem.top,this.bottom=this.watchItem.bottom);this.top-=this.offsets.top,this.bottom+=this.offsets.bottom,this.height=this.bottom-this.top,void 0===t&&void 0===e||this.top===t&&this.bottom===e||o(this.callbacks[l],null)}},this.recalculateLocation(),this.update(),m=this.isInViewport,v=this.isFullyInViewport,b=this.isAboveViewport,I=this.isBelowViewport}var s=i(1),n=s.VISIBILITYCHANGE,r=s.ENTERVIEWPORT,h=s.FULLYENTERVIEWPORT,c=s.EXITVIEWPORT,a=s.PARTIALLYEXITVIEWPORT,l=s.LOCATIONCHANGE,p=s.STATECHANGE,u=s.eventTypes,w=s.defaultOffsets;o.prototype={on:function(t,e,i){switch(!0){case t===n&&!this.isInViewport&&this.isAboveViewport:case t===r&&this.isInViewport:case t===h&&this.isFullyInViewport:case t===c&&this.isAboveViewport&&!this.isInViewport:case t===a&&this.isInViewport&&this.isAboveViewport:if(e.call(this,this.container.latestEvent,this),i)return}if(!this.callbacks[t])throw new Error("Tried to add a scroll monitor listener of type "+t+". Your options are: "+u.join(", "));this.callbacks[t].push({callback:e,isOne:i||!1})},off:function(t,e){if(!this.callbacks[t])throw new Error("Tried to remove a scroll monitor listener of type "+t+". Your options are: "+u.join(", "));for(var i,o=0;i=this.callbacks[t][o];o++)if(i.callback===e){this.callbacks[t].splice(o,1);break}},one:function(t,e){this.on(t,e,!0)},recalculateSize:function(){this.height=this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom,this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<this.container.viewportTop,this.isBelowViewport=this.bottom>this.container.viewportBottom,this.isInViewport=this.top<this.container.viewportBottom&&this.bottom>this.container.viewportTop,this.isFullyInViewport=this.top>=this.container.viewportTop&&this.bottom<=this.container.viewportBottom||this.isAboveViewport&&this.isBelowViewport},destroy:function(){var t=this.container.watchers.indexOf(this),e=this;this.container.watchers.splice(t,1);for(var i=0,o=u.length;i<o;i++)e.callbacks[u[i]].length=0},lock:function(){this.locked=!0},unlock:function(){this.locked=!1}};for(var d=function(t){return function(e,i){this.on.call(this,t,e,i)}},f=0,m=u.length;f<m;f++){var v=u[f];o.prototype[v]=d(v)}t.exports=o}])});
//# sourceMappingURL=scrollMonitor.js.map
/*! jQuery Migrate v3.0.1 | (c) jQuery Foundation and other contributors | jquery.org/license */

void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0), function(e) {
    "function" == typeof define && define.amd ? define([ "jquery" ], window, e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery"), window) : e(jQuery, window);
}(function(e, t) {
    "use strict";
    function r(r) {
        var n = t.console;
        o[r] || (o[r] = !0, e.migrateWarnings.push(r), n && n.warn && !e.migrateMute && (n.warn("JQMIGRATE: " + r),
        e.migrateTrace && n.trace && n.trace()));
    }
    function n(e, t, n, a) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return r(a), n;
            },
            set: function(e) {
                r(a), n = e;
            }
        });
    }
    function a(e, t, n, a) {
        e[t] = function() {
            return r(a), n.apply(this, arguments);
        };
    }
    e.migrateVersion = "3.0.1", function() {
        var r = /^[12]\./;
        t.console && t.console.log && (e && !r.test(e.fn.jquery) || t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
        e.migrateWarnings && t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
        t.console.log("JQMIGRATE: Migrate is installed" + (e.migrateMute ? "" : " with logging active") + ", version " + e.migrateVersion));
    }();
    var o = {};
    e.migrateWarnings = [], void 0 === e.migrateTrace && (e.migrateTrace = !0), e.migrateReset = function() {
        o = {}, e.migrateWarnings.length = 0;
    }, "BackCompat" === t.document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var i = e.fn.init, s = e.isNumeric, u = e.find, c = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, l = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
    e.fn.init = function(e) {
        var t = Array.prototype.slice.call(arguments);
        return "string" == typeof e && "#" === e && (r("jQuery( '#' ) is not a valid selector"),
        t[0] = []), i.apply(this, t);
    }, e.fn.init.prototype = e.fn, e.find = function(e) {
        var n = Array.prototype.slice.call(arguments);
        if ("string" == typeof e && c.test(e)) try {
            t.document.querySelector(e);
        } catch (a) {
            e = e.replace(l, function(e, t, r, n) {
                return "[" + t + r + '"' + n + '"]';
            });
            try {
                t.document.querySelector(e), r("Attribute selector with '#' must be quoted: " + n[0]),
                n[0] = e;
            } catch (e) {
                r("Attribute selector with '#' was not fixed: " + n[0]);
            }
        }
        return u.apply(this, n);
    };
    var d;
    for (d in u) Object.prototype.hasOwnProperty.call(u, d) && (e.find[d] = u[d]);
    e.fn.size = function() {
        return r("jQuery.fn.size() is deprecated and removed; use the .length property"),
        this.length;
    }, e.parseJSON = function() {
        return r("jQuery.parseJSON is deprecated; use JSON.parse"), JSON.parse.apply(null, arguments);
    }, e.isNumeric = function(t) {
        var n = s(t), a = function(t) {
            var r = t && t.toString();
            return !e.isArray(t) && r - parseFloat(r) + 1 >= 0;
        }(t);
        return n !== a && r("jQuery.isNumeric() should not be called on constructed objects"),
        a;
    }, a(e, "holdReady", e.holdReady, "jQuery.holdReady is deprecated"), a(e, "unique", e.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"),
    n(e.expr, "filters", e.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
    n(e.expr, ":", e.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");
    var p = e.ajax;
    e.ajax = function() {
        var e = p.apply(this, arguments);
        return e.promise && (a(e, "success", e.done, "jQXHR.success is deprecated and removed"),
        a(e, "error", e.fail, "jQXHR.error is deprecated and removed"), a(e, "complete", e.always, "jQXHR.complete is deprecated and removed")),
        e;
    };
    var f = e.fn.removeAttr, y = e.fn.toggleClass, m = /\S+/g;
    e.fn.removeAttr = function(t) {
        var n = this;
        return e.each(t.match(m), function(t, a) {
            e.expr.match.bool.test(a) && (r("jQuery.fn.removeAttr no longer sets boolean properties: " + a),
            n.prop(a, !1));
        }), f.apply(this, arguments);
    }, e.fn.toggleClass = function(t) {
        return void 0 !== t && "boolean" != typeof t ? y.apply(this, arguments) : (r("jQuery.fn.toggleClass( boolean ) is deprecated"),
        this.each(function() {
            var r = this.getAttribute && this.getAttribute("class") || "";
            r && e.data(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : e.data(this, "__className__") || "");
        }));
    };
    var h = !1;
    e.swap && e.each([ "height", "width", "reliableMarginRight" ], function(t, r) {
        var n = e.cssHooks[r] && e.cssHooks[r].get;
        n && (e.cssHooks[r].get = function() {
            var e;
            return h = !0, e = n.apply(this, arguments), h = !1, e;
        });
    }), e.swap = function(e, t, n, a) {
        var o, i, s = {};
        h || r("jQuery.swap() is undocumented and deprecated");
        for (i in t) s[i] = e.style[i], e.style[i] = t[i];
        o = n.apply(e, a || []);
        for (i in t) e.style[i] = s[i];
        return o;
    };
    var g = e.data;
    e.data = function(t, n, a) {
        var o;
        if (n && "object" == typeof n && 2 === arguments.length) {
            o = e.hasData(t) && g.call(this, t);
            var i = {};
            for (var s in n) s !== e.camelCase(s) ? (r("jQuery.data() always sets/gets camelCased names: " + s),
            o[s] = n[s]) : i[s] = n[s];
            return g.call(this, t, i), n;
        }
        return n && "string" == typeof n && n !== e.camelCase(n) && (o = e.hasData(t) && g.call(this, t)) && n in o ? (r("jQuery.data() always sets/gets camelCased names: " + n),
        arguments.length > 2 && (o[n] = a), o[n]) : g.apply(this, arguments);
    };
    var v = e.Tween.prototype.run, j = function(e) {
        return e;
    };
    e.Tween.prototype.run = function() {
        e.easing[this.easing].length > 1 && (r("'jQuery.easing." + this.easing.toString() + "' should use only one argument"),
        e.easing[this.easing] = j), v.apply(this, arguments);
    }, e.fx.interval = e.fx.interval || 13, t.requestAnimationFrame && n(e.fx, "interval", e.fx.interval, "jQuery.fx.interval is deprecated");
    var Q = e.fn.load, b = e.event.add, w = e.event.fix;
    e.event.props = [], e.event.fixHooks = {}, n(e.event.props, "concat", e.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"),
    e.event.fix = function(t) {
        var n, a = t.type, o = this.fixHooks[a], i = e.event.props;
        if (i.length) for (r("jQuery.event.props are deprecated and removed: " + i.join()); i.length; ) e.event.addProp(i.pop());
        if (o && !o._migrated_ && (o._migrated_ = !0, r("jQuery.event.fixHooks are deprecated and removed: " + a),
        (i = o.props) && i.length)) for (;i.length; ) e.event.addProp(i.pop());
        return n = w.call(this, t), o && o.filter ? o.filter(n, t) : n;
    }, e.event.add = function(e, n) {
        return e === t && "load" === n && "complete" === t.document.readyState && r("jQuery(window).on('load'...) called after load event occurred"),
        b.apply(this, arguments);
    }, e.each([ "load", "unload", "error" ], function(t, n) {
        e.fn[n] = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === n && "string" == typeof e[0] ? Q.apply(this, e) : (r("jQuery.fn." + n + "() is deprecated"),
            e.splice(0, 0, n), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e),
            this));
        };
    }), e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, n) {
        e.fn[n] = function(e, t) {
            return r("jQuery.fn." + n + "() event shorthand is deprecated"), arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n);
        };
    }), e(function() {
        e(t.document).triggerHandler("ready");
    }), e.event.special.ready = {
        setup: function() {
            this === t.document && r("'ready' event is deprecated");
        }
    }, e.fn.extend({
        bind: function(e, t, n) {
            return r("jQuery.fn.bind() is deprecated"), this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return r("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
        },
        delegate: function(e, t, n, a) {
            return r("jQuery.fn.delegate() is deprecated"), this.on(t, e, n, a);
        },
        undelegate: function(e, t, n) {
            return r("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        hover: function(e, t) {
            return r("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e);
        }
    });
    var x = e.fn.offset;
    e.fn.offset = function() {
        var n, a = this[0], o = {
            top: 0,
            left: 0
        };
        return a && a.nodeType ? (n = (a.ownerDocument || t.document).documentElement, e.contains(n, a) ? x.apply(this, arguments) : (r("jQuery.fn.offset() requires an element connected to a document"),
        o)) : (r("jQuery.fn.offset() requires a valid DOM element"), o);
    };
    var k = e.param;
    e.param = function(t, n) {
        var a = e.ajaxSettings && e.ajaxSettings.traditional;
        return void 0 === n && a && (r("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
        n = a), k.call(this, t, n);
    };
    var A = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function() {
        return r("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),
        A.apply(this, arguments);
    };
    var S = e.Deferred, q = [ [ "resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved" ], [ "reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected" ], [ "notify", "progress", e.Callbacks("memory"), e.Callbacks("memory") ] ];
    return e.Deferred = function(t) {
        var n = S(), a = n.promise();
        return n.pipe = a.pipe = function() {
            var t = arguments;
            return r("deferred.pipe() is deprecated"), e.Deferred(function(r) {
                e.each(q, function(o, i) {
                    var s = e.isFunction(t[o]) && t[o];
                    n[i[1]](function() {
                        var t = s && s.apply(this, arguments);
                        t && e.isFunction(t.promise) ? t.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[i[0] + "With"](this === a ? r.promise() : this, s ? [ t ] : arguments);
                    });
                }), t = null;
            }).promise();
        }, t && t.call(n, n), n;
    }, e.Deferred.exceptionHook = S.exceptionHook, e;
});
/*! Selectric ϟ v1.13.0 (2017-08-22) - git.io/tjl9sQ - Copyright (c) 2017 Leonardo Santos - MIT License */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,s){return void 0===s&&(s="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(s),s}:e(jQuery)}(function(e){"use strict";var t=e(document),s=e(window),l=["a","e","i","o","u","n","c","y"],i=[/[\xE0-\xE5]/g,/[\xE8-\xEB]/g,/[\xEC-\xEF]/g,/[\xF2-\xF6]/g,/[\xF9-\xFC]/g,/[\xF1]/g,/[\xE7]/g,/[\xFD-\xFF]/g],n=function(t,s){var l=this;l.element=t,l.$element=e(t),l.state={multiple:!!l.$element.attr("multiple"),enabled:!1,opened:!1,currValue:-1,selectedIdx:-1,highlightedIdx:-1},l.eventTriggers={open:l.open,close:l.close,destroy:l.destroy,refresh:l.refresh,init:l.init},l.init(s)};n.prototype={utils:{isMobile:function(){return/android|ip(hone|od|ad)/i.test(navigator.userAgent)},escapeRegExp:function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},replaceDiacritics:function(e){for(var t=i.length;t--;)e=e.toLowerCase().replace(i[t],l[t]);return e},format:function(e){var t=arguments;return(""+e).replace(/\{(?:(\d+)|(\w+))\}/g,function(e,s,l){return l&&t[1]?t[1][l]:t[s]})},nextEnabledItem:function(e,t){for(;e[t=(t+1)%e.length].disabled;);return t},previousEnabledItem:function(e,t){for(;e[t=(t>0?t:e.length)-1].disabled;);return t},toDash:function(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()},triggerCallback:function(t,s){var l=s.element,i=s.options["on"+t],n=[l].concat([].slice.call(arguments).slice(1));e.isFunction(i)&&i.apply(l,n),e(l).trigger("selectric-"+this.toDash(t),n)},arrayToClassname:function(t){var s=e.grep(t,function(e){return!!e});return e.trim(s.join(" "))}},init:function(t){var s=this;if(s.options=e.extend(!0,{},e.fn.selectric.defaults,s.options,t),s.utils.triggerCallback("BeforeInit",s),s.destroy(!0),s.options.disableOnMobile&&s.utils.isMobile())return void(s.disableOnMobile=!0);s.classes=s.getClassNames();var l=e("<input/>",{class:s.classes.input,readonly:s.utils.isMobile()}),i=e("<div/>",{class:s.classes.items,tabindex:-1}),n=e("<div/>",{class:s.classes.scroll}),a=e("<div/>",{class:s.classes.prefix,html:s.options.arrowButtonMarkup}),o=e("<span/>",{class:"label"}),r=s.$element.wrap("<div/>").parent().append(a.prepend(o),i,l),u=e("<div/>",{class:s.classes.hideselect});s.elements={input:l,items:i,itemsScroll:n,wrapper:a,label:o,outerWrapper:r},s.options.nativeOnMobile&&s.utils.isMobile()&&(s.elements.input=void 0,u.addClass(s.classes.prefix+"-is-native"),s.$element.on("change",function(){s.refresh()})),s.$element.on(s.eventTriggers).wrap(u),s.originalTabindex=s.$element.prop("tabindex"),s.$element.prop("tabindex",-1),s.populate(),s.activate(),s.utils.triggerCallback("Init",s)},activate:function(){var e=this,t=e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),s=e.$element.width();t.removeClass(e.classes.tempshow),e.utils.triggerCallback("BeforeActivate",e),e.elements.outerWrapper.prop("class",e.utils.arrayToClassname([e.classes.wrapper,e.$element.prop("class").replace(/\S+/g,e.classes.prefix+"-$&"),e.options.responsive?e.classes.responsive:""])),e.options.inheritOriginalWidth&&s>0&&e.elements.outerWrapper.width(s),e.unbindEvents(),e.$element.prop("disabled")?(e.elements.outerWrapper.addClass(e.classes.disabled),e.elements.input&&e.elements.input.prop("disabled",!0)):(e.state.enabled=!0,e.elements.outerWrapper.removeClass(e.classes.disabled),e.$li=e.elements.items.removeAttr("style").find("li"),e.bindEvents()),e.utils.triggerCallback("Activate",e)},getClassNames:function(){var t=this,s=t.options.customClass,l={};return e.each("Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel".split(" "),function(e,i){var n=s.prefix+i;l[i.toLowerCase()]=s.camelCase?n:t.utils.toDash(n)}),l.prefix=s.prefix,l},setLabel:function(){var t=this,s=t.options.labelBuilder;if(t.state.multiple){var l=e.isArray(t.state.currValue)?t.state.currValue:[t.state.currValue];l=0===l.length?[0]:l;var i=e.map(l,function(s){return e.grep(t.lookupItems,function(e){return e.index===s})[0]});i=e.grep(i,function(t){return i.length>1||0===i.length?""!==e.trim(t.value):t}),i=e.map(i,function(l){return e.isFunction(s)?s(l):t.utils.format(s,l)}),t.options.multiple.maxLabelEntries&&(i.length>=t.options.multiple.maxLabelEntries+1?(i=i.slice(0,t.options.multiple.maxLabelEntries),i.push(e.isFunction(s)?s({text:"..."}):t.utils.format(s,{text:"..."}))):i.slice(i.length-1)),t.elements.label.html(i.join(t.options.multiple.separator))}else{var n=t.lookupItems[t.state.currValue];t.elements.label.html(e.isFunction(s)?s(n):t.utils.format(s,n))}},populate:function(){var t=this,s=t.$element.children(),l=t.$element.find("option"),i=l.filter(":selected"),n=l.index(i),a=0,o=t.state.multiple?[]:0;i.length>1&&t.state.multiple&&(n=[],i.each(function(){n.push(e(this).index())})),t.state.currValue=~n?n:o,t.state.selectedIdx=t.state.currValue,t.state.highlightedIdx=t.state.currValue,t.items=[],t.lookupItems=[],s.length&&(s.each(function(s){var l=e(this);if(l.is("optgroup")){var i={element:l,label:l.prop("label"),groupDisabled:l.prop("disabled"),items:[]};l.children().each(function(s){var l=e(this);i.items[s]=t.getItemData(a,l,i.groupDisabled||l.prop("disabled")),t.lookupItems[a]=i.items[s],a++}),t.items[s]=i}else t.items[s]=t.getItemData(a,l,l.prop("disabled")),t.lookupItems[a]=t.items[s],a++}),t.setLabel(),t.elements.items.append(t.elements.itemsScroll.html(t.getItemsMarkup(t.items))))},getItemData:function(t,s,l){var i=this;return{index:t,element:s,value:s.val(),className:s.prop("class"),text:s.html(),slug:e.trim(i.utils.replaceDiacritics(s.html())),alt:s.attr("data-alt"),selected:s.prop("selected"),disabled:l}},getItemsMarkup:function(t){var s=this,l="<ul>";return e.isFunction(s.options.listBuilder)&&s.options.listBuilder&&(t=s.options.listBuilder(t)),e.each(t,function(t,i){void 0!==i.label?(l+=s.utils.format('<ul class="{1}"><li class="{2}">{3}</li>',s.utils.arrayToClassname([s.classes.group,i.groupDisabled?"disabled":"",i.element.prop("class")]),s.classes.grouplabel,i.element.prop("label")),e.each(i.items,function(e,t){l+=s.getItemMarkup(t.index,t)}),l+="</ul>"):l+=s.getItemMarkup(i.index,i)}),l+"</ul>"},getItemMarkup:function(t,s){var l=this,i=l.options.optionsItemBuilder,n={value:s.value,text:s.text,slug:s.slug,index:s.index};return l.utils.format('<li data-index="{1}" class="{2}">{3}</li>',t,l.utils.arrayToClassname([s.className,t===l.items.length-1?"last":"",s.disabled?"disabled":"",s.selected?"selected":""]),e.isFunction(i)?l.utils.format(i(s,this.$element,t),s):l.utils.format(i,n))},unbindEvents:function(){var e=this;e.elements.wrapper.add(e.$element).add(e.elements.outerWrapper).add(e.elements.input).off(".sl")},bindEvents:function(){var t=this;t.elements.outerWrapper.on("mouseenter.sl mouseleave.sl",function(s){e(this).toggleClass(t.classes.hover,"mouseenter"===s.type),t.options.openOnHover&&(clearTimeout(t.closeTimer),"mouseleave"===s.type?t.closeTimer=setTimeout(e.proxy(t.close,t),t.options.hoverIntentTimeout):t.open())}),t.elements.wrapper.on("click.sl",function(e){t.state.opened?t.close():t.open(e)}),t.options.nativeOnMobile&&t.utils.isMobile()||(t.$element.on("focus.sl",function(){t.elements.input.focus()}),t.elements.input.prop({tabindex:t.originalTabindex,disabled:!1}).on("keydown.sl",e.proxy(t.handleKeys,t)).on("focusin.sl",function(e){t.elements.outerWrapper.addClass(t.classes.focus),t.elements.input.one("blur",function(){t.elements.input.blur()}),t.options.openOnFocus&&!t.state.opened&&t.open(e)}).on("focusout.sl",function(){t.elements.outerWrapper.removeClass(t.classes.focus)}).on("input propertychange",function(){var s=t.elements.input.val(),l=new RegExp("^"+t.utils.escapeRegExp(s),"i");clearTimeout(t.resetStr),t.resetStr=setTimeout(function(){t.elements.input.val("")},t.options.keySearchTimeout),s.length&&e.each(t.items,function(e,s){if(!s.disabled){if(l.test(s.text)||l.test(s.slug))return void t.highlight(e);if(s.alt)for(var i=s.alt.split("|"),n=0;n<i.length&&i[n];n++)if(l.test(i[n].trim()))return void t.highlight(e)}})})),t.$li.on({mousedown:function(e){e.preventDefault(),e.stopPropagation()},click:function(){return t.select(e(this).data("index")),!1}})},handleKeys:function(t){var s=this,l=t.which,i=s.options.keys,n=e.inArray(l,i.previous)>-1,a=e.inArray(l,i.next)>-1,o=e.inArray(l,i.select)>-1,r=e.inArray(l,i.open)>-1,u=s.state.highlightedIdx,p=n&&0===u||a&&u+1===s.items.length,c=0;if(13!==l&&32!==l||t.preventDefault(),n||a){if(!s.options.allowWrap&&p)return;n&&(c=s.utils.previousEnabledItem(s.lookupItems,u)),a&&(c=s.utils.nextEnabledItem(s.lookupItems,u)),s.highlight(c)}if(o&&s.state.opened)return s.select(u),void(s.state.multiple&&s.options.multiple.keepMenuOpen||s.close());r&&!s.state.opened&&s.open()},refresh:function(){var e=this;e.populate(),e.activate(),e.utils.triggerCallback("Refresh",e)},setOptionsDimensions:function(){var e=this,t=e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),s=e.options.maxHeight,l=e.elements.items.outerWidth(),i=e.elements.wrapper.outerWidth()-(l-e.elements.items.width());!e.options.expandToItemText||i>l?e.finalWidth=i:(e.elements.items.css("overflow","scroll"),e.elements.outerWrapper.width(9e4),e.finalWidth=e.elements.items.width(),e.elements.items.css("overflow",""),e.elements.outerWrapper.width("")),e.elements.items.width(e.finalWidth).height()>s&&e.elements.items.height(s),t.removeClass(e.classes.tempshow)},isInViewport:function(){var e=this;if(!0===e.options.forceRenderAbove)e.elements.outerWrapper.addClass(e.classes.above);else if(!0===e.options.forceRenderBelow)e.elements.outerWrapper.addClass(e.classes.below);else{var t=s.scrollTop(),l=s.height(),i=e.elements.outerWrapper.offset().top,n=e.elements.outerWrapper.outerHeight(),a=i+n+e.itemsHeight<=t+l,o=i-e.itemsHeight>t,r=!a&&o,u=!r;e.elements.outerWrapper.toggleClass(e.classes.above,r),e.elements.outerWrapper.toggleClass(e.classes.below,u)}},detectItemVisibility:function(t){var s=this,l=s.$li.filter("[data-index]");s.state.multiple&&(t=e.isArray(t)&&0===t.length?0:t,t=e.isArray(t)?Math.min.apply(Math,t):t);var i=l.eq(t).outerHeight(),n=l[t].offsetTop,a=s.elements.itemsScroll.scrollTop(),o=n+2*i;s.elements.itemsScroll.scrollTop(o>a+s.itemsHeight?o-s.itemsHeight:n-i<a?n-i:a)},open:function(s){var l=this;if(l.options.nativeOnMobile&&l.utils.isMobile())return!1;l.utils.triggerCallback("BeforeOpen",l),s&&(s.preventDefault(),l.options.stopPropagation&&s.stopPropagation()),l.state.enabled&&(l.setOptionsDimensions(),e("."+l.classes.hideselect,"."+l.classes.open).children().selectric("close"),l.state.opened=!0,l.itemsHeight=l.elements.items.outerHeight(),l.itemsInnerHeight=l.elements.items.height(),l.elements.outerWrapper.addClass(l.classes.open),l.elements.input.val(""),s&&"focusin"!==s.type&&l.elements.input.focus(),setTimeout(function(){t.on("click.sl",e.proxy(l.close,l)).on("scroll.sl",e.proxy(l.isInViewport,l))},1),l.isInViewport(),l.options.preventWindowScroll&&t.on("mousewheel.sl DOMMouseScroll.sl","."+l.classes.scroll,function(t){var s=t.originalEvent,i=e(this).scrollTop(),n=0;"detail"in s&&(n=-1*s.detail),"wheelDelta"in s&&(n=s.wheelDelta),"wheelDeltaY"in s&&(n=s.wheelDeltaY),"deltaY"in s&&(n=-1*s.deltaY),(i===this.scrollHeight-l.itemsInnerHeight&&n<0||0===i&&n>0)&&t.preventDefault()}),l.detectItemVisibility(l.state.selectedIdx),l.highlight(l.state.multiple?-1:l.state.selectedIdx),l.utils.triggerCallback("Open",l))},close:function(){var e=this;e.utils.triggerCallback("BeforeClose",e),t.off(".sl"),e.elements.outerWrapper.removeClass(e.classes.open),e.state.opened=!1,e.utils.triggerCallback("Close",e)},change:function(){var t=this;t.utils.triggerCallback("BeforeChange",t),t.state.multiple?(e.each(t.lookupItems,function(e){t.lookupItems[e].selected=!1,t.$element.find("option").prop("selected",!1)}),e.each(t.state.selectedIdx,function(e,s){t.lookupItems[s].selected=!0,t.$element.find("option").eq(s).prop("selected",!0)}),t.state.currValue=t.state.selectedIdx,t.setLabel(),t.utils.triggerCallback("Change",t)):t.state.currValue!==t.state.selectedIdx&&(t.$element.prop("selectedIndex",t.state.currValue=t.state.selectedIdx).data("value",t.lookupItems[t.state.selectedIdx].text),t.setLabel(),t.utils.triggerCallback("Change",t))},highlight:function(e){var t=this,s=t.$li.filter("[data-index]").removeClass("highlighted");t.utils.triggerCallback("BeforeHighlight",t),void 0===e||-1===e||t.lookupItems[e].disabled||(s.eq(t.state.highlightedIdx=e).addClass("highlighted"),t.detectItemVisibility(e),t.utils.triggerCallback("Highlight",t))},select:function(t){var s=this,l=s.$li.filter("[data-index]");if(s.utils.triggerCallback("BeforeSelect",s,t),void 0!==t&&-1!==t&&!s.lookupItems[t].disabled){if(s.state.multiple){s.state.selectedIdx=e.isArray(s.state.selectedIdx)?s.state.selectedIdx:[s.state.selectedIdx];var i=e.inArray(t,s.state.selectedIdx);-1!==i?s.state.selectedIdx.splice(i,1):s.state.selectedIdx.push(t),l.removeClass("selected").filter(function(t){return-1!==e.inArray(t,s.state.selectedIdx)}).addClass("selected")}else l.removeClass("selected").eq(s.state.selectedIdx=t).addClass("selected");s.state.multiple&&s.options.multiple.keepMenuOpen||s.close(),s.change(),s.utils.triggerCallback("Select",s,t)}},destroy:function(e){var t=this;t.state&&t.state.enabled&&(t.elements.items.add(t.elements.wrapper).add(t.elements.input).remove(),e||t.$element.removeData("selectric").removeData("value"),t.$element.prop("tabindex",t.originalTabindex).off(".sl").off(t.eventTriggers).unwrap().unwrap(),t.state.enabled=!1)}},e.fn.selectric=function(t){return this.each(function(){var s=e.data(this,"selectric");s&&!s.disableOnMobile?"string"==typeof t&&s[t]?s[t]():s.init(t):e.data(this,"selectric",new n(this,t))})},e.fn.selectric.defaults={onChange:function(t){e(t).change()},maxHeight:300,keySearchTimeout:500,arrowButtonMarkup:'<b class="button">&#x25be;</b>',disableOnMobile:!1,nativeOnMobile:!0,openOnFocus:!0,openOnHover:!1,hoverIntentTimeout:500,expandToItemText:!1,responsive:!1,preventWindowScroll:!0,inheritOriginalWidth:!1,allowWrap:!0,forceRenderAbove:!1,forceRenderBelow:!1,stopPropagation:!0,optionsItemBuilder:"{text}",labelBuilder:"{text}",listBuilder:!1,keys:{previous:[37,38],next:[39,40],select:[9,13,27],open:[13,32,37,38,39,40],close:[9,27]},customClass:{prefix:"selectric",camelCase:!1},multiple:{separator:", ",keepMenuOpen:!0,maxLabelEntries:!1}}});
/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
!function(a,b,c,d){function e(b,c){this.element=b,this.options=a.extend({},g,c),this._defaults=g,this._name=f,this.init()}var f="stellar",g={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(a){a.hide()},showElement:function(a){a.show()}},h={scroll:{getLeft:function(a){return a.scrollLeft()},setLeft:function(a,b){a.scrollLeft(b)},getTop:function(a){return a.scrollTop()},setTop:function(a,b){a.scrollTop(b)}},position:{getLeft:function(a){return-1*parseInt(a.css("left"),10)},getTop:function(a){return-1*parseInt(a.css("top"),10)}},margin:{getLeft:function(a){return-1*parseInt(a.css("margin-left"),10)},getTop:function(a){return-1*parseInt(a.css("margin-top"),10)}},transform:{getLeft:function(a){var b=getComputedStyle(a[0])[k];return"none"!==b?-1*parseInt(b.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(a){var b=getComputedStyle(a[0])[k];return"none"!==b?-1*parseInt(b.match(/(-?[0-9]+)/g)[5],10):0}}},i={position:{setLeft:function(a,b){a.css("left",b)},setTop:function(a,b){a.css("top",b)}},transform:{setPosition:function(a,b,c,d,e){a[0].style[k]="translate3d("+(b-c)+"px, "+(d-e)+"px, 0)"}}},j=function(){var b,c=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,d=a("script")[0].style,e="";for(b in d)if(c.test(b)){e=b.match(c)[0];break}return"WebkitOpacity"in d&&(e="Webkit"),"KhtmlOpacity"in d&&(e="Khtml"),function(a){return e+(e.length>0?a.charAt(0).toUpperCase()+a.slice(1):a)}}(),k=j("transform"),l=a("<div />",{style:"background:#fff"}).css("background-position-x")!==d,m=l?function(a,b,c){a.css({"background-position-x":b,"background-position-y":c})}:function(a,b,c){a.css("background-position",b+" "+c)},n=l?function(a){return[a.css("background-position-x"),a.css("background-position-y")]}:function(a){return a.css("background-position").split(" ")},o=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame||function(a){setTimeout(a,1e3/60)};e.prototype={init:function(){this.options.name=f+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===c.body&&(this.element=b),this.$scrollElement=a(this.element),this.$element=this.element===b?a("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==d?a(this.options.viewportElement):this.$scrollElement[0]===b||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var a=this,b=h[a.options.scrollProperty];this._getScrollLeft=function(){return b.getLeft(a.$scrollElement)},this._getScrollTop=function(){return b.getTop(a.$scrollElement)}},_defineSetters:function(){var b=this,c=h[b.options.scrollProperty],d=i[b.options.positionProperty],e=c.setLeft,f=c.setTop;this._setScrollLeft="function"==typeof e?function(a){e(b.$scrollElement,a)}:a.noop,this._setScrollTop="function"==typeof f?function(a){f(b.$scrollElement,a)}:a.noop,this._setPosition=d.setPosition||function(a,c,e,f,g){b.options.horizontalScrolling&&d.setLeft(a,c,e),b.options.verticalScrolling&&d.setTop(a,f,g)}},_handleWindowLoadAndResize:function(){var c=this,d=a(b);c.options.responsive&&d.bind("load."+this.name,function(){c.refresh()}),d.bind("resize."+this.name,function(){c._detectViewport(),c.options.responsive&&c.refresh()})},refresh:function(c){var d=this,e=d._getScrollLeft(),f=d._getScrollTop();c&&c.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),c&&c.firstLoad&&/WebKit/.test(navigator.userAgent)&&a(b).load(function(){var a=d._getScrollLeft(),b=d._getScrollTop();d._setScrollLeft(a+1),d._setScrollTop(b+1),d._setScrollLeft(a),d._setScrollTop(b)}),this._setScrollLeft(e),this._setScrollTop(f)},_detectViewport:function(){var a=this.$viewportElement.offset(),b=null!==a&&a!==d;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=b?a.top:0,this.viewportOffsetLeft=b?a.left:0},_findParticles:function(){{var b=this;this._getScrollLeft(),this._getScrollTop()}if(this.particles!==d)for(var c=this.particles.length-1;c>=0;c--)this.particles[c].$element.data("stellar-elementIsActive",d);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(){var c,e,f,g,h,i,j,k,l,m=a(this),n=0,o=0,p=0,q=0;if(m.data("stellar-elementIsActive")){if(m.data("stellar-elementIsActive")!==this)return}else m.data("stellar-elementIsActive",this);b.options.showElement(m),m.data("stellar-startingLeft")?(m.css("left",m.data("stellar-startingLeft")),m.css("top",m.data("stellar-startingTop"))):(m.data("stellar-startingLeft",m.css("left")),m.data("stellar-startingTop",m.css("top"))),f=m.position().left,g=m.position().top,h="auto"===m.css("margin-left")?0:parseInt(m.css("margin-left"),10),i="auto"===m.css("margin-top")?0:parseInt(m.css("margin-top"),10),k=m.offset().left-h,l=m.offset().top-i,m.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(n=p,o=q,j=b,!1):(p+=b.position().left,void(q+=b.position().top))}),c=m.data("stellar-horizontal-offset")!==d?m.data("stellar-horizontal-offset"):j!==d&&j.data("stellar-horizontal-offset")!==d?j.data("stellar-horizontal-offset"):b.horizontalOffset,e=m.data("stellar-vertical-offset")!==d?m.data("stellar-vertical-offset"):j!==d&&j.data("stellar-vertical-offset")!==d?j.data("stellar-vertical-offset"):b.verticalOffset,b.particles.push({$element:m,$offsetParent:j,isFixed:"fixed"===m.css("position"),horizontalOffset:c,verticalOffset:e,startingPositionLeft:f,startingPositionTop:g,startingOffsetLeft:k,startingOffsetTop:l,parentOffsetLeft:n,parentOffsetTop:o,stellarRatio:m.data("stellar-ratio")!==d?m.data("stellar-ratio"):1,width:m.outerWidth(!0),height:m.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var b,c=this,e=this._getScrollLeft(),f=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(b=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(b=b.add(this.$element)),b.each(function(){var b,g,h,i,j,k,l,o=a(this),p=n(o),q=0,r=0,s=0,t=0;if(o.data("stellar-backgroundIsActive")){if(o.data("stellar-backgroundIsActive")!==this)return}else o.data("stellar-backgroundIsActive",this);o.data("stellar-backgroundStartingLeft")?m(o,o.data("stellar-backgroundStartingLeft"),o.data("stellar-backgroundStartingTop")):(o.data("stellar-backgroundStartingLeft",p[0]),o.data("stellar-backgroundStartingTop",p[1])),h="auto"===o.css("margin-left")?0:parseInt(o.css("margin-left"),10),i="auto"===o.css("margin-top")?0:parseInt(o.css("margin-top"),10),j=o.offset().left-h-e,k=o.offset().top-i-f,o.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(q=s,r=t,l=b,!1):(s+=b.position().left,void(t+=b.position().top))}),b=o.data("stellar-horizontal-offset")!==d?o.data("stellar-horizontal-offset"):l!==d&&l.data("stellar-horizontal-offset")!==d?l.data("stellar-horizontal-offset"):c.horizontalOffset,g=o.data("stellar-vertical-offset")!==d?o.data("stellar-vertical-offset"):l!==d&&l.data("stellar-vertical-offset")!==d?l.data("stellar-vertical-offset"):c.verticalOffset,c.backgrounds.push({$element:o,$offsetParent:l,isFixed:"fixed"===o.css("background-attachment"),horizontalOffset:b,verticalOffset:g,startingValueLeft:p[0],startingValueTop:p[1],startingBackgroundPositionLeft:isNaN(parseInt(p[0],10))?0:parseInt(p[0],10),startingBackgroundPositionTop:isNaN(parseInt(p[1],10))?0:parseInt(p[1],10),startingPositionLeft:o.position().left,startingPositionTop:o.position().top,startingOffsetLeft:j,startingOffsetTop:k,parentOffsetLeft:q,parentOffsetTop:r,stellarRatio:o.data("stellar-background-ratio")===d?1:o.data("stellar-background-ratio")})}))},_reset:function(){var a,b,c,d,e;for(e=this.particles.length-1;e>=0;e--)a=this.particles[e],b=a.$element.data("stellar-startingLeft"),c=a.$element.data("stellar-startingTop"),this._setPosition(a.$element,b,b,c,c),this.options.showElement(a.$element),a.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(e=this.backgrounds.length-1;e>=0;e--)d=this.backgrounds[e],d.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),m(d.$element,d.startingValueLeft,d.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=a.noop,a(b).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var c=this,d=a(b);d.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),d.bind("resize.horizontal-"+this.name,function(){c.horizontalOffset=c.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),d.bind("resize.vertical-"+this.name,function(){c.verticalOffset=c.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var a,b,c,d,e,f,g,h,i,j,k=this._getScrollLeft(),l=this._getScrollTop(),n=!0,o=!0;if(this.currentScrollLeft!==k||this.currentScrollTop!==l||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=k,this.currentScrollTop=l,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,j=this.particles.length-1;j>=0;j--)a=this.particles[j],b=a.isFixed?1:0,this.options.horizontalScrolling?(f=(k+a.horizontalOffset+this.viewportOffsetLeft+a.startingPositionLeft-a.startingOffsetLeft+a.parentOffsetLeft)*-(a.stellarRatio+b-1)+a.startingPositionLeft,h=f-a.startingPositionLeft+a.startingOffsetLeft):(f=a.startingPositionLeft,h=a.startingOffsetLeft),this.options.verticalScrolling?(g=(l+a.verticalOffset+this.viewportOffsetTop+a.startingPositionTop-a.startingOffsetTop+a.parentOffsetTop)*-(a.stellarRatio+b-1)+a.startingPositionTop,i=g-a.startingPositionTop+a.startingOffsetTop):(g=a.startingPositionTop,i=a.startingOffsetTop),this.options.hideDistantElements&&(o=!this.options.horizontalScrolling||h+a.width>(a.isFixed?0:k)&&h<(a.isFixed?0:k)+this.viewportWidth+this.viewportOffsetLeft,n=!this.options.verticalScrolling||i+a.height>(a.isFixed?0:l)&&i<(a.isFixed?0:l)+this.viewportHeight+this.viewportOffsetTop),o&&n?(a.isHidden&&(this.options.showElement(a.$element),a.isHidden=!1),this._setPosition(a.$element,f,a.startingPositionLeft,g,a.startingPositionTop)):a.isHidden||(this.options.hideElement(a.$element),a.isHidden=!0);for(j=this.backgrounds.length-1;j>=0;j--)c=this.backgrounds[j],b=c.isFixed?0:1,d=this.options.horizontalScrolling?(k+c.horizontalOffset-this.viewportOffsetLeft-c.startingOffsetLeft+c.parentOffsetLeft-c.startingBackgroundPositionLeft)*(b-c.stellarRatio)+"px":c.startingValueLeft,e=this.options.verticalScrolling?(l+c.verticalOffset-this.viewportOffsetTop-c.startingOffsetTop+c.parentOffsetTop-c.startingBackgroundPositionTop)*(b-c.stellarRatio)+"px":c.startingValueTop,m(c.$element,d,e)}},_handleScrollEvent:function(){var a=this,b=!1,c=function(){a._repositionElements(),b=!1},d=function(){b||(o(c),b=!0)};this.$scrollElement.bind("scroll."+this.name,d),d()},_startAnimationLoop:function(){var a=this;this._animationLoop=function(){o(a._animationLoop),a._repositionElements()},this._animationLoop()}},a.fn[f]=function(b){var c=arguments;return b===d||"object"==typeof b?this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))}):"string"==typeof b&&"_"!==b[0]&&"init"!==b?this.each(function(){var d=a.data(this,"plugin_"+f);d instanceof e&&"function"==typeof d[b]&&d[b].apply(d,Array.prototype.slice.call(c,1)),"destroy"===b&&a.data(this,"plugin_"+f,null)}):void 0},a[f]=function(){var c=a(b);return c.stellar.apply(c,Array.prototype.slice.call(arguments,0))},a[f].scrollProperty=h,a[f].positionProperty=i,b.Stellar=e}(jQuery,this,document);
/*! npm.im/object-fit-images 3.2.3 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!m&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=l.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);p.call(e,"src")!==n&&b.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[a];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&g&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=p.call(t,"data-ofi-srcset")||t.srcset,o.img.src=p.call(t,"data-ofi-src")||t.src,b.call(t,"data-ofi-src",t.src),t.srcset&&b.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[a].img[e||"src"]},set:function(e,i){return t[a].img[i||"src"]=e,b.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(t,e){var i=!h&&!t;if(e=e||{},t=t||"img",f&&!e.skipTest||!d)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][a]=t[r][a]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&o(t.target,{skipTest:e.skipTest})},!0),h=!0,t="img"),e.watchMQ&&window.addEventListener("resize",o.bind(null,t,{skipTest:e.skipTest}))}var a="bfred-it:object-fit-images",l=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,u="undefined"==typeof Image?{style:{"object-position":1}}:new Image,g="object-fit"in u.style,f="object-position"in u.style,d="background-size"in u.style,m="string"==typeof u.currentSrc,p=u.getAttribute,b=u.setAttribute,h=!1;return o.supportsObjectFit=g,o.supportsObjectPosition=f,function(){function t(t,e){return t[a]&&t[a].img&&("src"===e||"srcset"===e)?t[a].img:t}f||(HTMLImageElement.prototype.getAttribute=function(e){return p.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return b.call(t(this,e),e,String(i))})}(),o}();
