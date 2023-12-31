class piedraPapelTijera {
  constructor() {

    this.nombre = this.pedirNombre();

  }

  pedirNombre() {

    let nombre = prompt("Como te llamas ?").toLowerCase();
    return this.mayuscula(nombre);

  }

  mayuscula(txt) {

    return txt.charAt(0).toUpperCase() + txt.slice(1);

  }

  opciones() {

    const OPCIONES_VALIDAS = ["piedra", "papel", "tijera"];

    let opcionUsuario = prompt(
      `${this.nombre}: Piedra Papel o Tijera`
    ).toLowerCase();

    while (!OPCIONES_VALIDAS.includes(opcionUsuario)) {

      opcionUsuario = prompt(
        `Por favor ${this.nombre} elige: Piedra Papel o Tijera`
      ).toLowerCase();

    }
    return opcionUsuario;
  }

  combinaciones(opcionUsuario, opcionRandom) {

    const GANADORAS = [
      ["piedra", "tijera"],
      ["papel", "piedra"],
      ["tijera", "papel"],
    ];
    
    let usuarioGana = false;

    GANADORAS.forEach((com) => {

      if (com[0] === opcionUsuario && com[1] === opcionRandom) {
        usuarioGana = true;
      }
      
    });

    if (usuarioGana) {

      return `Felicitaciones ${this.mayuscula(this.nombre)}! Ganaste`;

    } else if (opcionUsuario === opcionRandom) {

      return "Empate";

    } else {

      return "Computadora gana!";

    }
  }

  iniciarJuego() {
    let continuar = true;

    while (continuar) {

      const esRulo = this.nombre.toLowerCase() === "rulo19";

      if (esRulo) {

        alert(`${this.nombre} Ganaste crack!! `);
        this.nombre = this.pedirNombre();
        continue;

      } else {

        const opcionUsuario = this.opciones();

        const opcionPc = Math.floor(Math.random() * 3);
        const opciones = ["piedra", "papel", "tijera"];
        const opcionPcRandom = opciones[opcionPc];

        alert(`

          ${this.nombre}: ${opcionUsuario}
          Computadora: ${opcionPcRandom}

        `);

        const resultado = this.combinaciones(opcionUsuario, opcionPcRandom);

        alert(resultado);
      }

      continuar = confirm("Queres jugar de nuevo ?");

      if (continuar) {

        this.resetear();

      }
    }
  }

  resetear() {}
}

const JUEGO = new piedraPapelTijera();
JUEGO.iniciarJuego();


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
