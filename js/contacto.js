//efecto al recargar la pagina aparece todo el contenido de la web con
//una transition
window.addEventListener('load', () => {
    document.getElementById('contenedor').classList.add('efectload');
  });
  
  
  
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
  
  let ocult = document.getElementById('icon')
  let form = document.getElementById('form');
  let delayt = 0;
  
  ocult.addEventListener('click',function(){
    if(delayt == 0){
      form.className = ('notForm');
      delayt = 1;
    }else{
      form.classList.remove('notForm');
      form.className = ('form');
      delayt = 0;
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
  
  
  //validacion del formulario contacto.html
  
  (function(){
    
    var formulario = document.getElementById('form'),
    elementos = formulario.elements,
    btn = document.getElementById('btn');
  
    var validarNombre = function(e){
     if(formulario.nombre.value == 0){
       alert('Completa el campo nombre');
       e.preventDefault();
     }
  };
  
  var validarEmail = function(e){
    if(formulario.email.value == 0){
      alert('Por favor Introduce tu Correo');
      e.preventDefault();
    }
  };
  
  var validarMsj = function(e){
    if(formulario.mensaje.value == 0){
      alert('Rellena el campo con tu mensaje ;)');
      e.preventDefault();
    }
  };
  
    var validar = function(e){
      validarNombre(e);
      validarEmail(e);
      validarMsj(e);
    };
  
    formulario.addEventListener('submit', validar);
  }())
  