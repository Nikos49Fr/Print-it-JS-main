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

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

leftArrow.addEventListener("click", () => {
	console.log("à gauche");
});
rightArrow.addEventListener("click", () => {
	console.log("à droite");
});

const dots = document.querySelector(".dots")
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div");
	dot.classList.add("dot");
	if (i === 0) {
		dot.classList.toggle("dot_selected");
	}
	dots.appendChild(dot);
}