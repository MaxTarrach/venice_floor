
let angle;

let img; 

let square1;
let sqaure2;
let rotation; 

let coordinates;

let objectList;

let obj1;

let test; 

let fr = 30;

let timer = 0; 

let spinning_tile = 0; 

let random_degree = 0;

let number_tiles;
 


function preload(){

  img = loadImage('Venice_Placeholder.png');

};


function setup() {

  frameRate(fr);

  createCanvas(1080, 1080);
  rectMode(CENTER);
  angleMode(DEGREES);

  angle = 0;
  rotation = 90; 

  let objectList = [];

  let name_conc = "square";


  // two dimensional array of coordinates  
  coordinates = init_coordinates(width, height);
  console.log(coordinates); 


  // number of tiles to draw
  number_tiles = coordinates.length; 
  console.log(number_tiles);

  
  // create every square at (0/ 0)
  for (i = 0; i < number_tiles; i++){

    let object_name = name_conc + i

    object_name = new Square(0, 0, 0);
    
    objectList.push(object_name);


  };

  obj1 = Object.assign({}, objectList);

  setInterval(tile_select, 15000);
  setInterval(degree_select, 15000);
  

};

function draw() {

  background("#E8E6D9");

  let numero_turno = random(35);

  console.log(spinning_tile);
  console.log(random_degree);

  // Display every tile static besides the spinning one 
  static_draw(spinning_tile);

  // Diplay the spinning tile
  spinning_draw(spinning_tile);


  push();
  // Show Frames for test purposes
  textSize(64);
  textFont('monospace');
  fill(27, 255, 20);
  text(frameCount, 900, 900);
  
  // alle 60 Frames wird die Sekundenzahl erhöht.
  if (frameCount % 60 == 0 ){

    timer++;

  };

  text(timer, 900, 950);

  text(spinning_tile, 900, 850);

  text()

  pop(); 
  
};


class Square {

  constructor(xPosition, yPosition, rotation){
   this.x = xPosition;
   this.y = yPosition;
   this.size = width / 6;
   this.rotation = rotation;
  };

  rotate(break_angle) {

    
    if ( this.rotation == break_angle){

      return;       

    };

    this.rotation++;

    if (this.rotation >= 360){

      this.roation = 0;

    };

  };


  // Translate every square to its position 
  translate(xTranslate, yTranslate){

    translate(xTranslate, yTranslate);

  };

  // Initial Display of Squares
  display(){
    push();
    rotate(this.rotation);
    //image(img, -90, -90);
    noFill();
    rect(this.x, this.y ,this.size, this.size);
    pop();
  };

};


// input = height and width of canvas 
// return = two dimensional array of coordinates
function init_coordinates(width, height) {

  let width_subset = width / 6;
  let height_subset = height / 6;

  let coordinates = [];

  // coordinates.push([0, 0]);
  
  for (let i = 0; i < width; i = i + width_subset){
    for (let j = 0; j < height; j = j + height_subset)

    coordinates.push([i, j]);

  };

  return coordinates; 

};


// choose a random degree 90/ 180/ 270/ 360
function degree_select(){

  random_degree = random([90, 180, 270, 360]);

};


function tile_select(){

  spinning_tile = round(random(number_tiles));

};


function static_draw(moving_tile){

  for(i = 0; i < coordinates.length; i++){

    if (i == moving_tile) {

      //dont draw tile
      
    } else {

    push();
      translate(1080/6/2, 1080/6/2);
      obj1[i].translate(coordinates[i][0], coordinates[i][1]);
      obj1[i].display();
    pop();

  };

  };

};


function spinning_draw(moving_tile){

  if (moving_tile !== null){

  push();
    translate(1080/6/2, 1080/6/2);
    obj1[moving_tile].translate(coordinates[moving_tile][0], coordinates[moving_tile][1]);
    obj1[moving_tile].rotate(random_degree);
    obj1[moving_tile].display();
  pop();

  } else{

    throw new Error('Null');

  }

};