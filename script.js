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

window.addEventListener("keydown", pressButton);
window.addEventListener("keyup", resetColor);

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
    if (key === "N") getMoreInfoPressN();
    if (key === "M") getMoreInfoPressM();
    if (key === "H") getMoreInfoPressH();
    if (key === " ") startGame();
     
}

function getMoreInfoPressN(){
    document.getElementById("display-text").innerHTML = "<p>>THIS IS A MEMORY GAME MODELED AFTER A DRUM MACHINE. USE YOUR KEYBOARD AND YOUR EARS TO REPEAT THE COMPUTER'S RHYTHM. THE BETTER YOUR RHYTHM, THE BETTER YOUR BEATS WILL SOUND. </br></br> >FOR HOME PRESS 'H' / CREDITS 'M'</p>";
}

function getMoreInfoPressM(){
    document.getElementById("display-text").innerHTML = "<p> >>>CREDITS<<< </br>  </br> (C) 2022 KHAKI SUIT VALENTINO </br> SPECIAL THANKS: BRANDON HENRY</br></br> >FOR INFO PRESS 'N' / HOME 'H'</p>";
}

function getMoreInfoPressH(){
    document.getElementById("display-text").innerHTML = "<p> >>>>>SIMON'S SAMPLER 808<<<<< </br> PRESS SPACEBAR TO BEGIN GAME </br> HEADPHONES RECOMMENDED!! </br> </br> (C) 2022 KHAKI SUIT VALENTINO </br> >FOR INFO PRESS 'N' / CREDITS 'M'</p>";
}

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

function playSound(btn, audio) {
    btn.style.backgroundColor = "#ffffff";
    audio.loop = false;
    audio.play();
}

function startGame() {
    document.getElementById("display-text").innerHTML = "<p>>>>STARTING GAME<<< </br></br>TIP: IN THIS GAME, YOUR SENSE OF RHYTHM IS AS IMPORTANT AS YOUR MEMORY. PAY ATTENTION TO THE TIMING OF EACH BUTTON IN THE SEQUENCE. YOU CAN DO IT! </p>";
    setTimeout(gameRound1, 5000)
}

function gameRound1() {
    document.getElementById("display-text").innerHTML = "<p>>>>ROUND ONE<<< </br></br>COMPUTER PLAYING SEQUENCE </br> WATCH AND LISTEN</p>";
    setTimeout(gameRound1Sequence, 700)
}

function gameRound1Sequence() {
    let count = 0;
    let intervalId = setInterval(counter, 55);
    function counter() {
       (++count);
        if (count === 10) playButton('Z');
        if (count === 30) playButton('X');
        if (count === 40) playButton('Z');
        if (count === 60) playButton('Z');
        if (count === 70) playButton('X');
        if (count === 80) setTimeout(gameRound1Listener, 1000)
        if (count === 81) clearTimeout(intervalId);
    }
}

function gameRound1Listener() {
    document.getElementById("display-text").innerHTML = "<p>>>>YOUR TURN<<< </br></br>USE YOUR KEYBOARD TO PLAY THE SEQUENCE </br></br> >PRESS 'K' TO HEAR IT AGAIN</br> >PRESS 'L' TO END GAME </p>";
}


function playButton(key) {
    window.dispatchEvent(new KeyboardEvent('keydown', {'key': key}));
    setTimeout(test, 300); 

    function test() {
        window.dispatchEvent(new KeyboardEvent('keyup', {'key': key}));

    }

}



// (++count);
// if (count === 10) playButton('Z');
// if (count === 30) playButton('X');
// if (count === 40) playButton('Z');
// if (count === 60) playButton('Z');
// if (count === 70) playButton('X');
// if (count === 80) setTimeout(gameRound1Listener, 1000)
// if (count === 81) clearTimeout(intervalId);




// Round 2 Sequence:
// console.log(++count);
//         if (count === 10) playButton('Z');
//         if (count === 30) playButton('X');
//         if (count === 40) playButton('Z');
//         if (count === 60) playButton('A');
//         if (count === 70) playButton('X');
//         if (count === 80) setTimeout(gameRound1Listener, 1000)
//         if (count === 81) clearTimeout(intervalId);

// Round 3 Sequence:
// console.log(++count);
//         if (count === 10) playButton('Z');
//         if (count === 20) playButton('C');
//         if (count === 30) playButton('X');
//         if (count === 40) playButton('Z');
//         if (count === 50) playButton('C');
//         if (count === 60) playButton('Z');
//         if (count === 70) playButton('X');
//         if (count === 80) setTimeout(gameRound1Listener, 1000)
//         if (count === 81) clearTimeout(intervalId);


// Round 4 Sequence:
// (++count);
// if (count === 10) playButton('Z');
// if (count === 20) playButton('C');
// if (count === 30) playButton('X');
// if (count === 40) playButton('Z');
// if (count === 50) playButton('D');
// if (count === 60) playButton('C');
// if (count === 70) playButton('X');
// if (count === 80) playButton('C');
// if (count === 90) setTimeout(gameRound1Listener, 1000)
// if (count === 91) clearTimeout(intervalId);


