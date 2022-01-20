let $titulo = document.querySelector('#titulo'); 
let $mensaje = document.querySelector('#mensaje'); 
let $btnMensaje = document.querySelector('#btnMensaje'); 
let $spanError =document.querySelector('span'); 





$btnMensaje.addEventListener('click', ()  => {
    console.log('no me presiones'); 
}); 



$mensaje.addEventListener('keyup', (e) => {
    /* console.log('escribiste algo'); */ 

    console.log(e.target.value); 


    if ( e.target.value.length < 3) {
        
        $spanError.classList.remove('hide'); 
        $spanError.classList.add('error'); 
    }else{
        $spanError.classList.add('hide'); 
        $spanError.classList.remove('error'); 

    }
}); 




/* function mostrarConsola() {
    console.log('tocaste'); 
} */
