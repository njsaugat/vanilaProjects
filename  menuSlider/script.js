const bars=document.body.querySelector('.bars')
const nav=document.body.querySelector('.nav')

const signUp=document.body.querySelector('.signup')
const form=document.body.querySelector('.form-control')
const main=document.body.querySelector('main')
const cross=document.body.querySelector('.fa-xmark')

let originalColor=window.getComputedStyle(main).getPropertyValue('backgroundColor')
console.log(originalColor)
bars.addEventListener('click',()=>{
    nav.classList.toggle('active')
})

signUp.addEventListener('click',()=>{
    form.classList.add('activated')
    // document.body.style.backgroundColor=`rgba(0, 0, 0, 0.463)`
    main.style.backgroundColor=`rgba(0, 0, 0, 0.463)`
    form.style.backgroundColor=`white`
    document.body.style.overflow=`hidden`
})

cross.addEventListener('click',()=>{
    form.classList.remove('activated')
    main.style.backgroundColor=`white`
    document.body.style.overflowY=`scroll`

})