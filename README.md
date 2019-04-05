####

**LE DAWG**
**Charles Korpics**
**Unit-1 Project SEI**


#### GAME IS AVAILABLE HERE
[http://charles-dawg.surge.sh]

#### link to screenshot
https://user-images.githubusercontent.com/41846870/55630951-eb825e80-5784-11e9-8d98-b5528c3de669.png


!!!!!
GAME HAS CHANGED APRIL 2nd 2019 per Dan's Approval.
WILL NOW BE FEEDING THE DOG FALLING BONES (sprite moves on x axis and catches fallings objects)
DOG WILL STILL BE BIG AND HAPPY
!!!!!!

#### OverDOGGYview

Feed Le Dawg 

The goal of this game is to 'catch' each ham that falls down from the top y axis. 
The dog is moveable along the x axis - and any overlap will result in a 'catch'. 

>=15 catches will result in a win.

---

#### Tech 

- Used both p5.play and p5.dom. All referenced within the commenting in script.js

- Utilized basic styling within style.css - including flex bot to maintain format amongst all windows.


#### Tech Problems 

-Having trouble keeping the randomly generated 'ham sprites' from spawning halfway off the canvas from time to time. 

-Was unable to add images locally and had to upload these pixel images through imgur to reference them

#### BONUS

- NOT DONE would like to add sound effects.
('dog bark', 'sad dog', 'happy dog', etc..)

- NOT DONE would like to add a 'share screen shot on facebook' option that atutomatically snaps a screen shot and brings them to a facebook share page with it ready to be attached. 

- NOT DONE I would like to add a 'layered' 3d esque background to the canvas to put the dog in an inner-city. (This would be a seperate branch and would most likely include 1 or more added libraries to add 'cameras'. If done - I will document.)



#### Starter Code

setup() - sets up canvas, presents game controls and sets sprite positioning.


draw() - runs continuously  after initial setup()


drawInstruct() - the conditions allowed for movement and the various speeds


gameOver() - checks the state of the game once theHam has met x,0 and informs the user of their amount of 'catches' + whether they have won or loss.


mouseClicked() - reverts the gamestate if doggyDone == true and resets the coordinates of both the user and other sprite. will not impact performance as doggyDone is false until an ending has been met.


eventlistener - added to be sure that my controls that modulate the speed do not impact the window scroll. (space - up/down arrow keys)





