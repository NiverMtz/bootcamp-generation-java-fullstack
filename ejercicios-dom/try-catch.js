const gravedad = 9.8
console.log(gravedad)

try {
    gravedad = 10.1
} catch (error) {
    console.log(error)
} finally {
    console.log('Finally')
}

console.log(gravedad)