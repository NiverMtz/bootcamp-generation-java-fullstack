var numero1 = parseInt(prompt("Número 1: "));
var numero2 = parseInt(prompt("Número 2: "));

function calculadora(a, b) {
  var suma = a + b;
  document.prompt("Suma: " + suma + '</br>');

  var resta = a - b;
  document.prompt("Resta: " + resta + '</br>');

  var producto = a + b;
  document.prompt("Producto: " + producto + '</br>');

  var division = a / b;
  document.prompt("Suma: " + division + '</br>');
}

calculadora(numero1, numero2);