var globalWindowWidth = $j(window).width();
var cachedWidth, slider, sliderRelated, sliderWearing, sliderFull, sliderActive = false, sliderRelatedActive = false, sliderWearingActive = false, isCheckout;
var isHomepage = false, firstClickFlag = true;
var isProductView;

window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

window.validateEmails = function(addressType) {

    var equalEmails = false, confirmEmail, emailValue, confirmValue;
    var messageBox  = '<div class="validation-advice confirm-message">' + validEmailMessage + '</div>';
    if (addressType == 'billing') {
        confirmEmail = $j('#confirmemail_billing');
        emailValue = $j('[name="billing[email]"]').val();
        confirmValue = confirmEmail.val();
        } else {
        confirmEmail = $j('#confirmemail_shipping');
        emailValue = $j('[name="shipping[email]"]').val();
        confirmValue = confirmEmail.val();
        }

    if (emailValue == confirmValue) {
        var confirmMessge = $j('.confirm-message');
        if (confirmMessge.length) confirmMessge.remove();
        confirmEmail.removeClass('validation-failed');
        equalEmails = true;
    } else {
        confirmEmail.parent().append(messageBox);
        confirmEmail.removeClass('validation-passed');
        confirmEmail.addClass('validation-failed');
    }

    return equalEmails;

};

$j.belowthefold = function(element, settings) {
    var fold = $j(window).height() + $j(window).scrollTop();
    return fold <= $j(element).offset().top - settings.threshold;
};

$j.abovethetop = function(element, settings) {
    var top = $j(window).scrollTop();
    return top >= $j(element).offset().top + $j(element).height() - settings.threshold;
};

$j.rightofscreen = function(element, settings) {
    var fold = $j(window).width() + $j(window).scrollLeft();
    return fold <= $j(element).offset().left - settings.threshold;
};

$j.leftofscreen = function(element, settings) {
    var left = $j(window).scrollLeft();
    return left >= $j(element).offset().left + $j(element).width() - settings.threshold;
};

$j.inviewport = function(element, settings) {
    return !$j.rightofscreen(element, settings) && !$j.leftofscreen(element, settings) && !$j.belowthefold(element, settings) && !$j.abovethetop(element, settings);
};

$j.extend($j.expr[':'], {
    "below-the-fold": function(a, i, m) {
        return $j.belowthefold(a, {threshold : 0});
    },
    "above-the-top": function(a, i, m) {
        return $j.abovethetop(a, {threshold : 0});
    },
    "left-of-screen": function(a, i, m) {
        return $j.leftofscreen(a, {threshold : 0});
    },
    "right-of-screen": function(a, i, m) {
        return $j.rightofscreen(a, {threshold : 0});
    },
    "in-viewport": function(a, i, m) {
        return $j.inviewport(a, {threshold : 0});
    }
});

(function($,sr){

    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            }

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    };
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

