

var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started = false;
var level=0;
$(document).keypress(function (){
    if(!started)
 {  $("#level-title").text("Level " + level);
 nextSequence();
 started = true;
 }
 });

 $(".btn").click(function (){
 
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
  playsound(userChosenColour); 
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
  
});

function checkAnswer(currentLevel)
{
if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
{
    if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);
}
}
else
{
    playsound("wrong");
    $("body").addClass("game-over");
    setTimeout(function (){$("body").removeClass("game-over");},200);
    $("#level-title").text("Game Over , Press any key to restart")
    startover();
}
}


function nextSequence()
 {    userClickedPattern = [];
    level++;
    $("#level-title").text("level "+level); 
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomChosenColour);
   
 }
 
 
function playsound(name)
{
    var audio=new Audio("sounds/" + name +".mp3");
    audio.play();
}
function animatePress(currentColour)
{
$("#"+currentColour).addClass("pressed");
setTimeout(function (){$("#"+currentColour).removeClass("pressed");},100);
}

function startover()
{level=0;
    gamePattern=[];
    started=false;

}

