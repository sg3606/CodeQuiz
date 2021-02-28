var questionNum = 0;
var answerNum = 0;
var score = 0;
var secondsLeft = 100;
var views = document.querySelector("#viewscore");
var time = document.querySelector("#time");
var question = document.querySelector("#question");
var answers = document.querySelector("#answers");
var startEl = document.querySelector("#start");
var option1 = document.createElement("button");
var option2 = document.createElement("button");
var option3 = document.createElement("button");
var option4 = document.createElement("button");
var submit = document.createElement("button");
var input = document.createElement("input");
var back = document.createElement("button");
var clear = document.createElement("button");
var brl = document.createElement("br");
var div = document.createElement("div")

var questionlist = ["question 1","question 2","question 3"]
var answerlist = ["1","2","3","4","1",
                    "5","6","7","8","5",
                        "9","10","11","12","9"]

function begin(event){
    event.preventDefault();
    document.getElementById("start").style.visibility = 'hidden';
    setTime()
    currentquestion();
    list();
}

function setTime() {
    var timerInterval = setInterval(function() {
    
      secondsLeft--;
      time.textContent = secondsLeft + " seconds left";
        
        if(secondsLeft == 0 || secondsLeft < 0) {
            clearInterval(timerInterval);
            endquiz();
        } else if (question.textContent === "All Done"){
            clearInterval(timerInterval);
        } else if (question.textContent === "Highest Score"){
            clearInterval(timerInterval);
        } 
    }, 1000);
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

function submitbtn() {
    answers.textContent = "Your final score is: " + score.toFixed(2);
    submit.textContent = "Submit";
    input.placeholder = "Enter Initials";
    input.type = "text";
    input.id = "initial";
    answers.appendChild(brl);
    answers.appendChild(input);
    answers.appendChild(submit);
}

function scoreboard() {
    question.textContent = "Highest Score";
    answers.textContent = '';
    if (localStorage.getItem("ranklists") == null){
        div.innerHTML = localStorage.getItem("score")+"--"+localStorage.getItem("initials");
    } else {
        div.innerHTML = localStorage.getItem("score")+"--"+localStorage.getItem("initials")+" "+localStorage.getItem("ranklists");
    }

    back.textContent = "Back";
    clear.textContent = "ClearAll"
    back.id = "backmain";
    clear.id = "clearall";
    div.id = "rank";

    answers.appendChild(div)
    answers.appendChild(brl)
    answers.appendChild(back);
    answers.appendChild(clear);

    var ranklist = document.querySelector("#rank").innerHTML;
    var res = ranklist.split(" ");
    var numpare = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
    res.sort(numpare.compare);
    res.reverse();

    localStorage.setItem("ranklists",ranklist);
    div.innerHTML = res.join('<br>');
    localStorage.setItem("res",res.join('<br>'));
}

function viewscore() {
    document.getElementById("start").style.visibility = 'hidden';
    question.textContent = "Highest Score";
    answers.textContent = '';
    back.textContent = "Back";
    clear.textContent = "ClearAll"
    back.id = "backmain";
    clear.id = "clearall";
    div.id = "rank";
    answers.appendChild(div)
    answers.appendChild(brl)
    answers.appendChild(back);
    answers.appendChild(clear);
    div.innerHTML = localStorage.getItem("res");
}

function getscoreOpt1(){
    if (option1.textContent === answerlist[answerNum+4]) {
        score = score + 100/questionlist.length;
    } else {
        score = score + 0;
        secondsLeft -= 10;
    }
}

function getscoreOpt2(){
    if (option2.textContent === answerlist[answerNum+4]) {
        score = score + 100/questionlist.length;
    } else {
        score = score + 0;
        secondsLeft -= 10;
    }
}

function getscoreOpt3(){
    if (option3.textContent === answerlist[answerNum+4]) {
        score = score + 100/questionlist.length;
    } else {
        score = score + 0;
        secondsLeft -= 10;
    }
}

function getscoreOpt4(){
    if (option4.textContent === answerlist[answerNum+4]) {
        score = score + 100/questionlist.length;
    } else {
        score = score + 0;
        secondsLeft -= 10;
    }
}

function endquiz() {
    question.textContent = "All Done";
    submitbtn();
}

startEl.addEventListener('click',begin);

views.addEventListener('click',function(event){
    event.preventDefault();
    viewscore();
}
);

option1.addEventListener('click',function(){
    getscoreOpt1()
    if (questionNum < (questionlist.length-1)){
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
    if (questionNum < (questionlist.length-1)){
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
    if (questionNum < (questionlist.length-1)){
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
    if (questionNum < (questionlist.length-1)){
            questionNum++;
            answerNum += 5;
            currentquestion();
            list();
        } else{
            endquiz();
        }
    }
);

submit.addEventListener('click',function(event){
    event.preventDefault();
    var initials = document.querySelector("#initial").value;
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score.toFixed(2));
    scoreboard()
    }
);

back.addEventListener('click',function(){
    window.location.reload();
}
);

clear.addEventListener('click',function(event){
    event.preventDefault();
    localStorage.clear();
    div.textContent = "";
}
);