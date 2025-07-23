//defining constants
const aField = document.querySelector("#aField");
const bField = document.querySelector("#bField");
const a2Field = document.querySelector("#a2Field");
const b2Field = document.querySelector("#b2Field");
const a3Field = document.querySelector("#a3Field");
const b3Field = document.querySelector("#b3Field");
const a4Field = document.querySelector("#a4Field");
const b4Field = document.querySelector("#b4Field");

//addition button
const sumBox = document.querySelector("#sum-box");
const sumButton = document.querySelector("#sum");
sumButton.addEventListener("click", doSum);

function doSum() {
    //.value is property to get data from input element
    //parseInt to convert into number
    let a = parseInt(aField.value);
    let b = parseInt(bField.value);
    let sum = a + b;
    sumBox.innerHTML = "Sum of " + a + " and " + b + " is " + sum + ".";
}


//multiplication function

const multibox = document.querySelector("#multibox");
const multibutton = document.querySelector("#multibutton");
multibutton.addEventListener("click", domulti);

function domulti() {
    //.value is property to get data from input element
    //parseInt to convert into number
    console.log("testing");
    let a4 = parseInt(a4Field.value);
    let b4 = parseInt(b4Field.value);
    let multi = a * b;
    multibox.innerHTML = "multiplication of " + a4 + " and " + b4 + " is " + multi + ".";
}

//rectangle area function

const rectbox = document.querySelector("#rectbox");
const rectbutton = document.querySelector("#rectbutton");
rectbutton.addEventListener("click", dorect);

function dorect() {
    //.value is property to get data from input element
    //parseInt to convert into number
    console.log("testing");
    let a2 = parseInt(a2Field.value);
    let b2 = parseInt(b2Field.value);
    let rect = a2 * b2;
    rectbox.innerHTML = "Length of " + a2 + " and Width of " + b2 + " makes the area of rectangle " + rect + ".";
}

//triangle area function

const tribox = document.querySelector("#tribox");
const tributton = document.querySelector("#tributton");
tributton.addEventListener("click", dotri);

function dotri() {
    //.value is property to get data from input element
    //parseInt to convert into number
    console.log("testing");
    let a3 = parseInt(a3Field.value);
    let b3 = parseInt(b3Field.value);
    let tri = 0.5 * a3 * b3;
    tribox.innerHTML = "Length of " + a3 + " and Width of " + b3 + " makes the area of triangle " + tri + ".";
}

//guessing box

var min = 0, max = 100, currGuess = -100, counter = 0;
var ans = Math.round(Math.random() * (max - min) + min);
console.log("Ans:" + ans);
const btnGuess = document.querySelector("#btnGuess");
const guessField = document.querySelector("#guessField");
const smallerlbl = document.querySelector("#smaller");
const biggerlbl = document.querySelector("#bigger");
const commentsBox = document.querySelector("#commentsBox");
btnGuess.addEventListener("click", GuessFn);

function GuessFn() {
    currGuess = parseInt(guessField.value);
    console.log("Curr Guess:" + currGuess);
    let comments = "";
    if (currGuess == ans) {
        comments = "CORRECT!";
    }
    if (currGuess > ans) {
        //replace the right number with current guess
        biggerlbl.innerHTML = currGuess;
        comments = "too Big!";
    }
    if (currGuess < ans) {
        //replace the left number with current guess
        smallerlbl.innerHTML = currGuess;
        comments = "too Small!";
    }
    guessField.value = "";
    counter++;
    //commentsBox.innerHTML="Your guess: "+currGuess+" is "+comments+”; Tries:"+counter;
    //use JS Template Strings literals (backticks)
    commentsBox.innerHTML = `Your guess: ${currGuess} is ${comments} Tries:${counter}`;
}

//MCQ questions

const btnSubmit = document.querySelector("#btnSubmit");
const scorebox = document.querySelector("#scorebox");
var q1, q2, score = 0;
function CheckAns() {

    //read the value of the selected radio button for q1
    q1 = document.querySelector("input[name='q1']:checked").value;
    console.log(q1); //check q1 value retrieved

    //read the value of the selected radio button for q2
    q2 = document.querySelector("input[ name='q2']:checked").value;
    console.log(q2); //check q2 value retrieved
    
    score = 0; //reset score to 0, check ans and give score if correct
    if (q1 == "Tokyo") score++;
    if (q2 == "Red") score++;
    scorebox.innerHTML = "Score: " + score;
}
btnSubmit.addEventListener("click", CheckAns);
