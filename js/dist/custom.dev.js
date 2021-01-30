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


  function displayGames(data, parent, animation) {
    // ipisivanje bloka sa igricom
    var display = document.createElement("div");

    if (parent == "products") {
      display.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3";
    } else {
      display.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4";
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var game = _step.value;
        var div = document.createElement("div");
        div.className = "card mb-3 col".concat(animation);
        var a = document.createElement("a");
        a.setAttribute("href", "#!");
        a.className = "openSingle";
        a.setAttribute("id", game.id);
        a.style.position = "relative";
        div.appendChild(a);

        if (game.price.discount.isDiscounted) {
          var ribbon = document.createElement("div");
          ribbon.className = "ribbon";
          var span = document.createElement("span");
          span.innerHTML = "SALE!";
          ribbon.appendChild(span);
          a.appendChild(ribbon);
        }

        var image = document.createElement("img");
        image.setAttribute("src", game.image.cover);
        image.setAttribute("alt", game.name);
        image.className = "card-img-top";
        a.appendChild(image);
        var card = document.createElement("div");
        card.className = "card-body";
        a.appendChild(card);
        var h5 = document.createElement("h5");
        h5.textContent = game.name;
        h5.className = "card-title";
        card.appendChild(h5);
        var ul = document.createElement("ul");
        ul.className = "card-info";
        card.appendChild(ul);
        var li1 = document.createElement("li");
        li1.className = "text-muted developer";
        li1.textContent = game.info.about[0].value;
        ul.appendChild(li1);
        var li2 = document.createElement("li");
        li2.className = "price";
        li2.innerHTML = price(game, game.price.discount);
        ul.appendChild(li2);
        display.append(div);

        if (parent != "products") {
          $("#" + parent).append(display);
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
  }

  function price(item, discount) {
    if (!discount.isDiscounted) {
      return "<i class=\"fas fa-euro-sign\"></i>".concat(item.price.value);
    } else {
      return "<span class=\"badge badge-danger\">- ".concat(item.price.discount.amount, " %</span> <s class=\"text-muted\"><i class=\"fas fa-euro-sign\"></i>").concat(item.price.value.before, "</s> <span><i class=\"fas fa-euro-sign\"></i>").concat(item.price.value.after, "</span>");
    }
  }

  if (window.top.location.href == "file:///C:/Users/Adam/Desktop/WEB%202%20-%20sajt/web-2/index.html") {
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

    var displayMore = function displayMore(sectionId, parent) {
      // ispisivanje dodadnih igrica sa animacijom
      var i = 0;
      var delay = 0;
      $("#" + sectionId + " .animate").animate({
        height: "475px"
      });
      $("#" + sectionId + " .animate").each(function () {
        $("#" + sectionId + " .animate").eq(i).delay(600 * delay++).animate({
          bottom: "0",
          opacity: "1"
        }), i++;
      });
      $("#" + parent + " .showMore").fadeOut(600);
    };

    var homepageGames = function homepageGames(sectionId, parent, data) {
      // ispisivanje igrica
      var maxItemsFirstRow = 4;
      var counter = [];
      var firstRow = data.filter(function (game, index) {
        // izvlacenje prvih 4 igrica
        if (counter.length < maxItemsFirstRow) {
          if (sectionId == "newReleases") {
            return game.newRelease && counter.push(index);
          } else if (sectionId == "hotSales") {
            return game.price.discount.isDiscounted && counter.push(index);
          }
        }
      });
      displayGames(firstRow, sectionId, ""); // ispisivanje prvog reda 

      var showMore = data.filter(function (game, index) {
        // izvlacenje igrica koje nisu ispisane u prvom redu
        if (sectionId == "newReleases") {
          return game.newRelease && !counter.includes(index);
        }

        if (sectionId == "hotSales") {
          return game.price.discount.isDiscounted && !counter.includes(index);
        }
      });
      $("#" + parent + " .showMore").html("Show " + showMore.length + " more");
      $("#" + parent + " .showMore").on("click", function () {
        displayGames(showMore, sectionId, " animate");
        displayMore(sectionId, parent);
      });
    };

    var displayAllSections = function displayAllSections(result) {
      homepageGames("newReleases", "new", result);
      homepageGames("hotSales", "sale", result);
    };

    //getGames();
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 1,
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      dots: false
    });
    progress();
    displayAllSections(allGames); //displayAllSections(allGames)
  }

  if (window.top.location.href == "file:///C:/Users/Adam/Desktop/WEB%202%20-%20sajt/web-2/single.html") {
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
    }; //getSingle();


    var getLogoPriceSection = function getLogoPriceSection(logo, alt, price) {
      var logoDisplay = "<div class=\"col-3\">\n\t\t\t\t\t\t\t<img src=\"".concat(logo, "\" class=\"img-fluid\" alt=\"").concat(alt, "\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-9 d-flex flex-column align-items-end\">");

      if (!price.discount.isDiscounted) {
        logoDisplay += "<div class=\"d-flex flex-column align-items-end\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" id=\"price\" value=\"".concat(price.value, "\">Buy Now!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span id=\"current\" class=\"pt-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-euro-sign\"></i>").concat(price.value, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\t\n\t\t\t\t\t\t\t\t\t\t\t</div>");
      } else {
        logoDisplay += "<div class=\"d-flex flex-column align-items-end\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" id=\"price\" value=\"".concat(price.value.after, "\">Buy Now!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"d-flex justify-content-around align-items-center pt-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-danger\">-").concat(price.discount.amount, "%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<s class=\"pl-2 pr-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-euro-sign \"></i>").concat(price.value.before, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t</s> \n\t\t\t\t\t\t\t\t\t\t\t\t\t<span id=\"current\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-euro-sign\"></i>").concat(price.value.after, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\t\n\t\t\t\t\t\t\t\t\t\t\t</div>");
      }

      logoDisplay += "</div>";
      $("#logo-game-container").append(logoDisplay);
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

    var getScreenshots = function getScreenshots(gallery, alt) {
      var screenshots = "";
      screenshots = '<div class="owl-carousel single">';

      for (var i in gallery) {
        screenshots += "<div class=\"item\">\n\t\t\t\t<img src=\"".concat(gallery[i], "\" class=\"img-fluid\" alt=\"").concat(alt, "\">\n\t\t\t</div>");
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

    var displaySingle = function displaySingle(allGames) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = allGames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          if (item.id == localStorage.getItem("id")) {
            document.title = "Game Hut " + item.name;
            $("#name").append(item.name);
            $("#gameName").append(item.name);
            console.log(item);
            getLogoPriceSection(item.image.logo, item.name, item.price);
            getAbout(item.info.about, item.info.text);
            fillSystemReq("minimum", item.specifications.minimum);
            fillSystemReq("recommended", item.specifications.recommended);
            getScreenshots(item.image.gallery, item.name);
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

    console.log(allGames);
    displaySingle(allGames);
  } //function displayItems(info,itemID,)


  $(document).on("click", ".openSingle", function () {
    localStorage.setItem("id", $(this).attr("id"));
    open("single.html", "_self");
  });
  /* 	$("#priceFrom").on("input", function(){
  		let val = $(this).val();
  		$(".slidecontainer").find("#labelMin").html("Min <i class='fas fa-euro-sign'></i> " + val)
  	})
  	 */

  $("#priceToggle").click(function () {
    $("#priceRange").slideToggle();
  });

  function displayCheckbox(data) {
    var display = "";
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var category = _step3.value;
        display += "<li class=\"d-flex align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t<label for=\"".concat(category.name, "\" class=\"customChb w-100\"> ").concat(category.name, "\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"").concat(category.name, "\" value=\"").concat(category.id, "\" name=\"categories\">\n\t\t\t\t\t\t\t\t\t<span class=\"checkmark\"></span>\n\t\t\t\t\t\t\t\t</label>\t\t\t\t\t\n\t\t\t\t\t\t\t</li>");
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    $("#categoryChb").html(display);
  }

  function displayStoreFirst(data) {
    var maxItemsStore = 9;
    var counter = [];
    var items = data.filter(function (game, index) {
      if (counter.length < maxItemsStore) {
        return counter.push(index);
      }
    });
    displayGames(items, "products", "");
  }

  displayStoreFirst(allGames);
  var filtered = [];
  var allChecked = [];
  $(document).on("change", ":checkbox", function () {
    var val = Number($(this).val());

    if ($(this).is(":checked")) {
      allChecked.push(val);
      filtered = allGames.filter(function (game) {
        if (allChecked.every(function (value) {
          return game.catId.includes(value);
        })) {
          return game;
        }
      });
    } else if (!$(this).is(":checked")) {
      console.log($(this));
    }
    /* else if(!($(this).is("checked"))){
    	let val = Number($(this).val());
    	
    	filtered = filtered.filter(function(game){
    		for(let checked of allChecked){
    			if(game.catId.indexOf(checked) == -1){
    				return game;
    			}
    			allChecked.splice(checked, 1)
    		}
    		})
    } */


    $(".openSingle").fadeIn();
    displayGames(filtered, "products", "");

    if (filtered.length == 0) {
      var alert = "<h3>There are no results that match your search</h3>";
      $("#products").html(alert);
    }
  });
  $("form").on("input", function () {
    $("#from").val($("#priceFrom").val());
  });
  displayCheckbox(categories);
});