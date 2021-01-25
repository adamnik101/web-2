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

  /* owl carousel */

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
    setHeader();
  });
  $(document).on('scroll', function () {
    setHeader();
  });
  initMenu();
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

  /* 
  5. Init Favorite
  */

  /* 
  6. Init Fix Product Border
  */

  /* 
  7. Init Isotope Filtering
  */

  /* 
  8. Init Slider
  */


  if (window.top.location.href == "https://adamnik101.github.io/web-2/index.html") {
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
    var progress = function progress() {
      $("#progressBar").css("width", "0%");
      $("#progressBar").animate({
        width: "100%"
      }, 10000, "linear", function () {
        progress();
        owl.trigger('next.owl.carousel');
      });
    };

    var displayItems = function displayItems(id, img, name, publisher, price, animation, display) {
      var div = document.createElement("div");
      div.className = "card mb-3 col-12".concat(animation);
      var a = document.createElement("a");
      a.setAttribute("href", "#!");
      a.className = "openSingle";
      a.setAttribute("id", id);
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
    };

    var getGames = function getGames() {
      $.ajax({
        url: "js/data.json",
        type: "GET",
        dataType: "json",
        success: function success(result) {
          displayAllSections(result);
        },
        error: function error(xhr, status, _error) {
          console.log(_error);
        }
      });
    };

    var homepageGames = function homepageGames(sectionId, parent, data) {
      //obrada artikala koji imaju true za new release, ako je true onda se prosledjuje dalje za ispisivanje
      var newToShow;
      var saleToShow;
      var maxItems = 4;
      var numberOfNew = 0;
      var numberOfSale = 0;
      var currentItem = 0;
      var content;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data.allGames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (item.newRelease) {
            numberOfNew++;
          }

          if (item.price.discount.isDiscounted) {
            numberOfSale++;
            /* console.log(numberOfSale) */
          }

          if (item.newRelease && !loadedNew && !item.price.discount.isDiscounted && sectionId == "newReleases") {
            content = displayItems(item.id, item.image.cover, item.name, item.publisher, price(item, item.price.discount), "", sectionId); //price(item = saljemo objekat za dalju obradu, discount= true/false)

            currentItem++;
            item.shownNewReleaseSection = true;

            if (currentItem == maxItems) {
              loadedNew = true;
              maxItems += maxItems;
            }
          }

          if (currentItem < 4 && item.price.discount.isDiscounted && !item.newRelease && sectionId == "hotSales") {
            displayItems(item.id, item.image.cover, item.name, item.publisher, price(item, item.price.discount), "", sectionId);
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
          showMore(sectionId, parent, content, currentItem, data);
        }
      });
    };

    var displayAllSections = function displayAllSections(result) {
      homepageGames("newReleases", "new", result);
      homepageGames("hotSales", "sale", result);
    };

    var price = function price(item, discount) {
      if (!discount.isDiscounted) {
        return "<i class=\"fas fa-euro-sign\"></i>".concat(item.price.value);
      } else {
        return "<span class=\"badge badge-danger\">- ".concat(item.price.discount.amount, " %</span> <s class=\"text-muted\"><i class=\"fas fa-euro-sign\"></i>").concat(item.price.value.before, "</s> <span><i class=\"fas fa-euro-sign\"></i>").concat(item.price.value.after, "</span>");
      }
    };

    var showMore = function showMore(sectionId, parent, content, currentItem, data) {
      var animation = " animate";

      for (var item in data.allGames) {
        console.log(item, currentItem);

        if (data.allGames[item].newRelease && data.allGames[item].id > currentItem && !data.allGames[item].shownHotSales && parent == "new") {
          console.log(data.allGames[item]);
          displayItems(data.allGames[item].id, data.allGames[item].image.cover, data.allGames[item].name, data.allGames[item].publisher, price(data.allGames[item], data.allGames[item].price.discount), animation, sectionId);
        }

        if (!data.allGames[item].newRelease && data.allGames[item].price.discount.isDiscounted && !data.allGames[item].shownHotSales && parent == "sale") {
          displayItems(data.allGames[item].id, data.allGames[item].image.cover, data.allGames[item].name, data.allGames[item].publisher, price(data.allGames[item], data.allGames[item].price.discount), animation, sectionId);
        }
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
    };

    getGames();
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 1,
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      dots: false
    });
    progress();
    var loadedNew = false;
  }

  if (window.top.location.href == "https://adamnik101.github.io/web-2/single.html") {
    var getSingle = function getSingle() {
      $.ajax({
        url: "js/data.json",
        type: "GET",
        dataType: "json",
        success: function success(result) {
          displaySingle(result);
          var owl_single = $(".single");
          owl_single.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            mouseDrag: true,
            touchDrag: true,
            dots: true,
            nav: false,
            autoplayHoverPause: true
          });
        },
        error: function error(xhr, status, _error2) {
          console.log(_error2);
        }
      });
    };

    var getAbout = function getAbout(about, textInfo) {
      var info = "";
      var text = "";

      for (var i in about) {
        info += "<li>\n\t\t\t\t\t\t\t<h6>".concat(about[i].name, "</h6>\n\t\t\t\t\t\t\t<p>").concat(about[i].value, "</p>\n\t\t\t\t\t\t</li>");
      }

      for (var _i in textInfo) {
        text += "<h6>".concat(textInfo[_i][0], "</h6>\n\t\t\t\t\t\t <p>").concat(textInfo[_i][1], "</p>");
      }

      $("#about").append(info);
      $("#infoText").append(text);
    };

    var getScreenshots = function getScreenshots(gallery) {
      var screenshots = '<div class="owl-carousel single">';

      for (var i in gallery) {
        screenshots += "<div class=\"item\">\n\t\t\t\t<img src=\"".concat(gallery[i], "\" class=\"img-fluid\" alt=\"gameplay screenshot\">\n\t\t\t</div>");
      }

      screenshots += "</div";
      $("#slika").append(screenshots);
    };

    var fillSystemReq = function fillSystemReq(minOrRec, specifications) {
      var systemReq = "";

      for (var i in specifications) {
        systemReq += "\n\t\t\t\t<li>\n\t\t\t\t\t<h6 class=\"text-muted\">".concat(specifications[i].name, "</h6>\n\t\t\t\t\t<p>").concat(specifications[i].value, "</p>\n\t\t\t\t</li>");
      }

      $("#" + minOrRec).append(systemReq);
    };

    var displaySingle = function displaySingle(data) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = data.allGames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          if (item.id == localStorage.getItem("id")) {
            $("#name").append(item.name);
            $("#gameName").append(item.name);
            getAbout(item.info.about, item.info.text);
            fillSystemReq("minimum", item.specifications.minimum);
            fillSystemReq("recommended", item.specifications.recommended);
            getScreenshots(item.image.gallery);
            /* let owl = document.createElement("div");
            owl.className = "owl-carousel-single"
            let img_div = document.createElement("div");
            let img_src = document.createElement("img");
            img_src.setAttribute("src", item.image.cover);
            $(img_div).append(img_src);
            $(owl).append(img_div);
            $("#slika").append(owl); */
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    };

    getSingle();
  } //function displayItems(info,itemID,)


  $(document).on("click", ".openSingle", function () {
    localStorage.setItem("id", $(this).attr("id"));
    open("single.html", "_self");
  });
});