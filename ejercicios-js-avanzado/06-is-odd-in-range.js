let a = parseInt(prompt("Extremo inferior del intervalo: "));
let b = parseInt(prompt("Extremo superior del intervalo: "));

let numbersOdd = [];

function isEvenForRangeNumbers(a, b) {
  var maxNumber = Math.max(a, b);
  var minNumber = Math.min(a, b);

  for (let i = minNumber; i <= maxNumber; i++) {
    i % 2 === 0 ? null : numbersOdd.push(i);
  }
}

isEvenForRangeNumbers(a, b);

document.write(`Los números impares entre (${a},${b}), son ${numbersOdd}`);
