// 3.- Hacer superclase Maestro y subclases Maestro de Física y Maestro de Música y a cada uno 
//asignarle su materia y calcular su promedio de grupo a partir de calificaciones(puedes usar arreglos).
//El maestro de física tiene un atributo “antigüedad” que guarda un valor numérico, 
//mientras que el maestro de música tiene un atributo “edad” también guardando un valor numérico.
class Maestro {
    constructor(nombre, materia) {
      this.nombre = nombre;
      this.materia = materia;
    }
  }
  class MaestroFisica extends Maestro {
    constructor(nombre, materia, promedio, antiguedad) {
      super(nombre, materia);
      this.promedio = promedio;
      this.antiguedad = antiguedad + " años trabajando en esta organizacion.";
    }
    //arreglo = [100, 90, 80, 50];
  
    getPromedio() {
        let arreglo = [100, 90, 80, 50];
        var suma = 0;

        for(var x = 0; x < arreglo.length; x++){
          suma += arreglo[x];
        }
        var promedio = suma / arreglo.length;
        console.log("promedio: "+promedio);
    }
  }
  
  class MaestroMusica extends Maestro {
    constructor(nombre, materia, promedio, edad) {
      super(nombre, materia);
      this.edad = edad + " años de edad.";
      this.promedio = promedio;
    }
    getPromedio() {
        let arreglo = [100, 90, 80, 90];
        var suma = 0;

        for(var x = 0; x < arreglo.length; x++){
          suma += arreglo[x];
        }
        var promedio = suma / arreglo.length;
        console.log("promedio: "+promedio);
    }
  }
  promedio = [100, 90, 80, 95];
  
  const Pedro = new MaestroFisica("Pedro", "Fisica", promedio, 15);
  console.log(Pedro);
  console.log(Pedro.getPromedio());
  console.log(Pedro.antiguedad);
  
  const Mauricio = new MaestroMusica("Mauricio", "Musica", promedio, 35);
  console.log(Mauricio);
  console.log(Mauricio.getPromedio());
  console.log(Mauricio.edad);
  
