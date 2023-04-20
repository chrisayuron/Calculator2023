const num1=document.getElementById('num1')
const num2=document.getElementById('num2')
const operando=document.getElementById('operando')
const display=document.getElementById('display')

const botones=document.querySelector('.calculadora__botones')

botones.addEventListener('click',(e)=>{
    switch(e.target.id){
        case 'suma': operando.textContent="+"
                     break;
        case 'rest': operando.textContent="-"
                     break;
        case 'mult': operando.textContent="*"
                     break;
        case 'divi': operando.textContent="/"
                     break;
    }
  
    if(e.target.id=='igual'){
        if(!(isNaN(num1.value)) && !(isNaN(num2.value))){
            if(operando.textContent=="+"){
                resultado=+num1.value + +num2.value
                display.textContent= resultado
            }else if(operando.textContent=="-"){
                resultado=+num1.value - +num2.value
                display.textContent= resultado
            }else if(operando.textContent=="*"){
                resultado=+num1.value * +num2.value
                display.textContent= resultado
            }else if(operando.textContent=="/"){
                    resultado=+num1.value  / +num2.value
                    display.textContent= resultado
        }
    }
}
           
    
})