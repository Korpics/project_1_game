let user = '';
let userImage = '';
let theHamImage = '';
let theHam = '';
let doggyDone = '';
let doggyPlaying ='';
let theScore = 0;
let h2 = '';

/*

.......SCOPE.......

setup() - sets up canvas, presents game controls and sets sprite positioning.
draw() - runs continuously  after initial setup()
drawInstruct() - the conditions allowed for movement and the various speeds
gameOver() - checks the state of the game once theHam has met x,0 and informs the user of their amount of 'catches' + whether they have won or loss.
mouseClicked() - reverts the gamestate if doggyDone == true and resets the coordinates of both the user and other sprite. will not impact performance as doggyDone is false until an ending has been met.
eventlistener - added to be sure that my controls that modulate the speed do not impact the window scroll. (space - up/down arrow keys)

*/


//function to run once when window is loaded.//
function setup() {
//sets the gamestate to 'playing' (doggyDone = gameStillPlaying)//
    let doggyDone = false;
//sets score to zero.//
    let theScore = 0;
    instructions();
//creates the canvas//
    h2 = createElement('h2',`Current Score: ${theScore}`)
    createCanvas(500,500)
    userImage.resize(60, 50)
    theHamImage.resize(40,40)
//depicts the specifications of users/enemies position on canvas.//
    user = createSprite(width / 2, height-(userImage.height/2), 0, 0)
    user.addImage(userImage)
    theHam = createSprite(width / 2, 0, 0, 0)
    theHam.addImage(theHamImage)
}



//alerts that inform user of the controls to this game.//
function instructions(){
    let instrucTions = alert('Left & Right arrow keys to move le dog');
    let instrucTionsTwo = alert('Combine it with the UP arrow key to increase speed');
    let instrucTionsThree = alert('Use UP and DOWN by themselves to go reeeeal slow.');
    let instrucTionsFour = alert('Good Luck Bud. Get to ten.');
}



//this function is repeatedly ran once setup is complete.//
function draw() {
  userImage.resize(60, 50)
  theHamImage.resize(40,40)
//if the dog has failed or the game is not being played anymore - run gameOver.//
  if (doggyDone === true) {
      gameOver()
}
//if doggy is still playing - play until the overlap occurs.// 
  else if (theHam.overlap(user)) {
//this is to change position of x so that the falling object relocates on x axis each time this runs//
//random() is awesome and can be read up on here http//p5js.org/reference/#p5/random. In this regard I am using the min,max arguments. //     
      theHam.position.x = random(5, width - 5)
      theHam.position.y = random(5, length - 5)
      theScore = theScore + 1
      h2.html(`Current Score: ${theScore}`)
      drawInstruct();
} else {
      drawInstruct();
}
}



function drawInstruct(){
  background(0, 0, 100)
//p5 function to draw sprite on canvas//
  drawSprites()
//user moves across x axis via keycode(left/right arrow) (adjustment in width is due to the sprite moving halfway off screen)//
  if (keyDown(RIGHT_ARROW) && user.position.x < width-userImage.width/2) {
      user.position.x = user.position.x + 9
}   if (keyDown(LEFT_ARROW) && user.position.x > userImage.width/2) {
      user.position.x = user.position.x - 9
}   if (keyDown(UP_ARROW) && keyDown(RIGHT_ARROW) && user.position.x < width-userImage.width/2) {
      user.position.x = user.position.x + 11
}   if (keyDown(UP_ARROW) && keyDown(LEFT_ARROW) && user.position.x > userImage.width/2) {
      user.position.x = user.position.x - 11
}   if (keyDown(UP_ARROW) && user.position.x < width-userImage.width/2) {
      user.position.x = user.position.x + 6
}   if (keyDown(DOWN_ARROW) && user.position.x > userImage.width/2) {
      user.position.x = user.position.x - 6
}
//theHam falling down vertically//
    theHam.position.y = theHam.position.y + 10
//brings theHam back to the top once meeting(x,0)//
  if (theHam.position.y > height) {
      console.log(theScore);
      doggyDone = true;
}
}




function gameOver(){
//checks to see status of game state as well as current score and then provides you a win or loss//
  if( doggyDone===true && theScore <= 25 && theScore >= 15){
//textAlign takes two arguments but defaults this to CENTER, CENTER//
    textAlign(CENTER) 
    fill('white')
 //text to be entered within this 'prompt' at center of canvas. hense the / 2//
    text(`Nice! you got over 15! This dog is satisfied.`, width / 2, height / 2)
//same as above, except lower on y axis.// 
    text(`You made it to ${theScore}! click to play again`, width / 2, (3 * height) / 4)
} else if ( doggyDone===true && theScore >= 26 && theScore <= 34){
    textAlign(CENTER) 
    fill('white')
    text(`WAY over 15. you win - but don't brag about it`, width / 2, height / 2)
    text(`That's a happy dog! You made it to ${theScore}! click to play again`, width / 2, (3 * height) / 4)
}
else if (doggyDone===true && theScore >= 35){
    textAlign(CENTER) 
    fill('white')
    text(`YOU ARE REALLY GOOD AND DOG IS VERY HAPPY YES NICE GOOD STUFF`, width / 2, height / 2)
    text(`WINNNNER You made it to ${theScore}! click to play again`, width / 2, (3 * height) / 4)
}
else {
    background(0)
    textAlign(CENTER)
    fill('white')
    text('You are not good at this (yet). Big loss pal. ', width / 2, height / 2)
    text('click anywhere with your mouse and get ya arrow keys ready.', width / 2, (3 * height) / 4)
}
}



//useful p5 feature below. http//p5js.org/reference/#p5/mouseClicked//
//sets the canvas back to a gamePlaying state (doggyDone false) and resets the coordinates of both user and theHam(fallingobject)//
//essentially, this is a restart game function.//
function mouseClicked(){
//the if statement is to be sure that the doggyDone (gameover state) is set to true to avoid a reset everytime the user conducts a mouseclick.// 
//this then resets the two 'sprites' at 'specified location'//
  if (doggyDone) {
    doggyDone = false
    theScore = 0
    //width is relative to canvas. sets user in middle of x axis.// 
    user.position.x = width / 2
    user.position.y = height-(userImage.height/2)
    theHam.position.x = width / 2
    theHam.position.y = 0
} else {
    console.log('mouse click workin here but you aint done bud')
}
}

function preload(){
  userImage = loadImage('https://i.imgur.com/DIbtfLX.gif')
  theHamImage = loadImage('https://i.imgur.com/7zU3Xfe.png')
}



//event listener (COPIED THIS FUNCTION FROM STACKOVERFLOW) that disables the defaulted use of space and arrow keys (aka anything to scroll the window)//
window.addEventListener("keydown", function(e) {
    // space and arrow keys//
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);