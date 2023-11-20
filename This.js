// This 1
function Persona(nombre) {
    this.nombre = nombre;
  
    this.saludar = function() {
      console.log("Hola, soy " + this.nombre);
    };
  }
  
  // Crear una instancia
  let persona1 = new Persona("Alejandro");
  // Llamada al método saludar
  persona1.saludar();
  

// This 2: Uso de this en una función de flecha
const auto = {
    marca: "Toyota",
    modelo: "Camry",
    obtenerDetalles: function() {
      // Uso de una función de flecha para mantener el valor de this
      setTimeout(() => {
        console.log("Marca: " + this.marca + ", Modelo: " + this.modelo);
      }, 1000);
    }
  };
  
  // Llamada al método obtenerDetalles
  auto.obtenerDetalles();
  