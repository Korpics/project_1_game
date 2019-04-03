//user
let user = '';
let userImage ='';
let theBoneImage = '';
let theBone = '';
let doggyDone = '';
let doggyPlaying ='';
let theScore = 0;



//function to run once when window is loaded.
function setup() {
//sets the gamestate to 'playing' (doggyDone = gameStillPlaying)
  let doggyDone = false;
//sets score to zero.
  let theScore = 0;
  instructions();
//creates the canvas
  createCanvas(500,500)
//depicts the specifications of users/enemies position on canvas.
  user = createSprite(width / 2, height - 25, 48, 48)
  theBone = createSprite(width / 2, 0, 10, 20)

}

//alerts that inform user of the controls to this game.
//called in setup function.
function instructions(){
  let instrucTions = alert('Left & Right arrow keys to move le dog');
  let instrucTionsTwo = alert('Combine it with the UP arrow key to increase speed');
  let instrucTionsThree = alert('Use UP and DOWN by themselves to go reeeeal slow.');
  let instrucTionsFour = alert('Good Luck Bud. Get to ten.');
}



//this function is repeatedly ran once setup is complete.
function draw() {
//if the dog has failed or the game is not being played anymore - run gameOver.
  if (doggyDone === true) {
    gameOver()
  }
//if doggy is still playing - play until the overlap occurs. 
  else {
    if (theBone.overlap(user)) {
//this is to change position of x so that the falling object relocates on x axis each time this runs
//random() is awesome and can be read up on here http//p5js.org/reference/#p5/random. In this regard I am using the min,max arguments.      
      theBone.position.x = random(5, width - 5)
      theBone.position.y = random(5, length - 5)
      theScore = theScore + 1
      //updateScore();
     // let h2 = document.querySelector('#scorehere')
   // h2.html(`${theScore}`)
      drawInstruct();
    } else{
    drawInstruct();
}
}



function drawInstruct(){
  background(0, 0, 100)
//p5 function to draw sprite on canvas
  drawSprites()
//user moves across x axis via keycode(left/right arrow) (adjustment in width is due to the sprite moving halfway off screen)
  if (keyDown(RIGHT_ARROW) && user.position.x < width -25) {
      user.position.x = user.position.x + 10
}   if (keyDown(LEFT_ARROW) && user.position.x > 25) {
      user.position.x = user.position.x - 10
}   if (keyDown(UP_ARROW) && keyDown(RIGHT_ARROW) && user.position.x < width -25) {
      user.position.x = user.position.x + 12
}   if (keyDown(UP_ARROW) && keyDown(LEFT_ARROW) && user.position.x > 25) {
      user.position.x = user.position.x - 12
}   if (keyDown(UP_ARROW) && user.position.x < width -25) {
      user.position.x = user.position.x + 7
}   if (keyDown(DOWN_ARROW) && user.position.x > 25) {
      user.position.x = user.position.x - 7
}
//theBone falling down vertically
  theBone.position.y = theBone.position.y + 9
//brings theBone back to the top once meeting(x,0)
  if (theBone.position.y > height) {
    console.log(theScore);
    doggyDone = true;
}
}
}


//research suggested to use preLoad when using images. currently having issues with this.
/*function preload(){
}
*/



function gameOver(){
//checks to see status of game state as well as current score and then provides you a win or loss
  if( doggyDone===true && theScore >= 10){
  textAlign(CENTER) 
  fill('white')
  text(`Nice! you got over 10!`, width / 2, height / 2)
  text(`You made it to ${theScore}! click to play again`, width / 2, (3 * height) / 4)
  } else{
  background(0)
 //textAlign takes two arguments but defaults this to CENTER, CENTER
  textAlign(CENTER)
 //fills
  fill('white')
 //text to be entered within this 'prompt'
  text('Game Over!', width / 2, height / 2)
  text('click with your mouse bud cmon', width / 2, (3 * height) / 4)
}
  console.log('im workin here!')
}



/*
function updateScore(){
  let scorehtml = document.querySelector('h2')
  scorehtml.innerHTML = `${theScore}`
}*/
//AWESOME p5 feature below. http//p5js.org/reference/#p5/mouseClicked
//sets the canvas back to a gamePlaying state (doggyDone false) and resets the coordinates of both user and theBone(fallingobject)
//essentially, this is a restart game function.



function mouseClicked(){
//the if statement is to be sure that the doggyDone (gameover state) is set to true to avoid a reset everytime the user conducts a mouseclick. 
//this then resets the two 'sprites' at 'specified location'
   if (doggyDone) {
  doggyDone = false
  theScore = 0
  user.position.x = width / 2
    user.position.y = height - 25
    theBone.position.x = width / 2
    theBone.position.y = 0
  } else{console.log('mouse click workin here but you aint done bud')}
}



//event listener (COPIED THIS FUNCTION FROM STACKOVERFLOW) that disables the defaulted use of space and arrow keys (aka anything to scroll the window)
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);