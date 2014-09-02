$(document).ready(function() {
	$(".content-holder > div").each(function() {
		$(this).hide();
	});


	$("#about")[0].onclick = function() {
		$(".content-holder > div").each(function() {
			$(this).hide();
		});
		$(".active").each(function() {
			$(this).toggleClass("active", false);
		});
		$("#about").toggleClass("active", true);
		$("#about-content").show()
	};

	$("#home")[0].onclick = function() {
		$(".content-holder > div").each(function() {
			$(this).hide();
		});
		$(".active").each(function() {
			$(this).toggleClass("active", false);
		});
		$("#home").toggleClass("active", true);
		$("#home-content").show()
	};

	$("#contact")[0].onclick = function() {
		$(".content-holder > div").each(function() {
			$(this).hide();
		});
		$(".active").each(function() {
			$(this).toggleClass("active", false);
		});
		$("#contact").toggleClass("active", true);
		$("#contact-content").show()
	}; 

});