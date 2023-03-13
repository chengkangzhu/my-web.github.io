$(".hamburger, #navbar a").on("click", () => {
	let currentVisibility = $("#navbar").css("visibility");
	let newVisibility = currentVisibility === "hidden" ? "visible" : "hidden";

	if (newVisibility == "hidden") {
		$("#navbar").addClass("visibilty");
	} else {
		$("#navbar").removeClass("visibilty");
	}
});