// const fields=document.body.querySelectorAll('textarea')

// fields.forEach(field=>{
//     field.addEventListener('change',()=>{
//         field.classList.add('active')
//     })
// })

const memoryCards=document.body.querySelectorAll('.memory-card')
const addNewCart=document.body.querySelector('.add-new-cart')
const formControl=document.body.querySelector('.form-control')
console.log(formControl)
// memoryCards.forEach(memoryCard=>{
//     memoryCard.addEventListener('click',()=>{
//         memoryCard.classList.toggle('flipped')
//         memoryCard.innerText=''
//         setTimeout(()=>{
//             memoryCard.classList.toggle('flipped')
//         },250)
//         // memoryCard.childNodes[5].innerText=`A programming Language`
//     })
// })


addNewCart.addEventListener('click',()=>{
    console.log(formControl)
    addNewCart.classList.add('active')
    formControl.classList.add('active')

})

