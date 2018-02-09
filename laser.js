// THIS IS AN OBJECT

function laser(x,y){ // creating an object 
  this.oX = x;
  this.oY = y;

  this.show = function(){ // defining an object
    line(this.oX, this.oY, mouseX, mouseY);

  } 

}