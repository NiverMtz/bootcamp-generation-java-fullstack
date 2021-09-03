// Recibir entradas del usuario
var input1 = prompt("input 1: ");
var input2 = prompt("input 2: ");
var input3 = prompt("input 3: ");

// Ingresar los valores de entrada a un arreglo.
var arr = [parseInt(input1), parseInt(input2), parseInt(input3)];

// Obtener el valor máximo del arreglo.
var max = Math.max(...arr);

//Mostrar el resultado en el HTML
document.write(`El elemento más grande del arreglo [ ${arr} ], es: ${max}`);