// Round 5 Sequence:
// (++count);
//         if (count === 10) playButton('Z');
//         if (count === 20) playButton('C');
//         if (count === 30) playButton('S');
//         if (count === 40) playButton('A');
//         if (count === 50) playButton('D');
//         if (count === 60) playButton('C');
//         if (count === 70) playButton('X');
//         if (count === 80) playButton('V');
//         if (count === 90) setTimeout(gameRound1Listener, 1000)
//         if (count === 91) clearTimeout(intervalId);


// Round 6 Sequence:
// (++count);
// if (count === 10) playButton('Z');
// if (count === 20) playButton('C');
// if (count === 25) playButton('D');
// if (count === 30) playButton('X');
// if (count === 40) playButton('Z');
// if (count === 50) playButton('C');
// if (count === 60) playButton('C');
// if (count === 70) playButton('X');
// if (count === 80) playButton('C');
// if (count === 90) setTimeout(gameRound1Listener, 1000)
// if (count === 91) clearTimeout(intervalId);


// Round 7 Sequence:
// (++count);
// if (count === 10) playButton('Z');
// if (count === 20) playButton('C');
// if (count === 25) playButton('A');
// if (count === 30) playButton('X');
// if (count === 40) playButton('Z');
// if (count === 50) playButton('C');
// if (count === 60) playButton('D');
// if (count === 70) playButton('X');
// if (count === 80) playButton('C');
// if (count === 90) setTimeout(gameRound1Listener, 1000)
// if (count === 91) clearTimeout(intervalId);


// Round 8 Sequence:
// (++count);
// if (count === 10) playButton('Z');
// if (count === 10) playButton('C');
// if (count === 20) playButton('D');
// if (count === 30) playButton('X');
// if (count === 40) playButton('Z');
// if (count === 50) playButton('C');
// if (count === 60) playButton('D');
// if (count === 70) playButton('X');
// if (count === 80) playButton('C');
// if (count === 90) setTimeout(gameRound1Listener, 1000)
// if (count === 91) clearTimeout(intervalId);

// Round 9 Sequence:
// (++count);
// if (count === 10) playButton('Z');
// if (count === 10) playButton('C');
// if (count === 20) playButton('C');
// if (count === 25) playButton('Z');
// if (count === 30) playButton('X');
// if (count === 40) playButton('Z');
// if (count === 40) playButton('C');
// if (count === 50) playButton('C');
// if (count === 60) playButton('C');
// if (count === 60) playButton('Z');
// if (count === 70) playButton('X');
// if (count === 80) playButton('C');
// if (count === 90) setTimeout(gameRound1Listener, 1000)
// if (count === 91) clearTimeout(intervalId);

//Round 10 Sequence:
// (++count);
//         if (count === 10) playButton('Z');
//         if (count === 10) playButton('C');
//         if (count === 15) playButton('D');
//         if (count === 20) playButton('C');
//         if (count === 25) playButton('Z');
//         if (count === 30) playButton('X');
//         if (count === 40) playButton('Z');
//         if (count === 40) playButton('C');
//         if (count === 50) playButton('C');
//         if (count === 60) playButton('C');
//         if (count === 60) playButton('Z');
//         if (count === 70) playButton('X');
//         if (count === 80) playButton('C');
//         if (count === 90) setTimeout(gameRound1Listener, 1000)
//         if (count === 91) clearTimeout(intervalId);

//Round 11 Sequence:
// (++count);
// if (count === 10) playButton('Z');
// if (count === 10) playButton('C ');
// if (count === 15) playButton('D');
// if (count === 20) playButton('C');
// if (count === 25) playButton('Z');
// if (count === 30) playButton('X');
// if (count === 40) playButton('Z');
// if (count === 40) playButton('C');
// if (count === 50) playButton('C');
// if (count === 60) playButton('C');
// if (count === 60) playButton('Z');
// if (count === 70) playButton('X');
// if (count === 80) playButton('C');
// if (count === 90) setTimeout(gameRound1Listener, 1000)
// if (count === 91) clearTimeout(intervalId);


//Round 12 Sequence:
// (++count);
// if (count === 10) playButton('Z');
// if (count === 10) playButton('C');
// if (count === 15) playButton('D');
// if (count === 20) playButton('C');
// if (count === 25) playButton('Z');
// if (count === 30) playButton('X');
// if (count === 30) playButton('C');
// if (count === 40) playButton('Z');
// if (count === 40) playButton('C');
// if (count === 45) playButton('F');
// if (count === 50) playButton('C');
// if (count === 60) playButton('C');
// if (count === 60) playButton('Z');
// if (count === 70) playButton('X');
// if (count === 70) playButton('C');
// if (count === 80) playButton('C');
// if (count === 90) setTimeout(gameRound1Listener, 1000)
// if (count === 91) clearTimeout(intervalId);

