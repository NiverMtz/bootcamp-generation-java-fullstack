const arreglo1 = [];
const arreglo2 = new Array();

let lenguajes = ["Javascript", "Java", "PHP",
                "Elixir", "Go", "Ruby", "Python",
                "C++", "C#", "Visual Basic",
                "Excel", "Dart", "Perl"];

lenguajes.forEach(function (lenguaje) {
  console.log(lenguaje);
});


let numeros1 = Array(2, 3, 4, 27, 19, 12)
let numeros2 = numeros1.map(function(numero){
    return numero * 2
})

console.log(numeros1)
console.log(numeros2)

// map

// filter