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

let NotHistory = document.getElementById('history');
let quitarH = 0;

btn.addEventListener('click',function(){
  if(quitarH == 0){
    NotHistory.className = ('noHistoria')
    quitarH = 1;
  }else{
    NotHistory.classList.remove('noHistoria');
    NotHistory.className = ('row');
    quitarH = 0;
  }
});




