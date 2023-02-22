/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)

	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("show")
		})
	}
}
showMenu("nav-toggle", "nav-menu")

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
	const navMenu = document.getElementById("nav-menu")
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove("show")
}
navLink.forEach((n) => n.addEventListener("click", linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50
		sectionId = current.getAttribute("id")

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active")
		} else {
			document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active")
		}
	})
}
window.addEventListener("scroll", scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
	origin: "top",
	distance: "60px",
	duration: 2000,
	delay: 200
	//     reset: true
})

sr.reveal(".home__data, .about__img, .skills__subtitle, .gallery__text, .skills__text", {})
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img, .section-title", {
	delay: 400
})
sr.reveal(".home__social-icon", { interval: 200 })
sr.reveal(".skills__data, .images, .contact__input", { interval: 200 })

/*===== IMAGE VIEWER =====*/
let activeImage = 0

// get an array of all the images with their src and index
const imagesList = []
document.querySelectorAll(".images img").forEach((image) => {
	imagesList.push(image.src)
})

// handle events (close, open, next, prev)
const imageViewer = document.querySelector("#image-viewer")

// click on an image
document.querySelectorAll(".images img").forEach((image, index) => {
	image.addEventListener("click", () => {
		showFullImage(index)
	})
})

// click on close
imageViewer.querySelector(".close").addEventListener("click", () => {
	imageViewer.style.display = "none"
})

// click on prev or next
imageViewer.querySelector(".prev").addEventListener("click", () => {
	const prevIndex = activeImage === 0 ? imagesList.length - 1 : activeImage - 1
	showFullImage(prevIndex)
})
imageViewer.querySelector(".next").addEventListener("click", () => {
	const nextIndex = activeImage === imagesList.length - 1 ? 0 : activeImage + 1
	showFullImage(nextIndex)
})

// function that actually switches the full image to the desired one
function showFullImage(index) {
	const imageUrl = imagesList[index]

	document.querySelector("#full-image").src = imageUrl

	imageViewer.style.display = "flex"
	activeImage = index
}
