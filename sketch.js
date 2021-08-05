
function preload() 

seaImg = loadImage("sea.png") ;

  shipImg1 = loadAnimation(//list the names of png files that you want to load) ;




function setup(){
  createCanvas(400,400);
  
  spriteName.addImage(seaImg) ;
}

function draw() {
  background("blue");
 
  if (sea.x < 0) {
    sea.x = sea.width/2;
  }
}