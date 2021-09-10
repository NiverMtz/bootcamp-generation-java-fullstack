// var edad = prompt("Cuál es tu edad?");

// if (edad >= 18) {
//   document.write('Eres mayor de edad')
// } else {
//   document.write('Eres menor de edad')
// }

// Preguntarle a un usuario su edad. Después hacer un condicional if con las siguientes situaciones.
// Si el usuario es mayor de 18 y menor de 29 años mostrar mensaje "Felicidades has sido aceptado en el Bootcamp de Generation",
// en caso contrario mostrar el mensaje "No cumples con el requisito del programa"

var edad2 = prompt("¿Cuál es tu edad?");

if (edad2 >= 18 && edad2 < 29) {
//   console.log("Eres mayor de edad");
  document.write('Felicidades has sido aceptado en el Bootcamp de Generation')
} else {
//   console.log("Eres menor de edad");
  document.write('No cumples con el requisito del programa')
}