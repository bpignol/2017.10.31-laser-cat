//THESE ARE VARIABLES --------------------------------------------------------

var catImg;//declaring var that will hold the object image 
//terminal > directory of the folder > python simple http server > IP http://localhost: 8000 > call in browser localhost:8000
var eyes = []; // array to list the eyes //declaring var that will hold the object eyes in an array
//console > nb eyes > read the detail of each eye caracteristics
var lasers = [];

//THIS IS THE BACKGROUND --------------------------------------------------------

function setup(){ 
  createCanvas(400,400);
  background(0, 300, 100);
  catImg = loadImage('asset/catlaser.jpeg');
}

//THESE ARE THE CALL'S RESULTS --------------------------------------------------------

function draw(){

 // show a cat img 
 image(catImg,0,0); //name, origin position
 catImg.resize(width,height); //size adjustment

  // show all eyes and lasers since begining 
    for (var i = 0; i < eyes.length; i++) { // to have many eyes, do a for loop (i = iteration, .lenght = nb of items in the array)
      fill(255,0,0);
      noStroke();
      eyes[i].show(); 

      stroke(255,0,0);
      strokeWeight(5);
      lasers[i].show();

    // possible to do an embeded iteration : 4 lasers for 2 eyes : for (var j = 0; j < lasers.length; j++) { 
    // lasers[j].show(); 
    } 
}

 // show a new eye and laser when you click
function mousePressed (){
  eyes.push(new eye (mouseX, mouseY));
  console.log("eye created"); // " is for string
  console.log(eyes.length); // without " is for function

  lasers.push(new laser (mouseX, mouseY));
  console.log("laser created"); // possible console.log("eye and laser created")