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

jQuery(document).ready(function($)
{
	"use strict";
	
	/* 

	1. Vars and Inits

	*/
	/* owl carousel */
	
	var header = $('.header');
	var topNav = $('.top_nav')
	var mainSlider = $('.main_slider');
	var hamburger = $('.hamburger_container');
	var menu = $('.hamburger_menu');
	var menuActive = false;
	var hamburgerClose = $('.hamburger_close');
	var fsOverlay = $('.fs_menu_overlay');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});
	
	initMenu();
	
	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if(window.innerWidth < 992)
		{
			if($(window).scrollTop() > 100)
			{
				header.css({'top':"0"});
			}
			else
			{
				header.css({'top':"0"});
			}
		}
		else
		{
			if($(window).scrollTop() > 100)
			{
				header.css({'top':"-50px"});
			}
			else
			{
				header.css({'top':"0"});
			}
		}
		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if(hamburger.length)
		{
			hamburger.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
			});
		}

		if(fsOverlay.length)
		{
			fsOverlay.on('click', function()
			{
				if(menuActive)
				{
					closeMenu();
				}
			});
		}

		if(hamburgerClose.length)
		{
			hamburgerClose.on('click', function()
			{
				if(menuActive)
				{
					closeMenu();
				}
			});
		}

		if($('.menu_item').length)
		{
			var items = document.getElementsByClassName('menu_item');
			var i;

			for(i = 0; i < items.length; i++)
			{
				if(items[i].classList.contains("has-children"))
				{
					items[i].onclick = function()
					{
						this.classList.toggle("active");
						var panel = this.children[1];
					    if(panel.style.maxHeight)
					    {
					    	panel.style.maxHeight = null;
					    }
					    else
					    {
					    	panel.style.maxHeight = panel.scrollHeight + "px";
					    }
					}
				}	
			}
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		// menu.css('right', "0");
		fsOverlay.css('pointer-events', "auto");
		menuActive = true;
	}

	function closeMenu()
	{
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
	if(window.top.location.href == "https://adamnik101.github.io/web-2/index.html"){
		getGames();
		var owl = $('.owl-carousel');
		owl.owlCarousel(
			{
				items:1,
				loop : true,
				mouseDrag: false,
				touchDrag: false,
				dots: false
			  }
			);
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

			function progress(){
				$("#progressBar").css("width","0%");
				$("#progressBar").animate({
					width:"100%"
				},10000,"linear",function () {
					progress();
					owl.trigger('next.owl.carousel');
				})
			}
			progress();

function displayItems(id, img, name, publisher, price, animation, display){
	let div = document.createElement("div");
	div.className = `card mb-3 col-12${animation}`;
	let a = document.createElement("a");
	a.setAttribute("href","#!");
	a.className = "openSingle";
	a.setAttribute("id", id)
	div.appendChild(a);
	let image = document.createElement("img");
	image.setAttribute("src", img);
	image.setAttribute("alt", name)
	image.className = "card-img-top";
	a.appendChild(image);
	let card = document.createElement("div");
	card.className = "card-body";
	a.appendChild(card)
	let h5 = document.createElement("h5");
	h5.textContent = name;
	h5.className = "card-title";
	card.appendChild(h5)
	let ul = document.createElement("ul");
	ul.className = "card-info";
	card.appendChild(ul)
	let li1 = document.createElement("li");
	li1.className = "text-muted developer"
	li1.textContent = publisher;
	ul.appendChild(li1)
	let li2 = document.createElement("li");
	li2.className = "price"
	li2.innerHTML = price;
	ul.appendChild(li2)
	$("#" + display).append(div)
}
var loadedNew = false;

function getGames(){
	$.ajax({
		url : "js/data.json",
		type : "GET",
		dataType : "json",
		success : function(result){
			displayAllSections(result);
		},
		error: function(xhr,status, error) { console.log(error); }
	});
}
function homepageGames(sectionId, parent, data){ //obrada artikala koji imaju true za new release, ako je true onda se prosledjuje dalje za ispisivanje
	let newToShow;
	let saleToShow;
	var maxItems = 4;
	var numberOfNew = 0;
	var numberOfSale = 0;
	var currentItem = 0;

	
	var content;
	for(let item of data.allGames){
		
		if(item.newRelease){
			numberOfNew++;
		}
		if(item.price.discount.isDiscounted){
			numberOfSale++;
			/* console.log(numberOfSale) */
		}
		if(item.newRelease && !loadedNew && !item.price.discount.isDiscounted && sectionId == "newReleases"){
			content = displayItems(item.id ,item.image.cover, item.name, item.info.about[0].value, price(item, item.price.discount), "", sectionId) //price(item = saljemo objekat za dalju obradu, discount= true/false)
			currentItem++;
			item.shownNewReleaseSection = true;
			if(currentItem == maxItems){
				loadedNew = true;
				maxItems += maxItems; 
			}
		}
		if(currentItem < 4 && item.price.discount.isDiscounted && !item.newRelease && sectionId == "hotSales"){
			displayItems(item.id, item.image.cover, item.name, item.info.about[0].value, price(item, item.price.discount), "", sectionId);
			currentItem++;
			item.shownHotSales = true;
			$("#" + parent + " .showMore").html("Show " + " more")
		}
	}
	newToShow = numberOfNew - currentItem;
	saleToShow = numberOfSale - currentItem;
	if(sectionId == "newReleases"){
		$("#" + parent + " .showMore").html("Show " + newToShow + " more")
	}
	else{
		$("#" + parent + " .showMore").html("Show " + saleToShow + " more")
	}
	
	
	console.log(numberOfNew)
	$("#" + parent + " .showMore").on("click", function(){
		if(currentItem == 4){
			showMore(sectionId, parent, content, currentItem, data);
		}
	})
}

function displayAllSections(result){
	homepageGames("newReleases", "new", result);
	homepageGames("hotSales", "sale", result);
}

function price(item, discount) {
		if(!discount.isDiscounted){
			return `<i class="fas fa-euro-sign"></i>${item.price.value}`
		}
		else{
			return `<span class="badge badge-danger">- ${item.price.discount.amount} %</span> <s class="text-muted"><i class="fas fa-euro-sign"></i>${item.price.value.before}</s> <span><i class="fas fa-euro-sign"></i>${item.price.value.after}</span>`
		}
}

function showMore(sectionId, parent, content, currentItem, data){
		let animation = " animate"
			for(let item in data.allGames){
				console.log(item, currentItem);
				if(data.allGames[item].newRelease && data.allGames[item].id > currentItem  && !data.allGames[item].shownHotSales && parent == "new" ){
					console.log(data.allGames[item]);
					displayItems(data.allGames[item].id, data.allGames[item].image.cover, data.allGames[item].name, data.allGames[item].info.about[0].value, price(data.allGames[item], data.allGames[item].price.discount), animation, sectionId);	
					
				}
				if(!data.allGames[item].newRelease && data.allGames[item].price.discount.isDiscounted && !data.allGames[item].shownHotSales && parent == "sale"){
					displayItems(data.allGames[item].id, data.allGames[item].image.cover, data.allGames[item].name, data.allGames[item].info.about[0].value, price(data.allGames[item], data.allGames[item].price.discount), animation, sectionId);	
				}
			};
			var i = 0;
			var delay = 0;
			$("#" + sectionId).html(content);
			 $("#" + sectionId + " .animate").each(function(){
				$("#" + sectionId + " .animate").eq(i).delay(600 * delay++).animate({
                    bottom : "0",
                    opacity : "1"
                }), i++
			}) 
			$("#" + parent + " .showMore").fadeOut(600);
}
}		
		if(window.top.location.href == "https://adamnik101.github.io/web-2/single.html"){
			
		function getSingle(){
			$.ajax({
				url : "js/data.json",
				type : "GET",
				dataType : "json",
				success : function(result){
					displaySingle(result);
					var owl_single = $(".single");
						owl_single.owlCarousel(
							{
								items:1,
								loop : true,
								autoplay: true,
								mouseDrag: true,
								touchDrag: true,
								dots: true,
								nav: false,
								autoplayHoverPause: true
							}
							);
				},
				error: function(xhr,status, error) { console.log(error); }
			});
		}
		
		getSingle();
		function getLogoSection(logo, alt){
			var logoDisplay = `<div class="col-3">
							<img src="${logo}" class="img-fluid" alt="${alt}">
						</div>
						<div class="col-9">
							<h3>${alt}</h3>
						</div>`
					$("#logo-game-container").append(logoDisplay);
		}
		function getAbout(about, textInfo){
			var info = "";
			var text = "";
			for(let i in about){
				info += `<li>
							<h6>${about[i].name}</h6>
							<p>${about[i].value}</p>
						</li>`
			}
			for(let i in textInfo){
				text += `<h6>${textInfo[i][0]}</h6>
						 <p>${textInfo[i][1]}</p>`
			}
			$("#about").append(info);
			$("#infoText").append(text);
		}
		function getScreenshots(gallery, alt){
			var screenshots = '<div class="owl-carousel single">';
			for (let i in gallery){
				screenshots += `<div class="item">
				<img src="${gallery[i]}" class="img-fluid" alt="${alt}">
			</div>`
			}
			screenshots += `</div`;
			$("#slika").append(screenshots);
		}
		function fillSystemReq(minOrRec, specifications){
			var systemReq = "";
			for(let i in specifications){
				systemReq += `
				<li>
					<h6 class="text-muted">${specifications[i].name}</h6>
					<p>${specifications[i].value}</p>
				</li>`
			}
		$("#" + minOrRec).append(systemReq);
		}
		function displaySingle(data){
			for(let item of data.allGames){
				if(item.id == localStorage.getItem("id")){
					$("#name").append(item.name);
					$("#gameName").append(item.name);
					getLogoSection(item.image.logo, item.name);
					getAbout(item.info.about, item.info.text)
					fillSystemReq("minimum", item.specifications.minimum);
					fillSystemReq("recommended", item.specifications.recommended);
					getScreenshots(item.image.gallery, item.name);
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
			}
					
		}

		
//function displayItems(info,itemID,)
		$(document).on("click", ".openSingle",function(){
			localStorage.setItem("id", ($(this).attr("id")));
			open("single.html", "_self");
		})
});