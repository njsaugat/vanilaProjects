const people = document.body.querySelector(".people");

const TOTAL_PEOPLE = 10;

let strValue='';

var alreadyDone=[]
const richPeople = [
  "Elon Musk",
  "Jeff Bezos",
  "Bernard Arnault",
  "Bill Gates",
  "Warren Buffett",
  "Larry Page",
  "Sergey Brin",
  "Gautam Adani",
  "Mukesh Ambani",
  " Steve Ballmer",
];

// Function picking random values from array
const randomValueFromArray = (myArray) => {
    // If alreadyDone is empty then fill it will indexes equal
    // to the size of myArray
    if (alreadyDone.length === 0) {
      for (var i = 0; i < myArray.length; i++) alreadyDone.push(i);
    }
  
    // Generate random number within the range of 
    // length of alreadyDone array
    var randomValueIndex = Math.floor(Math.random() * alreadyDone.length);
    
    // Getting unaccessed index of myArray using above 
    // random number
    var indexOfItemInMyArray = alreadyDone[randomValueIndex];
  
    // remove this index from alreadyDone array because
    // we are accessing it now.
    alreadyDone.splice(randomValueIndex, 1);
  
    // Get the value
    return myArray[indexOfItemInMyArray];
  };


for (let i = 0; i < TOTAL_PEOPLE; i++) {
    // let chooser=randomNoRepeats(richPeople)
  people.innerHTML += `
    <div class="person">
    <div class="rank">${i+1}</div>
    <div class="right-drag">
      <div class="name">${randomValueFromArray(richPeople)}</div>
      <div class="dashes">
        <i class="fa fa-minus"></i>
        <i class="fa fa-minus"></i>
      </div>
    </div>
    </div>
    `;
}


const rightDrags=document.body.querySelectorAll('.right-drag .dashes')

rightDrags.forEach(rightDrag=>{
    rightDrag.addEventListener('dragstart',()=>{
        rightDrag.parentElement.classList.add('drag')
    })
})


  


// // Approach that only works when we have less than 10 elements in array
// // because we are using string, after 9 the digits repeat 
// function getRandomIndex(){
//     return Math.floor(Math.random()*TOTAL_PEOPLE)
// }

// function getUniqueElement(){
//     console.log(strValue)
//     let randomValue=getRandomIndex().toString()
//     console.log(strValue)
//     if(!strValue.includes(randomValue)){
//         strValue+=`${randomValue}`
//         return +randomValue
//     }else{
//         // randomValue=getRandomIndex()
//         getUniqueElement()
//     }

    
// }