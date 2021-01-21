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
  var categories = [{
    "id": 1,
    "name": "Action"
  }, {
    "id": 2,
    "name": "Adventure"
  }, {
    "id": 3,
    "name": "Indie"
  }, {
    "id": 4,
    "name": "RPG"
  }, {
    "id": 5,
    "name": "Strategy"
  }, {
    "id": 6,
    "name": "Shooter"
  }, {
    "id": 7,
    "name": "First Person"
  }, {
    "id": 8,
    "name": "Racing"
  }, {
    "id": 9,
    "name": "Horror"
  }, {
    "id": 10,
    "name": "Simulation"
  },, {
    "id": 11,
    "name": "Stealth"
  },, {
    "id": 12,
    "name": "Casual"
  }];
  var platform = [{
    "id": 1,
    "name": "Windows"
  }, {
    "id": 2,
    "name": "Mac OS"
  }];
  var modes = [{
    "id": 1,
    "name": "Single Player"
  }, {
    "id": 2,
    "name": "Multiplayer"
  }, {
    "id": 3,
    "name": "Co-op"
  }];
  var allGames = [//#region Cyberpunk 2077
  {
    "id": 1,
    "name": "Cyberpunk 2077",
    "publisher": "CD PROJEKT RED",
    "releaseDate": "Dec 10, 2020",
    "newRelease": true,
    "image": {
      "cover": "images/banner_1.jpg",
      "gallery": ["", "", ""]
    },
    "price": {
      "discount": false,
      "value": 59.99
    },
    "idCategory": [1, 4],
    "idMode": 1,
    "idPlatform": 1,
    "specifications": {
      "minimum": [{
        "name": "OS",
        "value": "Windows 7"
      }, {
        "name": "Processor",
        "value": "Intel Core i5-3570K or AMD FX-8310"
      }, {
        "name": "Memory",
        "value": "8 GB"
      }, {
        "name": "Graphics",
        "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
      }, {
        "name": "Storage",
        "value": "70 GB (SSD Recommended)"
      }],
      "recommended": [{
        "name": "OS",
        "value": "Windows 10"
      }, {
        "name": "Processor",
        "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
      }, {
        "name": "Memory",
        "value": "12 GB"
      }, {
        "name": "Graphics",
        "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
      }]
    },
    "ratings": {
      "criticsRecommend": 61,
      "criticsAvg": 76,
      "openCritics": "Strong"
    }
  }, //#endregion
  //#region Hitman III
  {
    "id": 2,
    "name": "Hitman III",
    "publisher": "IO Interactive A/S",
    "releaseDate": "Jan 20, 2021",
    "newRelease": true,
    "image": {
      "cover": "images/banner_3.jpg",
      "gallery": ["", "", ""]
    },
    "price": {
      "discount": false,
      "value": 59.99
    },
    "idCategory": [1, 4],
    "idMode": 1,
    "idPlatform": 1,
    "specifications": {
      "minimum": [{
        "name": "OS",
        "value": "Windows 7"
      }, {
        "name": "Processor",
        "value": "Intel Core i5-3570K or AMD FX-8310"
      }, {
        "name": "Memory",
        "value": "8 GB"
      }, {
        "name": "Graphics",
        "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
      }, {
        "name": "Storage",
        "value": "70 GB (SSD Recommended)"
      }],
      "recommended": [{
        "name": "OS",
        "value": "Windows 10"
      }, {
        "name": "Processor",
        "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
      }, {
        "name": "Memory",
        "value": "12 GB"
      }, {
        "name": "Graphics",
        "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
      }]
    },
    "ratings": {
      "criticsRecommend": 61,
      "criticsAvg": 76,
      "openCritics": "Strong"
    }
  }, //#endregion
  //#region AC Valhalla
  {
    "id": 3,
    "name": "Assassin's Creed Valhalla",
    "publisher": "Ubisoft Montreal",
    "releaseDate": "Nov 10, 2020",
    "newRelease": true,
    "image": {
      "cover": "images/banner_2.jpg",
      "gallery": ["", "", ""]
    },
    "price": {
      "discount": false,
      "value": 59.99
    },
    "idCategory": [1, 4],
    "idMode": 1,
    "idPlatform": 1,
    "specifications": {
      "minimum": [{
        "name": "OS",
        "value": "Windows 7"
      }, {
        "name": "Processor",
        "value": "Intel Core i5-3570K or AMD FX-8310"
      }, {
        "name": "Memory",
        "value": "8 GB"
      }, {
        "name": "Graphics",
        "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
      }, {
        "name": "Storage",
        "value": "70 GB (SSD Recommended)"
      }],
      "recommended": [{
        "name": "OS",
        "value": "Windows 10"
      }, {
        "name": "Processor",
        "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
      }, {
        "name": "Memory",
        "value": "12 GB"
      }, {
        "name": "Graphics",
        "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
      }]
    },
    "ratings": {
      "criticsRecommend": 61,
      "criticsAvg": 76,
      "openCritics": "Strong"
    }
  }, //#endregion
  //#region Kena
  {
    "id": 4,
    "name": "Kena: Bridge of Spirits",
    "publisher": "Ember Lab",
    "releaseDate": "Feb 6, 2021",
    "newRelease": false,
    "image": {
      "cover": "images/banner_4.jpg",
      "gallery": ["", "", ""]
    },
    "price": {
      "discount": false,
      "value": 49.99
    },
    "idCategory": [1, 4],
    "idMode": 1,
    "idPlatform": 1,
    "specifications": {
      "minimum": [{
        "name": "OS",
        "value": "Windows 7"
      }, {
        "name": "Processor",
        "value": "Intel Core i5-3570K or AMD FX-8310"
      }, {
        "name": "Memory",
        "value": "8 GB"
      }, {
        "name": "Graphics",
        "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
      }, {
        "name": "Storage",
        "value": "70 GB (SSD Recommended)"
      }],
      "recommended": [{
        "name": "OS",
        "value": "Windows 10"
      }, {
        "name": "Processor",
        "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
      }, {
        "name": "Memory",
        "value": "12 GB"
      }, {
        "name": "Graphics",
        "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
      }]
    },
    "ratings": {
      "criticsRecommend": 61,
      "criticsAvg": 76,
      "openCritics": "Strong"
    }
  }, //#endregion
  //#region Stranded Deep
  {
    "id": 5,
    "name": "Stranded Deep",
    "publisher": "Beam Team Games",
    "releaseDate": "Apr 30, 2016",
    "newRelease": false,
    "image": {
      "cover": "images/banner_5.jpg",
      "gallery": ["", "", ""]
    },
    "price": {
      "discount": true,
      "amount": 50,
      "value": {
        "before": 29.99,
        "after": 14.99
      }
    },
    "idCategory": [1, 4],
    "idMode": 1,
    "idPlatform": 1,
    "specifications": {
      "minimum": [{
        "name": "OS",
        "value": "Windows 7"
      }, {
        "name": "Processor",
        "value": "Intel Core i5-3570K or AMD FX-8310"
      }, {
        "name": "Memory",
        "value": "8 GB"
      }, {
        "name": "Graphics",
        "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
      }, {
        "name": "Storage",
        "value": "70 GB (SSD Recommended)"
      }],
      "recommended": [{
        "name": "OS",
        "value": "Windows 10"
      }, {
        "name": "Processor",
        "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
      }, {
        "name": "Memory",
        "value": "12 GB"
      }, {
        "name": "Graphics",
        "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
      }]
    },
    "ratings": {
      "criticsRecommend": 61,
      "criticsAvg": 76,
      "openCritics": "Strong"
    }
  }, //#endregion
  //#region Blair Witch
  {
    "id": 6,
    "name": "Blair Witch",
    "publisher": "Bloober Team",
    "releaseDate": "Oct 29, 2020",
    "newRelease": true,
    "image": {
      "cover": "images/banner_6.jpg",
      "gallery": ["", "", ""]
    },
    "price": {
      "discount": false,
      "value": 29.99
    },
    "idCategory": [1, 4],
    "idMode": 1,
    "idPlatform": 1,
    "specifications": {
      "minimum": [{
        "name": "OS",
        "value": "Windows 7"
      }, {
        "name": "Processor",
        "value": "Intel Core i5-3570K or AMD FX-8310"
      }, {
        "name": "Memory",
        "value": "8 GB"
      }, {
        "name": "Graphics",
        "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
      }, {
        "name": "Storage",
        "value": "70 GB (SSD Recommended)"
      }],
      "recommended": [{
        "name": "OS",
        "value": "Windows 10"
      }, {
        "name": "Processor",
        "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
      }, {
        "name": "Memory",
        "value": "12 GB"
      }, {
        "name": "Graphics",
        "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
      }]
    },
    "ratings": {
      "criticsRecommend": 61,
      "criticsAvg": 76,
      "openCritics": "Strong"
    }
  }, //#endregion
  //#region GTA V
  {
    "id": 6,
    "name": "Grand Theft Auto V",
    "publisher": "Rockstar Games",
    "releaseDate": "Oct 29, 2020",
    "newRelease": true,
    "image": {
      "cover": "images/banner_7.jpg",
      "gallery": ["", "", ""]
    },
    "price": {
      "discount": false,
      "value": 29.99
    },
    "idCategory": [1, 4],
    "idMode": 1,
    "idPlatform": 1,
    "specifications": {
      "minimum": [{
        "name": "OS",
        "value": "Windows 7"
      }, {
        "name": "Processor",
        "value": "Intel Core i5-3570K or AMD FX-8310"
      }, {
        "name": "Memory",
        "value": "8 GB"
      }, {
        "name": "Graphics",
        "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
      }, {
        "name": "Storage",
        "value": "70 GB (SSD Recommended)"
      }],
      "recommended": [{
        "name": "OS",
        "value": "Windows 10"
      }, {
        "name": "Processor",
        "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
      }, {
        "name": "Memory",
        "value": "12 GB"
      }, {
        "name": "Graphics",
        "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
      }]
    },
    "ratings": {
      "criticsRecommend": 61,
      "criticsAvg": 76,
      "openCritics": "Strong"
    }
  }, //#endregion
  //#region 
  {
    "id": 6,
    "name": "Red Dead Redemption II",
    "publisher": "Rockstar Games",
    "releaseDate": "Oct 29, 2020",
    "newRelease": true,
    "image": {
      "cover": "images/banner_8.jpg",
      "gallery": ["", "", ""]
    },
    "price": {
      "discount": false,
      "value": 29.99
    },
    "idCategory": [1, 4],
    "idMode": 1,
    "idPlatform": 1,
    "specifications": {
      "minimum": [{
        "name": "OS",
        "value": "Windows 7"
      }, {
        "name": "Processor",
        "value": "Intel Core i5-3570K or AMD FX-8310"
      }, {
        "name": "Memory",
        "value": "8 GB"
      }, {
        "name": "Graphics",
        "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
      }, {
        "name": "Storage",
        "value": "70 GB (SSD Recommended)"
      }],
      "recommended": [{
        "name": "OS",
        "value": "Windows 10"
      }, {
        "name": "Processor",
        "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
      }, {
        "name": "Memory",
        "value": "12 GB"
      }, {
        "name": "Graphics",
        "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
      }]
    },
    "ratings": {
      "criticsRecommend": 61,
      "criticsAvg": 76,
      "openCritics": "Strong"
    }
  } //#endregion
  ];
  var display = "";

  function displayItems(img, name, publisher, price, animation) {
    display += "\n\t<div class=\"card mb-3 col".concat(animation, "\">\n\t<a href=\"#!\">\n\t<img src=\"").concat(img, "\" class=\"card-img-top\" alt=\"...\">\n\t<div class=\"card-body\">\n\t  <h5 class=\"card-title\">").concat(name, "</h5>\n\t  <ul class=\"card-info\">\n\t\t  <li class=\"text-muted developer\">").concat(publisher, "</li>\n\t\t  <li class=\"price\"> ").concat(price, "</li>\n\t\t</ul>\n\t</div></a>\n  </div>\n\t");
  }

  var loadedFirstFourItems = false;
  var maxItems = 4;
  var currentItem = 0;

  function newRelease() {
    //obrada artikala koji imaju true za new release, ako je true onda se prosledjuje dalje za ispisivanje
    for (var _i = 0, _allGames = allGames; _i < _allGames.length; _i++) {
      var item = _allGames[_i];

      if (item.newRelease && !loadedFirstFourItems && currentItem < maxItems) {
        displayItems(item.image.cover, item.name, item.publisher, price(item, item.price.discount), ""); //price(item = saljemo objekat za dalju obradu, discount= true/false)

        currentItem++;
        item.shownNewReleaseSection = true;

        if (currentItem == maxItems) {
          loadedFirstFourItems = true;
          maxItems += maxItems;
        }
      }
    }

    $("#newReleases").html(display);
  }

  newRelease();

  function price(item, discount) {
    if (!discount) {
      return "<i class=\"fas fa-euro-sign\"></i> ".concat(item.price.value);
    } else {
      return "<span class=\"badge badge-danger\">- ".concat(item.price.amount, " %</span> <s class=\"text-muted\">").concat(item.price.value.before, "</s> <span>").concat(item.price.value.after, "</span>");
    }
  }

  $("#showMore").on("click", function () {
    if (currentItem == 4) {
      showMore();
    }
  });

  function showMore() {
    var animation = " animate";

    for (var item in allGames) {
      console.log(currentItem);
      console.log(item);

      if (allGames[item].newRelease && loadedFirstFourItems && !allGames[item].shownNewReleaseSection && currentItem < maxItems) {
        currentItem++;
        displayItems(allGames[item].image.cover, allGames[item].name, allGames[item].publisher, price(allGames[item], allGames[item].price.discount), animation);
      }
    }

    ;
    $("#newReleases").html(display);
  } //function displayItems(info,itemID,)

});