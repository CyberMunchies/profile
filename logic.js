$(document).ready(function() {
	function make_show(classname) {
		return function() {
			$(".content-holder > div").each(function() {
				$(this).hide();
			});
			$(".active").each(function() {
				$(this).toggleClass("active", false);
			});
			$("#" + classname).toggleClass("active", true);
			$("#" + classname + "-content").show()
		}
	};
	$("#home")[0].onclick = make_show("home");
	$("#about")[0].onclick = make_show("about")
	$("#contact")[0].onclick = make_show("contact")
	$("#home")[0].click();

});