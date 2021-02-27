var questionNum = 0;
var answerNum = 0;
var score = 0;
var time = document.querySelector("#time");
var question = document.querySelector("#question");
var answers = document.querySelector("#answers");
var startEl = document.querySelector("#start");
var option1 = document.createElement("button")
var option2 = document.createElement("button")
var option3 = document.createElement("button")
var option4 = document.createElement("button")

var questionlist = ["question 1","question 2","question 3"]
var answerlist = ["1","2","3","4","1",
                    "5","6","7","8","5",
                        "9","10","11","12","9"]

function begin(event){
    event.preventDefault();
    document.getElementById("start").style.visibility = 'hidden';
    currentquestion();
    list();
}

function currentquestion() {
    question.textContent = questionlist[questionNum];
}

function getrandom(array) {
    array.sort (function(a, b) {return Math.random() - 0.5})
}
    
function list() {
    var numarray = [0,1,2,3];
    getrandom(numarray);

    answers.textContent = "";

    option1.textContent = answerlist[answerNum+numarray[0]];
    option2.textContent = answerlist[answerNum+numarray[1]];
    option3.textContent = answerlist[answerNum+numarray[2]];
    option4.textContent = answerlist[answerNum+numarray[3]];

    answers.appendChild(option1)
    answers.appendChild(option2)
    answers.appendChild(option3)
    answers.appendChild(option4)
}

function getscoreOpt1(){
    if (option1.textContent === answerlist[answerNum+4]) {
        score = score + 10;
    } else {
        score = score + 0;
    }
}

function getscoreOpt2(){
    if (option2.textContent === answerlist[answerNum+4]) {
        score = score + 10;
    } else {
        score = score + 0;
    }
}

function getscoreOpt3(){
    if (option3.textContent === answerlist[answerNum+4]) {
        score = score + 10;
    } else {
        score = score + 0;
    }
}

function getscoreOpt4(){
    if (option4.textContent === answerlist[answerNum+4]) {
        score = score + 10;
    } else {
        score = score + 0;
    }
}

function endquiz() {
    question.textContent = "End";
    answers.textContent = "End";
}

// 
startEl.addEventListener('click',begin);

option1.addEventListener('click',function(){
    getscoreOpt1()
            console.log(score)
            console.log(questionNum)
    if (questionNum < (answerlist.length/5-1)){
            questionNum++;
            answerNum += 5;
            currentquestion();
            list();
        } else{
            endquiz();
        }
    }
);
option2.addEventListener('click',function(){
    getscoreOpt2()
            console.log(score)
            console.log(questionNum)
    if (questionNum < (answerlist.length/5-1)){
            questionNum++;
            answerNum += 5;
            currentquestion();
            list();
        } else{
            endquiz();
        }
}
);
option3.addEventListener('click',function(){
    getscoreOpt3()
            console.log(score)
            console.log(questionNum)
    if (questionNum < (answerlist.length/5-1)){
            questionNum++;
            answerNum += 5;
            currentquestion();
            list();
        } else{
            endquiz();
        }
}
);
option4.addEventListener('click',function(){
    getscoreOpt4()
            console.log(score)
            console.log(questionNum)
    if (questionNum < (answerlist.length/5-1)){
            questionNum++;
            answerNum += 5;
            currentquestion();
            list();
        } else{
            endquiz();
        }
    }
);
