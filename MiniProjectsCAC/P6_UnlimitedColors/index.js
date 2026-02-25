let hex = "0123456789ABCDEF"; 
let body = document.querySelector('body');

function randomColorGenerator(){
    let randomCode="#";
    for(let i=0;i<6;i++){
        let randomIndex = Math.floor((Math.random()*16));
        randomCode+=hex[randomIndex];
    }
    return randomCode;
}

function changeColor(){
    body.style.backgroundColor=randomColorGenerator();
}

let interval;
document.querySelector('#start').addEventListener('click',function(){
    if(!interval){
        interval=setInterval(changeColor,1000);
    }
})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(interval);
    interval=null;
})
