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



//codigo para hacer efecto despegable al carrito como el menu
let shopping = document.getElementById('shopping');
let despegable = document.getElementById('despegable');
delayDesp = 0;

shopping.addEventListener('click',function(){
  if(delayDesp == 0){
    despegable.className = ('cart-despegable two');
    delayDesp = 1;
  }else{
    despegable.classList.remove('two');
    despegable.className = ('cart-despegable one');
    delayDesp = 0;
  }
})