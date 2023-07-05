const readlineSync = require('readline-sync');
const PI = "piedra";
const PA = "papel";
const TI = "tijeras";
let jugada = ["piedra","papel","tijeras"];
function obtenerJugadaComputadora() {
    let jugadaComputadora = Math.floor(Math.random() * 3);
    return jugada[jugadaComputadora];
    ;
}
function obtenerJugadaUsuario() {
    let i = 3;
    while (i >= jugada.length) {
      const jugadaUsuar = (readlineSync.question("Ingrese una jugada: ")).toLowerCase();
    switch (jugadaUsuar) {
      case PI: 
      i = 0
      return jugadaUsuar;
        break;
      case PA: 
      i = 1
      return jugadaUsuar;
      break;
      case TI: 
      i = 2
      return jugadaUsuar;
        break;
      default:
        console.log("Jugada incorrecta");
        i = 3;
        break;
    } 
    }
  }
function determinarGanador(jugadaComputador,jugadaUsuario) {
  if (jugadaComputador == jugadaUsuario) {
    return "Empate";
  } else if ((jugadaComputador == PI && jugadaUsuario == TI) || (jugadaComputador == PA && jugadaUsuario == PI) || (jugadaComputador == TI && jugadaUsuario == PA)) {
    return "Gana la computadora";
  } else return "Gana el usuario";
}
//let jugadaComputador = obtenerJugadaComputadora();
//let jugadaUsuario = obtenerJugadaUsuario();
//let resultado = determinarGanador(jugadaComputador,jugadaUsuario);
//console.log("La computadora eligio: " + jugadaComputador);
//console.log("El usuario eligio: " + jugadaUsuario);
//console.log("El resultado fue: " + resultado);

function rondasDeJuego() {
  let jugadas = Number(readlineSync.question("En cuantos jugadas quiere terminar el juego?: "));
  let puntajeComputador = 0;
  let puntajeUsuario = 0;
  while (jugadas > 0) {
    let jugadaComputador = obtenerJugadaComputadora();
    let jugadaUsuario = obtenerJugadaUsuario();
    let resultado = determinarGanador(jugadaComputador,jugadaUsuario);
    console.log("La computadora eligio: " + jugadaComputador);
    console.log("El usuario eligio: " + jugadaUsuario);
    console.log("El resultado fue: " + resultado);
    jugadas--;
    if (resultado == "Gana la computadora") {
      puntajeComputador++;
    } else if (resultado == "Gana el usuario") {
      puntajeUsuario++
    }
  }
  console.log(puntajeComputador);
console.log(puntajeUsuario);
  if (puntajeComputador > puntajeUsuario) {
    return "Juego ganado por el Computador";
  } else if (puntajeComputador === puntajeUsuario) {
    return "Juego empatado";
  } else return "juego ganado por el Usuario";
}
console.log(rondasDeJuego());