const submit=document.body.querySelector('.btn')
const form=document.body.querySelector('.form')
const options=document.body.querySelectorAll('.option')
const inputs=document.body.querySelectorAll('input')

const [username, email,password, confPassword]=inputs

form.addEventListener('submit',(e)=>{
    clearPreviousErrors()
    
    const hasUser=checkUsername()
    const hasMail=checkEmail()
    const hasPass=checkPassword()
    const hasConPas=checkConfPassword()

    if(!hasUser || !hasMail || !hasPass || !hasConPas){
        e.preventDefault()
    }
})

function clearPreviousErrors(){
    const errors=document.body.querySelectorAll('.error')
    errors.forEach(error=>{
        error.remove()
    })
}

function checkUsername(){
    if(username.value.length<3){
        callInvalid(username)
        createError(username,'Username must be at least 3 characters')
        return false
    }else{
        callValid(username)
        return true;
    }
}

function checkEmail(){
    if(email.value.length<=0){
        callInvalid(email)
        createError(email,'Enter a valid email')
        return false
    }
    else if(!validateEmail(email.value)){
        callInvalid(email)
        createError(email, "You have entered an invalid email address!")
    }
    else{
        callValid(email)
        return true;
    }
}


function validateEmail(mail) {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
 if (mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
  {
    return true
  }    
    return false
}
function checkPassword(){
    if(password.value.length<6){
        callInvalid(password)
        createError(password,'Password must be at least 6 characters')
        return false
    }
    else{
        callValid(password)
        return true;
    }
}
function checkConfPassword(){
    if(confPassword.value.length<=0 ){
        
        callInvalid(confPassword)
        createError(confPassword,'Confirm your password')
        return false
    }
    else if( confPassword.value!==password.value){
        callInvalid(confPassword)
        createError(confPassword,'Both passwords must match')
        return false;
    }
    else{
        callValid(confPassword)
        return true;
    }
}

function callInvalid(element){
    element.classList.add('invalid')
}

function callValid(element){
    element.classList.add('valid')
}


function createError(element,message){

    const span=document.createElement('span')
    span.innerText=message;
    span.classList.add('error')
    element.parentNode.appendChild(span)
}
