'use strict';
const imagen = document.getElementById('imagen');

imagen.onclick=()=>{
    if(imagen.classList.contains('bordeOculto')){
        imagen.classList.remove('bordeOculto');
        imagen.classList.add('bordeA');
    } else if(imagen.classList.contains('bordeA')){
        imagen.classList.remove('bordeA');
        imagen.classList.add('bordeOculto');
    }
}
