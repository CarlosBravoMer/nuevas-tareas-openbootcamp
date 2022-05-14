// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const persona = {
  nombre: "Carlos",
  apellido: "Bravo",
  edad: 27,
  altura: 195,
  eresDesarrollador: true,
};
// - Una variable que obtenga tu edad a partir del objeto anterior
const miEdad = persona.edad;

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datos = new Array(persona);

const amigos = [
  {
    nombre: "Andres",
    apellido: "Zambrano",
    edad: 10,
    altura: 185,
    eresDesarrollador: false,
  },
  {
    nombre: "Darwin",
    apellido: "Campoverde",
    edad: 20,
    altura: 180,
    eresDesarrollador: false,
  },
];

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const amigosOrden = amigos.sort((a, b) => b.edad - a.edad)