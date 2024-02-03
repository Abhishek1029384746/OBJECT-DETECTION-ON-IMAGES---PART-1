function setup() {
    canvas = createCanvas(640, 420)
    canvas.center();
}

img = "";

function preload(){
    img = loadImage("Bedroom.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed", 160, 220);
    noFill();
    stroke("#FF0000")
    rect(140, 200, 450, 250 )

    fill("#FF0000");
    text("curtain", 420, 100);
    noFill();
    stroke("#FF0000")
    rect(400, 80, 260, 250 )
}

