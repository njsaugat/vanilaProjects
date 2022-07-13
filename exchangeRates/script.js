const URL=`https://v6.exchangerate-api.com/v6/bd7c6c8a1ef79bb46f0197ad/latest/USD`

const lefts=document.body.querySelectorAll('.left select')
const swap=document.body.querySelector('.btn')
const rights=document.body.querySelectorAll('.right input')
let conversionRates;

const midConversionRate=document.body.querySelector('.mid small')


swap.addEventListener('click',()=>{
    swapValues()
})

function swapValues(){
    let temp=lefts[0].value
    lefts[0].value=lefts[1].value
    lefts[1].value=temp
    convertCurrencies(rights[0].value)

}

rights.forEach(right=>{
    right.addEventListener('input',(e)=>{
        convertCurrencies(e.target.value)
    })
})

async function getExchangeRates(){
    const data=await fetch(URL,{accept:'application/JSON'})
    const currencies=await data.json()
    createCurrencies(Object.keys(currencies.conversion_rates))
    conversionRates= currencies.conversion_rates
    convertCurrencies(rights[0].value)
}

getExchangeRates()

function createCurrencies(currencyAll){
    lefts.forEach((left,upIndex)=>{
        currencyAll.forEach((currency,index)=>{
            left.innerHTML+=`<select>
            <option value="${currency}" ${upIndex===1 && index===105? "selected": " "}>${currency}</option>
          </select>`
          left.addEventListener('change',(e)=>{
            convertCurrencies(rights[0].value)
          })
        })
    })
}


function convertCurrencies(convertValue){
    const convertFrom=lefts[0].value
    const convertTo=lefts[1].value
    const conversionFactor=1/conversionRates[convertFrom]

    
    const conversionRate=conversionRates[convertTo]

    midConversionRate.innerHTML=`
            1 <span class="upperInput">${convertFrom} </span>  
            = 
            ${conversionFactor* conversionRate}<span class="lowerOutput"> ${convertTo}</span>`

    rights[1].value=(convertValue* conversionFactor* conversionRate).toFixed(2)
}


