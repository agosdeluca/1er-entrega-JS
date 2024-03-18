//Bienvenida

alert("¡Bienvenido a la Hora Feliz!")
// Menú de promociones disponibles
alert("Promociones disponibles: \n Promo 1. 2 panchos + bebida a elección de 1 lt. $1.300 \n Promo 2. 1 hamburguesa c/papas + bebida de 1 lt. a elección $1.800 \n Promo 3. 1 pizza grande + bebida de 1 lt. a elección $2.500 \n Promo 4. 2 hamburguesas c/papas c/1 + bebida de 1 lt. a elección $2.700");

// Función para calcular el monto a pagar
function calcularMonto(opcion, cantidad) {
    let monto = 0;
    switch (opcion) {
        case 1:
            monto = 1300 * cantidad;
            break;
        case 2:
            monto = 1800 * cantidad;
            break;
        case 3:
            monto = 2500 * cantidad;
            break;
        default:
            monto = 2700 * cantidad;
            break;
    }
    return monto;
}
// Función principal del programa
function main() {
    let continuar = true;
    while (continuar) {
        // Solicitar al usuario la opción y cantidad de promos
        let opcion = parseInt(prompt("Ingresa la promoción que deseas (1, 2, 3, o 4):"));
        let cantidad = parseInt(prompt("Ingresa la cantidad que deseas comprar:"));

        alert("Lo dirigimos a pagar.")
        // Calcular el monto a pagar utilizando la función calcularMonto()
        let monto = calcularMonto(opcion, cantidad);

        // Mostrar el monto a pagar en un alert
        alert(`El monto a pagar es: $${monto}`);

        // Preguntar al usuario si desea continuar comprando
        continuar = confirm("¿Deseas comprar algo más?");
    }
    console.log("Gracias por tu compra.");
}

// Iniciar el programa
main();