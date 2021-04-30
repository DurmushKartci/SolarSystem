let sun;

let offsety = 0;
let offsetx = 0;
let offsetz = -3000;
let time = true;
let turnAngle = 5;

function setup() {
    createCanvas(screen.width - 50, screen.height - 150, WEBGL);
    sun = new Planet(100, 0, 0);
    sun.spawnMoons(1, 1);
}

function draw() {

    angleMode(DEGREES)
    rotateY(offsety);
    rotateX(offsetx);
    angleMode(RADIANS)

    lights();
    background(0);
    sun.show();
    if (time) {
        sun.orbit();
    }
}

//İf some keys pressed
function keyPressed() {


    if (key == "t" || key == "T") {
        time = !time;
    }

    if (key == "o" || key == "O") {
        if (offsetz <= 100) {
            offsetz += 100;

        }
    }

    if (key == "p" || key == "P") {
        if (offsetz >= -10000) {
            offsetz -= 100;

        }

    }


    if (keyCode === UP_ARROW) {

        rotateX(offsetx);
        console.log("X : " + offsetx);
        offsetx += turnAngle;

    }
    if (keyCode === DOWN_ARROW) {

        rotateX(offsetx);
        console.log("X : " + offsetx);
        offsetx -= turnAngle;


    }
    if (keyCode === LEFT_ARROW) {

        rotateY(offsety);
        console.log("Y : " + offsety);
        offsety += turnAngle;


    }
    if (keyCode === RIGHT_ARROW) {

        rotateY(offsety);
        console.log("Y : " + offsety);
        offsety -= turnAngle;

    }
}