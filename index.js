
// navbar
$(".hamburger, #navbar a").on("click", () => {
	let currentVisibility = $("#navbar").css("visibility");
	let newVisibility = currentVisibility === "hidden" ? "visible" : "hidden";

	if (newVisibility == "hidden") {
		$("#navbar").addClass("visibilty");
	} else {
		$("#navbar").removeClass("visibilty");
	}
});
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

//project section (slide in)

const handleProjectScroll = () => { 
	const projectSection = document.querySelector("#project-section");	
 	const sectionPosition = projectSection.getBoundingClientRect().top; 
	const windowCenter = window.innerHeight / 2
    
	if (sectionPosition < windowCenter) { 
		const projectImage = document.querySelector(".project-image-animate");
		const projectDescription = document.querySelector( ".project-description-animate" );

		projectImage.classList.remove("project-image-animate");
		projectDescription.classList.remove("project-description-animate");
		window.removeEventListener("scroll", handleProjectScroll)
	}
}
 
window.addEventListener("scroll", handleProjectScroll);
 


//service section (waterdrop scroll in)
const serviceSection = document.getElementById("service-section");

function animateDrops() {
	const drops = serviceSection.querySelectorAll(".drop");
	drops.forEach((drop, index) => {
		setTimeout(() => {
			drop.classList.add("animate");
		}, index * 300);
	});
}

function handleServiceScroll() {
	const serviceSectionPosition = serviceSection.getBoundingClientRect().top;
	const windowCenter = window.innerHeight / 2

	if (serviceSectionPosition < windowCenter) {
		animateDrops();
		window.removeEventListener("scroll", handleServiceScroll);
	}
}

window.addEventListener("scroll", handleServiceScroll);







//fade in animation for skillboxes
// const skillBoxContainer = document.querySelector(".skill-container");

// const options = {
// 	root: null,
// 	rootMargin: "0px",
// 	threshold: 0.3,
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         let delay = 0;
// 		console.log(entry)

//         if (entry.isIntersecting) {
//             const skillBoxes = entry.target.querySelectorAll(".skill-box");
//             skillBoxes.forEach((skillBox, index) => {
//                 setTimeout(() => {
//                     skillBox.classList.add("animation-active");

//                     // Check if this is the last skillBox to be animated
//                     if (index === skillBoxes.length - 1) {
//                         observer.unobserve(entry.target); // Stop observing the container
//                     }
//                 }, delay);
//                 delay += 150; // Increase the delay for each element by 150ms
//             });
//         }
//     });
// }, options);

// observer.observe(skillBoxContainer);

//change main display by hover subimages
function changeDisplay (mainDisplayId, newImg){
	let displayElement = document.getElementById(mainDisplayId)
	displayElement.src = newImg.src 
}


function handleSkillBoxScroll() {
	const skillBoxContainer = document.querySelector(".skill-container")
	const skillBoxContainerPosition = skillBoxContainer.getBoundingClientRect().top
	const windowCenter = window.innerHeight / 2

	if(skillBoxContainerPosition < windowCenter) {
		let delay = 0
		const skillBoxes = document.querySelectorAll(".skill-box");
		skillBoxes.forEach((skillBox, index) => {
			setTimeout(() => {
				skillBox.classList.add("animation-active");

				// Check if this is the last skillBox to be animated
				if (index === skillBoxes.length - 1) {
					window.removeEventListener("scroll",handleSkillBoxScroll) 
				}
			}, delay);
			delay += 150; // Increase the delay for each element by 150ms
		});
	}
}

window.addEventListener('scroll',handleSkillBoxScroll)
