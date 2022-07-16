const itemName=document.body.querySelector('.item-name input')
const itemPrice=document.body.querySelector('.item-price input')
const addTransaction=document.body.querySelector('.add-tranaction')

const amount=document.body.querySelector('.amount')
const items=document.body.querySelector('.items')

const incomeAmt=document.body.querySelector('.income-amt')
const expenseAmt=document.body.querySelector('.expense-amt')

let expenseTrackerItems=[]
let income=0;
let expense=0;
let index=0;
if(JSON.parse(localStorage.getItem('expenseTrackerItems'))){
    const items=JSON.parse(localStorage.getItem('expenseTrackerItems'))
    items.forEach(item=>{
        createRecord(item.name,item.price,item.id)
        index++
        
        updateIncomeExpenseCreation(+item.price)
        updateBalance(+item.price)
    })
}




addTransaction.addEventListener('click',()=>{
    if(itemName.value && itemPrice.value && checkNumber(itemPrice.value) ){
        const id=randomId()
        createRecord(itemName.value,itemPrice.value,id)
        index++
        
        updateIncomeExpenseCreation(+itemPrice.value)
        updateBalance(+itemPrice.value)
        itemName.value=''
        itemPrice.value=''
        
    }
})



function checkNumber(money){
    return money.match(/^-?\d+\.?\d*$/)
}

function updateIncomeExpenseCreation(money){
    if(money>0){
        income+=money
        incomeAmt.innerText=`$${income}.00`
    }else{
        money=money*(-1);
        expense+=money
        expenseAmt.innerText=`$${expense}.00`
    }
    updateLS()
}

function updateIncomeExpenseDeletion(money){
    if(money>0){
        income-=money
        incomeAmt.innerText=`$${income}.00`

    }else{
        money=money*(-1);
        expense-=money
        expenseAmt.innerText=`$${expense}.00`

    }
    updateLS()
}


function updateBalance(currBalance){
    const dollorAmt=amount.innerText
    const index=dollorAmt.indexOf('$')
    let dollorInt=+ dollorAmt.slice(index+1,dollorAmt.length)
    if(dollorAmt.includes('-')){
        dollorInt=dollorInt*(-1)
    }
    const finalBalance=dollorInt+currBalance
    if(finalBalance<0){
        amount.innerText=`-$${finalBalance*(-1)}.00`
    }else{
        amount.innerText=`$${finalBalance}.00`
    }
}



// function createRecord(name,price,index){
//     if(!items.innerHTML){
//         items.innerHTML+=`      <span>Tracked:</span>
//         <div class="tracked-line"></div>
//   `
//     }
//     const overallItem=document.createElement('div')
//     overallItem.classList.add('overall')
//     overallItem.innerHTML+=` 
//         <button><i class="fa-solid fa-xmark"></i></button>
//         <div class="item">
//           <span class="item-name">${name}</span>
//           <span class="item-amt">${price}</span>
//           <!-- <span class="color-representation"></span> -->
//         </div>`

//     itemDeletion(overallItem,price,index)
//     changeBorder(overallItem,price)
//     items.appendChild(overallItem)
    
//     expenseTrackerItems.push([name,price])
//     updateLS()
// }
function createRecord(name,price,id){
    if(!items.innerHTML){
        items.innerHTML+=`      <span>Tracked:</span>
        <div class="tracked-line"></div>
  `
    }
    
    const overallItem=document.createElement('div')
    overallItem.classList.add('overall')
    overallItem.innerHTML+=` 
        <button onclick="itemDeletion1(${id})"><i class="fa-solid fa-xmark"></i></button>
        <div class="item">
          <span class="item-name">${name}</span>
          <span class="item-amt">${price}</span>
          <!-- <span class="color-representation"></span> -->
        </div>`

    // itemDeletion(overallItem,price,index)
    changeBorder(overallItem,price)
    items.appendChild(overallItem)
    
    expenseTrackerItems.push({id,name,price})
    updateLS()
}

function randomId(){
    return Math.floor(Math.random()*1000000)
}

function itemDeletion1(id){
    const overallItems=document.body.querySelectorAll('.overall')
    expenseTrackerItems=expenseTrackerItems.filter((item,index)=>{
        if(item.id===id){
            updateBalance((+item.price)*(-1))
            updateIncomeExpenseDeletion((+item.price))
            overallItems[index].remove()
        }
        return item.id!==id;
    })
    updateLS()
}

// function itemDeletion(overallItem,price,index){
//     overallItem.childNodes[1].addEventListener('click',()=>{
//         console.log(index)
//         expenseTrackerItems.splice(index, 1)
//         updateLS()
//         decreaseIndex()
//         overallItem.remove()
//         updateBalance((+price)*(-1))
//         updateIncomeExpenseDeletion((+price))
//     })

// }



function decreaseIndex(){
    // const overallItem=document.body.querySelectorAll('.overall')
    // if(index!==0 && index===overallItem.length-1){
    //     index--;
    // }
    index--;
}
function changeBorder(overallItem,price){
    if(+price>0){
        overallItem.childNodes[3].style.borderRight=`10px solid rgb(26, 180, 12)`
    }else if(+price<0){
        overallItem.childNodes[3].style.borderRight=`10px solid red`
    }
}

function updateLS(){
    localStorage.setItem('expenseTrackerItems',JSON.stringify(expenseTrackerItems))
}