var cuantos=0;

//elimina el producto seleccionado del carrito
const carrito = document.getElementById('despegable');
carrito.addEventListener('click', eliminarProducto);


function eliminarProducto(e){
  e.preventDefault();
  
  

  if(e.target.classList.contains('borrar-producto') ){
    /*Elimina el prooducto de la página carrito*/
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