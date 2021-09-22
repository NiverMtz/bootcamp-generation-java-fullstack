// Mostrar todos los números divisores de un número introducido.

let n = parseInt(prompt('n: '));
let i = 1;

while (i <= n) {
  n % i === 0 ? document.write(`${i} <br/>`) : null;
  i++;
}