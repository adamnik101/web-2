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

function displayGames(data, parent, animation){ // ipisivanje bloka sa igricom
	if(parent != "products"){
		$("#" + parent).addClass("row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4")
	}
	else{
		$("#" + parent).removeClass();
		$("#" + parent).addClass("row row-cols-1 row-cols-sm-2 row-cols-md-3")
		$("#" + parent).empty();

	}
	for(let game of data){
		let div = document.createElement("div");
		div.className = `card mb-3 col${animation}`;
		let a = document.createElement("a");
		a.setAttribute("href","#!");
		a.className = "openSingle";
		a.setAttribute("id", game.id)
		a.style.position = "relative";
		div.appendChild(a);
		if(game.price.discount.isDiscounted){
			let ribbon = document.createElement("div");
			ribbon.className = "ribbon";
			let span = document.createElement("span");
			span.innerHTML = "SALE!"
			ribbon.appendChild(span);
			a.appendChild(ribbon)
		}
		let image = document.createElement("img");
		image.setAttribute("src", game.image.cover);
		image.setAttribute("alt", game.name)
		image.className = "card-img-top";
		a.appendChild(image);
		let card = document.createElement("div");
		card.className = "card-body";
		a.appendChild(card)
		let h5 = document.createElement("h5");
		h5.textContent = game.name;
		h5.className = "card-title";
		card.appendChild(h5)
		let ul = document.createElement("ul");
		ul.className = "card-info";
		card.appendChild(ul)
		let li1 = document.createElement("li");
		li1.className = "text-muted developer"
		li1.textContent = game.info.about[0].value;
		ul.appendChild(li1)
		let li2 = document.createElement("li");
		li2.className = "price"
		li2.innerHTML = price(game, game.price.discount);
		ul.appendChild(li2)
		if(parent != "products"){
			$("#" + parent).append(div)
		}
		else{
			
			$("#" + parent).append(div)
		}
	}
}
function price(item, discount) {
	if(!discount.isDiscounted){
		return `<i class="fas fa-euro-sign"></i>${item.price.value}`
	}
	else{
		return `<span class="badge badge-danger">- ${item.price.discount.amount} %</span> <s class="text-muted"><i class="fas fa-euro-sign"></i>${item.price.value.before}</s> <span><i class="fas fa-euro-sign"></i>${item.price.value.after}</span>`
	}
}
	if(window.top.location.href == "file:///C:/Users/Adam/Desktop/WEB%202%20-%20sajt/web-2/index.html"){
		//getGames();
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
function displayMore(sectionId, parent){ // ispisivanje dodadnih igrica sa animacijom
	var i = 0;
	var delay = 0;
	$("#" + sectionId + " .animate").animate({
		height : "475px"
	});
		$("#" + sectionId + " .animate").each(function(){
		$("#" + sectionId + " .animate").eq(i).delay(600 * delay++).animate({
			bottom : "0",
			opacity : "1"
		}), i++
	}) 
	$("#" + parent + " .showMore").fadeOut(600);
}

function homepageGames(sectionId, parent, data){ // ispisivanje igrica
	var maxItemsFirstRow = 4;
		let counter = [];
		let firstRow = data.filter(function(game, index){ // izvlacenje prvih 4 igrica
			if(counter.length < maxItemsFirstRow){
				if(sectionId == "newReleases"){
					return game.newRelease && counter.push(index);
				}
				else if(sectionId == "hotSales"){
					return game.price.discount.isDiscounted && counter.push(index);
				}
			}
		})
		displayGames(firstRow, sectionId, ""); // ispisivanje prvog reda 
		let showMore = data.filter(function(game, index){ // izvlacenje igrica koje nisu ispisane u prvom redu
			if(sectionId == "newReleases"){
				return game.newRelease && !counter.includes(index);
			}
			if(sectionId == "hotSales"){
				return game.price.discount.isDiscounted && !counter.includes(index);
			}
		})
		$("#" + parent + " .showMore").html("Show " + showMore.length + " more");
		$("#" + parent + " .showMore").on("click", function(){
			displayGames(showMore, sectionId, " animate")
			displayMore(sectionId, parent);
		})
}

function displayAllSections(result){
	homepageGames("newReleases", "new", result);
	homepageGames("hotSales", "sale", result);
}

displayAllSections(allGames)
//displayAllSections(allGames)

}		

		if(window.top.location.href == "file:///C:/Users/Adam/Desktop/WEB%202%20-%20sajt/web-2/single.html"){
			
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
		
		//getSingle();
		function getLogoPriceSection(logo, alt, price){
			var logoDisplay = `<div class="col-3">
							<img src="${logo}" class="img-fluid" alt="${alt}">
						</div>
						<div class="col-9 d-flex flex-column align-items-end">`;
						if(!price.discount.isDiscounted){
							logoDisplay += `<div class="d-flex flex-column align-items-end">
												<button type="button" id="price" value="${price.value}">Buy Now!</button>
													<span id="current" class="pt-3">
														<i class="fas fa-euro-sign"></i>${price.value}
													</span>	
											</div>`
						}
						else{
							logoDisplay +=`<div class="d-flex flex-column align-items-end">
												<button type="button" id="price" value="${price.value.after}">Buy Now!</button>
												<p class="d-flex justify-content-around align-items-center pt-3">
													<span class="badge badge-danger">-${price.discount.amount}%</span>
													<s class="pl-2 pr-2">
														<i class="fas fa-euro-sign "></i>${price.value.before}
													</s> 
													<span id="current">
														<i class="fas fa-euro-sign"></i>${price.value.after}
													</span>
												</p>	
											</div>`
						}
						logoDisplay += "</div>"
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
			var screenshots = "";
			screenshots = '<div class="owl-carousel single">';
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
		console.log(allGames)
		displaySingle(allGames);
		function displaySingle(allGames){
			for(let item of allGames){
				if(item.id == localStorage.getItem("id")){
					document.title = "Game Hut " + item.name;
					$("#name").append(item.name);
					$("#gameName").append(item.name);
					console.log(item)
					getLogoPriceSection(item.image.logo, item.name, item.price);
					getAbout(item.info.about, item.info.text)
					fillSystemReq("minimum", item.specifications.minimum);
					fillSystemReq("recommended", item.specifications.recommended);
					getScreenshots(item.image.gallery, item.name);
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
					}
				}
			}
					
		}
		
//function displayItems(info,itemID,)
		$(document).on("click", ".openSingle",function(){
			localStorage.setItem("id", ($(this).attr("id")));
			open("single.html", "_self");
		})
		var maxItemsStore = 9;
		function displayCheckbox(data){
			let display = "";
			for(let category of data){
				display += `<li class="d-flex align-items-center justify-content-start">
								<label for="${category.name}" class="customChb w-100"> ${category.name}
									<input type="checkbox" id="${category.name}" value="${category.id}" name="categories">
									<span class="checkmark"></span>
								</label>					
							</li>`
			}
			$("#categoryChb").html(display);
		}
		function displayStoreFirst(data){
			let otherPages = [];
			let currentPage = [];
			var items = data.filter(function(game){
				if(currentPage.length < maxItemsStore){
					return currentPage.push(game)
				}
				else{
					otherPages.push(game);
				}
			});
			displayGames(items, "products", "")
			if(currentPage.length <= maxItemsStore && currentPage.length > 0){
				displayPagination(otherPages, currentPage);
			}
			else{
				$("#pag").empty()
			}
		}
		displayStoreFirst(allGames);
		// rotate font awesome 


		
		$("#filterCat").on("click", rotateHandler("#categoryChb", "#filterCat"))
		$("#priceToggle").on("click", rotateHandler("#priceRange", "#priceToggle"))
		var degreesCat = 0;
		var degreesPrice = 0;
		function rotateHandler(button, div){
			return function(){
				$(button).slideToggle();
				if(div == "#filterCat"){
					degreesCat += 180;
					$(div).find(".fas").css("transform", "rotate(" + degreesCat + "deg)");
				}
				else{
					degreesPrice += 180;
					$(div).find(".fas").css("transform", "rotate(" + degreesPrice + "deg)");
				}
				
			}
		}
		function removeUnchecked(arr, value){ 
			var index = arr.indexOf(value);	// dohvatanje indeksa elementa koji je unchecked u nizu 
			if(index != -1){	// ako se nalazi u nizu
				arr.splice(index, 1) // uklanjanje tog elementa 
			}
		}
		var filtered =[];
		var allChecked = [];
		$(document).on("change", ":checkbox", function(){
			let val = Number($(this).val());
			if($(this).is(":checked")){
				allChecked.push(val);
			}
			else{
				removeUnchecked(allChecked, val);
			}
			
			filtered = allGames.filter(function(game){
				if(allChecked.every(value => game.catId.includes(value)) && !game.price.discount.isDiscounted && game.price.value > priceFrom && game.price.value < priceTo)
					{ return game}
					else if(allChecked.every(value => game.catId.includes(value)) && game.price.value.after > priceFrom && game.price.value.after < priceTo){
						return game;
					}
			})
			displayStoreFirst(filtered)
			if(!filtered.length){
				displayNoResults();
			}
	})

	// price sliders
	var filteredPrice = [];
	var priceFrom = 0;
	var priceTo = 60;
		$("#priceFrom").on("input", getRangeValue("#from", "#priceFrom"))
		$("#priceTo").on("input", getRangeValue("#to", "#priceTo"))
		function getRangeValue(output, value){
			return function(){
				$(output).val($(value).val());
				if(output == "#from"){
					priceFrom = $(value).val();
				}
				else{
					priceTo = $(value).val();
				}
				filteredPrice = allGames.filter(function(game){
					if(allChecked.every(value => game.catId.includes(value))){
						if(!game.price.discount.isDiscounted){
							return Math.ceil(game.price.value) > priceFrom && Math.floor(game.price.value) < priceTo
						}
						else{
							return Math.ceil(game.price.value.after) >  priceFrom && Math.floor(game.price.value.after) < priceTo
						}
				}})
				displayStoreFirst(filteredPrice)
				if(!filteredPrice.length){
					displayNoResults();
				}
			}
		}
	// sort by ddl
		$("#sortDdl").hide();
		$("#sortBtn").focus(function(){
			$("#sortDdl").fadeIn()
		})
		$("#sortBtn").focusout(function(){
			$("#sortDdl").fadeOut()
		})
		displayCheckbox(categories);
		function displayPagination(otherPages, currentPage){
			let allItems = [];
			if(otherPages.length > maxItemsStore){
				var another = otherPages.slice(maxItemsStore);
				otherPages.splice(maxItemsStore, maxItemsStore * 2)
			}
			allItems.push(currentPage, otherPages, another);
			console.log(allItems.length);
			
			
			if(allItems.length){
				let display = `<ul class="d-flex flex-row" id="pagination">`;
				for(let i = 0; i < allItems.length; i++){
					if(allItems[i] != undefined && allItems[i].length > 0){
					display += `<li class="pagination-item mr-2`;
					if(i ==0){
						display+=" active-pag";
					}
					display += `" id="pag-${i + 1}">${i + 1}</li>`
					}
				}
				display += "</ul>"
				$("#pag").html(display);
			}			
			
			$(".pagination-item").on("click", function(){
				if(this.id == "pag-1"){
					displayGames(currentPage, "products", "")
						$(".pagination-item").removeClass("active-pag")
						$(this).addClass("active-pag")
				}
				else if(this.id == "pag-2"){
					$(".pagination-item").removeClass("active-pag")
					$(this).addClass("active-pag");
					displayGames(otherPages, "products", "")
				}
				else{
					$(".pagination-item").removeClass("active-pag")
					$(this).addClass("active-pag");
					displayGames(another, "products", "")
				}
			})
			
		}
		function displayNoResults(){
			$("#products").removeClass("row-cols-1 row-cols-sm-2 row-cols-md-3");
				$("#products").addClass("d-flex align-items-center justify-content-center h-100")
				var msg = `<div id="noMatch" class="pt-5">
								<i class="far fa-frown pb-3"></i>
								<p>No results found</p>	
								<span>Unfortunately I could not find any results matching your search.</span>	   
						   </div>`;
				$("#products").html(msg) 
		}
});