const memoryCards=document.body.querySelectorAll('.memory-card')
const addNewCard=document.body.querySelector('.add-new-card')
const formControl=document.body.querySelector('.form-control')
const crossCard=document.body.querySelector('.cross')
const question=document.body.querySelector('.question')
const answer=document.body.querySelector('.answer')

const buttonControls=document.body.querySelector('.buttons-control')

const memoryCardes=document.body.querySelector('.memory-cards')
const textareas=document.body.querySelectorAll('textarea')

// const fo=document.body.querySelector('.add-card')
let questionAnswers=[]
const trash=document.body.querySelector('.clear-trash')


if(JSON.parse(localStorage.getItem('questionAnswers'))){
    const questionAnswersLs=JSON.parse(localStorage.getItem('questionAnswers'))
    showCards(questionAnswersLs)
    addButtonControls()
    addNewCard.classList.remove('middle')    
    trash.style.display='block'
}

function buttonPlacing(){
    if(!document.body.querySelector('.memory-card')){
        addNewCard.classList.add('middle')
        trash.style.display='none'
    }
}

buttonPlacing()
trash.addEventListener('click',()=>{
    memoryCardes.innerHTML=''
    // buttonControls.innerHTML=''
    buttonPlacing()
    questionAnswers=[]
    updateLs()
})

addNewCard.addEventListener('click',()=>{
    // addNewCard.classList.add('active')
    formControl.classList.add('active')
   
})

crossCard.addEventListener('click',()=>{
    // addNewCard.classList.remove('active')
    question.value=''
    answer.value=''
    formControl.classList.remove('active')
    
    
})

formControl.addEventListener('submit',(e)=>{
    e.preventDefault()

    // console.log(question.value)
    // console.log(answer.value)
    if(question.value!=='' && answer.value!==''){
        questionAnswers.push({question:question.value,answer:answer.value})
        updateLs()
        showCards(questionAnswers)
        addButtonControls()
        addNewCard.classList.remove('middle')    
        trash.style.display='block'
        


    }
    question.value=''
    answer.value=''
    formControl.classList.remove('active')


})


function updateLs(){
    console.log(questionAnswers)
    localStorage.setItem('questionAnswers',JSON.stringify(questionAnswers))
}

function showCards(questionAnswers){
    memoryCardes.innerHTML=''
    questionAnswers.forEach((qustionAnswer,index)=>{
        const memoryCard=document.createElement('div')
        if(index===0){
            memoryCard.classList.add('memory-card','active')
        }else{
            memoryCard.classList.add('memory-card')
        }
        memoryCard.innerHTML=`
        <span class="flip"><i class="fa-solid fa-rotate"></i>Flip</span>
        <span class="question-card card">${qustionAnswer.question}</span>
        <span class="answer-card card inactive" >${qustionAnswer.answer}</span>

        `
        memoryCardes.appendChild(memoryCard)
        updateMemoryCards(memoryCard)
        
    })
    if(!document.body.querySelector('.buttons-control')){        
        const buttonControls=document.createElement('div')
        buttonControls.classList.add('buttons-control')
        buttonControls.innerHTML=`
        <span> <i class="fa-solid fa-arrow-left"></i> </span>
            <span class="pointer"> 1/${questionAnswers.length} </span>
            <span> <i class="fa-solid fa-arrow-right"></i> </span>
        `

        memoryCardes.appendChild(buttonControls)
    }
}


let index=0;
function addButtonControls(){
    rightButton()
    leftButton()
    
}

function rightButton(){
    const rightButton=document.body.querySelector('.fa-arrow-right')
    rightButton.addEventListener('click',()=>{
        if(index<questionAnswers.length-1 ){
            index++
        }else{
            index=0;
        }

        moveCard()        

    })

}

function moveCard(){
    const memoryCard=document.body.querySelectorAll('.memory-card')[index]
    const pointer=document.body.querySelector('.pointer')
    removeActiveClass()
    memoryCard.classList.add('active')

    pointer.innerText=`${index+1}/${questionAnswers.length}`

}

function leftButton(){
    const leftButton=document.body.querySelector('.fa-arrow-left')
    leftButton.addEventListener('click',()=>{
        if(index>0 ){
            index--
        }else{
            index=questionAnswers.length-1;
        }
        moveCard()

    })
}


// addButtonControls()
function removeActiveClass(){
    const memoryCards=document.body.querySelectorAll('.memory-card')
    memoryCards.forEach(memoryCard=>{
        memoryCard.classList.remove('active')
    })    
}
function updateMemoryCards(memoryCard){
    memoryCard.addEventListener('click',()=>{
        // const answerCard=document.body.querySelectorAll('.answer-card')[index]
        // const questionCard=document.body.querySelectorAll('.question-card')[index]
        const answerCard=memoryCard.childNodes[3]
        const questionCard=memoryCard.childNodes[5]
        // const answerCard=document.body.querySelector('.answer-card')
        // const questionCard=document.body.querySelector('.question-card')


        if(answerCard.classList.contains('inactive')){
            answerCard.classList.remove('inactive')
            questionCard.classList.add('inactive')
        }else{
            answerCard.classList.add('inactive')
            questionCard.classList.remove('inactive')                
        }
        
        // questionCard.innerText=''
        // answerCard.innerText=ob.answer
        memoryCard.classList.add('flipped')
        setTimeout(()=>{
            memoryCard.classList.remove('flipped')

        },250)
        
        
    })
    
}
textareas.forEach(textarea=>{
    // console.log(textarea)
    textarea.addEventListener('input',(e)=>{
        // console.log(e)
        // console.log(e.target.value)
        textarea.innerText=e.target.value
        // passAnswer(e.target.value)
    })
})








