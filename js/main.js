




































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