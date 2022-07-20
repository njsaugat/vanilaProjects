const days=document.body.querySelector('.days .num')
const hours=document.body.querySelector('.hours .num')
const minutes=document.body.querySelector('.minutes .num')
const seconds=document.body.querySelector('.seconds .num')
const year=document.body.querySelector('.year')

const monthDays=[31,28,31,30,31,30,31,31,30,31,30,31]

const time=new Date()
year.innerText=`${time.getFullYear()+1}`




// console.log(monthDays[currMonth]-currDate)
// console.log(totalRemainingDays)
const TOTAlHOURS=24;
const TOTALMINUTES=60
const TOTALSECONDS=60;


setInterval(()=>{
    const time=new Date()
    seconds.innerText=checker(TOTALSECONDS-time.getSeconds()-1)

    const currHours=time.getHours()
    const currMinute=time.getMinutes()
    hours.innerText=checker(TOTAlHOURS-currHours-1)
    minutes.innerText=checker(TOTALMINUTES-currMinute-1)


    const remainingDays=getRemainingDays(time)
    days.innerText=checker(remainingDays)
},100)


function getRemainingDays(time){
    const currMonth=time.getMonth()
    const currDate=time.getDate()
    const sumArr=monthDays.filter((monthDay,index)=>index>currMonth)
    const otherMonthsDays=sumArr.reduce((total,value)=>total+=value,0)
    const currentMonthDays=monthDays[currMonth]-currDate
    const totalRemainingDays=otherMonthsDays+currentMonthDays
    return totalRemainingDays
}

function checker(value){
    return value<10? `0${value}`:value
}