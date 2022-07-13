const bars=document.body.querySelector('.bars')
const nav=document.body.querySelector('.nav')

bars.addEventListener('click',()=>{
    nav.classList.toggle('active')
})