(function($) {

    $(document).ready(function() {

        isCheckout  = $j(document.body).hasClass('ch3ckout')
        isHomepage  = $(document.body).hasClass('cms-home');
        cachedWidth = $(window).width();
        isProductView = $(document.body).hasClass('catalog-product-view') || $(document.body).hasClass('wishlist-index-configure');

        backToTop();

        resizeEvents();

        commonEvents();

        storeSwitcherEvents();
        formElements();
        fixedHeader();
        widgetsEvents();
        widgetsResizeEvents();
        checkWindowWidth();
        if(isHomepage || $('#home-slider').length) {
            cmsHomeEvents();
        }
        mainMenu();
        windowLoadResizeEvents();
        productListEvents();
        checkoutCartEvents();
        if(isProductView) {
            productViewEvents();
            productViewSlides();
            productViewQuantityOption();
            updateOptionsMobile();
        }
        storeLocator();
        customerEditInfoEvents();
        footerEvents();
        pageGoTop();
        headerPromos();

        if (isCheckout) {
            validateEmails();
        }

        var lazy = $('.lazy');
        if (lazy.length) {

            lazy.unveil(1000, function() {
                $(this).css({ 'opacity': 1});
            });

        }

        $('.minicart .continue-shopping').on('click', function() {
            $('#header-cart').removeClass('skip-active');
            $('#header-cart').removeClass('cart-visible');
            $('#mobile-cart').removeClass('blue-navy');
        });

        $('.mobile-header-search').on('click', function() {
            if($(this).hasClass('search-active')) {
                $('#header-search').removeClass('skip-active');
                $(this).removeClass('search-active');
            } else {
                $('#header-search').addClass('skip-active');
                $(this).addClass('search-active');
            }
        });

    });

    function backToTop() {

        var backToToLink = $('span#back-to-top');
        backToToLink.hide();

        $(window).scroll(function () {
            if ($(this).scrollTop() > $(window).height())
                backToToLink.stop(true, true).fadeIn();
            else
                backToToLink.stop(true, true).fadeOut();
        });

        $(document.body).on('click', 'span#back-to-top', function () {
            $('body,html').animate({
                scrollTop: 0
            }, 200);
            return false;
        });

    }
    function pageGoTop(){

        var $container = $("html,body");
        var $scrollTo = $('.breadcrumbs');

        $(document.body).on('click', '.toolbar-bottom .anchor li', function () {
            $container.animate({
                scrollTop: $scrollTo.offset().top - $container.offset().top - 100,
                scrollLeft: 0
            },500);
            return false;
        });

    }

    function validateEmails() {

        $j(document).on('focusout', '#confirmemail_billing', function() {
            window.validateEmails('billing');
        });

        $j(document).on('focusout', '#confirmemail_shipping', function() {
            window.validateEmails('shipping');
        });

    }

    function resizeEvents() {

        $(window).smartresize(function () {

            globalWindowWidth = $(window).width();
            if (globalWindowWidth > 768) {
                fixedHeader();
            } else {
                preventDefaultScroll($('#header-nav'));
            }

            if (isProductView) {
                productViewEvents();
                productViewReloadSlides();

                if ($('#size-guide-overlay').hasClass('active')) {
                    $('#size-guide .close').trigger('click');
                }
            }

            widgetsResizeEvents();
            checkWindowWidth();
            hideElementsIfShown(true, true);
            windowLoadResizeEvents();
            footerEvents();

        });

    }

    function commonEvents() {

        var toggleContainer = $('.toogle-content');
        var toggleLink      = $('.toggle-title');

        var addToScrollTop = 160;
        if (globalWindowWidth >= 680 && globalWindowWidth <= 768) {
            addToScrollTop = 200;
        }

        $('.user-logged-in').on({
            'mouseover': function() {
                $(this).addClass('active');
            },
            'mouseleave': function() {
                $(this).removeClass('active');
            }
        });

        if (toggleContainer.length) {

            toggleLink.on('click', function() {

                var currentTitle = $(this);
                var currentContent = currentTitle.find('+ .hide-content');

                toggleLink.not(currentTitle).removeClass('active');
                currentTitle.toggleClass('active');

                $('.hide-content').not(currentContent).stop(true, true).slideUp();
                currentContent.stop(true, true).slideToggle(function() {

                    if (currentTitle.hasClass('active')) {
                        var currentTopPos = currentTitle.offset().top;
                        $('html, body').stop(true, true).animate({
                            scrollTop: currentTopPos - addToScrollTop
                        }, 300);
                    }

                });

            });

        }

        var toggleContainerInside = $('.hide-content-inside');
        var toggleLinkInside      = $('.toggle-title-inside');

        if (toggleContainerInside.length) {

            toggleLinkInside.on('click', function() {

                var currentTitle = $(this);
                var currentContent = currentTitle.find('+ .hide-content-inside');

                toggleLinkInside.not(currentTitle).removeClass('active');
                currentTitle.toggleClass('active');

                $('.hide-content-inside').not(currentContent).stop(true, true).slideUp();
                currentContent.stop(true, true).slideToggle(function() {

                    if (currentTitle.hasClass('active')) {
                        var currentTopPos = currentTitle.offset().top;

                        $('html, body').stop(true, true).animate({
                            scrollTop: currentTopPos - addToScrollTop
                        }, 300);
                    }

                });

            });

        }

        /* HELP & INFO VIEWS */
        if ($('#help-menu').length) {

            var urlParam = window.location.search;
            if (urlParam != '') {

                urlParam = urlParam.replace('?', '');
                urlParam = urlParam.replace('/', '');
                $('.toggle-title#' + urlParam).trigger('click');

            }

        }

    }

    function storeSwitcherEvents() {

        $('#store-switcher, #account-menu').on({
            'click': function() {
                $(this).toggleClass('active');
                $(this).find('ul').stop(true, true).slideToggle();
            },
            'mouseleave': function() {
                $(this).find('ul').stop(true, true).slideUp();
            }
        })

    }

    function formElements() {

        if($('select').length > 0) {
            $('select').each(function() {
                if(!$(this).hasClass('swatch-select')) {
                    $(this).parent().addClass('input-box-select');
                    $(this).after('<i class="icon-DROPDOWN"></i>');
                }
            });
        }

        if($('.radio').length > 0) {
            $('.radio').each(function() {
                $(this).addClass('icon-CIRCLE');
            });
        }

        if($('.checkbox').length > 0) {
            $('.checkbox').each(function() {
                $(this).addClass('icon-TICK');
            });
        }

    }

    function fixedHeader() {

        var windowWidth = $(window).width();
        var headerNav = $('#header-nav');
        var headerMobileNav = $('#header');

        $(window).on('scroll', function () {
            if(!isCheckout) {
                if (windowWidth > 768) {
                    headerMobileNav.removeClass('fixed');
                    if ($(this).scrollTop() > 182) {
                        headerNav.addClass('fixed');
                    } else {
                        headerNav.removeClass('fixed');
                    }
                } else {
                    headerNav.removeClass('fixed');
                    if ($(this).scrollTop() > 0) {
                        headerMobileNav.addClass('fixed');
                    } else {
                        headerMobileNav.removeClass('fixed');
                    }
                }
            }

            var fixedFooter       = $('#fixed-footer');
            var fixedFooterHeight = fixedFooter.height() - 100;
            if ($(window).scrollTop() + $(window).height() + fixedFooterHeight >= $(document).height()) {
                $('#fixed-footer').addClass('visible');
            } else {
                $('#fixed-footer').removeClass('visible');
            }

        });

    }

    function widgetsEvents() {

        $('.row .full-width').each(function () {
            if (!$(this).parents('.row').hasClass('full-width')) {
                $(this).parents('.row').addClass('full-width');
            }
        });

    }

    function widgetsResizeEvents() {

        var hasBackground = $('.has-background');
        var bannerImage   = $('.banner-image:not(.has-background)');
        var windowWidth   = $(window).width();
        var mobileWidth   = 680;
        if(hasBackground.length) {

            hasBackground.each(function () {

                var desktopBackground, tabletBackground, mobileBackground;

                if (windowWidth > 768) {
                    if($(this).attr('data-height') && $(this).attr('data-background')) {
                        var desktopHeight = $(this).attr('data-height');
                        desktopBackground = $(this).attr('data-background');
                        updateElement($(this), desktopHeight, desktopBackground);
                    } else {
                        desktopBackground = $(this).attr('data-src');
                        updateElement($(this), 0, desktopBackground);
                    }
                } else if (windowWidth <= 768 && windowWidth > mobileWidth) {
                    if($(this).attr('data-height-tablet') && $(this).attr('data-background-tablet')) {
                        var tabletHeight = $(this).attr('data-height-tablet');
                        tabletBackground = $(this).attr('data-background-tablet');
                        updateElement($(this), tabletHeight, tabletBackground);
                    } else {
                        tabletBackground = $(this).attr('data-tablet-src');
                        updateElement($(this), 0, tabletBackground);
                    }
                } else {
                    if($(this).attr('data-height-mobile') && $(this).attr('data-background-mobile')) {
                        var mobileHeight = $(this).attr('data-height-mobile');
                        mobileBackground = $(this).attr('data-background-mobile');
                        updateElement($(this), mobileHeight, mobileBackground);
                    } else {
                        mobileBackground = $(this).attr('data-mobile-src');
                        updateElement($(this), 0, mobileBackground);
                    }
                }
            });
        }

        if (bannerImage.length) {
            bannerImage.each(function () {
                var currentImage = $(this).find('img');
                if (windowWidth > 768) {
                    if(currentImage.attr('data-src')) {
                        var desktopSrc = currentImage.attr('data-src');
                        updateElement(currentImage, 0, desktopSrc);
                    }
                } else if (windowWidth <= 768 && windowWidth > mobileWidth) {
                    if(currentImage.attr('data-tablet-src')) {
                        var tabletSrc = currentImage.attr('data-tablet-src');
                        updateElement(currentImage, 0, tabletSrc);
                    }
                } else {
                    if(currentImage.attr('data-mobile-src')) {
                        var mobileSrc = currentImage.attr('data-mobile-src');
                        updateElement(currentImage, 0, mobileSrc);
                    }
                }
            });
        }

        var narrowByList   = $('#sln-filter-default #narrow-by-list');
        var layeredFilters = $('#narrow-by-list, .block-layered-nav .block-content > dl > dd');
        if (narrowByList.length > 0 && windowWidth > 768) {
            layeredFilters.stop(true, true).fadeIn();
        } else if (narrowByList.length > 0 && windowWidth <= 768) {
            $('#toggleFilters').removeClass('active');
            layeredFilters.stop(true, true).fadeOut();
        }

        var rowFullOverlay = $('.row-full-overlay');
        if (rowFullOverlay.length) {

            var prevHeight = 0,
                currentHeight = 0,
                currentTextHeight = 0,
                currentContentHeightUP = 0,
                currentContentHeightDOWN = 0;

            rowFullOverlay.each(function() {

                var currentItem = $(this).find('.full-overlay');
                currentItem.each(function() {

                    var currentImage = $(this).find('.banner-image');
                    var currentText  = $(this).find('.banner-table');

                    currentContentHeightUP   = currentImage.height();
                    currentContentHeightDOWN = currentText.height() + 22; // 22  = padding + border-width
                    currentHeight            = currentContentHeightUP + currentContentHeightDOWN;

                    if (currentContentHeightDOWN > currentTextHeight) {
                        currentTextHeight = currentContentHeightDOWN;
                    }

                    if (currentHeight > prevHeight) {
                        prevHeight = currentHeight;
                    }
                });

                currentItem.css('min-height', prevHeight + 'px');
                currentItem.find('.banner-table').css('min-height', currentTextHeight + 'px');

            });

        }

    }

    function updateElement(element, height, image) {

        if (parseInt(height) > 0) {
            element.animate({'height': height}, 'fast');
            element.css('background-image', 'url(' + image + ')');
        } else if (element.hasClass('slidetItemContent')) {
            element.css('background-image', 'url(' + image + ')');
        } else {
            element.attr('src', image);
        }

    }

    function checkWindowWidth() {

        var windowWidth = $(window).width();
        if (windowWidth <= 768) {
            $('#header-nav').after($('#header-cart'));
        } else {
            if ($('.header-container #header-search').length <= 0) {
                $('.header-container .blue-navy').after($('#header-search'));
            }

            if ($('.header-container #header-cart').length <= 0) {
                $('.header-container #header-account').after($('#header-cart'));
            }
        }

    }

    function cmsHomeEvents() {

        var homeSliderType = 'horizontal';
        if (homeSlider == 'fade') {
            homeSliderType = homeSlider;
        }

        var isAuto = false;
        if (SliderAutoplay == 1) {
            isAuto = true;
        }

        var timeOut = 4000;
        if (SliderTimeout != 4000) {
            timeOut = SliderTimeout;
        }

        $('.home-slider').bxSlider({
            mode: homeSliderType,
            auto: isAuto,
            pause: timeOut,
            pager: false,
            prevText: '<i class="icon-ARROW1"></i>',
            nextText: '<i class="icon-ARROW2"></i>',
            swipeThreshold: 150
        });

    }

    function mainMenu() {

        // Main Menu events
        var pageHTML = $('.page');
        pageHTML.on('click', '#mobile-menu', function() {
            hideElementsIfShown(true, false);
            $('#header-nav #header-search').toggleClass('show');
            $(this).toggleClass('blue-navy open');
            $('#header-nav').toggleClass('menu-active');
        });

        // Mini Cart events
        pageHTML.on('click', '#mobile-cart', function() {
            hideElementsIfShown(false, true);
            $(this).toggleClass('blue-navy');
            $('#header-cart').toggleClass('cart-visible');
        });

        pageHTML.on('click', '#close-cart', function() {
            var windowWidth = $(window).width();
            if (windowWidth > 768) {
                $('.skip-cart').trigger('click');
            } else {
                $('#mobile-cart').trigger('click');
            }
        });

        pageHTML.on('mouseleave', '#header-account', function() {
            $(this).removeClass('skip-active');
        });

        pageHTML.on('mouseleave', '#header-cart', function() {
            $(this).removeClass('skip-active');
        });

        pageHTML.on('focusout', '#search_mini_form', function() {
            $(this).removeClass('skip-active');
        });

        $(document).on('mouseover', '.header-container .right-container .skip-link', function() {
            if ($(this).hasClass('.skip-search')) {
                $('#header-account, #header-cart').removeClass('skip-active');
            } else if ($(this).hasClass('skip-account')) {
                $('#header-search, #header-cart').removeClass('skip-active');
            } else if ($(this).hasClass('skip-cart')) {
                $('#header-account, #header-search').removeClass('skip-active');
            }
        });

        if($('html').hasClass('touch') && cachedWidth <= 768) {
            $('.page').off('click').on('click', '.nav-primary a.has-children', function (event) {
                if(!$(this).hasClass('active')) {
                    event.preventDefault();
                }

                $('.nav-primary a.has-children').not($(this)).removeClass('active');
                $(this).toggleClass('active');

                var submenu = $(this).parent().find('.submenu-block');
                var submenuNotThis = $('.submenu-block').not(submenu);
                submenuNotThis.stop(true, true).slideUp(200);
                submenu.stop(true, true).slideToggle(400);

                var itemIndex = $(this).parent().index() * 60;
                $('#header-nav').stop(true, true).animate({
                    scrollTop: 75 + itemIndex
                }, 200);

            });
        }

    }

    function hideElementsIfShown(menu, cart) {

        if ($('#header-nav').hasClass('menu-active') && cart) {
            $('#mobile-menu').trigger('click');
        }

        if ($('#header-cart').hasClass('cart-visible') && menu) {
            $('#mobile-cart').trigger('click');
        }

        var windowWidth = $(window).width();
        var footerUL    = $('#footer-links .footer-column ul');
        if (windowWidth > 768) {
            footerUL.css('display', 'block');
        } else {
            footerUL.css('display', 'none');
        }

    }

    function windowLoadResizeEvents() {

        var defaultPadding = 121;
        var windowWidth = $(window).width();

        var breadcrumbsUL  = $('.breadcrumbs ul');
        var isHelpInfoPage = $(document.body).hasClass('cms-help-information') ||
            $(document.body).hasClass('cms-contact-us') ||
            $(document.body).hasClass('cms-customer-services') ||
            $(document.body).hasClass('cms-legal-cookies');

        if ($('.breadcrumbs').length > 0 && windowWidth >= 1160 && !isCheckout) {

            breadcrumbsUL.css('padding', '0 0 0 ' + defaultPadding + 'px');

            if ($(document.body).hasClass('checkout-cart-index')) {
                var containerWidth = $('.breadcrumbs ul').width() - defaultPadding;
                $('.col-main > .cart').css('max-width', containerWidth + 'px');
            }

            if ($(document.body).hasClass('customer-account-login')) {
                var containerWidth = $('.breadcrumbs ul').width() - defaultPadding;
                $('.col-main > .account-login').css('max-width', containerWidth + 'px');
            }

            if ($(document.body).hasClass('customer-account') || isHelpInfoPage) {
                var containerWidth = $('.breadcrumbs ul').width() - defaultPadding;
                $('.main > .column2-container').css('max-width', containerWidth + 'px');
            }

        } else if ($('.breadcrumbs').length > 0 && windowWidth < 1160 && windowWidth >= 1024 && !isCheckout) {

            var navPadding = parseInt($('.nav-primary li.level0.first a.level0').css('padding-left'));
            var mainMenuLeft = $('.nav-primary li.level0.first').offset().left + navPadding;
            breadcrumbsUL.css('padding', '0 0 0 ' + mainMenuLeft + 'px');

            if ($(document.body).hasClass('checkout-cart-index')) {
                var containerWidth = $('.breadcrumbs ul').width() - mainMenuLeft;
                $('.col-main > .cart').css('max-width', containerWidth + 'px');
            }

            if ($(document.body).hasClass('customer-account-login')) {
                var containerWidth = $('.breadcrumbs ul').width() - mainMenuLeft;
                $('.col-main > .account-login').css('max-width', containerWidth + 'px');
            }

            if ($(document.body).hasClass('customer-account') || isHelpInfoPage) {
                var containerWidth = $('.breadcrumbs ul').width() - mainMenuLeft;
                $('.main > .column2-container').css('max-width', containerWidth + 'px');
            }

        } else if ($('.breadcrumbs').length > 0 && !isCheckout) {

            var navPadding = parseInt($('.nav-primary li.level0.first a.level0').css('padding-left'));
            var mainMenuLeft = $('.nav-primary li.level0.first').offset().left + navPadding;
            breadcrumbsUL.css('padding', '0 0 0 ' + mainMenuLeft + 'px');

            if ($(document.body).hasClass('customer-account') || isHelpInfoPage) {
                $('.main > .column2-container').css('max-width', '100%');
            }

        }

    }

    var productListEvents = function() {

        var showScroll = $('.showScroll');
        if (showScroll.length) {
            showScroll.each(function () {
                $(this).parent().addClass('right-padding');
            });
        }

        $(document).off('click').on('click', '#toggleFilters', function() {
            $(this).toggleClass('open');
            $('#narrow-by-list').stop(true, true).slideToggle();
        });

    };

    function productViewEvents() {

        setTimeout(function() {
            var productShop = $('.product-shop');
            var productContainer = $('#product-container');
            var productShopTop, productShopLeft, productContainerTop, setAbsolutePosition;
            if (globalWindowWidth >= 768) {
                productShopTop = productShop.offset().top;
                productShopLeft = productShop.offset().left;
                productContainerTop = productContainer.offset().top;
                var productShopH = productShop.height();
                var productContainerH = productContainer.height();
                var galleryTop = $('.gallery-slider li:last-child').offset().top;
                var galleryHeight = $('.gallery-slider li:last-child img').height();
                var removeFixed = galleryTop + galleryHeight - productShopH;
                setAbsolutePosition = productContainerH + productContainerTop - productShopH - 110;
            }
            var bulletsLi = $('#bullets li');

            var gIndex = 1;
            $(window).on('scroll', function () {

                if (cachedWidth >= 768) {

                    $('.product-image-gallery .gallery-slider li img:in-viewport').each(function() {
                        var galleryItem = $(this);
                        gIndex = galleryItem.parent().index() + 1;
                        bulletsLi.removeClass('active');
                        $('#bullets li:nth-child(' + gIndex + ')').addClass('active');
                    });

                    if ($(this).scrollTop() >= productShopTop && $(this).scrollTop() < removeFixed) {
                        productShop.removeClass('absolute');
                        productShop.addClass('fixed');
                        productShop.css('left', productShopLeft + 'px');
                    } else {
                        productShop.removeClass('absolute');
                        productShop.removeClass('fixed');
                    }

                    //if ($('.block-related').visible(true, true) || $('#wearing-hackett').visible(true, true)) {
                    if ($(this).scrollTop() >= setAbsolutePosition) {
                        productShop.removeClass('fixed');
                        productShop.addClass('absolute');
                    }

                    if ($(this).scrollTop() <= 0) {
                        bulletsLi.removeClass('active');
                        $('#bullets li:first-child').addClass('active');
                    }

                } else {

                    productShop.removeClass('absolute');
                    productShop.removeClass('fixed');

                }

            });

            var currentImageHeight = 0, scrollToPosition = 0;
            bulletsLi.off('click').on('click', function() {

                bulletsLi.not($(this)).removeClass('active');
                $(this).addClass('active');

                var itemPosition = $(this).index();
                if(itemPosition > 0) {
                    currentImageHeight = $('.gallery-slider li:nth-child(' + itemPosition + ') img').height() - 100;
                    scrollToPosition   = $('.gallery-slider li:nth-child(' + itemPosition + ')').offset().top + currentImageHeight;
                } else {
                    scrollToPosition   = 0;
                }

                $('html, body').stop(true, true).animate({
                    scrollTop: scrollToPosition
                }, 400);

            });

        }, 300);

        var productInfoItem = $('.extra-info-container h3');
        $(document).off('click').on('click', '.extra-info-container h3', function() {
            productInfoItem.not($(this)).removeClass('active');
            var element = $(this).parent().find('.content');
            $(this).toggleClass('active');
            $('.extra-info-container .content').not(element).stop(true, true).slideUp();
            element.stop(true, true).slideToggle();
        });

        $(document).on('click', '#mobile-options span', function() {
            $('#mobile-options span').not($(this)).removeClass('active');
            $(this).toggleClass('active');
            var itemCode = $(this).attr('data-code');
            var currentItem = $('.product-options dd.' + itemCode);
            $('.product-options dd').not(currentItem).stop(true, true).slideUp();
            currentItem.stop(true, true).slideToggle();
        });

        var currentIndex = 0;
        var isClickOnImage = false;
        var fullSlider = $('#full-gallery-container');

        if (fullSlider.is(':empty')) {
            var galleryFull = $('.product-image-gallery .gallery-slider').clone();
            fullSlider.append(galleryFull);

            sliderFull = $('#full-gallery-container .gallery-slider').bxSlider({
                pager: false,
                infiniteLoop: false,
                prevText: '<i class="icon-ARROW1"></i>',
                nextText: '<i class="icon-ARROW2"></i>',
                hideControlOnEnd: true,
                onSliderLoad: function() {
                    $('#full-gallery-container .bx-wrapper').prepend('<span class="close icon-CROSS"></span>');

                    $('#full-gallery-container .close').on('click', function() {
                        $('html').removeClass('no-overflow');
                        fullSlider.removeClass('active');
                    });
                }
            });
        }

        $(document).on('click', '#image-zoom', function(event) {

            if (event) event.preventDefault();

            if (typeof slider !== "undefined") {
                currentIndex = slider.getCurrentSlide();
            } else if (!isClickOnImage) {
                currentIndex = 0;
            }

            $('html').addClass('no-overflow');
            fullSlider.addClass('active');

        });

        if(cachedWidth >= 768) {
            $(document).on('click', '.product-img-box .product-image img', function () {
                isClickOnImage = true;
                currentIndex = $(this).parent().index();
                sliderFull.goToSlide(currentIndex);
                $('html').addClass('no-overflow');
                fullSlider.addClass('active');
            });
        }

        $('.open-sizeguide-mobile').on('click', function() {
            if ($.trim($("#size-guide-container").html()) != '') {
                $j('#open-size-guide').trigger('click');
            }
        });

        $('.size-table').each(function() {

            var countRows = $(this).find('tr').length;
            $(this).addClass('size-table-' + countRows);

        });

        $(document).on('click', '#open-size-guide', function() {
            //updateSizeGuideTable();
            if ($.trim($("#size-guide-container").html()) != '') {
                setTimeout(function () {
                    $('html').addClass('no-overflow');
                    $('#size-guide-overlay').addClass('active');
                }, 300);
            }
        });

        $(document).on('click', '#size-guide .close', function() {
            $('html').removeClass('no-overflow');
            $('#size-guide-overlay').removeClass('active');
        });

        preventDefaultScroll($('#detail-overlay'));

        $(document).on('click', '.open-details-mobile', function() {
            var detailOverlay = $('#detail-overlay > div');
            $('#detail-overlay #product-extra-info').remove();
            var clonedDetails = $('#product-shop-container #product-extra-info').clone();
            detailOverlay.append(clonedDetails);
            setTimeout(function() {
                detailOverlay.parent().addClass('active');
            }, 300);
        });

        $(document).on('click', '#details-title .close', function() {
            $('#detail-overlay').removeClass('active');
            setTimeout(function() {
                $('#detail-overlay #product-extra-info').remove();
            }, 300);
        });

        $(document).on('click', '.size-type li a, #size-type li a', function(event) {
            if(event) event.preventDefault();
            var tableID = $(this).attr('class');
            $('.size-type li a, #size-type li a').not($(this)).removeClass('selected');
            $(this).addClass('selected');
            tableID = tableID.split(' ');
            $('.size-table:not(#' + tableID[0] + ')').animate({opacity: 0}, 200, function() {
                $('#' + tableID[0]).animate({opacity: 1}, 200);
            });
        });

    }

    var updateSizeGuideTable = function() {

        var sizeTables   = $j('.size-table');
        var countRows    = $j('.size-table:first-child tr').length;
        var countColumns = $j('.size-table:first-child tr:first-child td').length;

        if (globalWindowWidth < 768 && countColumns > countRows) {

            sizeTables.removeClass('desktop-table');
            sizeTables.addClass('mobile-table');

        } else {

            sizeTables.removeClass('mobile-table');
            sizeTables.addClass('desktop-table');

        }
        convertTable();

    };

    function convertTable() {

        $j('.size-table').each(function () {
            var $this = $j(this);
            var newrows = [];
            $this.find("tr").each(function () {
                var i = 0;
                $j(this).find("td").each(function () {
                    i++;
                    if (newrows[i] === undefined) {
                        newrows[i] = $j("<tr></tr>");
                    }
                    newrows[i].append($j(this));
                });
            });
            $this.find("tr").remove();
            $j.each(newrows, function () {
                $this.append(this);
            });
        });

    }

    function updateOptionsMobile() {

        var countOptions = $('.product-options dd').length;
        $('#mobile-options').addClass('options-' + countOptions);

        $('.product-options dd').each(function() {
            var attrName = $(this).attr('data-name');
            var attrCode = $(this).attr('data-code');
            $('#mobile-options').prepend('<span data-code="'+attrCode+'" class="mobile-show-'+attrCode+'">'+attrName+'</span>');
        });

    }

    function productViewSlides() {

        var itemsCount = 5, wearingCount = 5,
            containerWidth = $('.product-view').width(),
            relatedWidth = containerWidth * 0.2 - 16,
            wearingdWidth = containerWidth * 0.2 - 34;
        if (cachedWidth <= 1024 && cachedWidth >= 768) {
            itemsCount = 4;
            wearingCount = 4;
            relatedWidth = containerWidth * 0.25 - 7;
            wearingdWidth = containerWidth * 0.25 - 33;
        } else if (cachedWidth < 768 && cachedWidth >= 600) {
            itemsCount = 2;
            wearingCount = 2;
            relatedWidth = containerWidth * 0.50 - 5;
            wearingdWidth = containerWidth * 0.50 - 28;
        } else if (cachedWidth < 600) {
            wearingCount = 1;
            itemsCount = 2;
            relatedWidth = containerWidth * 0.50 - 5;
            wearingdWidth = containerWidth;
        }

        if (!sliderRelatedActive) {
            sliderRelated = $('#block-related').bxSlider({
                slideWidth: relatedWidth,
                pager: false,
                infiniteLoop: false,
                minSlides: itemsCount,
                maxSlides: itemsCount,
                moveSlides: 1,
                prevText: '<i class="icon-ARROW1"></i>',
                nextText: '<i class="icon-ARROW2"></i>',
                onSliderLoad: function () {
                    sliderRelatedActive = true;
                }
            });
        }

        if (!sliderWearingActive) {
            sliderWearing = $('#block-wearing').bxSlider({
                slideWidth: wearingdWidth,
                pager: false,
                minSlides: wearingCount,
                maxSlides: wearingCount,
                moveSlides: 1,
                prevText: '<i class="icon-ARROW1"></i>',
                nextText: '<i class="icon-ARROW2"></i>',
                onSliderLoad: function () {
                    sliderWearingActive = true;
                    updateControlsTop();
                }
            });
        }

        if (!sliderActive && cachedWidth < 768) {

            slider = $('.gallery-slider').bxSlider({
                infiniteLoop: false,
                controls: false,
                preloadImages: 'all',
                onSliderLoad: function(){
                    sliderActive = true;
                }
            });

        } else {

            if (sliderActive) {
                slider.destroySlider();
                sliderActive = false;
            }

        }

    }

    function productViewQuantityOption() {
        $('.qty-wrapper span').on('click', function() {
            var currentValue = $(this).parent().parent().find('input').attr('value');
            var currentClass = $(this).attr('class');
            if(currentClass == 'less') currentValue--;
            else currentValue++;
            if(currentValue <= 0) currentValue = 1;
            $(this).parent().parent().find('input').attr('value', currentValue);
            $('input#qty').trigger('focusout');
            opConfig.reloadPrice();
        });
    }

    function productViewReloadSlides() {

        if (!mobilecheck) {

            var itemsCount = 5, wearingCount = 5,
                containerWidth = $('.product-view').width(),
                relatedWidth = containerWidth * 0.2 - 16,
                wearingdWidth = containerWidth * 0.2 - 34;
            if (cachedWidth <= 1024 && cachedWidth >= 768) {
                itemsCount = 4;
                wearingCount = 4;
                relatedWidth = containerWidth * 0.25 - 7;
                wearingdWidth = containerWidth * 0.25 - 33;
            } else if (cachedWidth < 768 && cachedWidth >= 600) {
                itemsCount = 2;
                wearingCount = 2;
                relatedWidth = containerWidth * 0.50 - 5;
                wearingdWidth = containerWidth * 0.50 - 28;
            } else if (cachedWidth < 600) {
                wearingCount = 1;
                itemsCount = 2;
                relatedWidth = containerWidth * 0.50 - 10;
                wearingdWidth = containerWidth;
            }

            if (cachedWidth < 768) {

                if (sliderRelatedActive) {
                    sliderRelated.reloadSlider({
                        slideWidth: relatedWidth,
                        pager: false,
                        minSlides: itemsCount,
                        maxSlides: itemsCount,
                        moveSlides: 1,
                        prevText: '<i class="icon-ARROW1"></i>',
                        nextText: '<i class="icon-ARROW2"></i>',
                        onSliderLoad: function () {
                            sliderRelatedActive = true;
                        }
                    });
                }

                if (sliderWearingActive) {
                    sliderWearing.reloadSlider({
                        slideWidth: wearingdWidth,
                        pager: false,
                        minSlides: wearingCount,
                        maxSlides: wearingCount,
                        moveSlides: 1,
                        prevText: '<i class="icon-ARROW1"></i>',
                        nextText: '<i class="icon-ARROW2"></i>',
                        onSliderLoad: function () {
                            sliderWearingActive = true;
                            updateControlsTop();
                        }
                    });
                }

                if (sliderActive) {
                    slider.reloadSlider({
                        infiniteLoop: false,
                        controls: false,
                        preloadImages: 'all',
                        onSliderLoad: function () {
                            sliderActive = true;
                        }
                    });
                }

            } else {

                if (sliderActive) {
                    slider.destroySlider();
                    sliderActive = false;
                }

            }

        }

    }

    function updateControlsTop() {

        setTimeout(function() {
            if ($('.block-related').length) {
                var relatedControlsTop = parseInt(($('#block-related .product-image img').height() / 2) - 15);
                $('.block-related .bx-wrapper .bx-controls a').css('top', relatedControlsTop + 'px');
            }

            if ($('#wearing-hackett').length) {
                var wearingControlsTop = parseInt((($('#wearing-hackett li').height() + 20) / 2) - 15);
                $('#wearing-hackett .bx-wrapper .bx-controls a').css('top', wearingControlsTop + 'px');
            }
        }, 1000);

    }

    function checkoutCartEvents() {

        $('#discount-coupon-form label').on('click', function() {
                if($(this).hasClass('label-active')) {
                    $(this).removeClass('label-active');
                    $('#discount-coupon-form .field-wrapper').stop(true, true).slideUp();
                } else {
                    $(this).addClass('label-active');
                    $('#discount-coupon-form .field-wrapper').stop(true, true).slideDown();
                }
        });

    }

    function storeLocator() {

        $(document).off('touchend').on('touchend click', '#auit-storelocator-sel-country li, #auit-storelocator-sel-city li', function() {

            $('#store-alert').stop(true, true).fadeOut();
            var itemData  = $(this).attr('data-value');
            var parentID  = $(this).parent().attr('id');
            var storeItem = $('#auit-storelocator-location > li');
            if ($(this).index() == 0) {
                AuIt_Gmap.resetDirection();
                AuIt_Gmap.onChangeCountry(0);
                return false;
            } else {
                if (parentID == 'auit-storelocator-sel-country') {
                    AuIt_Gmap.onChangeCountry(itemData);
                    storeItem.stop(true, true).fadeIn();
                } else if (parentID == 'auit-storelocator-sel-city') {
                    if ($('#auit-storelocator-sel-country li.selected').length <= 0) {
                        $('#store-alert').stop(true, true).fadeIn();
                    } else {
                        $('#store-alert').stop(true, true).fadeOut();
                        AuIt_Gmap.onChangeCity(itemData);
                        storeItem.stop(true, true).fadeIn();
                    }
                }
            }

        });

        var currentServices = [];
        $(document).off('touchend').on('touchend click', '#auit-storelocator-sel-service li:not(:first-child)', function(event) {

            event.stopPropagation();
            $(this).toggleClass('selected');
            var storeItem     = $('#auit-storelocator-location > li:not(.city-name)');
            var storeItemA4   = $('#auit-storelocator-location > li:nth-child(n+4)');
            var selectedItems = $('#auit-storelocator-sel-service li.selected');

            if (parseInt($(this).index(), 10) == 0 || selectedItems.length <= 0) {

                storeItemA4.removeClass('image-visible');
                storeItem.removeClass('not-visible');
                storeItem.stop(true, true).fadeIn();

            } else {

                var itemService = $(this).attr('data-services');
                if ($.inArray(itemService, currentServices) < 0) {
                    currentServices.push(itemService);
                } else {
                    currentServices.splice($j.inArray(itemService, currentServices), 1);
                }

                $('#auit-storelocator-sel-service li.selected').each(function () {
                    var selectedService = $(this).attr('data-service');
                    currentServices.push(selectedService);
                });

                storeItem.stop(true, true).fadeOut(function () {
                    $(this).addClass('not-visible');
                    storeItem.each(function () {
                        if (!$(this).hasClass('city-name')) {
                            var storeServices = $(this).find('.auit-storelocator-item').attr('data-services');
                            storeServices = storeServices.replace(' ', '');
                            storeServices = storeServices.split(',');
                            for (var i = 0; i < currentServices.length; i++) {
                                if ($.inArray(currentServices[i], storeServices) >= 0) {
                                    $(this).removeClass('not-visible');
                                    $(this).stop(true, true).fadeIn();
                                }
                            }
                        }
                    });
                    updateStoreList();
                });
            }

        });

        var toggleTrigger = $('#auit-storelocator-toolbar #narrow-by-list dt');
        var toggleItem    = $('#auit-storelocator-toolbar #narrow-by-list dd');
        toggleTrigger.off('click').on('click', function(event) {
            event.preventDefault();
            var currentItem   = $(this);
            var currentToggle = $(this).find(' + dd');
            toggleTrigger.not(currentItem).removeClass('icon-ARROW3');
            toggleItem.not(currentToggle).stop(true, true).slideUp();
            currentItem.toggleClass('icon-ARROW3');
            currentToggle.stop(true, true).slideToggle();
        });

        preventDefaultScroll($('.block-layered-nav dl dd.right-padding ol'));

    }

    function updateStoreList() {

        /*
        var firstFour = 0;
        $('#auit-storelocator-location li').each(function() {
            if (firstFour < 4 && !$(this).hasClass('not-visible')) {
                if ($(this).find('.border').length <= 0) {
                    $(this).append('<span class="border"></span>');
                }
                firstFour++;
            } else {
                $(this).find('.border').remove();
            }
        });
        */

        $('#current-location span').text('(' + $('#auit-storelocator-location li:not(.not-visible)').length + ')');

    }

    function customerEditInfoEvents() {

        if($('#current_password').length) {

            var elements = $('#current_password, #password, #confirmation');
            var current  = $('#current_password');
            var newPass  = $('#password');
            var confNew  = $('#confirmation');

            current.on({
                focus: function () {
                    elements.addClass('required-entry');
                },
                blur: function () {
                    elements.each(function() {
                        if ($(this).val() == '') {
                            $(this).addClass('required-entry');
                        } else {
                            $(this).removeClass('required-entry');
                        }
                    });
                }
            });

        }

    }

    function footerEvents() {

        var fixedFooter    = $('#fixed-footer');
        var fixedFooterHeight = fixedFooter.height() - 15;
        var windowWidth    = $(window).width();
        var footer         = $('#menu-footer-header');
        var toggleElements = $('#footer-links #menu-footer-logo, #logo-footer, #footer-links .footer-column ul');
        var footerMobile   = $('#footer-links .footer-column .block-title');
        var footerULs      = $('#footer-links .footer-column ul');

        if (windowWidth > 768) {

            footerULs.slideDown();
            $('body > .wrapper').css('margin-bottom', fixedFooterHeight + 'px');

            footerMobile.off('click');
            footer.off('click').on({
                click: function (event) {
                    toggleElements.stop(true, true).slideDown('fast', function () {
                        if (!footer.hasClass('active')) {
                            footer.addClass('active');
                            $('html, body').stop(true, true).animate({
                                scrollTop: $(document).height()
                            }, 200);
                        }
                    });
                    event.stopPropagation();
                    event.preventDefault();
                }
            });

        } else {

            footerULs.slideUp();
            $('.wrapper').css('margin-bottom', '0');

            footer.off('click');
            footer.off('mouseleave');
            footerMobile.off('click').on('click', function (event) {

                footerMobile.not($(this)).removeClass('active');
                $(this).toggleClass('active');
                var currentItem = $(this).parents('.footer-column').find('ul');
                $('#footer-links .footer-column ul').not(currentItem).stop(true, true).slideUp();
                currentItem.stop(true, true).slideToggle();
                event.stopPropagation();
                event.preventDefault();

            });
        }

    }

    function preventDefaultScroll(element) {

        element.bind('mousewheel DOMMouseScroll', function (e) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;

            this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
            e.preventDefault();
        });

    }


    function headerPromos(){
        $(".header-promo span").click(function(){
            $(".header-promo").css("display","none");
        });
    }

})(jQuery);