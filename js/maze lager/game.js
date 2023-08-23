let stenix = randomInteger(800), steniy = randomInteger(600)
let myX, myY, brsteni=10
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    if(areColliding(myX,myY,60,80,stenix,steniy,40,80)){
        myX +=1
        myY +=1
        console.log("ouch")
    }
    if(areColliding(myX,myY,60,80,stenix,steniy,40,80)){
        myX -=1
        myY +=1
        console.log("ouch")
    }
    for(let i = 0; i < 10;i++){
        for(let j = 0; j < 10; j++){
            drawImage(paddle, stenix, steniy, 40, 80);
        }
    }
}    
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
    drawImage(paddle, stenix, steniy, 40, 80);
  
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    if(key == 87){
        myY -= 10
    }
    if(key == 83){
        myY += 10
    }
    if(key == 65){
        myX -= 10
    }
    if(key == 68){
        myX += 10
    }
}