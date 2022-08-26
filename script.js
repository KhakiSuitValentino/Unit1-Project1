//Level 1: On Boot Options, informational text, credits

//load in buttons
let btnZ = document.getElementById("buttonZ");
let btnX = document.getElementById("buttonX");
let btnC = document.getElementById("buttonC");
let btnV = document.getElementById("buttonV");
let btnA = document.getElementById("buttonA");
let btnS = document.getElementById("buttonS");
let btnD = document.getElementById("buttonD");
let btnF = document.getElementById("buttonF");
let btnQ = document.getElementById("buttonQ");
let btnW = document.getElementById("buttonW");
let btnE = document.getElementById("buttonE");
let btnR = document.getElementById("buttonR");
let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let btn3 = document.getElementById("button3");
let btn4 = document.getElementById("button4");

//load in audio
let hipHopZ = new Audio('./audio/bank1/hiphop_Z.mp3');
let hipHopX = new Audio('./audio/bank1/hiphop_X.mp3');
let hipHopC = new Audio('./audio/bank1/hiphop_C.mp3');
let hipHopV = new Audio('./audio/bank1/hiphop_V.mp3');
let hipHopA = new Audio('./audio/bank1/hiphop_A.mp3');
let hipHopS = new Audio('./audio/bank1/hiphop_S.mp3');
let hipHopD = new Audio('./audio/bank1/hiphop_D.mp3');
let hipHopF = new Audio('./audio/bank1/hiphop_F.mp3');
let hipHopQ = new Audio('./audio/bank1/hiphop_Q.mp3');
let hipHopW = new Audio('./audio/bank1/hiphop_W.mp3');
let hipHopE = new Audio('./audio/bank1/hiphop_E.mp3');
let hipHopR = new Audio('./audio/bank1/hiphop_R.mp3');
let hipHop1 = new Audio('./audio/bank1/hiphop_1.mp3');
let hipHop2 = new Audio('./audio/bank1/hiphop_2.mp3');
let hipHop3 = new Audio('./audio/bank1/hiphop_3.mp3');
let hipHop4 = new Audio('./audio/bank1/hiphop_4.mp3');

//universal variables
let gameStarted = false;
let isUsersTurn = false;
let roundCounter = 0;
let userPattern = [];
let getRoundFunction = "gameRound";

//route functions: on key down, button is pressed; on keyup, color is reset
window.addEventListener("keydown", pressButton);
window.addEventListener("keyup", resetColor);

//button press functions: buttons play sound and change color
function pressButton(e) {

    let key = e.key.toUpperCase();
    if (key === "1" && !e.repeat) playSound(btn1, hipHop1);
    if (key === "2" && !e.repeat) playSound(btn2, hipHop2); 
    if (key === "3" && !e.repeat) playSound(btn3, hipHop3);
    if (key === "4" && !e.repeat) playSound(btn4, hipHop4);
    if (key === "Q" && !e.repeat) playSound(btnQ, hipHopQ);
    if (key === "W" && !e.repeat) playSound(btnW, hipHopW);
    if (key === "E" && !e.repeat) playSound(btnE, hipHopE);
    if (key === "R" && !e.repeat) playSound(btnR, hipHopR);
    if (key === "A" && !e.repeat) playSound(btnA, hipHopA);
    if (key === "S" && !e.repeat) playSound(btnS, hipHopS);
    if (key === "D" && !e.repeat) playSound(btnD, hipHopD);
    if (key === "F" && !e.repeat) playSound(btnF, hipHopF);
    if (key === "Z" && !e.repeat) playSound(btnZ, hipHopZ);
    if (key === "X" && !e.repeat) playSound(btnX, hipHopX);
    if (key === "C" && !e.repeat) playSound(btnC, hipHopC);
    if (key === "V" && !e.repeat) playSound(btnV, hipHopV);
    if (key === "N" && !gameStarted) getMoreInfoPressN();
    if (key === "M" && !gameStarted) getMoreInfoPressM();
    if (key === "H" && !gameStarted) getMoreInfoPressH();
    if (key === "O" && !gameStarted) demoPlay();
    if (key === " " && !gameStarted) startGame();
    if (key === "L" && gameStarted && isUsersTurn) endGame();
    if (key === "K" && gameStarted && isUsersTurn) window[getRoundFunction + roundCounter]();
    if (isUsersTurn) getUserInput(e);
}

