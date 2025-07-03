const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
const random=document.querySelector(".randomdiv button")
let rgb=document.querySelector(".randomrgb")

buttons.forEach((button) => {
    button.addEventListener('click', function(e){
       
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='black'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='red'){
            body.style.backgroundColor="rgb(164, 6, 6)";
        }
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;
        }
    })
})

function randomColorGenerator(){
    const red=Math.floor(Math.random() * 175);
    const green=Math.floor(Math.random() * 175);
    const blue=Math.floor(Math.random() * 175);
    const randomColor=`rgb(${red},${green},${blue})`
    return randomColor;
}

random.addEventListener('click',function(){
    const newColor=randomColorGenerator()
    body.style.backgroundColor=newColor
    rgb.textContent=newColor
})