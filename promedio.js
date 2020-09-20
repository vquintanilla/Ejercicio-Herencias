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
    constructor(nombre, materia, arreglo, antiguedad) {
        super(nombre, materia);
        this.arreglo = arreglo;
        this.antiguedad = antiguedad + " años trabajando en esta organizacion.";
    }
    getPromedio() {
         var suma = 0;

         for(var x = 0; x < arreglo.length; x++){
           suma += arreglo[x];
         }
           var promedio = suma / arreglo.length;
           return promedio;
        // console.log("promedio: "+promedio);
     }
  }
  
  class MaestroMusica extends Maestro {
    constructor(nombre, materia, arreglo, edad) {
      super(nombre, materia);
      this.edad = edad + " años de edad.";
      this.arreglo = arreglo;
    }
      getPromedio() {
       // let arreglo = [100, 90, 80, 90];
        var suma = 0;

        for(var x = 0; x < arreglo.length; x++){
          suma += arreglo[x];
        }
          var promedio = suma / arreglo.length;
          return promedio;
       // console.log("promedio: "+promedio);
    }
  }
  arreglo = [100, 90, 80, 95];
  
  const Juan = new MaestroFisica("Juan", "Fisica", arreglo, 15);
  console.log(Juan);
  console.log("promedio: "+Juan.getPromedio());
  console.log(Juan.antiguedad);
  
  const Andres = new MaestroMusica("Andres", "Musica", arreglo, 35);
  console.log(Andres);
  console.log("promedio: "+Andres.getPromedio());
  console.log(Andres.edad);
  
