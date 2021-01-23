"use strict";

/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Timer
5. Init Favorite
6. Init Fix Product Border
7. Init Isotope Filtering
8. Init Slider


******************************/
jQuery(document).ready(function ($) {
  "use strict";
  /* 
  	1. Vars and Inits
  	*/

  var header = $('.header');
  var topNav = $('.top_nav');
  var mainSlider = $('.main_slider');
  var hamburger = $('.hamburger_container');
  var menu = $('.hamburger_menu');
  var menuActive = false;
  var hamburgerClose = $('.hamburger_close');
  var fsOverlay = $('.fs_menu_overlay');
  setHeader();
  $(window).on('resize', function () {
    initFixProductBorder();
    setHeader();
  });
  $(document).on('scroll', function () {
    setHeader();
  });
  initMenu();
  initTimer();
  initFavorite();
  initFixProductBorder();
  initIsotopeFiltering();
  /* 
  	2. Set Header
  	*/

  function setHeader() {
    if (window.innerWidth < 992) {
      if ($(window).scrollTop() > 100) {
        header.css({
          'top': "0"
        });
      } else {
        header.css({
          'top': "0"
        });
      }
    } else {
      if ($(window).scrollTop() > 100) {
        header.css({
          'top': "-50px"
        });
      } else {
        header.css({
          'top': "0"
        });
      }
    }

    if (window.innerWidth > 991 && menuActive) {
      closeMenu();
    }
  }
  /* 
  	3. Init Menu
  	*/


  function initMenu() {
    if (hamburger.length) {
      hamburger.on('click', function () {
        if (!menuActive) {
          openMenu();
        }
      });
    }

    if (fsOverlay.length) {
      fsOverlay.on('click', function () {
        if (menuActive) {
          closeMenu();
        }
      });
    }

    if (hamburgerClose.length) {
      hamburgerClose.on('click', function () {
        if (menuActive) {
          closeMenu();
        }
      });
    }

    if ($('.menu_item').length) {
      var items = document.getElementsByClassName('menu_item');
      var i;

      for (i = 0; i < items.length; i++) {
        if (items[i].classList.contains("has-children")) {
          items[i].onclick = function () {
            this.classList.toggle("active");
            var panel = this.children[1];

            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          };
        }
      }
    }
  }

  function openMenu() {
    menu.addClass('active'); // menu.css('right', "0");

    fsOverlay.css('pointer-events', "auto");
    menuActive = true;
  }

  function closeMenu() {
    menu.removeClass('active');
    fsOverlay.css('pointer-events', "none");
    menuActive = false;
  }
  /* 
  	4. Init Timer
  	*/


  function initTimer() {
    if ($('.timer').length) {
      // Uncomment line below and replace date
      // var target_date = new Date("Dec 7, 2017").getTime();
      // comment lines below
      var date = new Date();
      date.setDate(date.getDate() + 3);
      var target_date = date.getTime(); //----------------------------------------
      // variables for time units

      var days, hours, minutes, seconds;
      var d = $('#day');
      var h = $('#hour');
      var m = $('#minute');
      var s = $('#second');
      setInterval(function () {
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000; // do some time calculations

        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60); // display result

        d.text(days);
        h.text(hours);
        m.text(minutes);
        s.text(seconds);
      }, 1000);
    }
  }
  /* 
  5. Init Favorite
  */


  function initFavorite() {
    if ($('.favorite').length) {
      var favs = $('.favorite');
      favs.each(function () {
        var fav = $(this);
        var active = false;

        if (fav.hasClass('active')) {
          active = true;
        }

        fav.on('click', function () {
          if (active) {
            fav.removeClass('active');
            active = false;
          } else {
            fav.addClass('active');
            active = true;
          }
        });
      });
    }
  }
  /* 
  6. Init Fix Product Border
  */


  function initFixProductBorder() {
    if ($('.product_filter').length) {
      var products = $('.product_filter:visible');
      var wdth = window.innerWidth; // reset border

      products.each(function () {
        $(this).css('border-right', 'solid 1px #e9e9e9');
      }); // if window width is 991px or less

      if (wdth < 480) {
        for (var i = 0; i < products.length; i++) {
          var product = $(products[i]);
          product.css('border-right', 'none');
        }
      } else if (wdth < 576) {
        if (products.length < 5) {
          var product = $(products[products.length - 1]);
          product.css('border-right', 'none');
        }

        for (var i = 1; i < products.length; i += 2) {
          var product = $(products[i]);
          product.css('border-right', 'none');
        }
      } else if (wdth < 768) {
        if (products.length < 5) {
          var product = $(products[products.length - 1]);
          product.css('border-right', 'none');
        }

        for (var i = 2; i < products.length; i += 3) {
          var product = $(products[i]);
          product.css('border-right', 'none');
        }
      } else if (wdth < 992) {
        if (products.length < 5) {
          var product = $(products[products.length - 1]);
          product.css('border-right', 'none');
        }

        for (var i = 3; i < products.length; i += 4) {
          var product = $(products[i]);
          product.css('border-right', 'none');
        }
      } //if window width is larger than 991px
      else {
          if (products.length < 5) {
            var product = $(products[products.length - 1]);
            product.css('border-right', 'none');
          }

          for (var i = 4; i < products.length; i += 5) {
            var product = $(products[i]);
            product.css('border-right', 'none');
          }
        }
    }
  }
  /* 
  7. Init Isotope Filtering
  */


  function initIsotopeFiltering() {
    if ($('.grid_sorting_button').length) {
      $('.grid_sorting_button').click(function () {
        // putting border fix inside of setTimeout because of the transition duration
        setTimeout(function () {
          initFixProductBorder();
        }, 500);
        $('.grid_sorting_button.active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $('.product-grid').isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
        return false;
      });
    }
  }
  /* 
  8. Init Slider
  */


  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    dots: false
  });
  /* function progress(){
  	setTimeout(function(){
  		$("#progressBar").animate({
  			"width" : "100%"
  		},10000,"linear", function(){
  			$(this).css("width", "0%");
  			owl.trigger('next.owl.carousel');
  			progress;
  		})
  	})
  }
  progress(); */

  function progress() {
    $("#progressBar").css("width", "0%");
    $("#progressBar").animate({
      width: "100%"
    }, 10000, "linear", function () {
      progress();
      owl.trigger('next.owl.carousel');
    });
  }

  progress();
  var displayNew = "";
  var displaySale = "";

  function displayItems(img, name, publisher, price, animation, display) {
    var div = document.createElement("div");
    div.className = "card mb-3 col-12".concat(animation);
    var a = document.createElement("a");
    a.setAttribute("href", "#!");
    div.appendChild(a);
    var image = document.createElement("img");
    image.setAttribute("src", img);
    image.setAttribute("alt", name);
    image.className = "card-img-top";
    a.appendChild(image);
    var card = document.createElement("div");
    card.className = "card-body";
    a.appendChild(card);
    var h5 = document.createElement("h5");
    h5.textContent = name;
    h5.className = "card-title";
    card.appendChild(h5);
    var ul = document.createElement("ul");
    ul.className = "card-info";
    card.appendChild(ul);
    var li1 = document.createElement("li");
    li1.className = "text-muted developer";
    li1.textContent = publisher;
    ul.appendChild(li1);
    var li2 = document.createElement("li");
    li2.className = "price";
    li2.innerHTML = price;
    ul.appendChild(li2);
    $("#" + display).append(div);
  }

  var loadedNew = false;
  var loadedSale = false;

  function newRelease(sectionId, parent) {
    //obrada artikala koji imaju true za new release, ako je true onda se prosledjuje dalje za ispisivanje
    var newToShow;
    var saleToShow;
    var maxItems = 4;
    var numberOfNew = 0;
    var numberOfSale = 0;
    var currentItem = 0;
    var allGames = '';
    $.ajax({
      url: "js/data.json",
      type: "get",
      dataType: "json",
      success: function success(result) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = result.allGames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (item.newRelease) {
              numberOfNew++;
            }

            if (item.price.discount.isDiscounted) {
              numberOfSale++;
              /* console.log(numberOfSale) */
            }

            if (item.newRelease && !loadedNew && !item.price.discount.isDiscounted && sectionId == "newReleases") {
              content = displayItems(item.image.cover, item.name, item.publisher, price(item, item.price.discount), "", sectionId); //price(item = saljemo objekat za dalju obradu, discount= true/false)

              currentItem++;
              item.shownNewReleaseSection = true;

              if (currentItem == maxItems) {
                loadedNew = true;
                maxItems += maxItems;
              }
            }

            if (currentItem < 4 && item.price.discount.isDiscounted && !item.newRelease && sectionId == "hotSales") {
              displayItems(item.image.cover, item.name, item.publisher, price(item, item.price.discount), "", sectionId);
              currentItem++;
              item.shownHotSales = true;
              $("#" + parent + " .showMore").html("Show " + " more");
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      },
      error: function error(xhr, status, _error) {
        console.log(_error);
      }
    });
    var content;
    newToShow = numberOfNew - currentItem;
    saleToShow = numberOfSale - currentItem;

    if (sectionId == "newReleases") {
      $("#" + parent + " .showMore").html("Show " + newToShow + " more");
    } else {
      $("#" + parent + " .showMore").html("Show " + saleToShow + " more");
    }

    console.log(numberOfNew);
    $("#" + parent + " .showMore").on("click", function () {
      if (currentItem == 4) {
        showMore(sectionId, parent, content, currentItem);
      }
    });
  }

  function displayAllSections() {
    newRelease("newReleases", "new");
    newRelease("hotSales", "sale");
  }

  displayAllSections();

  function price(item, discount) {
    if (!discount.isDiscounted) {
      return "<i class=\"fas fa-euro-sign\"></i> ".concat(item.price.value);
    } else {
      return "<span class=\"badge badge-danger\">- ".concat(item.price.discount.amount, " %</span> <s class=\"text-muted\">").concat(item.price.value.before, "</s> <span>").concat(item.price.value.after, "</span>");
    }
  }

  function showMore(sectionId, parent, content, currentItem) {
    var animation = " animate";

    for (var item in allGames) {
      if (item > currentItem && allGames[item].newRelease && allGames[item].id > currentItem && !allGames[item].shownHotSales && parent == "new") {
        displayItems(allGames[item].image.cover, allGames[item].name, allGames[item].publisher, price(allGames[item], allGames[item].price.discount), animation, sectionId); //console.log(allGames[item])
      }

      if (item > 4 && !allGames[item].newRelease && allGames[item].price.discount.isDiscounted && !allGames[item].shownHotSales && parent == "sale") {
        displayItems(allGames[item].image.cover, allGames[item].name, allGames[item].publisher, price(allGames[item], allGames[item].price.discount), animation, sectionId);
      }
      /* if(!allGames[item].newRelease && !loadedAllNew ){
      	
      	//currentItem++;
      	//displayItems(allGames[item].image.cover, allGames[item].name, allGames[item].publisher, price(allGames[item], allGames[item].price.discount), animation, sectionId);
      }
      if(!allGames[item].price.discount.isDiscounted && currentItem == 4){
      	//console.log(allGames[item])
      	//displayItems(allGames[item].image.cover, allGames[item].name, allGames[item].publisher, price(allGames[item], allGames[item].price.discount), animation, sectionId);
      } */

    }

    ;
    var i = 0;
    var delay = 0;
    $("#" + sectionId).html(content);
    $("#" + sectionId + " .animate").animate({
      height: "500px"
    });
    $("#" + sectionId + " .animate").each(function () {
      $("#" + sectionId + " .animate").eq(i).delay(600 * delay++).animate({
        bottom: "0",
        opacity: "1"
      }), i++;
    });
    $("#" + parent + " .showMore").fadeOut(600);
  } //function displayItems(info,itemID,)

});