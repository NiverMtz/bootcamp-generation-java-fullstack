const numeros = [10, 20, 30, 40, 50];

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril']

numeros.forEach( function(numero) {
    console.log(numero)
})

numeros.push(60,70,80)
numeros.unshift(-10, -20, -30)

console.table(numeros);

meses.pop()
console.table(meses)
meses.shift()
console.table(meses)