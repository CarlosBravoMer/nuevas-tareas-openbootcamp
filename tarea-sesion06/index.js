// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaDeCompra = ["Agua", "Leche", "Pan", "Zumo", "Yogurt"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaDeCompra.push("Aceite de Girasol");

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaDeCompra.pop();

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
  {
    titulo: "Capitán América: Civil War",
    director: "Anthony Russo",
    fecha: {
      dia: 12,
      mes: 4,
      año: 2016,
    },
  },
  {
    titulo: "Rápidos y furiosos 8",
    director: "F. Gary Gray",
    fecha: {
      dia: 12,
      mes: 4,
      año: 2017,
    },
  },
  {
    titulo: "Avatar",
    director: "James Cameron",
    fecha: {
      dia: 18,
      mes: 12,
      año: 2009,
    },
  },
];
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const nuevaPelicula = peliculas.filter((obj) => obj.fecha.año < 2010);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map(function (obj) {
  let val = [];
  val[obj.director] = obj.director;
  return val[obj.director];
});

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const pelis = peliculas.map(function (obj) {
    let val = [];
    val[obj.titulo] = obj.titulo;
    return val[obj.titulo]
})

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const pelisDirectores = directores.concat(pelis);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const pelisDirectores1 = [...directores, ...pelis]