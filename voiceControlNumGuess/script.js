const inputValue=document.body.querySelector('input')
const verdict=document.body.querySelector('.verdict')
const result=document.body.querySelector('.result')
const container=document.body.querySelector('.container')
const LIMIT=100;
const randomNum=getRandomNumber()
let chancesTaken=0;
console.log(randomNum)
inputValue.focus()

// window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;

// let recognition=new window.SpeechRecognition()


// //start recognition
// recognition.start()

// window.SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;

// // let recognition = new window.SpeechRecognition();
// let recognition =new webkitSpeechRecognition() || new SpeechRecognition();
// // Start recognition and game
// recognition.start();

let recognition =new webkitSpeechRecognition() || new SpeechRecognition();

if (window.SpeechRecognition === null ){
    console.log("Speech Recognition is not supported.");
  }else {
    // let recognition  = new window.SpeechRecognition();


    recognition.continuous = true;
    recognition.lang = "en-US";
    recognition.language = "English";

    recognition.onresult = function (ev){
      console.log("Recognition result: ", ev);
      displayVoice.value == "";
    }
    recognition.onerror = function (ev){
      console.log("Recognition error: ", ev);
    }
    // recognition.interimResults = true;
    recognition.start();
  }



function onSpeak(e){
    console.log(123)
    if (e.results.length > 0) 
    {
       alert("Working");
    }
}


//speak result
recognition.addEventListener('result',onSpeak)

recognition.addEventListener('error', function(event) {
    console.log(event)
    console.log(`Speech recognition error detected: ${event.error}`);
    console.log(`additional ${event.message}`);
  });

inputValue.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        chancesTaken++;
        const value=e.target.value
        showVerdict(+value)   
        inputValue.value=''
    }
})


function getRandomNumber(){
    return Math.floor(Math.random()* LIMIT) +1
}

function showVerdict(value){
    if (Number.isNaN(value)) {
        verdict.innerHTML += '<div>That is not a valid number</div>';
        return;
    }
    if (value > 100 || value < 1) {
        verdict.innerHTML += '<div>Number must be between 1 and 100</div>';
        return;
    }
    if(value>randomNum){
        console.log(value)
        verdict.innerText=`Go Lower`
    }else if(value<randomNum){
        verdict.innerText=`Go Higher`
    }else if(value===randomNum){
        container.innerHTML=`
            <h1>Congrats! You have guessed the number</h1>
            <span>It was ${randomNum}</span>
            <span>You guessed it in ${chancesTaken} turns</span>
            <button class="btn" onClick="reload()">Play Again</button>
        `
    }

}

function reload(){
    location.reload()
}