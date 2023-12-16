class piedraPapelTijera {

  pedirNombre() {

    let nombre = prompt('Como te llamas ?').toLowerCase();
    return this.mayuscula(nombre);

  }

  mayuscula(txt) {

    return txt.charAt(0).toUpperCase() + txt.slice(1);

  }

  opciones() {

    const OPCIONES_VALIDAS = ['piedra', 'papel', 'tijera'];
    let opcionUsuario = prompt(
      `
      ${nombreUsuario} elige:
      Piedra
      Papel
      Tijera
      `
    ).toLowerCase();

    while (!OPCIONES_VALIDAS.includes(opcionUsuario)) {

      opcionUsuario = prompt(
        `
        Por favor ${nombreUsuario} elige:
        Piedra
        Papel
        Tijera
        `
      ).toLowerCase();

    }

    return opcionUsuario;

  }
}

const JUEGO = new piedraPapelTijera();

let nombreUsuario = JUEGO.pedirNombre();

if (nombreUsuario.toLowerCase() === 'rulo19') {

  alert(`Ganaste crack. Te regalamos un jamon por llamarte ${nombreUsuario}`);

} else {

  let opcionElegida = JUEGO.opciones(); 

};












// ~~~~~~~~~~~~~~~~~~~~ CÓDIGO DE LA PRIMER PRE ENTREGA ~~~~~~~~~~~~~~~~~~~~

/* let nombre = prompt("Como es su nombre ?").toLowerCase();

if (nombre === "rulo19") {
  alert("Ganaste crack!");
} else {
  juegoPiedraPapelTijera();
}

// No se como hacer si el nombre no es rulo 19, la primer letra sea en Mayuscula

function juegoPiedraPapelTijera() {
  function usuario() {
    let opcionUsuario = prompt("Elegí: Piedra, Papel o Tijera").toLowerCase();

    while (
      opcionUsuario !== "piedra" &&
      opcionUsuario !== "papel" &&
      opcionUsuario !== "tijera"
    ) {
      opcionUsuario = prompt(
        "Por favor, ingrese: Piedra, Papel o Tijera"
      ).toLocaleLowerCase();
    }

    return opcionUsuario;
  }

  const opcionElegida = usuario();
  const opcionPc = Math.floor(Math.random() * 3);

  let opcionPcRandom;

  if (opcionPc === 0) {
    opcionPcRandom = "piedra";
  } else if (opcionPc === 1) {
    opcionPcRandom = "papel";
  } else {
    opcionPcRandom = "tijera";
  }

  alert(nombre + " eligió: " + opcionElegida);
  alert("Computadora eligió: " + opcionPcRandom);

  if (opcionElegida === opcionPcRandom) {
    alert("Empataron!");
  } else if (
    (opcionElegida === "piedra" && opcionPcRandom === "tijera") ||
    (opcionElegida === "papel" && opcionPcRandom === "piedra") ||
    (opcionElegida === "tijera" && opcionPcRandom === "papel")
  ) {
    alert("Ganaste " + nombre + "!!!");
  } else {
    alert("Lo sentimos. La computadora gana");
  }
}
 */