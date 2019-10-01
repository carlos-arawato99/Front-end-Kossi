

let noalbum = document.getElementById('icon')
let ocultar = document.getElementById('coleccion');
quitar = 0;

noalbum.addEventListener('click',function(){
  if(quitar == 0){
    coleccion.className = ('noColleccion');
    quitar = 1;
  }else{
    coleccion.classList.remove('noColleccion');
    coleccion.className = ('row');
    quitar = 0;
  }
});

let enlaces = document.getElementById('enlaces');
let contador = 0;

noalbum.addEventListener('click',function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos');
        contador=1;
    }else{
      enlaces.classList.remove('dos');
      enlaces.className = ('enlaces uno');
      contador = 0;
    }
})



