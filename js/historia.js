let btn = document.getElementById('icono');
let enlaces = document.getElementById('enlaces');
let contador = 0;

btn.addEventListener('click',function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos');
        contador=1;
    }else{
      enlaces.classList.remove('dos');
      enlaces.className = ('enlaces uno');
      contador = 0;
    }
})

let historia = document.getElementById('contenedor-historia');
contadorH = 0;

btn.addEventListener('click',function(){
  if(contadorH == 0){
    historia.className = ('noHistoria');
    contadorH = 1;
  } else {
    historia.classList.remove('noHistoria');
    historia.className = ('container');
    contadorH = 0;
  }
})
