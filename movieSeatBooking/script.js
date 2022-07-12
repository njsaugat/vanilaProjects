const hall=document.body.querySelector('.hall')

const pickMovie=document.body.querySelector('.movie-pick select')

const ROWS=10;
const COLUMNS=8;
let selectedMovie=document.body.querySelector('.movie-pick select option[selected]').innerText

const totalSeats=document.body.querySelector('.total-seats')
const totalPrice=document.body.querySelector('.total-price')

const confirmBtn=document.body.querySelector('.btn')

let seatSelected=0;
let initialPrice=0;

let selectedIndex=[]

const occupiedSeats=JSON.parse(localStorage.getItem('occupiedSeats'))
if(occupiedSeats){
    if(occupiedSeats.length){
        selectedIndex=[...occupiedSeats]
    }
}

pickMovie.addEventListener('click',(e)=>{
    selectedMovie=e.target.value
    clearPrice()
})



confirmBtn.addEventListener('click',()=>{
    const seats=document.body.querySelectorAll('.seat')
    seats.forEach((seat,index)=>{
        if(seat.classList.contains('selected')){
            selectedIndex.push(index)
            updateLS()
            location.reload()
        }
    })
})


let prevIndexList=[]
function updateLS(){

    // console.log(selectedIndex, prevIndexList)
    // prevIndexList=[...prevIndexList, ...selectedIndex]
    localStorage.setItem('occupiedSeats',JSON.stringify(selectedIndex))
}

for(let i=0;i<ROWS;i++){
    for(let j=0;j<COLUMNS;j++){
        const seat=document.createElement('div')
        seat.classList.add('seat')
        hall.appendChild(seat)
        if(j===1){
            seat.style.marginRight=`20px`
        }
        if(j===5){
            seat.style.marginRight=`20px`
        }

        // const [x,y]=randomNumGen()
        // const occupiedSeats=JSON.parse(localStorage.getItem('occupiedSeats'))
        if(occupiedSeats){
            if(occupiedSeats.length){
                occupiedSeats.forEach(occupiedSeatIndex=>{
                    const [x,y]=getTwoDimension(occupiedSeatIndex)
                    if(x===i && y===j){
                        console.log(x,y)
                        seat.classList.add('occupied')
                    }
                })
            }
        }
        seat.addEventListener('click',()=>seatClick(seat))
    }
}


function getTwoDimension(index){
    const x=Math.floor((index/COLUMNS));
    const y=COLUMNS-((x+1)*COLUMNS-index);
    return [x,y]

}

function seatClick(seat){
    if(!seat.classList.contains('occupied')){
        if(seat.classList.contains('selected')){
            seat.classList.remove('selected')
            seatSelected--;
        }else{
            seat.classList.add('selected')
            seatSelected++
        }
    }
    changeSeats()
    changePrice()
}

function changeSeats(){
    totalSeats.innerText=seatSelected
}

function clearPrice(){
    totalPrice.innerText=0;
    changePrice()
}

function changePrice(){
    const index=selectedMovie.indexOf('$')
    const unitPrice=selectedMovie.slice(index+1,selectedMovie.length-1)
    const actualPrice=unitPrice*seatSelected
    totalPrice.innerText=actualPrice
}

