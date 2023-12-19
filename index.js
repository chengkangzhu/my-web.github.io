
// toggle navbar menu 

$(".hamburger, #navbar a").on("click", () => {
	let currentVisibility = $("#navbar").css("visibility");
	let newVisibility = currentVisibility === "hidden" ? "visible" : "hidden";

	if (newVisibility == "hidden") {
		$("#navbar").addClass("visibilty");
	} else {
		$("#navbar").removeClass("visibilty");
	}
});


//scroll animation for water droplets in service section
const serviceSection = document.getElementById("service-section");
const drops = serviceSection.querySelectorAll(".drop");

function animateDrops() {
	drops.forEach((drop, index) => {
		setTimeout(() => {
			drop.classList.add("animate");
		}, index * 300);
	});
}

function handleScroll() {
	const serviceSectionPosition = serviceSection.getBoundingClientRect().top;
	const windowHeight = window.innerHeight;

	if (serviceSectionPosition < windowHeight / 2) {
		animateDrops();
		window.removeEventListener("scroll", handleScroll);
	}
}

window.addEventListener("scroll", handleScroll);


//slide in animation for project
const projectSection = document.querySelector("#project-section");

// Add a scroll event listener to the window object
window.addEventListener("scroll", () => {
	// Get the project section's top and bottom positions
	const sectionTop = projectSection.offsetTop;
	const sectionBottom = sectionTop + projectSection.offsetHeight;

	// Get the current scroll position of the window
	const scrollPosition = window.pageYOffset + window.innerHeight;

	// Check if the scroll position is within the project section
	if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
		// If the scroll position is within the project section, remove the project-image-animate and project-description-animate classes
		const projectImage = document.querySelector(".project-image-animate");
		const projectDescription = document.querySelector(
			".project-description-animate"
		);

		projectImage.classList.remove("project-image-animate");
		projectDescription.classList.remove("project-description-animate");
	}
});


//fade in animation for skillboxes
const skillBoxContainer = document.querySelector(".skill-container");

const options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.3,
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		let delay = 0;

		if (entry.isIntersecting) {
			entry.target.querySelectorAll(".skill-box").forEach((skillBox) => {
				setTimeout(() => {
					skillBox.classList.add("animation-active");
				}, delay);
				delay += 150; // increase the delay for each element by 200ms
			});
		}
	});
}, options);

observer.observe(skillBoxContainer);

//change main display by hover subimages
function changeDisplay (mainDisplay, newImg){
	let displayElement = document.getElementById(mainDisplay)
	displayElement.src = newImg.src
	console.log(newImg.src)
}