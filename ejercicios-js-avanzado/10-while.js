let n = parseInt(prompt("Ingrese un número: "));
let numbers = []
let sum = 0
let l = 1;

document.write("Calificaciones de la universidad <br />")

do {
    numbers.push(n)
    l === 1
    ? sum = n
    : sum += n
    document.write(`<br/> Numbers: ${numbers} <br/> Sum: ${sum} <br/> Med: ${Number((sum/l).toFixed(3))} </br> <br/>`)
    n = parseInt(prompt("Ingrese un número: "));
    l++;
} while (n > 0);
