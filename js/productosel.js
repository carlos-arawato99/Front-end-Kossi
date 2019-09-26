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


mostrarProductoSeleccionado ()

/*Muestra el producto seleccionado en la página producto*/

function mostrarProductoSeleccionado()
{
    

    var codigo =document.getElementById("CodProducto");
    codigo.innerHTML= CodProducto;

    var descripcion= document.getElementById("DesProducto");
    descripcion.innerHTML=DesProducto;

    var precio =document.getElementById("PrecioProducto");
    precio.innerHTML= PrecioProducto + "  USD $  ";

    var dibujarimagen= document.getElementById("ImagenProducto");
    dibujarimagen.innerHTML = ImagenProducto;
    } 
    