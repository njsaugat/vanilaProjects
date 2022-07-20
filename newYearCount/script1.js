const days=document.body.querySelector('.days .num')
const hours=document.body.querySelector('.hours .num')
const minutes=document.body.querySelector('.minutes .num')
const seconds=document.body.querySelector('.seconds .num')
const year=document.body.querySelector('.year')

const monthDays=[31,28,31,30,31,30,31,31,30,31,30,31]

const time=new Date()

const currentYear=time.getFullYear()

const newYearTime=new Date(`January 01 ${currentYear+1} 00:00:00`)
year.innerText=`${time.getFullYear()+1}`






setInterval(()=>{
    const time=new Date()
    const differenceTime=newYearTime-time//in ms

    const day=Math.floor(differenceTime/1000/60/60/24)
    const hour=Math.floor(differenceTime/1000/60/60)%24
    const minute=Math.floor(differenceTime/1000/60)%60
    const second=Math.floor(differenceTime/1000)%60

    seconds.innerText=checker(second)


    minutes.innerText=checker(minute)
    hours.innerText=checker(hour)



    days.innerText=checker(day) 
},100)


 

function checker(value){
    return value<10? `0${value}`:value
}