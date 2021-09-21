let number = parseInt(prompt('Ingresa un número entero: '))

function isEven(number) {
  let condition = number % 2 === 0 ? "es par" : "no es par"
  return condition
}

document.write(`El número ${number}, ${isEven(number)}.`)