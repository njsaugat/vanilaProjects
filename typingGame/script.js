const setting=document.body.querySelector('.setting')
const settings=document.body.querySelector('.settings')
const playMode=document.body.querySelector('.play-mode')
const inputWord=document.body.querySelector('.input input')
const container=document.body.querySelector('.container')
const word=document.body.querySelector('.word')

const timeEl=document.body.querySelector('.time')
const scoreEl=document.body.querySelector('.score')
const API_URL='https://random-word-api.herokuapp.com/word?number='
const LIMITWORDS=20;
let time=20;
let extraTime=0;
let index=0;
let lock=true;
let interval;
let score=0;
let words=[]

inputWord.focus()

setting.addEventListener('click',()=>{
    settings.classList.toggle('active')
})


async function getWords(limit){
    // const result=await fetch(API_URL+limit,{headers:'application/json'})
    word.innerHTML=`<i class="fas fa-spinner fa-spin"></i>`
    const result=await fetch(API_URL+limit)
    words=await result.json()
    console.log(words)
    word.innerHTML=''
    word.innerText=words[index++]

}


// we call this getwords again if we are at the last index;
getWords(LIMITWORDS)


function timeBasedOnDifficulty(){
    // location.reload()
    const difficulty=playMode.options[playMode.selectedIndex].text
    if(difficulty.toLowerCase()==='easy'){
        extraTime=5;
        time=20;
    }
    else if(difficulty.toLowerCase()==='medium'){
        extraTime=3;
        time=12;
    }
    else if(difficulty.toLowerCase()==='hard'){
        extraTime=2;
        time=7;
    }
}
playMode.addEventListener('click',()=>{
    // location.reload()
    getWords(LIMITWORDS)
    timeBasedOnDifficulty()
    getTime()
})

timeBasedOnDifficulty()

function getTime(){
    timeEl.innerText=time<10? `0${time--}s`:`${time--}s`
    if(time<0){
        // time=20
        clearInterval(interval)
        lock=true
        gameOver();
    }
}
getTime()

inputWord.addEventListener('input',(e)=>{
    // words.forEach((actualWord,index)=>{
    // })
    //time only starts when  typing
    if(lock){
        interval=setInterval(getTime,1000)
        lock=false
    }

    if(e.target.value===word.innerText){
        word.innerText=words[index++]
        inputWord.value=''
        scoreEl.innerText=++score
        time+=extraTime
    }else if(e.target.value.length===word.innerText.length){
        word.classList.add('animated')
    }else{
        word.classList.remove('animated')

    }
    if(index>LIMITWORDS){
        index=0;
        word.innerHTML='<i class="fas fa-spinner fa-spin"></i>'
        getWords(LIMITWORDS)
    }
})


function gameOver(){
    container.innerHTML=`
        <h1 class="after-h1">Time Ran Out</h1>
        <small class="final-score">Your final Score is ${score}</small>
        <button class="btn reload" onClick="reloadPage()">Reload</button>
    `
}

function reloadPage(){
    location.reload()
}

