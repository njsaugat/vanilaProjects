# vanilaProjects

       e.preventDefault()--> to prevent default

https://vanila-projects-deployed.vercel.app/	









M

.container>div{
One of the ways to select all the child elements in a div.
Two approaches for creating trapezium:
width: 100%;
   height:100px;
   background: azure;
   transform: perspective(10px) rotateX(179.2deg);
   box-shadow: 0px -3px 15px white;
   /* alternative approach: */
   /* border-top: 100px solid azure;
   border-left: 15px solid rgb(30, 29, 36);
   border-right: 15px solid rgb(30, 29, 36);*/
   cursor:default;
 For cursor to be brought in the original shape

Previous seats are booked and stored in the local storage.











Way to add linear gradient even in the text: 
background-image: linear-gradient(45deg, rgb(36, 182, 133), aquamarine);
   background-size: 100%;
   -webkit-background-clip: text;
   -moz-background-clip: text;
   -webkit-text-fill-color: transparent;
   -moz-text-fill-color: transparent;


Although nodeList is like an array and we can use forEach on nodeList, we can’t use array methods on nodeList like map, filter, reduce.
For that we have to conver the nodeList into an Aray,

   console.log(Array.from(wealths))
   console.log(Array.isArray(wealths))
First is to convert nodeList into an array using from API.
Then we check .isArray(wealths)--> to check whether it’s array or not

In filter like we write the condition directly that we would write using if statement.
That means from the original array we would get the filtered array and in the filtered array every element would satisfy the filtering condition.

 


var sortedArray = array.sort(function(a, b) { return b[0] - a[0]; });


To sort an array of array we use this above method.
First element is a is point to the first stuff in the array while b is pointing to the second element. Thus while sorting we have to be careful.

This JS project took such a long time to develop.
Rather than just developing this habit of going and directly writing down the code, we must first kinda analyze what the problem is and only then should we proceed further.
In function as known before we could also pass default value.

Once we get the data from the API, we should kinda store it in a object so that we can change on that object only and thus we dont have to kinda update the DOM again and again.
SO the main idea is to have everything in the one central global object kind of idea.













This project didn’t teach much stuff about JS but it did teach alot of the stuff about CSS.
So this project is kind of a CSS heavy project.


Try setting minimum-scale=1 instead of maximum-scale=1.
minimum-scale controls how far out the user can zoom, while maximum-scale controls how far in they can zoom. To prevent viewing of the overflow you need to limit the user's ability to zoom out, not in.

This is how scrolling is turned in mobile devices.


To stretch the bg color to entire page we use this code:
   background-attachment: fixed;    

While sending search, always kinda trim stuff:

searchTerm.trim()






The way to hold our data is really important.
In this project what was done was like an api data was stored.
And whenever we want to remove sth we would like take the id from the  click event 
And based on that id we would check with every element
Based on that we want to kind of use the fileter array method to filter our and keep only those elements whose id doesn’t equal the one that is selected.
So this was an important lesson learnt.
Also keep in mind the data structure and the way to hold the data is very important
I wouldn’t have been wrong had I stored the entire stuff in a json like format

Rather than using childNodes always kinda use onClick event on that object itself.
This would make it easier to handle that object itself
While creating the object itself we pass the id
SO that while deleting we could compare the stuff.

Even inside the template literals we add the id in this way
itemDeletion1(${id})
















   margin: auto;
This is the margin auto it could do wonderful stuff.
This is a CSS heavy project where we kind of use more CSS.
But the interesting takeaway is that we will be using the gradient-scale to like color stuff.

How to write code efficiently?
I guess for that we need to study Design Patterns

This is kind of different from linear gradient that we do:
   background:conic-gradient(
       #55b7a4 0%,
       #4ca493 40%,
       #fff 40%,
       #fff 60%,
       #336d62 60%,
       #2a5b52 100%
   );
   animation:name duration timing-function delay iteration-count direction fill-mode

Animation:name duration timing-function delay iteration-count direction fill-mode

 This is kinda resonating with the testimonials project that we did earlier 

Here the time delay for the animation has to match up with the set-interval kind of stuff in the javascript taht we define.
















This project was daunting in a sense it took alot of time and efforts to build and also taught about how to handle js properly and refactoring the code wherever needed.




























Taught me to use the Api:
https://medium.com/@umeramalek796/lyrics-ovh-api-with-javascript-cff720a8ed85	

onclick="generateLyrics( '${name}','${title}' )"

Always kinda add the single quotes in the parameter so that it gets passed well


One way to prevent CORS attack.
https://cors-anywhere.herokuapp.com/${url}




We get CORS attack in this app so we resolved it using the heroku element.









While doing the countdown stuff always use the milliseconds approach and not the days approach where we define the array. My way of doing it wont work if like there would have been a leap year.
So, have to take care of that.

In the URL we use ?_limit to set the limit in the fetching stuff from the database.
Question mark is there if like this query is the first query in the URL


if(window.scrollY>navigation.offsetHeight+150){
       navigation.classList.add('active')
   }else{
       navigation.classList.remove('active')
   }

getClientBoundRect()
window.innerHeight
window.scrollY
navigation.offsetHeight===document.body.offsetHeight

These are the stuffs 


window.onscroll = function(ev) {
   if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
     // you're at the bottom of the page
     console.log("Bottom of page");
   }
};



       setTimeout((posts)=>createBlog(posts),5000)

