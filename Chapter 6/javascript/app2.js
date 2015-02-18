/********************************
* Brandon Degarimore
* IT 328
* Amazeriffic FAQ JavaScript
* Revision v3
********************************/


	function toggleContent1() {
		  // Get the DOM reference
		  var contentId = document.getElementById("content1");
		  // Toggle 
		  contentId.style.display == "none" ? contentId.style.display = "block" : 
		contentId.style.display = "none"; 
	};

	function toggleContent2() {
		  // Get the DOM reference
		  var contentId = document.getElementById("content2");
		  // Toggle 
		  contentId.style.display == "none" ? contentId.style.display = "block" : 
		contentId.style.display = "none"; 
	};

	function toggleContent3() {
		  // Get the DOM reference
		  var contentId = document.getElementById("content3");
		  // Toggle 
		  contentId.style.display == "none" ? contentId.style.display = "block" : 
		contentId.style.display = "none"; 
	};

$(document).ready(main);