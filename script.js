//your JS code here. If required.

let applause = new Audio("sounds/tada.mp3");

let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		applause.play();
	})
});