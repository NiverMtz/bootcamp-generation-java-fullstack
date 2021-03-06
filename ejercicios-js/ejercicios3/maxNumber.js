// Recibiendo entradas del usuario
// ParseInt para convertir las entradas a enteros
var input1 = parseInt(prompt("input 1: ")); // 3
var input2 = parseInt(prompt("input 2: ")); // 6
var input3 = parseInt(prompt("input 3: ")); // 9

// string "40" -> number 40

/*
    Función para calcular el número máximo
    Referencia de la función extra para ordenar números: 
    https://www.freecodecamp.org/espanol/news/ordenar-arreglos-en-javascript-como-usar-el-metodo-sort/
*/

// Recibe como parámetro el arreglo de números
function maxNumber(arrayNumbers) {
  console.log(arrayNumbers);
  // [3, 6, 9]
  //  0, 1, 2

    // El método sort no ordena números, por lo que se usa una función extra
    arrayNumbers.sort(function(a, b){return b - a});
    console.log(arrayNumbers);

    // function(3,6) -> ¿6 < 3? no [6,3]
    // function(6,9) -> ¿9 < 6? no [9, 6, 3]

    // Por último, se devuelve el el número mayor del arreglo de números
    return arrayNumbers[0];
}

// Aquí se ingresan los valores del usuario en el arreglo
var arr = [input1, input2, input3];
// Luego se llama a la función para calcular el número mayor
var max = maxNumber(arr);

console.log(max)

// Se escribe el resultado sobre el html
// document.write(
//   `El elemento más grande del arreglo [ ${arr} ], es: ${max}`
// );
