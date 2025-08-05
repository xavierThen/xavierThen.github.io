/*For hamburger menu*/
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'; 
}   

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'; 
}


/*to go to home page*/
function showHomepage(){
    const homepage = document.getElementById('home');
    homepage.style.display = 'block';

    const overviewpage = document.getElementById('overview');
    overviewpage.style.display = 'none'; 

    const contentpage = document.getElementById('content');
    contentpage.style.display = 'none'; 
    
    const quizing = document.getElementById('quiz');
    quizing.style.display = 'none'; 

    const minigame = document.getElementById('minigame');
    minigame.style.display = 'none'; 
}

/*to go to overview page*/
function showOverview(){
    const homepage = document.getElementById('home');
    homepage.style.display = 'none';

    const overviewpage = document.getElementById('overview');
    overviewpage.style.display = 'block'; 

    const contentpage = document.getElementById('content');
    contentpage.style.display = 'none'; 

    const quizing = document.getElementById('quiz');
    quizing.style.display = 'none'; 

    const minigame = document.getElementById('minigame');
    minigame.style.display = 'none'; 
}

/*to go to content page*/
function showContent(){
    const homepage = document.getElementById('home');
    homepage.style.display = 'none';

    const overviewpage = document.getElementById('overview');
    overviewpage.style.display = 'none'; 

    const contentpage = document.getElementById('content');
    contentpage.style.display = 'block'; 

    const quizing = document.getElementById('quiz');
    quizing.style.display = 'none'; 

    const minigame = document.getElementById('minigame');
    minigame.style.display = 'none'; 
}

/*to go to Quiz page*/
function showQuiz(){
    const homepage = document.getElementById('home');
    homepage.style.display = 'none';

    const overviewpage = document.getElementById('overview');
    overviewpage.style.display = 'none'; 

    const contentpage = document.getElementById('content');
    contentpage.style.display = 'none'; 

    const quizing = document.getElementById('quiz');
    quizing.style.display = 'block'; 

    const minigame = document.getElementById('minigame');
    minigame.style.display = 'none'; 
}

/*to go to Minigame*/
function showMinigame(){
    const homepage = document.getElementById('home');
    homepage.style.display = 'none';

    const overviewpage = document.getElementById('overview');
    overviewpage.style.display = 'none'; 

    const contentpage = document.getElementById('content');
    contentpage.style.display = 'none'; 

    const quizing = document.getElementById('quiz');
    quizing.style.display = 'none'; 

    const minigame = document.getElementById('minigame');
    minigame.style.display = 'block'; 
}

/*for config of quiz*/
const fail_Audio = new Audio("audio/fail_audio.mp3");
const pass_Audio = new Audio("audio/pass_audio.mp3");
const btnSubmit = document.querySelector("#btnSubmit");
const scorebox = document.querySelector("#scorebox");
var q1, q2, q3, q4, q5, q6, score = 0;

function CheckAns() {

    //read the value of the selected radio button for q1
    q1 = document.querySelector("input[name='q1']:checked").value;
    console.log(q1); //check q1 value retrieved

    //read the value of the selected radio button for q2
    q2 = document.querySelector("input[ name='q2']:checked").value;
    console.log(q2); //check q2 value retrieved

    //read the value of the selected radio button for q3
    q3 = document.querySelector("input[ name='q3']:checked").value;
    console.log(q3); //check q3 value retrieved

    //read the value of the selected radio button for q4
    q4 = document.querySelector("input[ name='q4']:checked").value;
    console.log(q4); //check q4 value retrieved

    //read the value of the selected radio button for q5
    q5 = document.querySelector("input[ name='q5']:checked").value;
    console.log(q5); //check q5 value retrieved

    //read the value of the selected radio button for q6
    q6 = document.querySelector("input[ name='q6']:checked").value;
    console.log(q6); //check q6 value retrieved
        
    score = 0; //reset score to 0, check ans and give score if correct
    if (q1 == "Motherboard") score++;
    if (q2 == "Zuse Z3") score++;
    if (q3 == "Control unit") score++;
    if (q4 == "codebreaking") score++;
    if (q5 == "40cm") score++; 
    if (q6 == "yes") score++; 
    if(score > 3){
        alert("Good job! you passed the mini quiz!");
        pass_Audio.play(); //play the audio!
    }
    else{
        alert("Better luck next time...");
        fail_Audio.play(); //play the audio!
    }
    scorebox.innerHTML = "Score: " + score;

}
btnSubmit.addEventListener("click", CheckAns);

{
/*config for minigame*/
let health = 20;
const virusId = document.getElementById("virusid");

function GetRandom(min, max) {
    //this will select a number between min and max
    return Math.round(Math.random() * (max - min)) + min;
}

/*this function allows the virus to move within the screen of the user*/
function Movevirus() {    
    virusId.style.left = GetRandom(0, window.innerWidth - virusId.clientWidth) + "px";
    virusId.style.top = GetRandom(0, window.innerHeight - virusId.clientHeight) + "px";
}

/*this makes the virus only move every 1.5s*/
let movevirusItvId = setInterval(Movevirus, 1500);
/*this makes the health update every 2s*/
let healthInterval = setInterval(updateHealth, 2000);


const scoreBox = document.getElementById("scoreBox");
const healthBox = document.getElementById("healthBox");
const boom_Audio = new Audio("audio/boom_audio.mp3");

// Function to update health display
function updateHealth() {
    health--;
    healthBox.innerHTML = "Health: " + health;

    if (health <= 0) {
        clearInterval(healthInterval);     // stop health countdown
        clearInterval(movevirusItvId);     // stop virus movement
        virusId.style.display = "none";    // hide virus
        alert("Game Over! You ran out of health.");
    }
}

/*this function allows the system to reset the minigame*/
const startBtn = document.querySelector("#startbtn");
function startGame() {
    score = 0;
    health = 20;
    healthBox.innerHTML = "Health: 20";
    virusId.style.display = "block";

    movevirusItvId = setInterval(Movevirus, 1500);
    healthInterval = setInterval(updateHealth, 2000);
}

/*this function stops the game*/
function stopGame() {
    clearInterval(movevirusItvId);
    clearInterval(healthInterval);
    virusId.style.display = "none";
    virusId.style.left = "0px";
    virusId.style.top = "0px";
}

var score = 0; //to track how many clicks
function virusCatch() {

    //increases score after clicking
    score++;
    scoreBox.innerHTML = "Score: " + score + "/15";
    boom_Audio.play(); //play the audio!

    if (score === 15) {
        clearInterval(movevirusItvId);
        clearInterval(healthInterval);
        virusId.style.display = "none";
        alert("You have defended against all the viruses!");
    }
    
}

//link virus to mouseclick to virusCatch function
virusId.addEventListener("click", virusCatch);

startBtn.addEventListener("click", function () {
    stopGame(); // Reset any running intervals before starting again
    startGame();
});

const stopBtn = document.querySelector("#stopbtn");
stopBtn.addEventListener("click", function () {
    console.log("interval stopped");
    clearInterval(movevirusItvId); //stop running the interval
    virusId.style.left = 0;
    virusId.style.top =0;

    stopBtn.classList.add("animation1"); //adds a class to the variable 'stopbutton'
});



/*detection of screen size*/
const fullScreenWidth = screen.width;
const fullScreenHeight = screen.height;

console.log(fullScreenWidth);
console.log(fullScreenHeight);
}

