const URL='https://randomuser.me/api/?results='

const people=document.body.querySelector('.all-people')
const totalEl=document.body.querySelector('.total')

const addUser=document.body.querySelector('.add-user')
const doubleMoney=document.body.querySelector('.double')
const millionaire=document.body.querySelector('.million')
const sortByRichest=document.body.querySelector('.sort')
const entireWealth=document.body.querySelector('.wealthy')


const INITIAL_USERS=3;
let thisTotal=0;

async function getUsers(users){
    const data=await fetch(URL+users,{accept:'application/json'})
    const {results}=await data.json()
    results.forEach(result=>{
        people.innerHTML+=`
        <div class="people">
            <span class="person">${result.name.first} ${result.name.last}</span>
            <span class="wealth">$${randomWealthGenerator()}.00</span>
        </div>
        `    
    })

}

getUsers(INITIAL_USERS)


addUser.addEventListener('click',()=>{
    getUsers(1)
    deleteTotal()
})


doubleMoney.addEventListener('click',()=>{
    const wealths=document.body.querySelectorAll('.people .wealth')
    const wealthsArr=Array.from(wealths)
    
    wealthsArr.map((wealth,index)=>{
        const wealthAmt=getMoneyValue(wealth)
        wealths[index].innerText=`$${wealthAmt*2}.00`    
    })
    deleteTotal()
})


millionaire.addEventListener('click',()=>{
    const peoples=document.body.querySelectorAll('.people')
    const peopleList=Array.from(peoples)

    
    const list= peopleList.filter((people)=>{
        return getMoneyValue(people.childNodes[3])>1000000        
        
    })
    updatePeople(list)
    
})

sortByRichest.addEventListener('click',()=>{
    const peoples=document.body.querySelectorAll('.people')
    const peopleList=Array.from(peoples)
    peopleList.sort((firstEle,secondEle)=>{
        return getMoneyValue(secondEle.childNodes[3])- getMoneyValue(firstEle.childNodes[3])
    })
    
    updatePeople(peopleList)
})


entireWealth.addEventListener('click',()=>{
    totalSum()
    
})

function updatePeople(list){
    people.innerHTML=''
    
    list.forEach(lis=>{
        const person=document.createElement('div')
        person.classList.add('people')
        person.innerHTML+=lis.innerHTML
        people.appendChild(person)
    })
}

function totalSum(){
    const peoples=document.body.querySelectorAll('.people')
    const peopleList=Array.from(peoples)
    const total= peopleList.reduce((accumulator,currWealth,index)=>{
        if(index===1){
            accumulator=+getMoneyValue(accumulator.childNodes[3])
        }
        return accumulator+ (+getMoneyValue(currWealth.childNodes[3]))
    })
    if(thisTotal!==total){
        people.innerHTML+=`
        <div class="total ">
            <span> Total:</span>  
            <span> $${total}.00 </span>
        </div>`
        thisTotal=total
    }
}



function randomWealthGenerator(){
    return Math.floor((Math.random()*1000000)+100000)
}


function getMoneyValue(ele){
    return ele.innerText.slice(1,ele.innerText.length-3)

}

function deleteTotal(){
    const total=document.body.querySelector('.total')
        if(total){
            total.remove()
        }
}
