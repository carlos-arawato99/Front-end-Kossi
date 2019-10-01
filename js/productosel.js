console.log ("Enlazado el detalle");

var CodProducto    =   localStorage.CodProducto;
var DesProducto    =   localStorage.DesProducto;
var PrecioProducto =   localStorage.PrecioProducto;
var ImagenProducto  =  localStorage.ImagenProducto;


console.log(CodProducto);
console.log (DesProducto);
console.log (PrecioProducto);
console.log (ImagenProducto)

localStorage.removeItem(CodProducto);
localStorage.removeItem(DesProducto);
localStorage.removeItem(PrecioProducto);
localStorage.removeItem(ImagenProducto);


mostrarProductoSeleccionado();

/*Muestra el producto seleccionado en la página producto*/

function mostrarProductoSeleccionado()
{
    const otrainfo =document.querySelector('#otrainfo tbody');
    const row =document.createElement("tr");
    row.innerHTML=`
    <td>
    
        <img class="img-fluid" src="${ImagenProducto}" id="ImagenProd" alt="">
    </td>
    `;
    otrainfo.appendChild(row);


    var codigo =document.getElementById("CodProducto");
    codigo.innerHTML= CodProducto;

    var descripcion= document.getElementById("DesProducto");
    descripcion.innerHTML=DesProducto;

    var precio =document.getElementById("PrecioProducto");
    precio.innerHTML= PrecioProducto + "  USD $  ";

    var dibujarimagen= document.getElementById('ImagenProducto');
    dibujarimagen.innerHTML= ImagenProducto;

    var talla=document.getElementById("talla");
    talla.innerHTML="<option value='0M'>  0 Meses</option>"
    talla.innerHTML= talla.innerText + "<option value='3M'>  3 Meses</option>"


              
    
    } 
    

