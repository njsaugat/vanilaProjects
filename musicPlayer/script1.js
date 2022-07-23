const musicContainer=document.body.querySelector('.container')

const playBtn=document.body.querySelector('.play-pause')
const pause=document.body.querySelector('.fa-pause')
const play=document.body.querySelector('.fa-play')


const prevBtn=document.body.querySelector('.fa-backward')
const nextBtn=document.body.querySelector('.fa-forward')

const audio=document.body.querySelector('audio')
const progress=document.body.querySelector('.progress')

const progressContainer=document.body.querySelector('.popup')
const progressContainers=document.body.querySelector('.progress-container')

const title=document.body.querySelector('.title-song')

const cover=document.body.querySelector('.image')

const songs=['hey','summer','ukulele']

let songsIndex=songs.length-1;

loadSongs(songs[songsIndex])

function loadSongs(song){
    title.innerText=song
    audio.src=`audio/${song}.mp3`
    cover.style.backgroundImage=`url('images/${song}.png')`
}

playBtn.addEventListener('click',()=>{
    const isnotPlaying=play.classList.contains('active')
    
    if(isnotPlaying){
        playSong()
    }else{
        pauseSong()
    }

})

play.classList.add('active')


function pauseSong(){
    pause.classList.remove('active')
    play.classList.add('active')
    progressContainer.classList.remove('active')
    cover.classList.remove('active')

    audio.pause()
}
function playSong(){
    play.classList.remove('active')
    pause.classList.add('active')
    progressContainer.classList.add('active')
    cover.classList.add('active')

    audio.play()
}
 
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

function prevSong(){
    songsIndex--
    if(songsIndex<0){
        songsIndex=songs.length-1        
    }
    loadSongs(songs[songsIndex])
    playSong()
}

function nextSong(){
    songsIndex++;
    if(songsIndex===songs.length){
        songsIndex=0;
    }
    loadSongs(songs[songsIndex])    
    playSong()
}


audio.addEventListener('timeupdate',updateProgress)


progressContainers.addEventListener('click',setProgress)

function updateProgress(e){
    const {duration,currentTime}=e.srcElement;

    progressPercent=(currentTime/duration)* 100;
    progress.style.width=`${progressPercent}%`;
}

function setProgress(e){
    const width=this.clientWidth;
    const clickX=e.offsetX
    console.log(clickX)
    const duration=audio.duration
    audio.currentTime=(clickX/width)*duration
}