const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//initialisation
let bulletActive = 0;
let bulletDesactive = 0;
// on récupère tout de suite les balises qui seront à modifier
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

// constructiuon des bullets dots
const dots = document.querySelector(".dots")
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div");
	dot.classList.add("dot");
	if (i === 0) { // bullet 0 active par défaut
		dot.classList.toggle("dot_selected");
	}
	dots.appendChild(dot);
}

// fonction principale qui va gérer le changement de slide
function slideChange(direction) {
	// on récupère l'ensemble des bullets
	const dots = document.querySelectorAll(".dot");
	// on retire la class dot_selected à la bullet active
	dots[bulletActive].classList.remove("dot_selected");
	// on détermine dans quel sens le carrousel va défiler
	if (direction === "left") {
		bulletActive--;
	} else if (direction === "right") {
		bulletActive++;
	}
	// on active la bullet de la nouvelle slide
	dots[bulletActive].classList.add("dot_selected");
	
	// on met à jour l'image et le texte correspondant
	bannerImg.setAttribute("src", `./assets/images/slideshow/${slides[bulletActive].image}`);	
	bannerText.innerHTML = slides[bulletActive].tagLine;
}

// EventListener pour la flèche gauche
const leftArrow = document.querySelector(".arrow_left");
leftArrow.addEventListener("click", () => {
	slideChange("left");
});

// EventListener pour la flèche droite
const rightArrow = document.querySelector(".arrow_right");
rightArrow.addEventListener("click", () => {
	slideChange("right");
});