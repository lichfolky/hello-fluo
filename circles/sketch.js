//let colors = ["#FFFC6B", "#FF118F", "black"];
let colors = [   // BLACK
    "black",
    // FLUORESCENT YELLOW 
    "#ffee39",
    // FLUORESCENT PINK 
    "#fe0094",
    // FLUORESCENT RED  
    "#fc0950"];

let cm2px = 37.79;

//let fr = 30;
let numPoints = 20;

let minStroke = 0.5;
let maxStroke = 4;

let i = 0;
let j = 0;
function setup() {
    //frameRate(fr);
    createCanvas(16.5 * cm2px, 24 * cm2px);
    background(colors[2]);
    noLoop();
}

function draw() {

    fill(colors[1]);
    stroke(colors[2]);
    strokeWeight(5);
    for (let i = 0; i < 400; i++) {
        rngCircle();
    }
}

function rngCircle() {
    circle(random(width), random(height), random(10, 100));

}