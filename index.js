class Mascota {
    constructor(nombre, tipo, edad){
        let _nombre = nombre;
        let _tipo = tipo;
        let _edad = edad;

        //Getters
        this.getNombre = () => _nombre
        this.getTipo = () => _tipo
        this.getEdad = () => _edad

        //Setters
        this.setNombre = function (nuevoNombre){ 
            _nombre = nuevoNombre;
        };
        this.setTipo = function (nuevoTipo){
          _tipo = nuevoTipo;
        };
        this.setEdad = function (nuevaEdad) {
            _edad = nuevaEdad;
        };
    }
}

class RegistroDeMascota{
    constructor(){
        this.mascotas = [];
    }

    addPet(mascota){
        return this.mascotas.push(mascota);
    }
    editPet(mascota, nombre, tipo, edad){
        const index = this.mascotas.indexOf(mascota);
        if(index != -1){
        this.mascotas[index].setNombre(nombre);
        this.mascotas[index].setTipo(tipo);
        this.mascotas[index].setEdad(edad);
        }
    }
    deletePet(mascota){
       const index = this.mascotas.indexOf(mascota);
       if(index != -1){
        this.mascotas.splice(index,1);
       }
    }
    //Asumo que desarrollar una función que clasifique las mascotas por tipo, 
    //es dado un tipo de mascota, sacar un lista de mascotas
    clasificacionPorTipos(tipo){
        let listaTipo = [];

        for(let i = 0; i < this.mascotas.length-1; i++){
            if(this.mascotas[i].getTipo() == tipo){
                listaTipo.push(this.mascotas[i]);
            }
        }
        return listaTipo;
    }
}

//Mascotas
const mascota1 = new Mascota("Juan", "perro", 2);
const mascota2 = new Mascota("Melisa", "gato", 3);
const mascota3 = new Mascota("Negrito", "perro", 2);
const mascota4 = new Mascota("Gaviota", "perro", 3);
const mascota5 = new Mascota("Bebe", "perro", 1);
const mascota6 = new Mascota("Luci", "gato", 0);
const mascota7 = new Mascota("Kuki", "hamster", 4);
const mascota8 = new Mascota("Blanca", "ave", 2);
const mascota9 = new Mascota("Linda", "ave", 1);
const mascota10 = new Mascota("Lila", "hamster", 0);

//Registro
const registro = new RegistroDeMascota();
//Añadir al registro
registro.addPet(mascota1);
registro.addPet(mascota2);
registro.addPet(mascota3);
registro.addPet(mascota4);
registro.addPet(mascota5);
registro.addPet(mascota6);
registro.addPet(mascota7);
registro.addPet(mascota8);
registro.addPet(mascota9);
registro.addPet(mascota10);

//Mostrar mascotas iniciales
console.log("Mascotas Iniciales")
registro.mascotas.forEach((element) => console.log("Nombre: " + element.getNombre() +
", Tipo: " + element.getTipo() + ", Edad: " + element.getEdad()))

//Eliminar dos mascotas
registro.deletePet(mascota1);
registro.deletePet(mascota10);
console.log("Mascotas luego de haber eliminado dos")
registro.mascotas.forEach((element) => console.log("Nombre: " + element.getNombre() +
", Tipo: " + element.getTipo() + ", Edad: " + element.getEdad()))

//Editamos una mascota
//Antes
console.log("Nombre: " + mascota2.getNombre() +
", Tipo: " + mascota2.getTipo() +
", Edad: " + mascota2.getEdad())
//Edit
registro.editPet(mascota2, "Lilian", "gato", 2);
//Despues
console.log("Nombre: " + mascota2.getNombre() +
", Tipo: " + mascota2.getTipo() +
", Edad: " + mascota2.getEdad())

//Clasificando por tipo
let perros = registro.clasificacionPorTipos("perro");
console.log("Mascotas de tipo perro")
perros.forEach((element) => console.log("Nombre: " + element.getNombre() +
", Tipo: " + element.getTipo() + ", Edad: " + element.getEdad()))
