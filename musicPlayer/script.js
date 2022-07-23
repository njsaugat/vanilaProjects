const audioElement=document.body.querySelector('audio')

const playButton=document.body.querySelector('button.play-pause')
const pause=document.body.querySelector('.fa-pause')
const play=document.body.querySelector('.fa-play')
const popup=document.body.querySelector('.popup')
const image=document.body.querySelector('.image')
const audioLength=document.body.querySelector('.audio-length')
const previous=document.body.querySelector('.fa-backward')
const next=document.body.querySelector('.fa-forwar')



audioElement.onloadedmetadata=function(){
    audioLength.innerText=`${Math.floor((audioElement.duration)/60)}:${Math.floor((audioElement.duration)%60)}`
}

const audioContext=new AudioContext()
const track=audioContext.createMediaElementSource(audioElement)

const volumeControl = document.querySelector('#volume');
track.connect(audioContext.destination)

play.classList.add('active')


playButton.addEventListener('click',function(){
    if(audioContext.state==='suspended'){
        audioContext.resume()
    }
    if(this.dataset.playing==='false'){
        play.classList.remove('active')
        pause.classList.add('active')
        popup.classList.add('active')
        image.classList.add('active')
        audioElement.play();
        this.dataset.playing='true'
    }else if(this.dataset.playing==='true'){
        pause.classList.remove('active')
        play.classList.add('active')
        popup.classList.remove('active')
        image.classList.remove('active')
        audioElement.pause()
        this.dataset.playing='false'
    }
    audioElement.addEventListener('ended', () => {
        playButton.dataset.playing = 'false';
    }, false);
    // setInterval(()=>{
    //     if(this.dataset.playing==='true'){
    //         volumeControl.value+=0.1
    //     }
    // },1000)
},false)





volumeControl.addEventListener('change', (e)=> {
    console.log(e.target.value)
    // audioElement.volume=e.target.value/100
    // gainNode.gain.value = this.value;
}, false);