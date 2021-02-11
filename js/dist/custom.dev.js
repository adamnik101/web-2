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
jQuery(document).ready(function () {
  "use strict";
  /* 
  	1. Vars and Inits
  	*/

  /* owl carousel */
  // Global

  var header = $('.header');
  var hamburger = $('.hamburger_container');
  var menu = $('.hamburger_menu');
  var menuActive = false;
  var hamburgerClose = $('.hamburger_close');
  var fsOverlay = $('.fs_menu_overlay');
  var location = window.location.pathname;
  var allGames, categories, modes, otherFilters;
  setHeader();
  initMenu();

  function getGames(callback) {
    $.ajax({
      url: "js/data/allGames.json",
      type: "GET",
      dataType: "json",
      success: function success(result) {
        allGames = result;
        callback(result);
      },
      error: function error(xhr, status, _error) {
        console.log(_error);
      }
    });
  }

  ;

  function getCategories(callback, divId, storage, path) {
    $.ajax({
      url: "js/data/" + path + ".json",
      type: "GET",
      dataType: "json",
      success: function success(result) {
        storage = result;
        callback(storage, divId);
      },
      error: function error(xhr, status, _error2) {
        console.log(_error2);
      }
    });
  }

  if (location.indexOf("index") != -1 || location == "/web-2/") {
    displayCountdown();
    getGames(displayAllSections);
  } else if (location.indexOf("single") != -1) {
    getSingle();
  } else if (location.indexOf("categories") != -1) {
    getGames(displayStoreFirst);
    getCategories(displayCheckbox, "categoryChb", categories, "categories");
    getCategories(displayCheckbox, "mode", modes, "modes");
    getCategories(displayCheckbox, "otherFilter", otherFilters, "otherFilters");
  }

  $(window).on('resize', function () {
    setHeader();
    truncateText();
  });
  $(document).on('scroll', function () {
    setHeader();
  });
  /* 
  	2. Set Header
  	*/

  function setHeader() {
    if ($(window).scrollTop() > 100) {
      header.css({
        'top': "-50px"
      });
    } else {
      header.css({
        'top': "0"
      });
    }

    if (window.innerWidth > 991 && menuActive) {
      closeMenu();
    }
  }

  var px = 180;
  var cutFrom = 23;
  var back = 15;

  function truncateText() {
    var text = $(".card-title");

    if ($(".card-title").width() < px) {
      cutFrom--;

      for (var i = 0; i < text.length; i++) {
        if (text[i].innerHTML.length > 15) {
          var newText = text[i].innerHTML.substring(0, cutFrom);
          text[i].innerHTML = newText + "...";
        }
      }
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

  function displayCountdown() {
    var countDownDate = new Date("April 1, 2021 00:00:00").getTime(); // do ovog dana da se vrsi odbrojavanje - uzima se broj milisekundi

    var x = setInterval(function () {
      var now = new Date().getTime(); //trenutno vreme

      var razlika = countDownDate - now;
      var days = Math.floor(razlika / (1000 * 60 * 60 * 24));
      var hours = Math.floor(razlika % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(razlika % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(razlika % (1000 * 60) / 1000);
      $(".owl-deals #day").html(days);
      $(".owl-deals #hour").html(hours);
      $(".owl-deals #minute").html(minutes);
      $(".owl-deals #second").html(seconds);

      if (razlika < 0) {
        clearInterval(x);
        $(".deal_ofthe_week_col").html("New deals coming soon!");
      }
    }, 1000);
  }

  ;

  function displayGames(data, parent, animation) {
    // ispisivanje bloka sa igricom
    if (parent != "products") {
      $("#" + parent).addClass("row row-cols-2 row-cols-md-3 row-cols-lg-4 pl-0");
    } else {
      $("#" + parent).removeClass();
      $("#" + parent).addClass("row row-cols-1 row-cols-sm-2 row-cols-md-3");
      $("#" + parent).empty();
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

        if (parent != "products") {
          $("#" + parent).append(div);
        } else {
          $("#" + parent).append(div);
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
      return "<i class=\"fas fa-euro-sign\"></i>".concat(item.price.value.netPrice);
    } else {
      return "<span class=\"badge\">- ".concat(item.price.discount.amount, " %</span> <s class=\"text-muted\"><i class=\"fas fa-euro-sign\"></i>").concat(item.price.value.listPrice, "</s> <span><i class=\"fas fa-euro-sign\"></i>").concat(item.price.value.netPrice, "</span>");
    }
  } //getGames();


  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    dots: false,
    margin: 50
  });

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

  function homepageGames(sectionId, data) {
    // ispisivanje igrica
    if ($(window).width() < 768 || $(window).width() >= 992) {
      var maxItemsFirstRow = 4;
    } else {
      var maxItemsFirstRow = 3;
    }

    var counter = [];
    var firstRow = data.filter(function (game, index) {
      // izvlacenje prvih 4 igrica
      if (counter.length < maxItemsFirstRow) {
        if (sectionId == "newReleases") {
          return game.newRelease.value && counter.push(index);
        } else if (sectionId == "hotSales") {
          return game.price.discount.isDiscounted && counter.push(index);
        } else if (sectionId == "topSellers") {
          return game.otherId.includes(2) && counter.push(index);
        }
      }
    });
    displayGames(firstRow, sectionId, ""); // ispisivanje prvog reda 
  }

  function displayAllSections(result) {
    homepageGames("newReleases", result);
    homepageGames("hotSales", result);
    homepageGames("topSellers", result);
  }

  function getSingle() {
    $.ajax({
      url: "js/data/allGames.json",
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
      error: function error(xhr, status, _error3) {
        console.log(_error3);
      }
    });
  } //getSingle();


  function getLogoPriceSection(logo, alt, price) {
    var logoDisplay = "<div class=\"col-3\">\n\t\t\t\t\t\t\t<img src=\"".concat(logo, "\" class=\"img-fluid\" alt=\"").concat(alt, "\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-9 d-flex flex-column align-items-end\">");

    if (!price.discount.isDiscounted) {
      logoDisplay += "<div class=\"d-flex flex-column align-items-end\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" id=\"price\" value=\"".concat(price.value.netPrice, "\">Buy Now!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span id=\"current\" class=\"pt-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-euro-sign\"></i>").concat(price.value.netPrice, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\t\n\t\t\t\t\t\t\t\t\t\t\t</div>");
    } else {
      logoDisplay += "<div class=\"d-flex flex-column align-items-end\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" id=\"price\" value=\"".concat(price.value.netPrice, "\">Buy Now!</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"d-flex justify-content-around align-items-center pt-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"badge badge-danger\">-").concat(price.discount.amount, "%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<s class=\"pl-2 pr-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-euro-sign \"></i>").concat(price.value.listPrice, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t</s> \n\t\t\t\t\t\t\t\t\t\t\t\t\t<span id=\"current\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-euro-sign\"></i>").concat(price.value.netPrice, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\t\n\t\t\t\t\t\t\t\t\t\t\t</div>");
    }

    logoDisplay += "</div>";
    $("#logo-game-container").append(logoDisplay);
  }

  function getAbout(about, textInfo) {
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
  }

  function getScreenshots(gallery, alt) {
    var screenshots = "";
    screenshots = '<div class="owl-carousel single">';

    for (var i in gallery) {
      screenshots += "<div class=\"item\">\n\t\t\t\t<img src=\"".concat(gallery[i], "\" class=\"img-fluid\" alt=\"").concat(alt, "\">\n\t\t\t</div>");
    }

    screenshots += "</div";
    $("#slika").append(screenshots);
  }

  function fillSystemReq(minOrRec, specifications) {
    var systemReq = "";

    for (var i in specifications) {
      systemReq += "\n\t\t\t\t<li>\n\t\t\t\t\t<h6 class=\"text-muted\">".concat(specifications[i].name, "</h6>\n\t\t\t\t\t<p>").concat(specifications[i].value, "</p>\n\t\t\t\t</li>");
    }

    $("#" + minOrRec).append(systemReq);
  }

  function displaySingle(allGames) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = allGames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;

        if (item.id == localStorage.getItem("id")) {
          document.title = "Game Hut - " + item.name;
          $("#name").append(item.name);
          $("#gameName").append(item.name);
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

          if (item.mature) {
            var modal = "<div id=\"modal-wrapper\" class=\"d-flex justify-content-center align-items-center\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Warning</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"modal-body\" class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-white\">This page contains blood and gruesome content, that some people may find disturbing. Are you sure you want to proceed?</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted\">Your selection will be saved for all other pages!</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"modal-footer\" class=\"d-flex justify-content-around align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"button\" class=\"p-2\" value=\"Yes, I want\" name=\"mature\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"button\" class=\"p-2\" value=\"No\" name=\"mature\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>";
            $("#modal").html(modal);
            var matureModalValue = document.getElementsByName("mature");
            matureModalValue.forEach(function (element) {
              $(element).on("click", function () {
                if (element.value == "No") {
                  window.history.back();
                  sessionStorage.setItem("mature", false);
                } else {
                  $("#modal").fadeOut();
                  sessionStorage.setItem("mature", true);
                }
              });
            });
          }
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
  }

  $(document).on("click", ".openSingle", function () {
    localStorage.setItem("id", $(this).attr("id"));
    open("single.html", "_self");
  });
  var maxItemsStore = 9;

  function displayCheckbox(data, div) {
    var display = "<div class='p-3'>";
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var item = _step3.value;
        display += "<li class=\"d-flex align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t<label for=\"".concat(item.name.split(" ").join(""), "\" class=\"customChb w-100\"> ").concat(item.name, "\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"").concat(item.name.split(" ").join(""), "\" value=\"").concat(item.id, "\" name=");

        if (div == "mode") {
          display += "modes";
        } else if (div == "categoryChb") {
          display += "category";
        } else {
          display += "other";
        }

        display += ">\n\t\t\t\t\t\t\t\t\t<span class=\"checkmark\"></span>\n\t\t\t\t\t\t\t\t</label>\t\t\t\t\t\n\t\t\t\t\t\t\t</li>";
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

    ;
    display += '</div>';
    $("#" + div).html(display);
  }

  function displayStoreFirst(data) {
    var otherPages = [];
    var currentPage = [];
    var items = data.filter(function (game) {
      if (currentPage.length < maxItemsStore) {
        return currentPage.push(game);
      } else {
        otherPages.push(game);
      }
    });
    displayGames(items, "products", "");

    if (currentPage.length <= maxItemsStore && currentPage.length > 0) {
      displayPagination(otherPages, currentPage);
    } else {
      $("#pag").empty();
    }
  }

  $("#filterCat").on("click", rotateHandler("#categoryChb", "#filterCat"));
  $("#priceToggle").on("click", rotateHandler("#priceRange", "#priceToggle"));
  $("#more-filters").on("click", rotateHandler("#mode", "#more-filters"));
  $("#filter-other").on("click", rotateHandler("#otherFilter", "#filter-other"));
  var degreesCat = 0,
      degreesPrice = 0,
      degreesMore = 0,
      degreesOther = 0;

  function rotateHandler(button, div) {
    return function () {
      $(button).slideToggle();

      if (div == "#filterCat") {
        degreesCat += 180;
        $(div).find(".fas").css("transform", "rotate(" + degreesCat + "deg)");
      } else if (div == "#priceToggle") {
        degreesPrice += 180;
        $(div).find(".fas").css("transform", "rotate(" + degreesPrice + "deg)");
      } else if (div == "#more-filters") {
        degreesMore += 180;
        $(div).find(".fas").css("transform", "rotate(" + degreesMore + "deg)");
      } else {
        degreesOther += 180;
        $(div).find(".fas").css("transform", "rotate(" + degreesOther + "deg)");
      }
    };
  }

  function removeUnchecked(array, value) {
    var index = array.indexOf(value); // dohvatanje indeksa elementa koji je unchecked u nizu 

    if (index != -1) {
      // ako se nalazi u nizu
      array.splice(index, 1); // uklanjanje tog elementa 
    }
  }

  var filtered = [];
  var checkedCat = [];
  var checkedMode = [];
  var checkedOther = [];
  $(document).on("change", ":checkbox", function () {
    var val = Number($(this).val());

    if ($(this).is(":checked")) {
      if ($(this)[0].name == "modes") {
        checkedMode.push(val);
      } else if ($(this)[0].name == "other") {
        checkedOther.push(val);
      } else {
        checkedCat.push(val);
      }
    } else {
      if ($(this)[0].name == "modes") {
        removeUnchecked(checkedMode, val);
      } else if ($(this)[0].name == "other") {
        removeUnchecked(checkedOther, val);
      } else {
        removeUnchecked(checkedCat, val);
      }
    }

    filtered = allGames.filter(function (game) {
      if (checkedCat.every(function (value) {
        return game.catId.includes(value);
      }) && checkedOther.every(function (value) {
        if (game.otherId !== null) {
          return game.otherId.includes(value);
        }
      }) && checkedMode.every(function (value) {
        return game.modes.includes(value);
      }) && Math.ceil(game.price.value.netPrice) > priceFrom && Math.floor(game.price.value.netPrice) < priceTo) {
        return game;
      }
    });
    console.log("category: ", checkedCat, "mode: ", checkedMode, "other: ", checkedOther);
    displayStoreFirst(filtered);

    if (!filtered.length) {
      displayNoResults();
    }
  }); // price sliders

  var priceFrom = 0;
  var priceTo = 60;
  $("#priceFrom").on("input", getRangeValue("#from", "#priceFrom"));
  $("#priceTo").on("input", getRangeValue("#to", "#priceTo"));

  function getRangeValue(output, value) {
    return function () {
      $(output).val($(value).val());

      if (output == "#from") {
        priceFrom = $(value).val();
      } else {
        priceTo = $(value).val();
      }

      filtered = allGames.filter(function (game) {
        if (checkedCat.every(function (value) {
          return game.catId.includes(value);
        }) && checkedOther.every(function (value) {
          if (game.otherId !== null) {
            return game.otherId.includes(value);
          }
        }) && checkedMode.every(function (value) {
          return game.modes.includes(value);
        })) {
          return Math.ceil(game.price.value.netPrice) > priceFrom && Math.floor(game.price.value.netPrice) < priceTo;
        }
      });
      displayStoreFirst(filtered);

      if (!filtered.length) {
        displayNoResults();
      }
    };
  } // sort by ddl


  $("#sortDdl").hide();
  $("#sortBtn").focus(function () {
    $("#sortDdl").fadeIn();
  });
  $("#sortBtn").focusout(function () {
    $("#sortDdl").fadeOut();
  });

  function sortByNameAZ(data) {
    data.sort(function (a, b) {
      var nameA = a.name.toLowerCase();
      var nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  function sortByNameZA(data) {
    data.sort(function (a, b) {
      var nameA = a.name.toLowerCase();
      var nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return 1;
      } else if (nameA > nameB) {
        return -1;
      }

      return 0;
    });
  }

  function sortByPriceHighLow(data) {
    data.sort(function (a, b) {
      var priceA;
      var priceB;
      priceA = Math.round(a.price.value.netPrice);
      priceB = Math.round(b.price.value.netPrice);

      if (priceA < priceB) {
        return 1;
      } else if (priceA > priceB) {
        return -1;
      }

      return 0;
    });
  }

  function sortByPriceLowHigh(data) {
    data.sort(function (a, b) {
      var priceA;
      var priceB;
      priceA = Math.round(a.price.value.netPrice);
      priceB = Math.round(b.price.value.netPrice);

      if (priceA < priceB) {
        return -1;
      } else if (priceA > priceB) {
        return 1;
      }

      return 0;
    });
  }

  $("#sort").on("change", function () {
    var value = $(this).val();

    if (value == 1) {
      sortByNameAZ(allGames);
      sortByNameAZ(filtered);
    } else if (value == 2) {
      sortByNameZA(allGames);
      sortByNameZA(filtered);
    } else if (value == 3) {
      sortByPriceHighLow(allGames);
      sortByPriceHighLow(filtered);
    } else if (value == 4) {
      sortByPriceLowHigh(allGames);
      sortByPriceLowHigh(filtered);
    }

    if (!filtered.length) {
      displayStoreFirst(allGames);
    } else {
      displayStoreFirst(filtered);
    }
  });

  function displayPagination(otherPages, currentPage) {
    var allItems = [];

    if (otherPages.length > maxItemsStore) {
      var another = otherPages.slice(maxItemsStore);
      otherPages.splice(maxItemsStore, maxItemsStore * 2);
    }

    allItems.push(currentPage, otherPages, another);

    if (allItems.length) {
      var display = "<ul class=\"d-flex flex-row\" id=\"pagination\">";

      for (var i = 0; i < allItems.length; i++) {
        if (allItems[i] != undefined && allItems[i].length > 0) {
          display += "<li class=\"pagination-item mr-2";

          if (i == 0) {
            display += " active-pag";
          }

          display += "\" id=\"pag-".concat(i + 1, "\">").concat(i + 1, "</li>");
        }
      }

      display += "</ul>";
      $("#pag").html(display);
    }

    $(".pagination-item").on("click", function () {
      window.top.location.href = "#sortBy";

      if (this.id == "pag-1") {
        displayGames(currentPage, "products", "");
        $(".pagination-item").removeClass("active-pag");
        $(this).addClass("active-pag");
      } else if (this.id == "pag-2") {
        $(".pagination-item").removeClass("active-pag");
        $(this).addClass("active-pag");
        displayGames(otherPages, "products", "");
      } else {
        $(".pagination-item").removeClass("active-pag");
        $(this).addClass("active-pag");
        displayGames(another, "products", "");
      }
    });
  }

  function displayNoResults() {
    $("#products").removeClass("row-cols-1 row-cols-sm-2 row-cols-md-3");
    $("#products").addClass("d-flex align-items-center justify-content-center h-100");
    var msg = "<div id=\"noMatch\" class=\"pt-5\">\n\t\t\t\t\t\t\t\t<i class=\"far fa-frown pb-3\"></i>\n\t\t\t\t\t\t\t\t<p>No results found</p>\t\n\t\t\t\t\t\t\t\t<span>Unfortunately I could not find any results matching your search.</span>\t   \n\t\t\t\t\t\t   </div>";
    $("#products").html(msg);
  }
});