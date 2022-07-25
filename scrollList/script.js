const people = document.body.querySelector(".people");
const check = document.body.querySelector(".btn");

const TOTAL_PEOPLE = 10;

let strValue='';

var alreadyDone=[]
let dragStartIndex;
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
    <div class="right-drag" draggable="true">
      <div class="name">${randomValueFromArray(richPeople)}</div>
      <div class="dashes">
        <i class="fa fa-minus"></i>
        <i class="fa fa-minus"></i>
      </div>
    </div>
    </div>
    `;

    addEventListeners()
}

function addEventListeners(){
  const draggables=document.body.querySelectorAll('.right-drag ')
  const draggableItems=document.body.querySelectorAll('.person')
  draggables.forEach(draggable=>{
      draggable.addEventListener('dragstart',dragStart)
  })

  draggableItems.forEach(draggableItem=>{
    draggableItem.addEventListener('dragend',dragEnd)
    draggableItem.addEventListener('dragover',dragOver)
    draggableItem.addEventListener('dragenter',dragEnter)
    draggableItem.addEventListener('dragleave',dragLeave)
    draggableItem.addEventListener('drop',dragDrop)

  })
}


function dragStart(){  
    // dragStartIndex=this.closest('.person').getAttribute('rank')
    // console.log(this.closest('.rank'))
    dragStartIndex=(+this.previousElementSibling.innerText)-1
    // console.log(dragStartIndex)
  }
function dragEnter(){
  this.classList.add('over')
}

function dragEnd(){
  // ele.classList.remove('drag')
}
function dragLeave(){
  this.classList.remove('over')
}
function dragOver(e){
  e.preventDefault()
}


function dragDrop(){
  const dragEndIndex=(+this.querySelector('.rank').innerText) -1
  // console.log(dragEndIndex)
  // console.log(this.querySelector('.rank'))
  swapItems(dragStartIndex,dragEndIndex)
  this.classList.remove('over')
}


function swapItems(fromIndex,toIndex){
  const draggableItems=document.body.querySelectorAll('.person')
  const itemOne=draggableItems[fromIndex].querySelector('.right-drag')
  const itemTwo=draggableItems[toIndex].querySelector('.right-drag')

  draggableItems[fromIndex].appendChild(itemTwo)
  draggableItems[toIndex].appendChild(itemOne)
}

check.addEventListener('click',()=>{
  const draggableItems=document.body.querySelectorAll('.right-drag .name')
  console.log(draggableItems)
  // draggableItems.forEach((item,index)=>{
  //   const rank=(+item.querySelector('.rank').innerText)-1
  //   if(rank===)
  // })
  richPeople.forEach((rich,index)=>{
    const person=draggableItems[index].innerText
    if(rich.trim().toLowerCase() === person.trim().toLowerCase()){
      // removeAllClass('correct')
      draggableItems[index].classList.remove('incorrect')
      draggableItems[index].classList.add('correct')
    }else{
      // removeAllClass('incorrect')      
      draggableItems[index].classList.add('incorrect')      
    }
   
  })
})
