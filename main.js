const botones=document.querySelector('.calculadora__botones')
const display=document.getElementById('display')
let num1=null
let operador=null

for (let i = 0; i <= 9; i++) { 
    //creo un evento click para cada boton numérico
    document.getElementById(`btn${i}`).addEventListener('click', (e)=>{
        mostrarTecla(e.target.value)
    }); 
}
window.addEventListener('keydown',(e)=>{
    //creo un evento para escuchar la pulsación de las teclas
    if(!isNaN(e.key) || (e.key=='.')){
        mostrarTecla(e.key)
    }else if(e.key=='Backspace'){
        let texto=Array.from(display.textContent)
        console.log(typeof(texto))
        texto.pop()
        texto=texto.join('')
        display.textContent=texto
    }else if (e.key=='Enter'){
        mostrarResultado(num1,operador)
    }else if(e.key=='Escape'){
        limpiarDisplay()
    }else if(e.key=='+' || e.key=='-' || e.key=='*' || e.key=='/'){
        num1=+display.textContent
        operador=e.key
        display.textContent=0
    }
})   

function mostrarTecla(tecla){
    if (display.textContent==0){
        display.textContent=tecla
    }else if(tecla=='.' && display.textContent.includes('.')){
        return
    }else{
        display.textContent+=tecla
    }  
}

function limpiarDisplay(){
    display.textContent=0
}

function mostrarResultado(numAnt,ope){
    console.log(ope)
    console.log(numAnt)
    if(ope=='+'){
        display.textContent=numAnt + +display.textContent
    }else if (ope=='-'){
        display.textContent=numAnt - +display.textContent
    }else if(ope=='*'){
        display.textContent=numAnt * +display.textContent
    }else if(ope=='/'){
        display.textContent=numAnt / +display.textContent
    }
}

botones.addEventListener('click',(e)=>{
    if(e.target.id=='limpiar'){
            limpiarDisplay()
    }else if(e.target.id=='clear'){
        limpiarDisplay()           
    }else if (e.target.id=='igual'){
      mostrarResultado(num1,operador)
    }else if(e.target.id=='+' || e.target.id=='-' || e.target.id=='*' || e.target.id=='/'){
        num1=+display.textContent
        operador=e.target.id
        display.textContent=0
    }
})