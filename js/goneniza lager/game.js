// Suzdavame promenlivi
let player = {
    x:300,
    y:200,
    shir:50,
    vis:50,
}
let bombX = 0 , bombY = 600,bulletX = 0,bulletY = 600;
let shildX = 0, shildY = 600;
let vrag = {
    x:600,
    y:400,
    shir:50,
    vis:50,
    jivoti:3
}
function init() {
    istrapplaced = false
    bulletspawn = false
    isshildon = false
}
function update() {
    if(areColliding(bombX, bombY, 40, 40,vrag.x, vrag.y, vrag.shir, vrag.vis)){
        vrag.x = 600
        vrag.jivoti -= 0
        bulletspawn = true
        console.log("zombie")
        bombX = 1000
    }
    if(areColliding(shildX, shildY, 10,50,bulletX, bulletY, 30,30)){
        bulletX = undefined
    }
    vrag.x = vrag.x + (player.x - vrag.x) / 80;
    vrag.y = vrag.y + (player.y - vrag.y) / 80;
    bulletX = bulletX + (player.x - bulletX) /20;
    bulletY = bulletY + (player.y - bulletY) /20;
    if(vrag.jivoti == 0){
        vrag.x = undefined
        console.log("dead")
    }
    bombX = player.x +50     
    bombY = player.y+50
    bulletX = vrag.x 
    bulletY = vrag.y
    shildX = player.x + 40
    shildY = player.y 
}
function draw() {
    drawImage(femaleAction, player.x, player.y, player.shir, player.vis);
        if(istrapplaced == true){
            drawImage(bomb, bombX - 20, bombY, 20, 10)
        }
        if(bulletspawn == true){
            drawImage(bullet, bulletX, bulletY, 30,30)
        }
        if(isshildon == true){
            drawImage(paddle, shildX, shildY, 10,50)
        }
        drawImage(zombie, vrag.x, vrag.y, vrag.shir, vrag.vis)
}
function mouseup() {

    console.log("Mouse clicked at", mouseX, mouseY);
}
function keydown(key){
    if(key == 87){
        player.y -= 10
    }
    if(key == 83){
        player.y += 10
    }
    if(key == 65){
        player.x -= 10
    }
    if(key == 68){
        player.x += 10
    }
    if(key == 82){
        istrapplaced = true
    }
    if(key == 69){
        vrag.jivoti -= 1
        console.log("*zombie ding sound*")
    }
    if(key ==70){
        isshildon = true
    }
    console.log("Pressed", key);
}
