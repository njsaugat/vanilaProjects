const API_URL='https://random-word-api.herokuapp.com/word'
const dashes=document.body.querySelector('.dashes')
const dashAll=document.body.querySelector('.dashes')
const container=document.body.querySelector('.container')
const popup=document.body.querySelector('.popup')
const gameover=document.body.querySelector('.gameover')
const wrong=document.body.querySelector('.wrong')
let wordForReference;
let visited;
async function getWord(){
    dashes.innerHTML='<i class="fas fa-cog fa-spin"></i>'
    const result=await fetch(API_URL)
    const word=await result.json()
    dashes.innerHTML=''
    console.log(word)
    wordForReference=word[0]
    getTheDashes(word[0])
}

function getTheDashes(word){
    const wordArr=word.split("")
    wordArr.forEach((letter,index)=>{
        dashes.innerHTML+=`
        <div class="dash"> 
            <span class="letter">${letter}</span>
        </div>
        `
    })
    visited=new Array(wordArr.length).fill(false)
}

getWord()

function listenWord(e){
    if(!(/[a-z]/i.test(String.fromCharCode(e.keyCode)))) {
        // e.preventDefault();
        return false;
    }
    displayLetter(e.key)
}
document.addEventListener('keydown',listenWord,true)
let matchedLetter=0;
function displayLetter(inputLetter){
    const lettersEl=document.body.querySelectorAll('.letter')
    lettersEl.forEach((letterEl,index)=>{
        if(inputLetter.toLowerCase()===letterEl.innerText){
            if(visited[index]===false){
                letterEl.classList.add('active')
                matchedLetter++;
                visited[index]=true;
            }else{
                showPopup()
            }
        }

    
        if(matchedLetter===lettersEl.length){
            matchedLetter=0;
            dashAll.classList.add('complete-word')
            visited=[]
            gameOver('Congratulations! You Won!')
            setTimeout(()=>{
                // dashAll.classList.remove('complete-word')
                playAgain()

                // getWord()
            },1000)
        }
    })
    if((!wordForReference.includes(inputLetter)) && (!wrong.innerText.includes(inputLetter))){
        if(wrong.innerText===''){
            wrong.innerText='Wrong:'
        }
        wrong.innerText+=inputLetter
        // 
        addTheHangman()

    }

}

let index=0;
function addTheHangman(){
    const figureParts=document.body.querySelectorAll('.figure-part')
    figureParts[index++].classList.add('show')
    if(index===figureParts.length){
        gameOver('You Lost!')
    }
}
function showPopup(){
    popup.classList.add('active')
    setTimeout(()=>{
        popup.classList.remove('active')
    },2000)
}

function playAgain(){
    const playAgain=document.body.querySelector('.play-again')
    playAgain.addEventListener('click',()=>{
        location.reload()
    })
}

function gameOver(message){
    gameover.querySelector('h2').innerText=`${message}`
    gameover.classList.add('active')
    container.classList.add('overlay')

    // document.addEventListener('keypress',(e)=>{
    //     e.preventDefault()
    // })
    document.removeEventListener('keydown',listenWord,true)

}