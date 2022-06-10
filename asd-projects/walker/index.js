/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  // Game Item Objects

  var inputMap = {
    UP1: 38,
    RIGHT1: 37,    //p1 controls.
    LEFT1: 39,
    DOWN1: 40,

    UP2: null,
    RIGHT2: null,    //p2 controls.
    LEFT2: null,
    DOWN2: null
  }

  var player = { x: 0, y: 0 }
  var velocity = { x: 0, y: 0 }
  var inputVelocity = { x: 0, y: 0 }

  const SPEED = 4

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleEvent);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleEvent);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {

    //input()
    varUpdate()
    moveAndSlide(velocity)


  }

  function varUpdate() {

    velocity.x = inputVelocity.x * SPEED
    velocity.y = inputVelocity.y * SPEED


  };

  function moveAndSlide(object) {

    var $box = $("#box")
    console.log($box)


    player.x += object.x;
    player.y += object.y;

    //$("gameItem").offset({ top: player.y, left: player.x });

    // console.log($("gameItem").offset())

    $("#gameItem").css("left", player.x)
    $("#gameItem").css("top", player.y)




  }

  /* 
  Called in response to events.
  */
  function handleEvent(event) {

    if (event.type === 'keydown') {



      if (event.which === inputMap.UP1) {
        inputVelocity.y = -1
        console.log(inputVelocity)
      } else if (event.which === inputMap.RIGHT1) {
        inputVelocity.x = -1
      } else if (event.which === inputMap.LEFT1) {
        inputVelocity.x = 1
      } else if (event.which === inputMap.DOWN1) {
        inputVelocity.y = 1
      };

    }
    if (event.type === 'keyup') {
      if (event.which === inputMap.UP1) {
        inputVelocity.y = 0
      } else if (event.which === inputMap.RIGHT1) {
        inputVelocity.x = 0
      } else if (event.which === inputMap.LEFT1) {
        inputVelocity.x = 0
      } else if (event.which === inputMap.DOWN1) {
        inputVelocity.y = 0
      };
    }

    console.log(inputVelocity)


  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
