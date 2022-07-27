const closeBox=document.body.querySelector('.close')
const toggleBtn=document.body.querySelector('.btn-toggle')
const toggleBox=document.body.querySelector('.text-box')
const container=document.body.querySelector('.container')
const voiceSelect=document.body.querySelector('select')
const readText=document.body.querySelector('.read-text')
const textarea=document.body.querySelector('textarea')
let voices=[]
// console.log(toggleBox)
const activities=document.body.querySelector('.items')

const activitiesList=[
    {
        img:'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption:"I'm thirsty"
    },
    {
        img:'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg',
        caption:"I'm hungry"
    },
    {
        img:'https://images.pexels.com/photos/4515853/pexels-photo-4515853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption:"I'm tired"
    },
    {
        img:'https://images.pexels.com/photos/42230/teddy-teddy-bear-association-ill-42230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption:"I'm hurt"
    },
    {
        img:'https://images.pexels.com/photos/1648374/pexels-photo-1648374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption:"I'm happy"
    },
    {
        img:'https://images.pexels.com/photos/783941/pexels-photo-783941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption:"I'm angry"
    },
    {
        img:'https://images.pexels.com/photos/1556716/pexels-photo-1556716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption:"I'm sad"
    },
    {
        img:'https://images.pexels.com/photos/3142299/pexels-photo-3142299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption:"I'm scared"
    },
    {
        img:'https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption:"I want to go outside"
    },
    {
        img:'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption:"I want to go home"
    },
    {
        img:'https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption:"I want to go to school"
    },
    {
        img:'https://images.pexels.com/photos/5637736/pexels-photo-5637736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption:"I want to go to grandmas"
    }
]


activitiesList.forEach(createActivity)

function createActivity(activity,index){
    activities.innerHTML+=`
    <div class="item">
        <img src="${activity.img}" alt="${activity.caption}" srcset="">
        <p class="caption">${activity.caption}</p>
    </div>
    `

}

// toggleBox.addEventListener('click')
toggleBtn.addEventListener('click',()=>{
    console.log(123)
    toggleBox.classList.add('active')
    // document.body.style.backgroundColor=`grey`
    container.classList.add('active')
    document.body.style.overflow=`hidden`
})

closeBox.addEventListener('click',()=>{
    toggleBox.classList.remove('active')
    // document.body.style.backgroundColor=`white`
    container.classList.remove('active')
    document.body.style.overflow=`auto`

})

function addEventListeners(){
    const items=document.body.querySelectorAll('.item')
    // console.log(items)
    items.forEach(item=>{
        item.addEventListener('click',()=>{
            item.classList.add('active')
            setMessage(item.innerText)
            speakTextMessage()
            setTimeout(()=>{
                item.classList.remove('active')
            },500)
        })
    })
}

addEventListeners()


const message=new SpeechSynthesisUtterance()


// const synth = window.speechSynthesis;
// console.log(speechSynthesis)
function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    // if(typeof speechSynthesis === 'undefined') {
    //     return;
    //   }
    console.log(voices)
    // for(let i = 0; i < voices.length ; i++) {
    voices.forEach(voice=>{        
        const option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
    
        if(voice.default) {
          option.textContent += ' — DEFAULT';
        }
    
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    })
    // }
}


speechSynthesis.addEventListener('voiceschanged',populateVoiceList)

populateVoiceList()


function setMessage(text){
    message.text=text;
}

function speakTextMessage(){
    speechSynthesis.speak(message)
}

readText.addEventListener('click',()=>{
    setMessage(textarea.value)
    speakTextMessage()
})