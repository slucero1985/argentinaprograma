let diasMes = 0;
let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
const readlineSync = require('readline-sync');
const mes = Number(readlineSync.question("Ingrese numero del mes: ")) - 1;
if (mes == 0 || mes == 2 || mes == 4 || mes == 6 || mes == 7 || mes == 9 || mes == 11){
    diasMes = 31;
}else if (mes == 3 || mes == 5 || mes == 8 || mes == 10) {
    diasMes = 30;
}else
diasMes = 28;
console.log("La cantidad de dias del mes de " + meses[mes] + " es " + diasMes + ".");