//from homescreen, player goes to info page
function getMoreInfoPressN(){
    document.getElementById("display-text").innerHTML = "<p>>THIS IS A MEMORY GAME MODELED AFTER A DRUM MACHINE. USE YOUR KEYBOARD AND YOUR EARS TO REPEAT THE COMPUTER'S RHYTHM. THE BETTER YOUR RHYTHM, THE BETTER YOUR BEATS WILL SOUND. </br></br> >FOR HOME PRESS 'H' / CREDITS 'M'</p>";
}

//from homescreen, player sees credits
function getMoreInfoPressM(){
    document.getElementById("display-text").innerHTML = "<p> >>>CREDITS<<< </br>  </br> (C) 2022 KHAKI SUIT VALENTINO </br> SPECIAL THANKS: BRANDON HENRY</br></br> >FOR INFO PRESS 'N' / HOME 'H'</p>";
}

//player returns to homescreen from credits "M" or info "N"; also used to bring player home in other circumstances
function getMoreInfoPressH(){
    isUsersTurn = false;
    gameStarted = false
    document.getElementById("display-text").innerHTML = "<p> >>>>>SIMON'S SAMPLER 808<<<<< </br> PRESS SPACEBAR TO BEGIN GAME </br> HEADPHONES RECOMMENDED!! </br> </br> (C) 2022 KHAKI SUIT VALENTINO </br> >FOR INFO PRESS 'N' / CREDITS 'M' / DEMO 'O'</p>";
}

//player terminates game
function endGame(){
    gameStarted = false;
    //back to homescreen
    getMoreInfoPressH();
}

//buttons turn back to original color after turning white:
function resetColor(e) {

    let key = e.key.toUpperCase();

    if(key === "1") btn1.style.backgroundColor = "#800000";
    if(key === "2") btn2.style.backgroundColor = "#800000";
    if(key === "3") btn3.style.backgroundColor = "#800000";
    if(key === "4") btn4.style.backgroundColor = "#800000";
    if(key === "Q") btnQ.style.backgroundColor = "#800000";
    if(key === "W") btnW.style.backgroundColor = "#800000";
    if(key === "E") btnE.style.backgroundColor = "#800000";
    if(key === "R") btnR.style.backgroundColor = "#800000";
    if(key === "A") btnA.style.backgroundColor = "#800000";
    if(key === "S") btnS.style.backgroundColor = "#800000";
    if(key === "D") btnD.style.backgroundColor = "#800000";
    if(key === "F") btnF.style.backgroundColor = "#800000";
    if(key === "Z") btnZ.style.backgroundColor = "#800000";
    if(key === "X") btnX.style.backgroundColor = "#800000";
    if(key === "C") btnC.style.backgroundColor = "#800000";
    if(key === "V") btnV.style.backgroundColor = "#800000";
}

//keeps a sound from looping when played
function playSound(btn, audio) {
    btn.style.backgroundColor = "#ffffff";
    audio.loop = false;
    audio.play();
}

//AI Plays Buttons:
function playButton(key) {
    window.dispatchEvent(new KeyboardEvent('keydown', {'key': key}));
    setTimeout(test, 300); 

    function test() {
        window.dispatchEvent(new KeyboardEvent('keyup', {'key': key}));
    }
}


//User Inputs: compares AI and user arrays to see if user won or lost the round

