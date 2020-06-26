//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var WhiteScore = 0;
var RedScore = 0;
var OrangeScore = 0;
var BlackScore = 0;

//variable for the result
var result = document.getElementById("result");


//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");


//Question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");


//Question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");


//#TODO: Add Event Listeners to your answer choice variables.
//Question 1
q1a1.addEventListener("click", orange);
q1a2.addEventListener("click", red);
q1a3.addEventListener("click", black);
q1a4.addEventListener("click", white);

//Question 2

q2a1.addEventListener("click", white);
q2a2.addEventListener("click", red);
q2a3.addEventListener("click", orange);
q2a4.addEventListener("click", black);

//Question 3

q3a1.addEventListener("click", white);
q3a2.addEventListener("click", red);
q3a3.addEventListener("click", orange);
q3a4.addEventListener("click", black);

//#TODO: Define quiz functions here
function orange(){
  
OrangeScore +=1;  
questionCount +=1;  
  if (questionCount >= 3){
      updateResult();
  }
}

function white(){
  WhiteScore +=1;
  questionCount +=1;
  if (questionCount >= 3){
      updateResult();
  }
}

function red(){
  RedScore +=1;
  questionCount +=1;
  if (questionCount >= 3){
      updateResult();
  }
}

function black(){
  BlackScore +=1;
  questionCount +=1;
  if (questionCount >= 3){
      updateResult();
  }
}

function updateResult(){
  if (OrangeScore >= 2){
         result.innerHTML = "Orange!";
 }
 else if(WhiteScore >=2){
        result.innerHTML = "White!";
 }
 else if(RedScore >=2){
    result.innerHTML = "Red!";
   
 }
 else if (BlackScore>= 2){
    result.innerHTML = "Black!";
 }
 else{
    result.innerHTML = "Oops a mistake occured... Try again later.";
 }
}