const video=document.body.querySelector('.screen')
const play=document.body.querySelector('.play')
const stop=document.body.querySelector('.stop')
const progress=document.body.querySelector('.progress')
const timestamp=document.body.querySelector('.timestamp')

function toggleVideoStatus(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

function updatePlayIcon(){
    if(video.paused){
        play.innerHTML=`<i class="fa fa-play fa-2x"></i>`
    }else{
        play.innerHTML=`<i class="fa fa-pause fa-2x"></i>`
    }
}

function updateProgress(){
    progress.value=(video.currentTime/video.duration)*100
    let mins=Math.floor(video.currentTime/60)
    mins=mins<10 ? `0${mins}`:`${mins}`
    let seconds=Math.floor(video.currentTime%60)
    seconds=seconds<10 ?`0${seconds}`:`${seconds}`
    console.log(mins,seconds)
    timestamp.innerText=`${mins}:${seconds}`
}

function setVideoProgress(e){
    video.currentTime=(+progress.value * video.duration)/100
}
function stopVideo(){
    video.currentTime=0;
    video.pause()
}


video.addEventListener('click',toggleVideoStatus)
video.addEventListener('pause',updatePlayIcon)
video.addEventListener('play',updatePlayIcon)
video.addEventListener('timeupdate',updateProgress)

play.addEventListener('click',toggleVideoStatus)

stop.addEventListener('click',stopVideo)

progress.addEventListener('input',setVideoProgress)
