var dog,dogimg,database,foodstock,food;

function preload()
{
dogimg=loadImage("images/dogImg.png")
dog1img=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  dog=createSprite(250,250,50,50)
  dog.addImage(dogimg)
  dog.scale=0.1
  foodstock =database.ref("Food");
foodstock .on("value",readStock)
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
     writeStock(food)
     dog.addImage(dog1img);
  }
  drawSprites();
fill("white")
  textSize(30);
  text("remainingFood"+":" +food,120,120)

}
function readStock(data){
food=data.val();
}

function writeStock(x){
 if(x<=0){
   x=0;
 }else{
   x=x-1;
 }
 
  database.ref('/').update({
   'Food':x
 })
  }
  
