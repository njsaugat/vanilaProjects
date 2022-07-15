const mealSearch=document.body.querySelector('.input-search form input')
const search=document.body.querySelector('form')
const searchContent=document.body.querySelector('.search-content')
const SEARCH_MEAL_URL='https://www.themealdb.com/api/json/v1/1/search.php?s='
const RANDOM_MEAL_URL='https://www.themealdb.com/api/json/v1/1/random.php'
const searchResults=document.body.querySelector('.search-results')
const recipeContent=document.body.querySelector('.content')
const randomMeal=document.body.querySelector('.random-meal')
let searchTerm=''

mealSearch.focus()

search.addEventListener('submit',(e)=>{
    e.preventDefault()
    searchResults.innerHTML=''
    searchTerm=mealSearch.value
    mealSearch.value=''
    searchContent.classList.add('active')
    recipeContent.innerHTML=''
    getMeals(searchTerm.trim())
})


randomMeal.addEventListener('click',async()=>{
  const data=await fetch(RANDOM_MEAL_URL,{accept:'application/json'})
  const {meals}=await data.json()
  recipeContent.innerHTML=''
  const searchImages=document.body.querySelector('.search-results')
  if(searchImages){
    searchImages.innerHTML=''
  }
  searchContent.classList.add('active')
  createEntireRecipe(meals[0])
})

async function getMeals(mealSearch){
    const data=await fetch(SEARCH_MEAL_URL+mealSearch,{accept:'application/json'})
    const {meals}=await data.json()
    createTitle()
    createImages()
    meals.forEach((meal)=>{
        showMeal(meal)
    })
}


function createTitle(){
    const h2=document.createElement('h2')
    h2.innerText=`Search results for '${searchTerm}':`
    searchResults.appendChild(h2)
}

function createImages(){
    const searchImages=document.createElement('div')
    searchImages.classList.add('search-images')
    searchResults.appendChild(searchImages)

}
function showMeal(meal){
    const searchImages=document.body.querySelector('.search-images')
    
    const searchImage=createSearchImage(meal.strMealThumb,meal.strMeal)
    
    searchImage.addEventListener('mouseenter',()=>{
      searchImage.style.backgroundSize=`${centreImage(searchImage)}px`
        searchImage.firstChild.classList.add('active')

        searchImage.addEventListener('mouseleave',()=>{
            setTimeout(()=>{
              searchImage.style.backgroundSize=`cover`

              searchImage.firstChild.classList.remove('active')
            },20)
        })
    })

    searchImage.addEventListener('click',()=>{
      createEntireRecipe(meal)
    })
    searchImages.appendChild(searchImage)
    
    
}

function centreImage(searchImage){
  const imageSize=window.getComputedStyle(searchImage).getPropertyValue('width')
  const imgSize=(+imageSize.slice(0,imageSize.length-2))*(1.2)
  return imgSize 

}

function createSearchImage(mealThumbnail,mealName){
  const searchImage=document.createElement('div')
  searchImage.classList.add('image','search-image')
  searchImage.style.backgroundImage=`url('${mealThumbnail}')`
  searchImage.innerHTML=`<span class="hover-find-meal">${mealName}</span> </div>`
  return searchImage
}

let value=1
function createEntireRecipe(meal){
    recipeContent.innerHTML=''
    recipeContent.innerHTML+=
    `
      <h1>${meal.strMeal}</h1>
      <div class="image" style="background-image:url('${meal.strMealThumb}')"></div>
      <div class="highlights">
        <span class="food-type">${meal.strCategory}</span>
        <span class="food-country">${meal.strArea}</span>
      </div>
      <div class="cooking-description">${meal.strInstructions}</div>
      <h2>Ingredients</h2>
      
      
      
    
    `
    callIngredientsGenerator(meal)
}


function callIngredientsGenerator(meal){
  // const strIngredient="strIngredient"+(value++)

  let ingredientsList=document.createElement('div')
  ingredientsList.classList.add('ingredients')
  for(let i=1;i<=20;i++){
    const strIngredient="strIngredient"+i
    const strMeasure="strMeasure"+i
    if(meal[strIngredient]){
      ingredientsList.innerHTML+=`<span>${meal[strIngredient]} -- ${meal[strMeasure]}</span>`
    }else{
      break;
    }

  }
  recipeContent.appendChild(ingredientsList)
  // return ingredientsList
}

