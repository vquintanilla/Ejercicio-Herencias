//1.- Crea una superclase llamada Electrodoméstico con las siguientes características:
//a. Sus atributos son precio, color, consumoEnergetico y capacidad (peso máximo)

//superclase
class Electrodomesticos {
    constructor(precio, color, capacidad) {
        //b. El constructor solo debe pedir precio, color y capacidad. 
        this.precio = precio;
        this.color = color;
        //c. consumoEnergetico debe iniciar con valor de 100
        this.consumoEnergetico = 100;
        this.capacidad = capacidad;
    }
}

//Crea una subclase de Electrodomestico llamada Lavadora con las siguientes características:
//    a. Su atributo es carga(kg de ropa), además de los atributos heredados.

class Lavadora extends Electrodomesticos {
    constructor(precio, color, capacidad, carga) {
        super(precio, color, capacidad);
        this.carga = carga;
    }

//    b. Crea el método precioFinal(). Este se calcula multiplicando el consumoEnergetico por la carga.
    precioFinal() {
        return this.carga * this.consumoEnergetico;
      }
}

const lavadora = new Lavadora(800, "ploma", 10, 10);
console.log(lavadora);
console.log(lavadora.precioFinal());