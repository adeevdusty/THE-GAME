var playbutton
var Gamestate;
var player , enemy

function preload() {
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight-4);
    playbutton = createSprite(windowWidth/2+500,windowHeight/2+200)
    Gamestate = "Homepage"
    edges=createEdgeSprites();
    player = createSprite (windowWidth/2-500,30) ;
enemy = createSprite (windowWidth/2+500,30) ;

player.visible = false
enemy.visible = false
}

function draw(){
    background("lightblue");

    if (Gamestate==="Homepage") {
        background("yellow");   
    }

if (mousePressedOver(playbutton)) {
Gamestate = "level1" ;
playbutton.visible=false
} 
if (Gamestate==="level1") {
    background ("lightblue")
    player.visible = true
    enemy.visible = true
    if (enemy.y < 500 ) {
        enemy.velocityY = 10
   
    }

    else if (enemy.y > 500 ) {
        enemy.velocityY = -15 ;
        
    }

//enemy.bounceOff (edges[2])
//enemy.bounceOff (edges[3])
if (keyDown(UP_ARROW)) {
 player.y = player.y - 50;   
}
if (keyDown(DOWN_ARROW)) {
    player.y = player.y + 50;   
   }
  
}

drawSprites() ;  
}

