//despegable del menu (NO TOCAR)
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
//codigo para cultar lo que esta detras del menu despegable
let NotProductos = document.getElementById('contenedor-producto');
let contadorNT = 0;

boton.addEventListener('click',function(){
  if(contadorNT == 0){
    NotProductos.className = ('noProducto')
    contadorNT = 1;
  }else{
    NotProductos.classList.remove('noProducto');
    NotProductos.className = ('contenedor-producto');
    contadorNT = 0;
  }
});


var cuantos=0;
/*Variable utilizada para llevar la cuenta de la cuenta a cancelar*/

var cuentapagar = 0;

//elimina el producto seleccionado del carrito
const carrito = document.getElementById('despegable');
carrito.addEventListener('click', eliminarProducto);


function eliminarProducto(e){
  e.preventDefault();
  
  
  if(e.target.classList.contains('borrar-producto') ){



e.target.parentElement.parentElement.remove();

  
    
   
  /*Le suma un producto al contador que se utilizada para actualizar el icono del header*/
  cuantos= parseInt (localStorage.cuantos);
  cuantos = cuantos - 1;
  /*Lo almacena en el localstorage para que esté disponible en las otras páginas*/
  localStorage.cuantos= cuantos;
  /*Actualiza el carrito de la página actual */
  document.getElementById('cart').innerHTML=` <i class="fas fa-shopping-cart">  ` +  localStorage.cuantos + `</i>`;
 
 /*Lo que esté en el carrito debe estar disponible para las otras páginas....aquí comenzando a programar que esté en el localstorage*/
 localStorage.carrito = document.querySelector('#lista-carrito tbody').innerHTML


  }
}