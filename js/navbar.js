//codigo js que funciona con el home.html a la hora de abrir el menu esconder 
//el contenido del home sin que interfiera en el menu al hacer click

let boton = document.getElementById('icon');
let enlaces = document.getElementById('enlaces');
let contador = 0;

boton.addEventListener('click',function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos');
        contador=1;
    }else{
      enlaces.classList.remove('dos');
      enlaces.className = ('enlaces uno');
      contador = 0;
    }
})

let carousel = document.getElementById('carousel');
let cuenta = 0;

boton.addEventListener('click',function(){
  if(cuenta == 0){
    carousel.className = ('content-dos')
    cuenta = 1;
  }else{
    carousel.classList.remove('content-dos');
    carousel.className = ('content-all');
    cuenta = 0;
  }
});







