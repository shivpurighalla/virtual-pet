//Create variables here

var dog, happyDog, database, foodS, foodStock;
var dog1img, dog2img;
var database;
function preload()
{
  //load images here
 dog1img=loadImage("./images/dogImg.png");
 dog2img=loadImage("./images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database();
  dog=createSprite(450,400,20,20);
  dog.addImage(dog1img);
  dog.scale=0.3;
  foodS=10;
  foodstock=database.ref('food');
  foodstock.on("value",readStock);

}


function draw() {  
background("green");

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dog2img);
}
//showing the foodstock 
fill("white");
textSize(20);
text("Foodstock "+foodS,50,50);
  drawSprites();
  //add styles here

}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}

function readStock(data){
  foodS=data.val();

}