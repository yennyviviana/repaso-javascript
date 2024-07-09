// Definición de función
function saludar(nombre) {
    return "Hola, " + nombre + "!";
}

// Llamada a función
let mensaje = saludar("María");
console.log(mensaje);  // Imprime: Hola, María!



// Declaración de funciones
function saludar() {
    console.log("Hola");
  }
  saludar();
  
  // Funciones flecha
  const saludarFlecha = () => {
    console.log("Hola con función flecha");
  }
  saludarFlecha();
  
  // Callback
  function hacerAlgo(callback) {
    console.log("Haciendo algo...");
    callback();
  }
  hacerAlgo(() => { console.log("Callback ejecutado"); });
  