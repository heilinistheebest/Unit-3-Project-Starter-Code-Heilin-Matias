/* Declare variables below to save the different sections (divs) of your story*/

let player = document.querySelector(".player");
let button1 = document.querySelector(".option-1");
let button2 = document.querySelector(".option-2");
let opening = document.querySelector(".opening");
let buttons = document.querySelector(".buttons");
let op1 = document.querySelector(".option-one-screen");
let weapons = document.querySelector(".coin");
let button3 = document.querySelector(".option-3");
let button4 = document.querySelector(".option-4");
let button5 = document.querySelector(".option-5");
let glitterbom = document.querySelector(".glitterbomb");
let title = document.querySelector(".title");
let background = document.querySelector("body");
let op2 = document.querySelector(".option-two-screen");
let runleftButton = document.querySelector(".run left");
let runrightButton = document.querySelector(".run right");
let end1 = document.querySelector(".option-one-end");
let end2 = document.querySelector(".option-two-end");
let paragraphinnerHTML = "hello";



button1.onclick = function() {
    opening.style.display = 'none';
    title.style.display = "none";
    buttons.style.display = 'none';
    op1.style.display = 'block';
};
button2.onclick = function() {
    buttons.style.display = 'none';
     title.style.display = "none";
    opening.style.display = 'none';
    op2.style.display = 'block';
};
button3.onclick = function() {
    op1.style.display = 'none';
     title.style.display = "none";
    opening.style.display = 'none';
    end1.style.display = 'block';
};
button4.onclick = function() {
    op2.style.display = 'none';
     title.style.display = "none";
    opening.style.display = 'none';
    end2.style.display = "block";
};