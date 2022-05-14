// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const fechaHoy = new Date();

// - La fecha de tu nacimiento
const miFecha = new Date("06/24/1994");

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const comparaFecha = (fechaHoy > miFecha)
console.log(comparaFecha)

// - Una variable que contenga el día de tu nacimiento
const miDia = miFecha.getDate()

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const miMes = miFecha.getMonth() + 1;

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const miYear = miFecha.getFullYear();
