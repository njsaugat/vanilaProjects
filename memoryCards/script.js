const memoryCards=document.body.querySelectorAll('.memory-card')
const addNewCard=document.body.querySelector('.add-new-card')
const formControl=document.body.querySelector('.form-control')
const crossCard=document.body.querySelector('.cross')
const question=document.body.querySelector('.question')
const answer=document.body.querySelector('.answer')


const memoryCardes=document.body.querySelector('.memory-cards')
const textareas=document.body.querySelectorAll('textarea')
console.log(answer)
console.log(question)
// const fo=document.body.querySelector('.add-card')
let obj=[]

// memoryCards.forEach(memoryCard=>{
//     memoryCard.addEventListener('click',()=>{
//         memoryCard.classList.toggle('flipped')
//     })
// })

addNewCard.addEventListener('click',()=>{
    console.log(formControl)
    // addNewCard.classList.add('active')
    formControl.classList.add('active')
   
})

crossCard.addEventListener('click',()=>{
    // addNewCard.classList.remove('active')
    formControl.classList.remove('active')
    
})

formControl.addEventListener('submit',(e)=>{
    e.preventDefault()

    // console.log(question.value)
    // console.log(answer.value)
    obj.push({question:question.value,answer:answer.value})
    console.log(obj)
    showCards(obj)
    formControl.classList.remove('active')

})


function showCards(obj){
    obj.forEach(ob=>{
        const memoryCard=document.createElement('div')
        memoryCard.classList.add('memory-card')
        memoryCard.innerHTML=`
        <span class="flip"><i class="fa-solid fa-rotate"></i>Flip</span>
        <span class="question-card card">${ob.question}</span>
        <span class="answer-card card inactive" >${ob.answer}</span>

        `
        memoryCard.addEventListener('click',()=>{
            const answerCard=document.body.querySelector('.answer-card')
            const questionCard=document.body.querySelector('.question-card')

            // questionCard.innerText=''
            // answerCard.innerText=ob.answer
            memoryCard.classList.add('flipped')
            setTimeout(()=>{
                memoryCard.classList.remove('flipped')

            },250)
            
            if(answerCard.classList.contains('inactive')){
                answerCard.classList.remove('inactive')
                questionCard.classList.add('inactive')
            }else{
                answerCard.classList.add('inactive')
                questionCard.classList.remove('inactive')                
            }
            
        })
        memoryCardes.appendChild(memoryCard)
    })
}

textareas.forEach(textarea=>{
    // console.log(textarea)
    textarea.addEventListener('change',(e)=>{
        // console.log(e)
        // console.log(e.target.value)
        textarea.innerText=e.target.value
        // passAnswer(e.target.value)
    })
})








