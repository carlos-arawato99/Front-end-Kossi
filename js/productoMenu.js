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

let productoSelected = document.getElementById('productoSelected');
let cont = 0;

boton.addEventListener('click',function(){
  if(cont == 0){
    productoSelected.className = ('noProducto')
    cont = 1;
  }else{
    productoSelected.classList.remove('noProducto');
    productoSelected.className = ('row');
    cont = 0;
  }
});




var CodProducto='';
var DesProducto='';
var PrecioProducto='';
var ImagenProducto='';
const listaProd = document.querySelector('#lista-carrito tbody');

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
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>
      <img class="img-fluid" src="${ImagenProducto}" id="ImagenProd" alt="">
    </td>
    <td>${DesProducto}</td>
    <td>${PrecioProducto}</td>
  `;
  listaProd.appendChild(row);
  
  /*Le suma un producto al contador que se utilizada para actualizar el icono del header*/
  cuantos = cuantos + 1;
  /*Lo almacena en el localstorage para que esté disponible en las otras páginas*/
  localStorage.cuantos= cuantos;
  /*Actualiza el carrito de la página actual */
  document.getElementById('cart').innerHTML=` <i class="fas fa-shopping-cart">  ` +  localStorage.cuantos + `</i>`;
 

 /*Carlos...lo que esté en el carrito debe estar disponible para las otras páginas....aquí comenzando a programar que esté en el localstorage*/
  localStorage.carrito = listaProd.innerHTML;
  console.log (localStorage.carrito);

  
}