var num1 = parseInt(prompt('Ingresa tu primer numero'));
var num2 = parseInt(prompt('Ingresa tu segundo numero'));
var operacion = prompt('Que operacion quieres hacer?')

function calculadora(num1, num2, operacion){
    var suma_total = num1 + num2;
    var resta_total = num1 - num2;
    var multiplicacion_total = num1 * num2;
    var division_total = num1 / num2;
    if (operacion === 'suma'){
        document.write('El resultado de tu suma es:',' ', suma_total, '<br><br>');
    }
    else if(operacion === 'restar'){
        document.write('El resultado de tu resta es:',' ', resta_total, '<br><br>');
    }
    else if(operacion === 'multiplicar'){
        document.write('El resultado de tu multiplicacion es:',' ', multiplicacion_total, '<br><br>');
    }
    else if(operacion === 'dividir'){
        document.write('El resultado de tu division es:',' ', division_total, '<br><br>');
    }
}

calculadora(num1, num2, operacion);