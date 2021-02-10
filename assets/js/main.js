$(document).ready(function(){

	$(".mobile").on("click", function(event) {
		event.preventDefault();
		$(".more-products1").toggle();
		$(".more-products2").hide();
		$(".more-products3").hide();
	});

	$(".laptop").on("click", function(event) {
		event.preventDefault();
		$(".more-products2").toggle();
		$(".more-products1").hide();
		$(".more-products3").hide();
	});

	$(".camera").on("click", function(event) {
		event.preventDefault();
		$(".more-products3").toggle();
		$(".more-products1").hide();
		$(".more-products2").hide();
	});

	let sliderImages = $(".slide"),
  	arrowLeft = $(".prev"),
  	arrowRight = $(".next"),
  	current = 0;

  	arrowRight.on("click", function(){
  		if(current == 0){
  			$("#slide1").animate({"right" : "-1200px"}, "linear");
  			$("#slide2").animate({"right" : "0"}, "linear");
  			$("#slide3").animate({"right" : "1200px"}, "linear");
  			current++;
  		}
  		else if (current == 1) {
			$("#slide1").animate({"right" : "-2400px"}, "linear");
  			$("#slide2").animate({"right" : "-1200px"}, "linear");
  			$("#slide3").animate({"right" : "0px"}, "linear");
  			current++;
  		}
  		else if (current == 2) {
			$("#slide1").animate({"right" : "0px"}, "linear");
  			$("#slide2").animate({"right" : "1200px"}, "linear");
  			$("#slide3").animate({"right" : "2400px"}, "linear");
  			current = 0;
  		}
  	});

  	arrowLeft.on("click", function(){
  		if(current == 0){
  			$("#slide1").animate({"right" : "1200px"}, "linear");
  			$("#slide2").animate({"right" : "0"}, "linear");
  			$("#slide3").animate({"right" : "-1200px"}, "linear");
  			current++;
  		}
  		else if (current == 1) {
			$("#slide1").animate({"right" : "2400px"}, "linear");
  			$("#slide2").animate({"right" : "1200px"}, "linear");
  			$("#slide3").animate({"right" : "0px"}, "linear");
  			current++;
  		}
  		else if (current == 2) {
			$("#slide1").animate({"right" : "0px"}, "linear");
  			$("#slide2").animate({"right" : "-1200px"}, "linear");
  			$("#slide3").animate({"right" : "-2400px"}, "linear");
  			current = 0;
  		}
  	});

	
	// a-spot slider
	
	var sliderBtn = document.querySelectorAll(".head-slider-btn");
	var aSlider = document.querySelectorAll(".a-spot-pos");
	var btn1 = document.querySelectorAll(".btn1");
	var btn2 = document.querySelectorAll(".btn2");
	var btn3 = document.querySelectorAll(".btn3");
	var btn4 = document.querySelectorAll(".btn4");

	var a0 = document.querySelector(".a0");
	var a1 = document.querySelector(".a1");
	var a2 = document.querySelector(".a2");
	var a3 = document.querySelector(".a3");

	for (var i = 0; i < 4; i++) {
		btn1[i].addEventListener("click", function(){
			$(".a0").animate({"right" : "0px"}, "linear");
			$(".a1").animate({"right" : "840px"}, "linear");
			$(".a2").animate({"right" : "1680px"}, "linear");
			$(".a3").animate({"right" : "2520px"}, "linear");
		});

		btn2[i].addEventListener("click", function(){
			$(".a0").animate({"right" : "-840px"}, "linear");
			$(".a1").delay(500).animate({"right" : "0px"}, 500, "linear");
			$(".a2").delay(500).animate({"right" : "840px"}, 500, "linear");
			$(".a3").delay(500).animate({"right" : "1680px"}, 500, "linear");
		});

		btn3[i].addEventListener("click", function(){
			$(".a0").animate({"right" : "-1680px"}, "linear");
			$(".a1").delay(500).animate({"right" : "-840px"}, 500, "linear");
			$(".a2").delay(500).animate({"right" : "0px"}, 500, "linear");
			$(".a3").delay(500).animate({"right" : "840px"}, 500, "linear");
		});

		btn4[i].addEventListener("click", function(){
			$(".a0").animate({"right" : "-2520px"}, "linear");
			$(".a1").delay(500).animate({"right" : "-1680px"}, 500, "linear");
			$(".a2").delay(500).animate({"right" : "-840px"}, 500, "linear");
			$(".a3").delay(500).animate({"right" : "0px"}, 500, "linear");
		});
	}

	// Flip

	let flip = document.querySelectorAll(".flip");
	let explore1 = document.querySelector(".explore1");
	let explore2 = document.querySelector(".explore2");
	let explore3 = document.querySelector(".explore3");
	let explore4 = document.querySelector(".explore4");
	let explore5 = document.querySelector(".explore5");
	let explore6 = document.querySelector(".explore6");

	explore1.addEventListener("click", function(event) {
		event.preventDefault();
		flip[0].classList.add("flip-container");	
	});

	explore2.addEventListener("click", function(event) {
		event.preventDefault();
		flip[1].classList.add("flip-container");	
	});

	explore3.addEventListener("click", function(event) {
		event.preventDefault();
		flip[2].classList.add("flip-container");	
	});

	explore4.addEventListener("click", function(event) {
		event.preventDefault();
		flip[3].classList.add("flip-container");	
	});

	explore5.addEventListener("click", function(event) {
		event.preventDefault();
		flip[4].classList.add("flip-container");	
	});

	explore6.addEventListener("click", function(event) {
		event.preventDefault();
		flip[5].classList.add("flip-container");	
	});

	// special offers flip11
	
	let explore11 = document.querySelector(".explore11");
	let explore22 = document.querySelector(".explore22");
	let explore33 = document.querySelector(".explore33");
	let explore44 = document.querySelector(".explore44");
	let explore55 = document.querySelector(".explore55");
	let explore66 = document.querySelector(".explore66");

	explore11.addEventListener("click", function(event) {
		event.preventDefault();
		flip[6].classList.add("flip-container");	
	});

	explore22.addEventListener("click", function(event) {
		event.preventDefault();
		flip[7].classList.add("flip-container");	
	});

	explore33.addEventListener("click", function(event) {
		event.preventDefault();
		flip[8].classList.add("flip-container");	
	});

	explore44.addEventListener("click", function(event) {
		event.preventDefault();
		flip[9].classList.add("flip-container");	
	});

	explore55.addEventListener("click", function(event) {
		event.preventDefault();
		flip[10].classList.add("flip-container");	
	});

	explore66.addEventListener("click", function(event) {
		event.preventDefault();
		flip[11].classList.add("flip-container");	
	});

	// special offers flip
	
	let explore111 = document.querySelector(".explore111");
	let explore222 = document.querySelector(".explore222");
	let explore333 = document.querySelector(".explore333");
	let explore444 = document.querySelector(".explore444");
	let explore555 = document.querySelector(".explore555");
	let explore666 = document.querySelector(".explore666");

	explore111.addEventListener("click", function(event) {
		event.preventDefault();
		flip[12].classList.add("flip-container");	
	});

	explore222.addEventListener("click", function(event) {
		event.preventDefault();
		flip[13].classList.add("flip-container");	
	});

	explore333.addEventListener("click", function(event) {
		event.preventDefault();
		flip[14].classList.add("flip-container");	
	});

	explore444.addEventListener("click", function(event) {
		event.preventDefault();
		flip[15].classList.add("flip-container");	
	});

	explore555.addEventListener("click", function(event) {
		event.preventDefault();
		flip[16].classList.add("flip-container");	
	});

	explore666.addEventListener("click", function(event) {
		event.preventDefault();
		flip[17].classList.add("flip-container");	
	});

});