// Round 13 Sequence:
// (++count);
// if (count === 10) playButton('Z');
// if (count === 10) playButton('1');
// if (count === 30) playButton('X');
// if (count === 45) playButton('Z');
// if (count === 50) playButton('2');
// if (count === 60) playButton('Z');
// if (count === 70) playButton('X');
// if (count === 80) playButton('C');
// if (count === 90) setTimeout(gameRound1Listener, 1000)
// if (count === 91) clearTimeout(intervalId);


// Round 14 Sequence:
// (++count);
// if (count === 10) playButton('Z');
// if (count === 10) playButton('1');
// if (count === 30) playButton('X');
// if (count === 30) playButton('C');
// if (count === 40) playButton('C');
// if (count === 45) playButton('Z');
// if (count === 50) playButton('2');
// if (count === 50) playButton('C');
// if (count === 60) playButton('Z');
// if (count === 70) playButton('X');
// if (count === 70) playButton('C');
// if (count === 80) playButton('C');
// if (count === 90) setTimeout(gameRound1Listener, 1000)
// if (count === 91) clearTimeout(intervalId);



// Round 15 Sequence:
// (++count);
// if (count === 10) playButton('Z');
// if (count === 10) playButton('1');
// if (count === 20) playButton('C');
// if (count === 30) playButton('X');
// if (count === 30) playButton('C');
// if (count === 40) playButton('C');
// if (count === 45) playButton('Z');
// if (count === 50) playButton('2');
// if (count === 50) playButton('C'); 
// if (count === 60) playButton('C');
// if (count === 60) playButton('Z');
// if (count === 70) playButton('X');
// if (count === 70) playButton('C');
// if (count === 80) playButton('C');
// if (count === 90) setTimeout(gameRound1Listener, 1000)
// if (count === 91) clearTimeout(intervalId);

// Round 16 Sequence:
// (++count);
// if (count === 10) playButton('Z');
// if (count === 10) playButton('1');
// if (count === 20) playButton('C');
// if (count === 20) playButton('A');
// if (count === 30) playButton('C');
// if (count === 30) playButton('X');
// if (count === 40) playButton('C');
// if (count === 45) playButton('Z');
// if (count === 50) playButton('2');
// if (count === 50) playButton('C'); 
// if (count === 60) playButton('C');
// if (count === 60) playButton('Z');
// if (count === 70) playButton('X');
// if (count === 70) playButton('S');
// if (count === 80) playButton('C');
// if (count === 90) setTimeout(gameRound1Listener, 1000)
// if (count === 91) clearTimeout(intervalId);

//Round 17 Sequence:
// (++count);
// if (count === 10) playButton('Z');
// if (count === 10) playButton('1');
// if (count === 20) playButton('C');
// if (count === 20) playButton('A');
// if (count === 25) playButton('D');
// if (count === 30) playButton('C');
// if (count === 30) playButton('X');
// if (count === 40) playButton('C');
// if (count === 45) playButton('Z');
// if (count === 50) playButton('2');
// if (count === 50) playButton('C'); 
// if (count === 60) playButton('C');
// if (count === 60) playButton('Z');
// if (count === 70) playButton('S');
// if (count === 70) playButton('D');
// if (count === 80) playButton('C');
// if (count === 90) setTimeout(gameRound1Listener, 1000)
// if (count === 91) clearTimeout(intervalId);

//Round 18 Sequence:
// (++count);
//         if (count === 10) playButton('Z');
//         if (count === 10) playButton('1');
//         if (count === 20) playButton('C');
//         if (count === 20) playButton('A');
//         if (count === 25) playButton('Q');
//         if (count === 30) playButton('C');
//         if (count === 30) playButton('X');
//         if (count === 40) playButton('C');
//         if (count === 45) playButton('Z');
//         if (count === 50) playButton('2');
//         if (count === 50) playButton('C'); 
//         if (count === 60) playButton('C');
//         if (count === 60) playButton('Z');
//         if (count === 65) playButton('W');
//         if (count === 70) playButton('S');
//         if (count === 70) playButton('D');
//         if (count === 80) playButton('C');
//         if (count === 90) setTimeout(gameRound1Listener, 1000)
//         if (count === 91) clearTimeout(intervalId);


//Round 19 Sequence:
// (++count);
// if (count === 10) playButton('Z');
// if (count === 10) playButton('1');
// if (count === 20) playButton('D');
// if (count === 20) playButton('A');
// if (count === 25) playButton('Q');
// if (count === 25) playButton('C');
// if (count === 30) playButton('S');
// if (count === 30) playButton('X');
// if (count === 40) playButton('C');
// if (count === 45) playButton('Z');
// if (count === 50) playButton('2');
// if (count === 50) playButton('C'); 
// if (count === 60) playButton('C');
// if (count === 60) playButton('Z');
// if (count === 65) playButton('W');
// if (count === 70) playButton('S');
// if (count === 70) playButton('D');
// if (count === 80) playButton('F');
// if (count === 90) setTimeout(gameRound1Listener, 1000)
// if (count === 91) clearTimeout(intervalId);