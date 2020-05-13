
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

//quiz layout


Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    title: "Basic Code Quiz",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 300,
    maxTimeToFinish: 300,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You are about to start a quiz by novice coder Michael! <br/>You have 300 seconds to complete the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz!'</b> button when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Css",
                    title: "CSS stands for: ",
                    choices: [
                        "Calculated System Style", "Cascading Style Sheets", "Cutting Systems Supreme "
                    ],
                    correctAnswer: "Cascading Style Sheets"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Git-Bash",
                    title: "Using Git Bash, list all of the branches.'",
                    choicesOrder: "random",
                    choices: [
                        "$ git ls", "$ git branch", "$ git submit"
                    ],
                    correctAnswer: "$ git branch"
                }
            ]
        }, {
            maxTimeToFinish: 15,
            questions: [
                {
                    type: "radiogroup",
                    name: "Java",
                    title: "How can you add a comment in a JavaScript?",
                    choicesOrder: "random",
                    choices: [
                        "[<>]", "<!---->", "//"
                    ],
                    correctAnswer: "//"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#results')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#quiz").Survey({model: survey});









//variable and values
var $quiz = {
  "Using Git Bash, list all of the branches.": "$ git branch",
  "HTML stands for: ": "Hypertext Markup Language",
  "CSS stands for: ": "Cascading Style Sheets",
  "Where inside which HTML element do we put the JavaScript?": "In a script tag",
  "How can you add a comment in a JavaScript?": "//",

};




// How do I use input to get " "


//trying a foreach function
