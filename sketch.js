

function setup() {
  createCanvas(800,400);

}

function draw() {
  background("black");  
  var hr = hour();
  var min = minute();
  var sc = second();

  var hrAngle = map(hr%12,0,12,0,360);
  var minAngle = map(min,0,60,0,360)
  var scAngle = map(sc,0,60,0,360)
  
  console.log(scAngle)
  

  translate(400,200)
  rotate(-90)

  push()

  angleMode(DEGREES)
  rotate(scAngle);
  stroke(255,0,0)
  strokeWeight(15)
  line(0,0,125,0)

  pop()

  push()

  rotate(minAngle);
  stroke(0,255,0)
  strokeWeight(15)
  line(0,0,75,0)

  pop()

  push()

  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(15);
  line(0,0,50,0);

  pop()

  strokeWeight(10);
  stroke(255,0,0);
  noFill();
  arc(0,0,300,300,0,scAngle)
  stroke(0,255,0);
  arc(0,0,250,250,0,minAngle)
  stroke(0,0,255);
  arc(0,0,200,200,0,hrAngle)

  drawSprites();
}