// Suzdavame promenlivi
//fr make evry thing like bruv
let myX, myY, min1 = 200, max1 = 300, max2 = 400, min2 = 300, brcoins=0,boxX = 550;
let obstacles1X = randomInteger(200),obstacles1Y = randomInteger(-100)
let obstacles2X = Math.floor(Math.random()) * (max1 - min1) + min1,obstacles2Y = randomInteger(-100)
let obstacles3X = Math.floor(Math.random()) * (max2 - min2) + min2,obstacles3Y = randomInteger(-100)
let boxY =randomInteger(-100), coinx=randomInteger(600),coiny = randomInteger(-100)
let stulbaX = 0, stulbaY= 300, jivoty = 100;
function init() {
    // some stuf
    myX = 300;
    myY = 300;
    canigetrivive = false
    
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    //more controls// myX = myX + (mouseX - myX) / 10;
    //more controls// myY = myY + (mouseY - myY) / 10;
    //put and move the trains
    obstacles1Y+= 5
    if(obstacles1Y > 600){
        obstacles1Y = randomInteger(-100)
        obstacles1X = randomInteger(200)
    }
    if(obstacles2Y > 600){
        obstacles2Y = randomInteger(-100)
        Math.floor(Math.random()) * (max1 - min1) + min1
    }
    if(obstacles3Y > 600){
        obstacles3Y = randomInteger(-100)
        Math.floor(Math.random()) * (max2 - min2) + min2
    }
    
    if(coiny > 600){
        coiny = randomInteger(-100)
        coinx = randomInteger(600)
    }
    if(myY > 550){
        myY = 500
    }
    //making the collision in bettwen of the player and trains
    if(areColliding(myX, myY, 60, 80,obstacles1X, obstacles1Y, 100, 100)){
        myY +=5, jivoty -= 0.1
    }
    if(areColliding(myX, myY, 60, 80,obstacles2X, obstacles2Y, 100, 100)){
        myY += 5, jivoty -= 0.1
    }
    if(areColliding(myX, myY, 60, 80,obstacles3X, obstacles3Y, 100, 100)){
        myY += 5, jivoty -= 0.1
    }
    if(areColliding(myX, myY, 60, 80,boxX, boxY, 100, 100)){
        myY += 5, jivoty -= 0.1
        console.log("fras")
    }
    if(areColliding(myX, myY, 60, 80,stulbaX, stulbaY,100 , 100)){
        myY -= 300
    }
    if(areColliding(myX, myY, 60, 80,coinx,coiny,40,40)){
        coinx = undefined
        brcoins += 1
    }
    if(boxY > 600){
        boxY = randomInteger(-100);
        boxX = randomInteger(600);
    }
    //cheack if the coins are more then 50 for the evry move heal
    if(brcoins == 50){
        canigetrivive = true;
    }
    if(jivoty <= 0){

    }
    if(jivoty > 100){
        jivoty == 100
    }
    //making every thing move
    obstacles2Y += 5;
    obstacles3Y+= 5;
    boxY +=5;
    coiny += 5;
    stulbaX = obstacles1X;
    stulbaY = obstacles1Y +100;
}
function draw() {
    if(jivoty < 0.1){
        context.fillStyle = "#00000";
        context.fillRect(0,0,canvas.width,canvas.height);
        context.fillStyle = "Green";
        context.font = "150px Arial";
        context.fillText("Game Over",0, 200);
    }else{
    // drawing every thing on the screan
    drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
    drawImage(paddle, obstacles1X, obstacles1Y, 100, 100);
    drawImage(paddle, obstacles2X, obstacles2Y, 100, 100);
    drawImage(paddle, obstacles3X, obstacles3Y, 100, 100);
    drawImage(paddle, boxX, boxY, 100, 100);
    drawImage(coin[4],coinx,coiny,40,40);
    drawImage(slabBlue, stulbaX, stulbaY, 100, 100);
    drawImage(coin[4], -10,-10,70,70);
    
    //making the heart and coins visable for the player with out console
    context.fillStyle = "yellow";
    context.fillRect(50,0, 100, 50);
    context.fillStyle = "#000000";
    context.font = "50px Arial";
    context.fillText("X" + brcoins, 50,0);
    
    context.fillStyle = "red";
    context.fillRect(700, 0, 100, 50);
    context.fillStyle = "#000000";
    context.font = "50px Arial";
    context.fillText("X" + jivoty, 700,0);
    drawImage(heartSmall, 640, -15, 70, 70)
    if(brcoins == 100){
        context.fillStyle = "#00000";
        context.fillRect(0,0,canvas.width,canvas.height);
        context.fillStyle = "Green";
        context.font = "150px Arial";
        context.fillText("You won",0, 200);
    }
    }
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keydown(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    //making the movment and gameplay keybinds
    if(key == 65){
        myX -= 50
    }
    if(key == 68){
        myX += 50
    }
    if(key == 83){
        myY += 50
    }
    if(key == 82 || canigetrivive == true){
        jivoty += 1
        console.log("pary")
    }
}