function getUserInput(e) {
    let correctPattern = [];
    userPattern.push(e.key.toUpperCase());
    if (roundCounter === 1) 
        {
        correctPattern = ["Z", "X", "Z", "Z", "X"];
        if(userPattern.length === 5) 
        {
            if(JSON.stringify(userPattern) == JSON.stringify(correctPattern)) userWon(); 
            else userLost();
        }
    }

    if (roundCounter === 2) 
        {
        correctPattern = ["Z", "X", "Z", "A", "X"];
        if(userPattern.length === 5) 
        {
            if(JSON.stringify(userPattern) == JSON.stringify(correctPattern)) userWon(); 
            else userLost();
        }
    }

    if (roundCounter === 3) 
        {
        correctPattern = ["Z", "C", "X", "Z", "C", "Z", "X"];
        if(userPattern.length === 7) 
        {
        if(JSON.stringify(userPattern) == JSON.stringify(correctPattern)) userWon(); 
        else userLost();
        }
    }

    if (roundCounter === 4) 
        {
        correctPattern = ["Z", "C", "X", "Z", "D", "Z", "X", "C"];
        if(userPattern.length === 8) 
        {
        if(JSON.stringify(userPattern) == JSON.stringify(correctPattern)) userWon(); 
        else userLost();
        }
    }

    if (roundCounter === 5) 
        {
        correctPattern = ["Z", "C", "X", "A", "D", "Z", "X", "V"];
        if(userPattern.length === 8) 
        {
        if(JSON.stringify(userPattern) == JSON.stringify(correctPattern)) userWon(); 
        else userLost();
        }
    }   

    if (roundCounter === 6) 
        {
        correctPattern = ["Z", "C", "X", "F", "D", "Z", "X", "C"];
        if(userPattern.length === 8) 
        {
        if(JSON.stringify(userPattern) == JSON.stringify(correctPattern)) userWon(); 
        else userLost();
        }
    }   

    if (roundCounter === 7) 
        {
        correctPattern = ["Z", "A", "X", "V", "D", "Z", "S", "C"];
        if(userPattern.length === 8) 
        {
        if(JSON.stringify(userPattern) == JSON.stringify(correctPattern)) userWon(); 
        else userLost();
        }
    }   

    if (roundCounter === 8) 
        {
        correctPattern = ["Z", "R", "X", "D", "C", "Z", "X", "D"];
        if(userPattern.length === 8) 
        {
        if(JSON.stringify(userPattern) == JSON.stringify(correctPattern)) userWon(); 
        else userLost();
        }
    }   

    if (roundCounter === 9) 
    {
    correctPattern = ["1", "C", "X", "Z", "2", "Z", "X", "C"];
    if(userPattern.length === 8) 
    {
    if(JSON.stringify(userPattern) == JSON.stringify(correctPattern)) userWon(); 
    else userLost();
    }
}  

        if (roundCounter === 10) 
    {
    correctPattern = ["1", "C", "X", "Q", "2", "Z", "X", "W"];
    if(userPattern.length === 8) 
    {
    if(JSON.stringify(userPattern) == JSON.stringify(correctPattern)) userWonRound10(); 
    else userLost();
    }
}  
}


//If array matches, user wins:
function userWon() {
    userPattern = [];
    isUsersTurn = false;
    roundCounter++;
    document.getElementById("display-text").innerHTML = "<p>>>>WELL DONE, YOU DID IT!<<< </br></br> >STARTING NEXT ROUND IN 5 SECONDS......</br> </p>";
    setTimeout(window[getRoundFunction + roundCounter], 5000);
}

//If array matches in round 10:
function userWonRound10() {
    userPattern = []
    isUsersTurn = true;
    roundCounter = 0;
    document.getElementById("display-text").innerHTML = "<p>>>>WELL DONE, YOU DID IT!<<< </br></br> THANKS FOR PLAYING! THAT'S ALL FOR NOW. </br>COME BACK SOON FOR MORE PATTERNS AND DRUM SOUNDS!</br>>PRESS 'L' FOR HOME</p>";
}

//if array does not match:
function userLost() {
    userPattern = [];
    document.getElementById("display-text").innerHTML = "<p>SORRY, THAT'S NOT IT :( </br></br> >PRESS 'K' TO TRY AGAIN</br>>PRESS 'L' TO END GAME </p>";
}

//first function to run after spacebar is pressed at homescreen:
function startGame() {
    gameStarted = true;
    document.getElementById("display-text").innerHTML = "<p>>>>STARTING GAME<<< </br></br>TIP: IN THIS GAME, YOUR SENSE OF RHYTHM IS AS IMPORTANT AS YOUR MEMORY. PAY ATTENTION TO THE TIMING OF EACH BUTTON IN THE SEQUENCE. YOU CAN DO IT! </p>";
    setTimeout(gameRound1, 7500)
}

