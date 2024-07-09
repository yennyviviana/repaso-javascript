

//Los arreglos son objetos y, por lo tanto, tienen propiedades y métodos.
//El método "length" devuelve la longitud de un arreglo.
//El método "slice()" devuelve una copia de una porción del arreglo.
//El método "splice()" se utiliza para agregar o eliminar elementos de un arreglo en una posición específica.
//El método "sort()" ordena los elementos de un arreglo.
//El método "reverse()" invierte el orden de los elementos en un arreglo.
//El método "concat()" une dos o más arreglos.
//El método "indexOf()" devuelve la posición del primer elemento que coincide con el valor especificado.
//El método "join()" convierte los elementos de un arreglo en una cadena.
//El método "map()" crea un nuevo arreglo con los resultados de la llamada a la función proporcionada.
//El método "filter()" crea un nuevo arreglo con todos los elementos que pasan la prueba implementada por
// la función proporcionada.


//Es importante tener en cuenta que el método unshift() modifica el arreglo original y devuelve la nueva
// longitud del arreglo.



//"length" no solo es útil para recorrer un arreglo sino también para realizar operaciones 
//con arreglos como agregar elementos, eliminar, etc.

let miArreglos = [1, 2, 3, 4, 5];
console.log(miArreglos.length); // Output: 5
//En este ejemplo, utilizamos la propiedad "length" para obtener la cantidad de elementos en el arreglo.


/*Para pasar parámetros a una función, debes especificar los parámetros que recibirá la función dentro de los
 paréntesis,luego, al llamar la función, debes proporcionar los valores para cada parámetro, en el orden en 
 que se especificaron.
 */  

 

// Función para listar objetos
function listarObjetos() {
    console.log("Listando objetos:");
    objetos.forEach(function(objeto) {
        console.log("Id: " + objeto.id + ", Descripción: " + objeto.descripcion);
    });
}

// Función para insertar objeto
function insertarObjeto(nuevoObjeto) {
    objetos.push(nuevoObjeto);
    console.log("Objeto insertado con éxito. Id: " + nuevoObjeto.id + ", Descripción: " + nuevoObjeto.descripcion);
}

// Función para eliminar objeto
function eliminarObjeto(id) {
    let index = objetos.findIndex(function(objeto) {
        return objeto.id === id;
    });
    if (index === -1) {
        console.log("No se encontró el objeto con id: " + id);
    } else {
        objetos.splice(index, 1);
        console.log("Objeto eliminado con éxito. Id: " + id);
    }
}


// Función para insertar objeto
function insertarObjeto(nuevoObjeto) {
    objetos.push(nuevoObjeto);
    console.log("Objeto insertado con éxito. Id: " + nuevoObjeto.id + ", Descripción: " + nuevoObjeto.descripcion);
}

// Función para eliminar objeto
function eliminarObjeto(id) {
    let index = objetos.findIndex(function(objeto) {
        return objeto.id === id;
    });
    if (index === -1) {
        console.log("No se encontró el objeto con id: " + id);
    } else {
        objetos.splice(index, 1);
        console.log("Objeto eliminado con éxito. Id: " + id);
    }
}


// Crear arreglo de objetos
let productos = [
    {nombre: "Laptop", precio: 800},
    {nombre: "Tablet", precio: 400},
    {nombre: "Smartphone", precio: 600},
    {nombre: "Impresora", precio: 100},
    {nombre: "Teclado", precio: 20}
];

// Función para generar tabla HTML
function generarTabla() {
    let tabla = `<table>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>`;
    productos.forEach(function(producto) {
        tabla += `<tr>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                  </tr>`;
    });
    tabla += `</table>`;
    return tabla;
}

// Ejemplo de uso de la función
let tablaHTML = generarTabla();
console.log(tablaHTML);

// Variables para el correo electrónico
let nombre = "Juan";
let apellido = "Perez";
let edad = 30;
let correo = "juan.perez@ejemplo.com";

// Plantilla de correo electrónico
let plantilla = `Estimado ${nombre} ${apellido},

Espero que se encuentre bien. Me pongo en contacto con usted para informarle que tiene ${edad} años.
Si tiene alguna pregunta o necesidad, no dude en ponerse en contacto conmigo a través de este correo 
electrónico: ${correo}.

Atentamente,
Equipo de Ejemplo`;

console.log(plantilla);
/*En este ejemplo, se utilizan variables para almacenar los datos 
personales del destinatario del correo electrónico, como el nombre, apellido, edad y 
correo electrónico. Luego, se utiliza un template literal para generar una plantilla de correo 
electrónico dinámica que incluye estos datos personales. Utilizando template literals puedes generar
 plantillas dinamicas de HTML,Email,Texto, etc.
*/


 
let map = new Map();
map.set('name', 'John');
map.set(1, 'number');
console.log(map.get('name')); // imprime "John"
console.log(map.size); // imprime 2



