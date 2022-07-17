const outsideCircle=document.body.querySelector('.outside-circle')
let xOffset=0
let yOffset=0
let interval;

interval=setInterval(()=>{
    if(xOffset<360){
        revolveCircle(10,5)
    }else{
        setInterval(()=>{
            clearInterval(interval)
            revolveCircle(-10,5)
        },100)
    }
},100)


function revolveCircle(xoffsetVal,yoffsetVal){
    outsideCircle.style.transform=`translate(${xOffset+=xoffsetVal}px,${yOffset}px)`
    setTimeout(()=>{
        outsideCircle.style.transform=`translate(${xOffset}px,${yOffset+=yoffsetVal}px)`
    })
}
// if(xOffset<360){
//     interval=setInterval(()=>{
//         console.log('here')
//         outsideCircle.style.transform=`translate(${xOffset+=10}px,${yOffset}px)`
//         setTimeout(()=>{
//             outsideCircle.style.transform=`translate(${xOffset}px,${yOffset+=5}px)`
//         })
//         },100)
// }
// else if(interval>=360){
//     clearInterval(interval)
//     interval=setInterval(()=>{
//         console.log('here not')
//         outsideCircle.style.transform=`translate(${xOffset-=10}px,${yOffset}px)`
//         setTimeout(()=>{
//             outsideCircle.style.transform=`translate(${xOffset}px,${yOffset-=5}px)`
    
//         })
//     },100)
// }  
    
