console.log ("enlazado");

/*Variables*/
const productos=document.getElementsByClassName('container lista-productos');


//Listeners
cargarEventListeners();

//Función que selecciona un producto para ver sus detalles
function cargarEventListeners(){
    productos[0].addEventListener('click', verproducto)
    productos[1].addEventListener('click', verproducto)
    productos[2].addEventListener('click', verproducto)
    productos[3].addEventListener('click', verproducto)
};

//Función que despliega los datos del producto seleccionado
function verproducto (e) {
    e.preventDefault ();
    //Delegation para seleccionar el producto 
    if (e.target.classList.contains('ver-producto') )
    {        
        console.log ("Seleccionando")
    var producto=e.target.parentElement;
    leerDatosProducto (producto);
    }

    {
        console.log ("HOLA");
    }
}


//Lee los datos del producto seleccionado
function leerDatosProducto (producto){
    const infoProducto ={
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('a').text,
        precio: producto.querySelector('.precio span').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
    }
    console.log (infoProducto);


    var CodProducto = infoProducto.id;
    var DesProducto = infoProducto.titulo;
    var PrecioProducto = infoProducto.precio;
    var ImagenProducto = infoProducto.imagen;

    // Set the variables
    
    localStorage.CodProducto = CodProducto;
    localStorage.DesProducto = DesProducto;
    localStorage.PrecioProducto = PrecioProducto;
    localStorage.ImagenProducto = ImagenProducto;
    
   window.location.href = "./producto.html";
   
}

