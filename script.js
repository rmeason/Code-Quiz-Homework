
//create a button that starts a countdown timer

function myFunction() {

    var timeleft = 5;
    var quizTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)

        alert('Quiz Over!' [window.location.reload()] );
        
    },1000);
};



//variable and values
var quiz = {
  "Using Git Bash, list all of the branches.": "$ git branch",
  "HTML stands for: ": "Hypertext Markup Language",
  "CSS stands for: ": "Cascading Style Sheets",
  "Where inside which HTML element do we put the JavaScript?": "In a script tag",
  "How can you add a comment in a JavaScript?": "//",

};




// How do I use input to get " "


//trying a foreach function



//check gandolf activity