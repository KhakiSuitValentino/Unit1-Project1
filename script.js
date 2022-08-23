//Level 1: On Boot Options, informational text, credits


document.getElementById("body").addEventListener("keydown", levelOneHandler);

function levelOneHandler(e) {

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

    if (e.key.toUpperCase() === "N") {
        getMoreInfoPressN();
    } else if (e.key.toUpperCase() === "M") {
        getMoreInfoPressM();
    } else if (e.key.toUpperCase() === "H") {
        getMoreInfoPressH();
    } else if (e.key == "1") {
        btn1.style.backgroundColor = "#ffffff";
    }
    
}

function getMoreInfoPressN(){
    document.getElementById("display-text").innerHTML = "<p>THIS IS A MEMORY GAME MODELED AFTER A DRUM MACHINE. SELECT GAME MODE AND SOUND BANK TO BEGIN. USE YOUR KEYBOARD AND YOUR EARS TO REPEAT THE COMPUTER'S RHYTHM. </br> >FOR HOME PRESS 'H' / CREDITS 'M'</p>";
}

function getMoreInfoPressM(){
    document.getElementById("display-text").innerHTML = "<p> >>>SONG CREDITS / SAMPLES USED<<< </br> MEN I TRUST - 'SUGAR' </br> ARTHUR RUSSELL - 'SEE-THROUGH' </br> APHEX TWIN - 'NAKS ACID' </br> PHOTEK - 'PULSE OF LIFE' </br> >FOR INFO PRESS 'N' / HOME 'H' </p>";
}

function getMoreInfoPressH(){
    document.getElementById("display-text").innerHTML = "<p> >>>>>SIMON'S SAMPLER 808<<<<< </br> SELECT GAME MODE & SOUND BANK TO BEGIN </br> HEADPHONES RECOMMENDED!! </br> </br> (C)2022 KHAKI SUIT VALENTINO </br> >FOR INFO PRESS 'N' / CREDITS 'M'</p>";
}

let sequence = [];
let humanSequence = [];


function startGame() {
    document.querySelector
}


// 1) Console log keypress event
// 2) actual game logic: make a sequence, put it in an array, computer plays array to player in setInterval times, let user create an array, compare user array to computer array. if true, move to next round