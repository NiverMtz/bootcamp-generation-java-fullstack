// const edad = parseInt(prompt("Ingresa edad: "));
const edad = 34

let mensaje = "";

switch (edad) {
    case 18:
        mensaje = "Acaba de cumplir la mayoría de edad";
        break
    case 25:
        mensaje = "Ya eres un adulto";
        break
    case 70:
        mensaje = "Ya eres de la tercera edad";
        break
    default:
        mensaje = "No es ninguno de los valores";
        break
}

console.log(mensaje)