//listener function after AI plays sequence in a round:
function gameRoundListener() {
    userPattern = [];
    isUsersTurn = true;
    document.getElementById("display-text").innerHTML = "<p>>>>YOUR TURN<<< </br></br>USE YOUR KEYBOARD TO PLAY THE SEQUENCE </br></br> >PRESS 'K' TO HEAR IT AGAIN</br> >PRESS 'L' TO END GAME </p>";
}




//Round Sequences:

function gameRound1() {
    roundCounter = 1;
    document.getElementById("display-text").innerHTML = "<p>>>>ROUND ONE<<< </br></br>COMPUTER PLAYING SEQUENCE </br> WATCH AND LISTEN</p>";
    setTimeout(gameRound1Sequence, 700)
}

function gameRound1Sequence() {
    isUsersTurn = false;
    let count = 0;
    let intervalId = setInterval(counter, 280);
    function counter() {
       (++count);
        if (count === 1) playButton('Z');
        if (count === 5) playButton('X');
        if (count === 7) playButton('Z');
        if (count === 11) playButton('Z');
        if (count === 13) playButton('X');
        if (count === 14) setTimeout(gameRoundListener, 260)
        if (count === 15) clearTimeout(intervalId);
    }
}

function gameRound2() {
    roundCounter = 2;
    document.getElementById("display-text").innerHTML = "<p>>>>ROUND TWO<<< </br></br>COMPUTER PLAYING SEQUENCE </br> WATCH AND LISTEN</p>";
    setTimeout(gameRound2Sequence, 700)
}

function gameRound2Sequence() {
    isUsersTurn = false;
    let count = 0;
    let intervalId = setInterval(counter, 280);
    function counter() {
       (++count);
        if (count === 1) playButton('Z');
        if (count === 5) playButton('X');
        if (count === 7) playButton('Z');
        if (count === 11) playButton('A');
        if (count === 13) playButton('X');
        if (count === 14) setTimeout(gameRoundListener, 260)
        if (count === 15) clearTimeout(intervalId);
    }
}

function gameRound3() {
    roundCounter = 3;
    document.getElementById("display-text").innerHTML = "<p>>>>ROUND THREE<<< </br></br>COMPUTER PLAYING SEQUENCE </br> WATCH AND LISTEN</p>";
    setTimeout(gameRound3Sequence, 700)
}

function gameRound3Sequence() {
    isUsersTurn = false;
    let count = 0;
    let intervalId = setInterval(counter, 280);
    function counter() {
        (++count);
            if (count === 1) playButton('Z');
            if (count === 3) playButton('C');
            if (count === 5) playButton('X');
            if (count === 7) playButton('Z');
            if (count === 9) playButton('C');
            if (count === 11) playButton('Z');
            if (count === 13) playButton('X');
            if (count === 14) setTimeout(gameRoundListener, 260)
            if (count === 15) clearTimeout(intervalId);
    }
}

function gameRound4() {
    roundCounter = 4;
    document.getElementById("display-text").innerHTML = "<p>>>>ROUND FOUR<<< </br></br>COMPUTER PLAYING SEQUENCE </br> WATCH AND LISTEN</p>";
    setTimeout(gameRound4Sequence, 700)
}

function gameRound4Sequence() {
    isUsersTurn = false;
    let count = 0;
    let intervalId = setInterval(counter, 280);
    function counter() {
        (++count);
        if (count === 1) playButton('Z');
        if (count === 3) playButton('C');
        if (count === 5) playButton('X');
        if (count === 7) playButton('Z');
        if (count === 9) playButton('D');
        if (count === 11) playButton('Z');
        if (count === 13) playButton('X');
        if (count === 15) playButton('C');
        if (count === 16) setTimeout(gameRoundListener, 260)
        if (count === 17) clearTimeout(intervalId);
    }
}

function gameRound5() {
    roundCounter = 5;
    document.getElementById("display-text").innerHTML = "<p>>>>ROUND FIVE<<< </br></br>COMPUTER PLAYING SEQUENCE </br> WATCH AND LISTEN</p>";
    setTimeout(gameRound5Sequence, 700)
}

