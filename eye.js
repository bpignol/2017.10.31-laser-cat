// THIS IS AN OBJECT

function eye(x, y){ // creating an object 
  this.posX = x;
  this.posY = y;
  this.radius = 10;

  this.show = function(){ // defining an object
    ellipse(this.posX, this.posY, this.radius, this.radius);
  }

}