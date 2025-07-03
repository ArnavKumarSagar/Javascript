const form=document.querySelector('form')
let res=document.querySelector('.result')
function bmi(h,w){
    let bmi= (w)*10000/(h^2)
    return bmi;
}
form.addEventListener('submit',function(e){
    e.preventDefault()
    
    const height=parseInt(document.querySelector('.height').value)
    const weight=parseInt(document.querySelector('.weight').value)
    let bm=bmi(height,weight).toFixed(2);
    if(res.innerHTMl<18.5){
        res.innerHTML=`underweight ${bm}`
    }
        if(bm>18.5 && bm<=24.9){
        res.innerHTML=`normal ${bm}`
    }
        if(bm>=25 && bm<=29.9){
        res.innerHTML=`overweight ${bm}`
    }
            if(bm>=30){
        res.innerHTML=`obesity ${bm}`
    }

    if(height===' ' || height<0 || isNaN(height)){
        res.innerHTML='Please give valid height'
    }
    if(weight===' ' || weight<0 || isNaN(weight)){
        res.innerHTML='Please give valid weight'
    }

})