function gameRound5Sequence() {
    isUsersTurn = false;
    let count = 0;
    let intervalId = setInterval(counter, 280);
    function counter() {
        (++count);
        if (count === 1) playButton('Z');
        if (count === 3) playButton('C');
        if (count === 5) playButton('X');
        if (count === 7) playButton('A');
        if (count === 9) playButton('D');
        if (count === 11) playButton('Z');
        if (count === 13) playButton('X');
        if (count === 15) playButton('V');
        if (count === 16) setTimeout(gameRoundListener, 250)
        if (count === 17) clearTimeout(intervalId);
    }
}

function gameRound6() {
    roundCounter = 6;
    document.getElementById("display-text").innerHTML = "<p>>>>ROUND SIX<<< </br></br>COMPUTER PLAYING SEQUENCE </br> WATCH AND LISTEN</p>";
    setTimeout(gameRound6Sequence, 700)
}

function gameRound6Sequence() {
    isUsersTurn = false;
    let count = 0;
    let intervalId = setInterval(counter, 280);
    function counter() {
        (++count);
        if (count === 1) playButton('Z');
        if (count === 3) playButton('C');
        if (count === 5) playButton('X');
        if (count === 7) playButton('F');
        if (count === 9) playButton('D');
        if (count === 11) playButton('Z');
        if (count === 13) playButton('X');
        if (count === 15) playButton('C');
        if (count === 16) setTimeout(gameRoundListener, 250)
        if (count === 17) clearTimeout(intervalId);
    }
}

function gameRound7() {
    roundCounter = 7;
    document.getElementById("display-text").innerHTML = "<p>>>>ROUND SEVEN<<< </br></br>COMPUTER PLAYING SEQUENCE </br> WATCH AND LISTEN</p>";
    setTimeout(gameRound7Sequence, 700)
}

function gameRound7Sequence() {
    isUsersTurn = false;
    let count = 0;
    let intervalId = setInterval(counter, 280);
    function counter() {
        (++count);
        if (count === 1) playButton('Z');
        if (count === 3) playButton('A');
        if (count === 5) playButton('X');
        if (count === 7) playButton('V');
        if (count === 9) playButton('D');
        if (count === 11) playButton('Z');
        if (count === 13) playButton('S');
        if (count === 15) playButton('C');
        if (count === 16) setTimeout(gameRoundListener, 250)
        if (count === 17) clearTimeout(intervalId);
    }
}

function gameRound8() {
    roundCounter = 8;
    document.getElementById("display-text").innerHTML = "<p>>>>ROUND EIGHT<<< </br></br>COMPUTER PLAYING SEQUENCE </br> WATCH AND LISTEN</p>";
    setTimeout(gameRound8Sequence, 700)
}

function gameRound8Sequence() {
    isUsersTurn = false;
    let count = 0;
    let intervalId = setInterval(counter, 280);
    function counter() {
        (++count);
        if (count === 1) playButton('Z');
        if (count === 3) playButton('R');
        if (count === 5) playButton('X');
        if (count === 7) playButton('D');
        if (count === 9) playButton('C');
        if (count === 11) playButton('Z');
        if (count === 13) playButton('X');
        if (count === 15) playButton('D');
        if (count === 16) setTimeout(gameRoundListener, 250)
        if (count === 17) clearTimeout(intervalId);
    }
}

function gameRound9() {
    roundCounter = 9;
    document.getElementById("display-text").innerHTML = "<p>>>>ROUND NINE<<< </br></br>COMPUTER PLAYING SEQUENCE </br> WATCH AND LISTEN</p>";
    setTimeout(gameRound9Sequence, 700)
}

function gameRound9Sequence() {
    isUsersTurn = false;
    let count = 0;
    let intervalId = setInterval(counter, 280);
    function counter() {
        (++count);
        if (count === 1) playButton('1');
        if (count === 3) playButton('C');
        if (count === 5) playButton('X');
        if (count === 7) playButton('Z');
        if (count === 9) playButton('2');
        if (count === 11) playButton('Z');
        if (count === 13) playButton('X');
        if (count === 15) playButton('C');
        if (count === 16) setTimeout(gameRoundListener, 250)
        if (count === 17) clearTimeout(intervalId);
    }
}

