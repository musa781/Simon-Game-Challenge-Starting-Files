var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$(".btn").click(function(){



    var userChosenColour = $(this).attr("id");
    //console.log("user clicked" + userChosenColour);
    userClickedPattern.push(userChosenColour);
    //console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
    
    
    

});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();



}

function animatePress(currentColour){

    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){
        $("#"+ currentColour).removeClass("pressed");

    }, 100);


}

function checkAnswer(currentLevel){

    if(userClickedPattern[currentLevel] === gamePattern[currentLevel] ){

        console.log("success");
        

        if(userClickedPattern.length === gamePattern.length){

            setTimeout(function(){

                nextSequence();

            },1000);
        }
    }
    else{
        console.log("wrong");

        playSound("wrong");
        $("body").addClass("game-over");

        setTimeout(function(){
        $("body").removeClass("game-over");


         },200);

        $("level-title").text("over! press Any key to restart");

        startover();
    }
    

    

    
}


function nextSequence(){

    userClickedPattern = [];

    
    level++;
    $("#level-title").text("level " +  level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);


    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    

    

    

   
}

function startover(){

    
    var level = 0;
    var gamePattern = [];
    var started = false;




}
$(document).keypress(function() {
    if(!started){
        $("#level-title").text("level " +  level);
        nextSequence();
        started = true;
    }
    
    
    
});
