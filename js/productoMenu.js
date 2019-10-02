

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







var CodProducto='';
var DesProducto='';
var PrecioProducto='';
var ImagenProducto='';

/*Variable utilizada para llevar la cuenta de los productos agregados*/
var cuantos = 0;


/*Función que inserta un producto en el carrito de compra */
function comprar()
{   
  /*Se toma del local storage la cantidad de productos seleccionados previamente*/
  cuantos = parseInt(localStorage.cuantos);

  /*Lee loas valores de los elementos de la página producto seleccionado*/
   CodProducto = document.getElementById("CodProducto").innerHTML;
   DesProducto = document.getElementById("DesProducto").innerHTML;
   PrecioProducto = document.getElementById("PrecioProducto").innerHTML;
   ImagenProducto = document.getElementById('ImagenProd').src;
   /*Dibuja los valores en el carrito*/
  insertarCarrito()
}


function insertarCarrito() 
{  
  const tira=` <tr>
  <td>
    <img class="img-fluid" src="${ImagenProducto}" id="ImagenProd" alt="">
  </td>
  <td>${DesProducto}</td>
  <td>${PrecioProducto}</td>
  <td>
  <a href="#" class="borrar-producto" ${CodProducto}> x </a>
  </td>
  </tr>
`;

  /*Le suma un producto al contador que se utilizada para actualizar el icono del header*/
  cuantos = cuantos + 1;
  /*Lo almacena en el localstorage para que esté disponible en las otras páginas*/
  localStorage.cuantos= cuantos;
  /*Actualiza el carrito de la página actual */
  document.getElementById('cart').innerHTML=` <i class="fas fa-shopping-cart">  ` +  localStorage.cuantos + `</i>`;
 

 /*Lo que esté en el carrito debe estar disponible para las otras páginas....aquí comenzando a programar que esté en el localstorage*/
  localStorage.carrito = localStorage.carrito +  tira;
  
  console.log (localStorage.carrito);
 
  window.location.href = "./carrito.html";
  
}

//elimina el producto seleccionado del carrito
const carrito = document.getElementById('despegable');

carrito.addEventListener('click', eliminarProducto);

function eliminarProducto(e){
  e.preventDefault();
  
  

  if(e.target.classList.contains('borrar-producto') ){
   e.target.parentElement.parentElement.remove();
  }
}