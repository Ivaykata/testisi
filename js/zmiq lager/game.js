let zmiqX = 200, zmiqY = 200, zmiqlenght = 50//zmiqta
let zadzmiqX = zmiqX, zadzmiqY = zmiqY - 50
let brhora = 10
let applex = randomInteger(800), appley = randomInteger(600);
let taken = [];
function init() {
}
function update() {
    if (zmiqX > 800 + 50) {
        zmiqX = 0;
        console.log("tupo");
    }
    if (zmiqY > 600 + 50) {
        zmiqY = 0;
        console.log("L");
    }
    if (zmiqY < 0 - 50) {
        zmiqY = 600;
        console.log("L");
    }
    if (zmiqX < 0 - 50) {
        zmiqX = 800;
        console.log("tup");
    }
}
function draw() {
    drawImage(backGrass, 0, 0, 800, 600)
    // drawImage(motorRed, zadzmiqX, zadzmiqY, 50,50)
    drawImage(kufte, applex, appley, 20, 20)
    if (areColliding(zmiqX, zmiqY, 50, 50, applex, appley, 20, 20)) {
        console.log("nqmnqm")
        drawImage(motorRed, zadzmiqX - 50, zadzmiqY - 50, 50, 50);
        applex = randomInteger(800);
        appley = randomInteger(600);
        taken.push({ x: zmiqX, y: zmiqY });
    }
    
    for (let i = taken.length - 1; i >= 0; i--) {
        drawImage(ballOrTree, taken[i].x, taken[i].y, 50, 50);
    }
    drawImage(ballOrTree, zmiqX, zmiqY, 50, 50);

    //risuvaneto na zmiqta
}
function mouseup() {
}
function keydown(key) {
    if (taken.length > 0) {
        taken.pop();
        taken.unshift({ x: zmiqX, y: zmiqY });
    }
    if (key == 87) {
        zmiqY -= 10
        zadzmiqY = zmiqY + 50
        zadzmiqX = zmiqX
    }
    if (key == 83) {
        zmiqY += 10
        zadzmiqY = zmiqY - 50
        zadzmiqX = zmiqX
    }
    if (key == 68) {
        zmiqX += 10
        zadzmiqX = zmiqX - 50
        zadzmiqY = zmiqY
    }
    if (key == 65) {
        zmiqX -= 10
        zadzmiqX = zmiqX + 50
        zadzmiqY = zmiqY
    }
    //dvijenieto na zmiqta
}

// Access DOM element object
//const rotated = document.getElementById('rotated');
// Rotate element by 90 degrees clockwise
//rotated.style.transform = 'rotate(90deg)';