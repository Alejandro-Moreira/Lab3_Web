// Fundamento 1
function mostrarMensaje() {
    console.log("Hola, este es mi primer fundamento");
  }
  
  // Llamada a la función para ejecutarla
  mostrarMensaje();
  

  // Fundamento 2: Cambiar el contenido de un elemento
function cambiarContenido() {
    let elemento = document.getElementById("Elemento");
  
    // Verificar si se encontró el elemento
    if (elemento) {
      // Cambiar el contenido del elemento
      elemento.innerHTML = "El elemento ha sido modificado con exito";
    } else {
      console.error("No se encontró el elemento con el nombre 'Elemento'");
    }
  }
  // Llamada a la función para ejecutarla
  cambiarContenido();
  