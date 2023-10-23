//Declarar de variables necesarias fuera de cualquier función
let partidas = [];
let userSelection;
let per;
let maq;

//La función iniGame se inicia al presionar el boton
function iniGame(userSelection, per, maq) {
  for (let i = 0; i < 3; i++) {
    userSelection = prompt("Eliga piedra papel o tijera");
    per = validacion(userSelection);
    if (per != undefined) {
      maq = generador();
      jugar(per, maq);
    } else i--;
  }
  resultados();
}

function validacion(userSelection) {
  if (isNaN(userSelection)) {
    let a = userSelection.toLowerCase();
    if (a == "piedra" || a == "papel" || a == "tijera") {
      return a;
    } else alert("Se ingreso una opción incorrecto");
  } else alert("No se ingreso texto");
}
function generador() {
  let x = Math.round(Math.random() * 8);
  if (x <= 2) {
    return "piedra";
  }
  if (x <= 5) {
    return "papel";
  } else return "tijera";
}
function resultados() {
  let humano = 0;
  let maquina = 0;
  let empate = 0;
  for (let x = 0; x < partidas.length; x++) {
    if (partidas[x] == "gana") {
      humano++;
    }
    if (partidas[x] == "pierde") {
      maquina++;
    } else empate++;
  }

  if (humano > maquina) {
    document.write("<h2>Humano Gana</h2>");
  }
  if (maquina > humano) {
    document.write("<h2>Maquina Gana</h2>");
  }
  if (humano == maquina) {
    document.write("<h2>Empate</h2>");
  }
}

function jugar(per, maq) {
  console.log("Persona elige: " + per);
  console.log("Maquina elige: " + maq);
  if (per != maq) {
    if (
      (per == "piedra" && maq == "tijera") ||
      (per == "tijera" && maq == "papel") ||
      (per == "papel" && maq == "piedra")
    ) {
      console.log("PERSONA GANA");
      document.write("<p>Ganaste</p>");
      partidas.push("gana");
    }
    if (
      (per == "tijera" && maq == "piedra") ||
      (per == "papel" && maq == "tijera") ||
      (per == "piedra" && maq == "papel")
    ) {
      console.log("MAQUINA GANA");

      document.write("<p>Perdiste</p>");
      partidas.push("pierde");
    }
  } else {
    console.log("EMPATE");
    document.write("<p>Empataste</p>");
    partidas.push("empata");
  }
}

//Escribir contraseña correcta
let contrasenia = "losGatosSonLoMejor5689.";
let login;
login = prompt("Escriba la contraseña");
while (login != "losGatosSonLoMejor5689.") {
  alert("Contraseña incorrecta");
  login = prompt("Vuelva a escribir la contraseña");
}alert("Contraseña Correcta!");
