const formControl=document.body.querySelector('.form-control')
const inputSearch=document.body.querySelector('.form-control input')
const API_URL='https://api.lyrics.ovh'
const songs=document.body.querySelector('.songs')
const spin=document.body.querySelector('.fa-pulse')
const container=document.body.querySelector('.container')
const more=document.body.querySelector('.more')
formControl.addEventListener('submit',(e)=>{
    e.preventDefault()
    songs.innerHTML='<i class="fas fa-spinner fa-pulse active"></i>'
    container.classList.add('inactive')
    getLyrics(inputSearch.value)
    inputSearch.value=''
})


async function getLyrics(artistOrTitle){
    // blurrLoad()
    // spin.classList.add('active')
    const data=await fetch(`${API_URL}/suggest/${artistOrTitle}`,{accept:'application/JSON'})
    // const data=await fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search&q=${artistOrTitle}`,{accept:'application/JSON'})
    const results=await data.json()
    createLyrics(results)
}

function createLyrics(results){
    const matchSongs=results.data
    // removeBlurLoad()
    songs.innerHTML='<i class="fas fa-spinner fa-pulse "></i>'
    // spin.classList.remove('active')
    matchSongs.forEach(matchSong=>{
        const name=matchSong.artist.name
        const title=matchSong.title
        songs.innerHTML+=`      
        <div class="song">
            <div class="song-title">
            <span class="title">${matchSong.artist.name}-</span>
            <span class="lyrics-hint">${matchSong.title}</span>
            </div>
            <div class="get-lyrics">
            <!-- <a href="#">Get Lyrics</a> -->
            <button class="btn find-lyrics" onclick="generateLyrics( '${name}','${title}' ,'${matchSong.link}' )"> Get Lyrics </button>
            </div>
        </div>
        `
    })
    const more=document.createElement('div')
    more.classList.add('more')
    songs.appendChild(more)
    // console.log(nextURL)
    if(results.prev || results.next){
        more.innerHTML=`
            ${results.prev ? `<button class="btn find-lyrics"  onclick=getMoreSongs('${results.prev}')>Prev</button>`:''}
            ${results.next ? `<button class="btn find-lyrics" onclick=getMoreSongs('${results.next}')>Next</button>`:''}
        `
    }else{
        more.innerHTML=''
    }


}

async function getMoreSongs(url){
    songs.innerHTML='<i class="fas fa-spinner fa-pulse active"></i>'
    const data=await fetch(`https://cors-anywhere.herokuapp.com/${url}`,{accept:'application/JSON'})
    const results=await data.json()
    createLyrics(results)
}



async function generateLyrics(artist,title,link){
    // blurLoad()
    songs.innerHTML='<i class="fas fa-spinner fa-pulse active"></i>'
    const data=await fetch(`${API_URL}/v1/${artist}/${title}`,{accept:'application/JSON'})
    const results=await data.json()
    addLyrics(results.lyrics,title,link)

}

function addLyrics(lyrics,title,link){
    // removeBlurLoad
    spin.classList.remove('active')
    songs.innerHTML=`
    --<a href="${link}" target="_blank">${title}</a>--
    <pre>${lyrics}</pre>`

    // console.log(lyrics)
}