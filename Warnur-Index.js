var tombolMenu = $(".menu");
var menu = $("navbar-nav a");

function klikMenu() {
    tombolMenu.click(function (){
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

let slide = document.querySelectorAll('.slide');
var current = 0;

function cls(){
    for(let i = 0; i < slide.length; i++){
        slide[i].style.display = 'none';
    }
}

function next(){
    cls();
    if(current === slide.length-1) current = -1;
    current++;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function(){
        x += 0.1;
        slide[current].style.opacity = x;
        if(x >= 1){
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);
}

function prev(){
    cls();
    if(current === 0) current = slide.length;
    current--;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function() {
        x+=0.1;
        slide[current].style.opacity = x;
        if(x >= 1){
            clearInterval(intX);
            x = 0.4
        }
        
    }, 100);
}

function start(){
    cls();
    slide[current].style.display = 'block';
}

//Galery
start();


button onclick="one(1)"
button onclick="two(2)"
button onclick="four(4)"


// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}

