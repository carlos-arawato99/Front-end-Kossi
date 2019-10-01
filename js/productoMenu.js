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

//funcion que despliega el carrito
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



const listaProd = document.querySelector('#lista-carrito tbody');

var CodProducto='';
var DesProducto='';
var PrecioProducto='';
var ImagenProducto='';

function comprar(){
  localStorage.clear();

   CodProducto = document.getElementById("CodProducto").innerHTML;
   DesProducto = document.getElementById("DesProducto").innerHTML;
  PrecioProducto = document.getElementById("PrecioProducto").innerHTML;
  ImagenProducto = document.getElementById('otrainfo').innerHTML;

 // talla=document.getElementById("talla").innerHTML;;


  

  console.log('el codigo es: ' + CodProducto);
  console.log('el codigo es: ' + DesProducto);
  console.log('el codigo es: ' + PrecioProducto);
  console.log('el codigo es: ' + ImagenProducto);

 
  insertarCarrito();
  

}

function insertarCarrito() {
  const row = document.createElement('tr');
  row.innerHTML = `

    <td>${DesProducto}</td>
    <td>${PrecioProducto}</td>
  `;
  listaProd.appendChild(row);
}