//your JS code here. If required.

let applause = new Audio("sounds/applause.mp3");
let boo = new Audio("sounds/boo.mp3");
let gasp = new Audio("sounds/gasp.mp3");
let tada = new Audio("sounds/tada.mp3");
let victory = new Audio("sounds/victory.mp3");
let wrong = new Audio("sounds/wrong.mp3");

document.querySelector(".applause").addEventListener("click", function() {
    applause.play();
});
document.querySelector(".boo").addEventListener("click", function() {
    boo.play();
});
document.querySelector(".gasp").addEventListener("click", function() {
    gasp.play();
});
document.querySelector(".tada").addEventListener("click", function() {
    tada.play();
});
document.querySelector(".victory").addEventListener("click", function() {
    victory.play();
});
document.querySelector(".wrong").addEventListener("click", function() {
    wrong.play();
});

document.querySelector(".stop").addEventListener("click", function() {
    applause.pause();
	boo.pause();
	gasp.pause();
	tada.pause();
	victory.pause();
	wrong.pause();
    applause.currentTime = 0;
    boo.currentTime = 0;
    gasp.currentTime = 0;
    tada.currentTime = 0;
    victory.currentTime = 0;
    wrong.currentTime = 0;

	
});