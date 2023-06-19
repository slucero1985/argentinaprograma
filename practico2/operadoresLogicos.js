const readlineSync = require('readline-sync');
const numero = readlineSync.question("Ingresar un numero entero: ");
if (numero % 2 === 0 && numero > 0) {
        console.log("El numero es positivo y par");
}else if (numero % 2 !== 0 && numero > 0) {
    console.log("El numero es positivo e impar");
}else if (numero < 0) {
    console.log("El numero es negativo");
}else
console.log("El numero es cero");