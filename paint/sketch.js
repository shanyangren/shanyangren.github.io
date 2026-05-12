

//paint

//最初の处理
function setup(){
  createCanvas(400,400);
}
//每帧的处理 フレーム
function draw(){
 //background(200);

  console.log(mouseIsPressed);
  fill(mouseX,200,200);
noStroke();
  if(mouseIsPressed){
    //符合条件的话实行
    circle(mouseX,mouseY,10);
  }
}

