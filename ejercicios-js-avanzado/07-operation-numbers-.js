/*
    Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo.
*/

const a = parseInt(prompt('Ingresa un número: '));
const b = parseInt(prompt('Ingresa otro número: '));
document.write(`Los números ingresados son: ${a} y ${b} <br />`)

let c = 0;

a > b ? c = addAndSub(a, b) : c = prodAndDiv(a, b);

function addAndSub(a, b) {
    document.write(`Suma : ${a + b}`)
    document.write(`Resta: ${a - b}`)
}

function prodAndDiv(a, b) {
    document.write(`Producto : ${a * b}`)
    document.write(`<br />`)
    document.write(`División : ${a / b}`)
}