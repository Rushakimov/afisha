$(document).ready(function(){

    /*- menu-btn -*/
    var siteToggle = $('.catalogue'),
        siteMenu= $('.catalogue__dropdown');

    siteToggle.hover(function(){
        $(this).toggleClass("collapsed");
          siteMenu.toggleClass("show");
        $('.catalogue-overlay').toggleClass('show');
        $('.wrapper').toggleClass('overflow-hd');
    });

	/*- promo-slider -*/
    var swiper = new Swiper(".promo-slider", {
	    spaceBetween: 30,
	    loop: true,
	    effect: "fade",
	    navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
	    },
	    pagination: {
			el: ".swiper-pagination",
			clickable: true,
	    },
	});

    /*- product-slider -*/
    var swiper = new Swiper("#top-ads .swiper", {
        slidesPerView: 6,
        spaceBetween: 1,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: "#top-ads .swiper-button-next",
          prevEl: "#top-ads .swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 4,
          },
          1199: {
            slidesPerView: 5,
          },
        },
    });

    var swiper = new Swiper("#building-materials .swiper", {
        slidesPerView: 6,
        spaceBetween: 1,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: "#building-materials .swiper-button-next",
          prevEl: "#building-materials .swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 4,
          },
          1199: {
            slidesPerView: 5,
          },
        },
    });

    var swiper = new Swiper("#plumbing .swiper", {
        slidesPerView: 6,
        spaceBetween: 1,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: "#plumbing .swiper-button-next",
          prevEl: "#plumbing .swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 4,
          },
          1199: {
            slidesPerView: 5,
          },
        },
    });

    var swiper = new Swiper("#clothes .swiper", {
        slidesPerView: 6,
        spaceBetween: 1,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: "#clothes .swiper-button-next",
          prevEl: "#clothes .swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 4,
          },
          1199: {
            slidesPerView: 5,
          },
        },
    });

    /*- banner-slider -*/
    var swiper = new Swiper(".banner-slider", {
	    spaceBetween: 30,
	    loop: true,
	    effect: "fade",
	    navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
	    },
	});

    /*- categories-slider -*/
    var swiper = new Swiper(".categories-slider__in", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    /*- catalog-slider -*/
    var swiper = new Swiper(".catalog-slider__in", {
        slidesPerView: "auto",
        loop: false,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    /*- category-select -*/
    $('.category-select').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450; // длительность анимации 

        _this.hide();
        _this.wrap('<div class="category-select"></div>');
        $('<div>', {
            class: 'category-select__text',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.category-select__text');
        $('<div>', {
            class: 'category-select__dropdown'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.category-select__dropdown');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'category-select__dropdown__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
        }

        const selectItem = selectList.find('.category-select__dropdown__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });

    /*- sorting-select -*/
    $('.sorting-select').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450; // длительность анимации 

        _this.hide();
        _this.wrap('<div class="sorting-select"></div>');
        $('<div>', {
            class: 'sorting-select__text',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.sorting-select__text');
        $('<div>', {
            class: 'sorting-select__dropdown'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.sorting-select__dropdown');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'sorting-select__dropdown__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
        }

        const selectItem = selectList.find('.sorting-select__dropdown__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });

    /*- filters -*/
    $('.filters__more').click(function(e) {
        if ($(this).html() == 'Показать всё') {
            $(this).html('Скрыть');
            $(this).parents('.filters__list').first().find('li.close').removeClass('close').addClass('open');
            $('.filters__more').addClass('active');
        } else {
            $(this).html('Показать всё');
            $(this).parents('.filters__list').first().find('li.open').removeClass('open').addClass('close');
            $('.filters__more').removeClass('active');
        }
        return false;
    });

    /*- change-view -*/
    $('.view-list span').on('click', function(){
        var el = $(this);
        var item = el.parent();
        var items = el.parents('ul').find('li');
        var itemClass = item.attr('class');

        items.removeClass('active');
        item.addClass('active');

        $('[data-type="weight"]')
        .removeClass('b-block b-list')
        .addClass(itemClass);
    });

    /*- product-photos-slider -*/
    var swiper = new Swiper(".product-photos-slider__sm", {
        direction: 'vertical',
        slidesPerView: "auto",
        spaceBetween: 10,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      var swiper2 = new Swiper(".product-photos-slider__big", {
        spaceBetween: 10,
        thumbs: {
          swiper: swiper,
        },
    });

    /*- likes -*/
    $(".likes-list__item").click(function () {
        var input = $(this).find('.likes-list__text');
        input.val(parseInt(input.val())+ 1);
    });

    /*- tabs__caption -*/
    var last_id;
    var $top_menu = $('.tabs__caption');
    var menu_height = $top_menu.outerHeight(true);
    var $menu_items = $top_menu.find('a');
    var $scroll_items = $menu_items.map(function(){
        var item = $($(this).attr('href'));
        if (item.length){
            return item;
        }
    });
 
    $menu_items.click(function(e){
        var href = $(this).attr('href'),
        offset_top = href === '#' ? 0 : $(href).offset().top - menu_height;
        $('html, body').stop().animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
        e.preventDefault();
    });

    $(window).scroll(function(){
        var from_top = $(this).scrollTop() + menu_height;
        var mar = parseInt($top_menu.css('margin-bottom'));
        var cur = $scroll_items.map(function(){
            if ($(this).offset().top < from_top + mar){
                return this;
            }
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : '';
        if (last_id !== id){
            last_id = id;
            $menu_items.parent()
                .removeClass('active')
                .end()
                .filter("[href='#" + id + "']")
                .parent()
                .addClass('active');
        }
    });

});