function gameRound10() {
    roundCounter = 10;
    document.getElementById("display-text").innerHTML = "<p>>>>ROUND TEN<<< </br></br>COMPUTER PLAYING SEQUENCE </br> WATCH AND LISTEN</p>";
    setTimeout(gameRound10Sequence, 700)
}

function gameRound10Sequence() {
    isUsersTurn = false;
    let count = 0;
    let intervalId = setInterval(counter, 280);
    function counter() {
        (++count);
        if (count === 1) playButton('1');
        if (count === 3) playButton('C');
        if (count === 5) playButton('X');
        if (count === 7) playButton('Q');
        if (count === 9) playButton('2');
        if (count === 11) playButton('Z');
        if (count === 13) playButton('X');
        if (count === 15) playButton('W');
        if (count === 16) setTimeout(gameRoundListener, 250)
        if (count === 17) clearTimeout(intervalId);
    }
}


//Demo mode: Cool pattern for user to observe, hopefully to find some inspiration in their freestyling with SS-808.
function demoPlay() {
    gameStarted = true;
    document.getElementById("display-text").innerHTML = "<p>>>>DEMO MODE<<< </br></br>A DEMONSTRATION OF SS-808'S ABILITIES. </br> SIT BACK AND ENJOY.</p>";
    isUsersTurn = false;
    let count = -10;
    let intervalId = setInterval(counter, 200);
    function counter() {
        (++count);
        //Intro:
        if (count === 0) playButton('1');
        if (count === 4) playButton('C');
        if (count === 8) playButton('2');
        if (count === 12) playButton('C');
        if (count === 16) playButton('1');
        if (count === 20) playButton('C');
        if (count === 23) playButton('F');
        if (count === 24) playButton('2');
        if (count === 28) playButton('D');
        if (count === 32) playButton('1');
        if (count === 36) playButton('C');
        if (count === 40) playButton('2');
        if (count === 44) playButton('C');
        if (count === 48) playButton('3');
        if (count === 48) playButton('R');
        if (count === 52) playButton ('C');
        if (count === 54) playButton ('C');
        if (count === 56) playButton ('4');
        if (count === 58) playButton ('C');
        if (count === 60) playButton ('D');
        if (count === 62) playButton ('V');
        if (count === 62) playButton ('C');
        if (count === 63) playButton ('A');
        if (count === 64) playButton ('Z');
        //Beat Drop:
        if (count === 64) playButton ('1');
        if (count === 67) playButton ('C');
        if (count === 68) playButton ('X');
        if (count === 68) playButton ('D');
        if (count === 70) playButton ('C');
        if (count === 72) playButton ('2');
        if (count === 74) playButton ('C');
        if (count === 74) playButton ('Z');
        if (count === 75) playButton ('D');
        if (count === 76) playButton ('S');
        if (count === 76) playButton ('F');
        if (count === 77) playButton ('C');
        //Beat Drop Measure 2:
        if (count === 80) playButton ('1');
        if (count === 83) playButton ('C');
        if (count === 84) playButton ('X');
        if (count === 84) playButton ('D');
        if (count === 87) playButton ('C');
        if (count === 87) playButton ('A');
        if (count === 88) playButton ('2');
        if (count === 90) playButton ('C');
        if (count === 90) playButton ('A');
        if (count === 91) playButton ('D');
        if (count === 92) playButton ('S');
        if (count === 92) playButton ('F');
        if (count === 93) playButton ('C');
        //Beat Drop Measure 3:
        if (count === 96) playButton ('1');
        if (count === 99) playButton ('C');
        if (count === 100) playButton ('X');
        if (count === 100) playButton ('D');
        if (count === 102) playButton ('C');
        if (count === 103) playButton ('Z');
        if (count === 104) playButton ('2');
        if (count === 104) playButton ('C');
        if (count === 106) playButton ('Z');
        if (count === 106) playButton ('C');
        if (count === 107) playButton ('D');
        if (count === 108) playButton ('S');
        if (count === 108) playButton ('F');
        if (count === 109) playButton ('C');
        //Beat Drop Measure 4 (Transition):
        if (count === 112) playButton ('3');
        if (count === 112) playButton ('Z');
        if (count === 113) playButton ('C');
        if (count === 114) playButton ('A');
        if (count === 114) playButton ('D');
        if (count === 116) playButton ('C');
        if (count === 116) playButton ('X');
        if (count === 117) playButton ('Z');
        if (count === 118) playButton ('D');
        if (count === 119) playButton ('A');
        if (count === 120) playButton ('4');
        if (count === 122) playButton ('V');
        if (count === 122) playButton ('C');
        if (count === 123) playButton ('Z');
        if (count === 124) playButton ('S');
        if (count === 124) playButton ('F');
        if (count === 125) playButton ('D');
        if (count === 125) playButton ('Z');
        if (count === 127) playButton ('R');
        //Bass Drop:
        if (count === 128) playButton ('1');
        if (count === 130) playButton ('C');
        if (count === 132) playButton ('X');
        if (count === 132) playButton ('D');
        if (count === 134) playButton ('C');
        if (count === 134) playButton ('Q');
        if (count === 136) playButton ('2');
        if (count === 138) playButton ('C');
        if (count === 138) playButton ('Z');
        if (count === 139) playButton ('D');
        if (count === 139) playButton ('W');
        if (count === 140) playButton ('S');
        if (count === 140) playButton ('F');
        if (count === 141) playButton ('C');
        //Beat Drop Measure 2:
        if (count === 144) playButton ('1');
        if (count === 144) playButton ('Z');
        if (count === 147) playButton ('C');
        if (count === 148) playButton ('X');
        if (count === 148) playButton ('D');
        if (count === 150) playButton ('Q');
        if (count === 151) playButton ('C');
        if (count === 151) playButton ('A');
        if (count === 152) playButton ('2');
        if (count === 153) playButton ('E');
        if (count === 154) playButton ('C');
        if (count === 154) playButton ('A');
        if (count === 155) playButton ('D');
        if (count === 155) playButton ('Z');
        if (count === 156) playButton ('S');
        if (count === 156) playButton ('F');
        if (count === 156) playButton ('W');
        if (count === 158) playButton ('C');
        //Bass Drop Measure 3:
        if (count === 160) playButton ('1');
        if (count === 163) playButton ('C');
        if (count === 164) playButton ('X');
        if (count === 164) playButton ('D');
        if (count === 166) playButton ('C');
        if (count === 166) playButton ('Q');
        if (count === 167) playButton ('Z');
        if (count === 168) playButton ('2');
        if (count === 168) playButton ('C');
        if (count === 170) playButton ('Z');
        if (count === 170) playButton ('C');
        if (count === 171) playButton ('D');
        if (count === 171) playButton ('W');
        if (count === 172) playButton ('S');
        if (count === 172) playButton ('F');
        if (count === 173) playButton ('C');
        //Bass Drop Measure 4 (Transition):
        if (count === 176) playButton ('3');
        if (count === 176) playButton ('Z');
        if (count === 177) playButton ('C');
        if (count === 178) playButton ('A');
        if (count === 178) playButton ('D');
        if (count === 180) playButton ('C');
        if (count === 180) playButton ('X');
        if (count === 181) playButton ('Z');
        if (count === 182) playButton ('D');
        if (count === 182) playButton ('E');
        if (count === 183) playButton ('A');
        if (count === 184) playButton ('4');
        if (count === 186) playButton ('V');
        if (count === 186) playButton ('C');
        if (count === 187) playButton ('Z');
        if (count === 188) playButton ('S');
        if (count === 188) playButton ('W');
        if (count === 188) playButton ('F');
        if (count === 189) playButton ('D');
        if (count === 191) playButton ('R');
        //Outro 1:
        if (count === 192) playButton ('1');
        if (count === 192) playButton ('3');
        if (count === 194) playButton ('C');
        if (count === 196) playButton ('D');
        if (count === 198) playButton ('C');
        if (count === 198) playButton ('E');
        if (count === 200) playButton ('2');
        if (count === 200) playButton ('4');
        if (count === 202) playButton ('C');
        if (count === 202) playButton ('Z');
        if (count === 203) playButton ('D');
        if (count === 203) playButton ('W');
        //Outro 2:
        if (count === 208) playButton ('1');
        if (count === 208) playButton ('3');
        if (count === 208) playButton ('Z');
        if (count === 211) playButton ('C');
        if (count === 212) playButton ('X');
        if (count === 212) playButton ('D');
        if (count === 214) playButton ('Q');
        if (count === 215) playButton ('C');
        if (count === 215) playButton ('A');
        if (count === 216) playButton ('2');
        if (count === 216) playButton ('4');
        if (count === 217) playButton ('E');
        if (count === 218) playButton ('C');
        if (count === 218) playButton ('A');
        if (count === 219) playButton ('D');
        if (count === 219) playButton ('Z');
        if (count === 220) playButton ('S');
        if (count === 220) playButton ('F');
        if (count === 222) playButton ('C');
        //Outro 3:
        if (count === 224) playButton ('1');
        if (count === 224) playButton ('3');
        if (count === 227) playButton ('C');
        if (count === 228) playButton ('X');
        if (count === 228) playButton ('D');
        if (count === 228) playButton ('C');
        if (count === 230) playButton ('E');
        if (count === 231) playButton ('Z');
        if (count === 232) playButton ('2');
        if (count === 232) playButton ('4');
        if (count === 232) playButton ('C');
        if (count === 234) playButton ('Z');
        if (count === 234) playButton ('C');
        if (count === 235) playButton ('D');
        if (count === 235) playButton ('W');
        if (count === 236) playButton ('S');
        if (count === 236) playButton ('F');
        if (count === 237) playButton ('C');
        //Outro 4:
        if (count === 240) playButton ('1');
        if (count === 240) playButton ('3');
        if (count === 240) playButton ('Z');
        if (count === 241) playButton ('C');
        if (count === 242) playButton ('A');
        if (count === 242) playButton ('D');
        if (count === 244) playButton ('C');
        if (count === 244) playButton ('X');
        if (count === 245) playButton ('Z');
        if (count === 246) playButton ('D');
        if (count === 246) playButton ('E');
        if (count === 247) playButton ('A');
        if (count === 248) playButton ('2');
        if (count === 248) playButton ('4');
        if (count === 248) playButton ('C');
        if (count === 251) playButton ('Z');
        if (count === 252) playButton ('S');
        if (count === 252) playButton ('F');
        if (count === 253) playButton ('V');
        if (count === 253) playButton ('D');
        if (count === 255) playButton ('R');
        //Outro 4 Real:
        if (count === 256) playButton ('1');
        if (count === 256) playButton ('3');
        if (count === 259) playButton ('Z');
        if (count === 260) playButton ('A');
        if (count === 261) playButton ('C');
        if (count === 262) playButton ('Z');
        if (count === 264) playButton ('2');
        if (count === 264) playButton ('4');
        if (count === 267) playButton ('Z');
        if (count === 268) playButton ('A');
        if (count === 268) playButton ('F');
        if (count === 272) playButton ('1');
        if (count === 272) playButton ('3');
        if (count === 275) playButton ('Z');
        if (count === 276) playButton ('A');
        if (count === 277) playButton ('C');
        if (count === 278) playButton ('Z');
        if (count === 280) playButton ('2');
        if (count === 280) playButton ('4');
        if (count === 282) playButton ('C');
        if (count === 283) playButton ('Z');
        if (count === 284) playButton ('A');
        if (count === 284) playButton ('F');
        if (count === 287) playButton ('R');
        if (count === 288) playButton ('1');
        if (count === 288) playButton ('3');
        if (count === 291) playButton ('Z');
        if (count === 292) playButton ('A');
        if (count === 293) playButton ('D');
        if (count === 294) playButton ('Z');
        if (count === 296) playButton ('2');
        if (count === 296) playButton ('4');
        if (count === 299) playButton ('Z');
        if (count === 300) playButton ('A');
        if (count === 300) playButton ('F');
        if (count === 304) playButton ('1');
        if (count === 304) playButton ('3');


        if (count === 320) setTimeout(getMoreInfoPressH, 1250)
        if (count === 321) clearTimeout(intervalId);
    }
}