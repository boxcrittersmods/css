let mobileBtn = document.getElementsByClassName("btn-mobile")[0];
let nav = document.querySelector("nav");

mobileBtn.addEventListener("click", function () {
	mobileBtn.classList.toggle("open");
	nav.classList.toggle("open");
});