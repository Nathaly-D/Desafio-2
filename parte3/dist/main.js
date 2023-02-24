'use strict';
const btn = document.getElementById('btn');

btn.onclick = function (event){
    event.preventDefault() 
    const numero1 = parseInt (document.getElementById('numero1').value);
    const numero2 = parseInt (document.getElementById('numero2').value);
    const numero3 = parseInt ( document.getElementById('numero3').value); 
    
    if (numero1 ===9 && numero2 === 1 && numero3 ===1) {numero3 
        document.getElementById('advertencia').innerHTML= `<p>Password 1 es correcto.</p>`
        
    } else if (numero1 ===7 && numero2 === 1 && numero3 ===4){
        document.getElementById('advertencia').innerHTML= `<p>Password 2 es correcto.</p>`
        
    }else{
        document.getElementById('advertencia').innerHTML= `<p>Contraseña es incorrecta.</p>`

    }
}