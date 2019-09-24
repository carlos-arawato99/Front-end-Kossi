
var productosel=""; /*variable global que almacenará el id del producto seleccionado*/
/*según el valor de la misma se desplegará la descripción, tallas, imágenes...en la página producto.*/

function seleccionar(id, clase) {
    productosel=id;
    alert ("El producto seleccionado es "  + id + " de la categoría " + clase );

    var x = document.getElementById("idproducto");
    x.innerHTML=id; /*aun no lo pinta en la página producto....*/
    
    
}

/*

//Variables
const lista-productos=document.getElementById('lista-productos');

//Listeners
cargarEventListeners();

//Funciones
function cargarEventListeners(){

};

*/

