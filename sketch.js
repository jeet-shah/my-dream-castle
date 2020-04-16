function setup() {
  createCanvas(800,800);
 var rect = createSprite(400, 600, 50, 400);
 var rect1 = createSprite(455,600,50,400);
 var rect2 = createSprite(345,600,50,400);
 var rect3 = createSprite(290,600,50,400);
 var rect4 = createSprite(510,600,50,400);
 var rect5 = createSprite(565,600,50,400);
 var rect6 = createSprite(235,600,50,400);
 var rect7 = createSprite(140,600,80,500);
 var rect8 = createSprite(650,600,80,500);
 var rect9 = createSprite(400,300,5,200); 
 var rect10 = createSprite(428,223,60,50); 

}

function draw() {
  background(0);  
  triangle(100,350,180,350,140,300);
  triangle(610,350,690,350,650,300);
 
  drawSprites();
}