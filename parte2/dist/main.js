'use strict';
const btn = document.getElementById('btn');


btn.onclick = function (event) {
    event.preventDefault();
    verificar();
    
}

const verificar=()=>{
    const cantidad1 = parseInt(document.getElementById('sticker1').value);
    const cantidad2 = parseInt(document.getElementById('sticker2').value);
    const cantidad3 = parseInt(document.getElementById('sticker3').value);
    let suma = cantidad1 + cantidad2 + cantidad3;

    console.log(suma);
    if (suma <=10) {
        document.getElementById('advertencia').innerHTML= `<p>Total de compra: ${suma} sticker.</p>`
    } else if (suma >10){
        document.getElementById('advertencia').innerHTML= `<p>!UPS, Lo sentimos¡ <br> Recuerda que son maximo 10 sticker. </p>`
    }
    formulario.reset()
}