This is done when like we want to pass the values
From one function to other because in setTimeout we can only pass reference of a function not an actual function.
But when we only want to pass the reference we just pass the function/.

To kind of make a function to run only once we have to implement the concept of locks.
The concept of locks and this concept of making things only work once with the help of locks is kind of very useful concept in general.

After knowing about clamp I always kinda use clamp. It uses min-width preferred and max-width.

This concept from my OS class really saved my day here:
   if ((Math.ceil(window.innerHeight + window.scrollY) >= (document.body.scrollHeight)) && lock){
       lock=false
 With the help of locks

https://stackoverflow.com/questions/22675126/what-is-offsetheight-clientheight-scrollheight	
scrollTop+clientHeight>=scrollHeight-5 


We could have used this also to kind of like fetch and bring the loader at the bottom



omdb










https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API

For the AUDIO API that is being used on the current project.

audio.addEventListener('timeupdate',updateProgress)
A new event listener for the time.


In the case of manipulating index and stuff always think about what next and prev should do.
Only after thinking through that we should decide to handle edge case.
If not done well this index itself could lead into a lot of mess around the code.


One stuff about realization whenever we pass any callback function to any event listeners then the event parameter is automatically sent to the callback funciton as a part of the function itself as a parameter.

Updating the progress as the audio is playing.

function updateProgress(e){
   const {duration,currentTime}=e.srcElement;

   progressPercent=(currentTime/duration)* 100;
   progress.style.width=`${progressPercent}%`;
}


Click anywhere and the song starts playing from there;
function setProgress(){
   const width=this.clientWidth;
   const clickX=e.offsetX
   const duration=audio.duration
   audio.currentTime=(clickX/width)*duration
}

In such type of custom making the progress bar we should not use input range but rather use the custom way of starting the div and stuff.

<div class="progress-container" id="progress-container">





         <div class="progress" id="progress"></div>


       </div>
















https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs	

https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/	
For the customized range maker


In a project where we have a lot of event listeners first we need to define all of them and kind of get the entire about what should happen when we click on the certain button/

Class name is defined only once using html.

Just like the audio api we have the video api which is used in the project


   progress.value=(video.currentTime/video.duration)*100
The most important math stuff in these type of time related programs

public class MyClass {
    public static void main(String args[]) {
        String primeStr="";
        for(int n=2;n<10000;n++){
            for(int i=2;i<n;i++){
                if(n%i==0){
                    break;
                }
            }
            primeStr+=String.valueOf(n);
            

        }
        System.out.println(primeStr);
    }

}







A project that was done in half an hour or so
Just played with the video api.










If we are invoking a function from above and the related let variable is defined below then the declaration of the variable has to be at the top level

To make sth draggable in html itself we have to add this stuff:
       <div class="fill" draggable="true"></div>

To make something draggable in HTML always add draggable=”true”
Make draggable true;


Dragstart to start the dragging mode.
Dragenter is triggered when the draggable stuff enters in other div.

Dragover is fired when we are constantly dragging the stuff

Drag leave is fired when we let go off the item we are dragging.

Drop is fired when we also kind of leave it
Leave is where we just leave it
But then drop is where it will be placed and stuff.

Start-enter-over-leave


The thing with such draggable stuff we always kind of use this keyword
The reason for that is so that the respective element can be selected using the this keyword.

The closest() method in JavaScript is used to retrieve the closest ancestor, or parent of the element matches the selectors. If there is no ancestor found, the method returns null.

The closest method could be very helpful in finding out the parent/ancestores of any nodes.

To find out sibling of any node in js
We use previousElementSibling or nextElementSibling

   console.log(this.previousElementSibling.innerText)



Also querySelector could be used anywhere in the code also along with the this keyword.

 const dragEndIndex=this.querySelector('.rank').innerText



Drag start is when we are starting to drag.
It should be on the dragging stuff
Drag enter is when the item enters other territory 
So prolly used in the parent area and stuff.
Drag Over is only used to prevent defalut

Drag drop is most important
The code of drag leave is also kind of similar to drag drop
Here after dropping we remove the ceratin class.

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

The last part was kind of confusing for me to grasp.




























When to use img tag vs when to use background image 
It's a black and white decision to me. If the image is part of the content such as a logo or diagram or person (real person, not stock photo people) then use the <img /> tag plus alt attribute. For everything else there's CSS background images.

If image is part of the content use the img tag.

The last part was kind of confusing for me to grasp.

.item:hover .caption{
   background-image: var(--hoverColor)
}

This type of hover are used when we want to change the background color when we hover on the parent element.


To add an overlay using js create another class alongside the og class and then alongside there add teh overlay using the after:: tag.

.container.active::after{
   content: "";
   width: 100%;
   height: 100%;
   position: absolute;
   z-index: 3;
   background-color: rgba(49, 49, 49, 0.515);
}

Clamp, overlay are kind useful
Overlay can be added using the above method;

   width: clamp(300px,500px,90vw);
This is very important.
The max-width means that width can’t be more than 90vw which is what we expect here.
Like we want the width to be only 90vw. Then the 300px is the min width.
The width can’t be less than 300px




















The best way to use clamp so that it easily fits in the small mobile devices:
   width: clamp(350px,35em,95vw);

Generally for a nice linear gradient we use plum and purple or rebeccapurple

https://alvarotrigo.com/blog/css-text-animations/	
Nice link for text animation

.word.animated{
   /* color:rgb(249, 127, 127); */
   transform-origin: top;
   animation: moveAround 1s  linear;

}


@keyframes moveAround{
   0%,50%,100%{
       transform: translateX(0%) rotate(0deg);
   }
   25%{
       transform: translateX(-10%) rotate(10deg);
   }
   75%{
       transform: translateX(10%)  rotate(-10deg);
      
   }

}

The way for creating a pendulum type animation on a word.

This is the way to get the selected item in select tag with options elements.
function timeBasedOnDifficulty(){
   const difficulty=playMode.options[playMode.selectedIndex].text
   console.log(difficulty)
}

Here the select tag has the class playMode and the way we select is mentioned above.
https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript	











Hangman:
Kasaile kehi vanna ni paena vane ta ani ma human vako value vaena ni
We need that interaction to proceed further.

function foo(event) { app.addSpot(event.clientX,event.clientY); app.addFlag = 1; } area.addEventListener('click',foo,true); area.removeEventListener('click',foo,true);
https://stackoverflow.com/questions/10444077/javascript-removeeventlistener-not-working

Removing the events so that we could create the best hangman game possible





























