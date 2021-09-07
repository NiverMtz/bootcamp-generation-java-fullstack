/* 5. Crear una función para calcular el descuento de un producto, considerando
    las siguientes condiciones:
    1. Si el descuento es menor o igual al 15% del valor del producto, imprimir 
    el mensaje "Tienes derecho a un cupón de regalo".
    2. Si el descuento se encuentra entre el 15% y el 50% del valor del producto, 
    imprimir el mensaje "Tienes derecho a un 2x1".
    3. Si el descuento es mayor al 50% del valor del producto, imprimir el mensaje 
    "No tienes derecho a descuentos o cupones". */

    var precio = prompt('Dame el precio del producto: ')
    var descuento = prompt('Dame el descuento del producto: ')


function calcularDescuento(precio, porcentaje) {
  let descuento = precio * (porcentaje / 100);

  if (descuento <= precio * 0.15) {
    console.log("Tienes derecho a un cupón de regalo");
    document.write("Tienes derecho a un cupón de regalo")
  } else if (descuento <= precio * 0.5) {
    console.log("Tienes derecho a un 2x1");
    document.write("Tienes derecho a un 2x1")
  } else {
    console.log("No tienes derecho a descuentos o cupones");
    document.write("No tienes derecho a descuentos o cupones")
  }
}

calcularDescuento(precio, descuento);
