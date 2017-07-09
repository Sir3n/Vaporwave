var rekt = []; //array of rectangles
var tri = []; //array of triangles

function setup() {
  createCanvas(500, 600);
   for (var j=0; j<50; j++){
    rekt.push(new Rect());
  }
  for (var i=0; i<50; i++){
    tri.push(new Tri());
  }
}


function draw() {
  background(0, 255, 200);
  if (keyIsDown(SHIFT)) {
    background(0, random(255), (200))
  }
    for(var j=0; j<rekt.length; j++) {
    rekt[j].display();
    rekt[j].move();
  }
  for(var i=0; i<tri.length; i++) {
    tri[i].display();
    tri[i].move();
  }
}


//pink squares
function Rect() {
  //this.x = map(0, width);
  this.x = random(width);
  this.y = random(height);
  this.speed = 1;
  this.size = 50
  this.size = 50;

  this.display = function() {
    stroke(225, 0, 100);
    c = color(200, 0, 100, 80);
    fill(c);
    rect(this.x, this.y, this.size, this.size);
    if (mouseIsPressed) {
    this.size = 100; }
    else {this.size = 50;
    }

  }

    this.move = function() {
      this.y = this.y + 1;
      if (this.y > height) {
        this.y = -50;
      }
      if (keyIsDown(DELETE)) {
        this.y = this.y -1;
      }
       
}
}

//white triangles
function Tri() {
  this.x = random(width);
  this.y = random(height);
  this.speed = (1);

  this.display = function() {
    stroke(255, 255, 255);
    var c = color(255, 255, 255, 80);
    fill(c);
    triangle(this.x, this.y-30, this.x-35, this.y+30, this.x+35, this.y+30);

  }

  this.move = function() {
    this.x = this.x + this.speed;
    if (this.x > width || this.x < 0) {
      this.speed = this.speed * -1;
  }


}
} //draw bracket
