const num1=document.getElementById('num1')
const num2=document.getElementById('num2')
const operando=document.getElementById('operando')
const display=document.getElementById('display')

for(i=0;i<=9;i++){
    document.getElementById('btn'+i).addEventListener('click',()=>{
        console.log(e.target.value)
    })
}

const botones=document.querySelector('.calculadora__botones')
window.addEventListener('keydown',(e)=>{
    console.log(e.key)
    if(!isNaN(e.key)){
        mostrar(e.key)
       
    }else if(e.key=='Backspace'){
        let texto=Array.from(display.textContent)
        console.log(typeof(texto))
        texto.pop()
        texto=texto.join('')
        display.textContent=texto
    }
})

botones.addEventListener('click',(e)=>{
    
})

function mostrar(tecla){
    display.textContent+=tecla
}



// botones.addEventListener('click',(e)=>{
//     switch(e.target.id){
//         case 'suma': operando.textContent="+"
//                      num2.value=num1.value
//                      num1.value='' 
//                      break;
                     
//         case 'rest': operando.textContent="-"
//         num2.value=num1.value   
//         num1.value=''
//                      break;
//         case 'mult': operando.textContent="*"
//         num2.value=num1.value   
//         num1.value=''
//                      break;
//         case 'divi': operando.textContent="/"
//         num2.value=num1.value   
//         num1.value=''
//                      break;
//         case 'limpiar':
//             num1.value=null
//             num2.value=null
//             operando.textContent=''
//             display.textContent=''
//     }
  
//     if(e.target.id=='igual'){
//         if(!(isNaN(num1.value)) && !(isNaN(num2.value))){
//             if(operando.textContent=="+"){
//                 resultado=+num2.value + +num1.value
//                 display.textContent= resultado
//             }else if(operando.textContent=="-"){
//                 resultado=+num2.value - +num1.value
//                 display.textContent= resultado
//             }else if(operando.textContent=="*"){
//                 resultado=+num2.value * +num1.value
//                 display.textContent= resultado
//             }else if(operando.textContent=="/"){
//                     resultado=+num2.value  / +num1.value
//                     display.textContent= resultado
//         }
//     }
// }
           
    
// })