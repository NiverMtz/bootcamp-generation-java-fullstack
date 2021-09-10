var a = parseInt(prompt("Número 1: "));
var b = parseInt(prompt("Número 2: "));

function calculadora(a, b) {
  let suma = a + b;
  let resta = a - b;
  let multiplicacion = a * b;
  let division = a / b;

  document.write(
    "Suma: " +
      suma +
      " Resta: " +
      resta +
      " Multiplicación: " +
      multiplicacion +
      " División: " +
      division
  );
}

calculadora(a, b);
