const horas1 = document.getElementById("horas");
const minutos1 = document.getElementById("minutos");
const segundos1 = document.getElementById("segundos");
const botonConfirmar = document.getElementById("aplicar");

const horaTotal = document.getElementById("cronometro");

let horas = 0,
  minutos = 0,
  segundos = 0;

let intervalo;

function aplicar() {
  horas = parseInt(horas1.value);
  minutos = parseInt(minutos1.value);
  segundos = parseInt(segundos1.value);
}

function mostrarMensaje() {
  let section = document.getElementById("generado");
  console.log(section);
  let parrafoNuevo = document.createElement("h6");
  parrafoNuevo.innerText = `NUMERO APLICADO, APRETAR PLAY PARA INICIAR`;
  parrafoNuevo.className = "text-dark text-center mt-5";
  section.appendChild(parrafoNuevo);
}

function funcionamiento() {
  segundos--;
  if (segundos < 0) {
    segundos = 59;
    minutos--;
  }

  if (minutos < 0) {
    minutos = 59;
    horas--;
  }

  if (horas === 00 && minutos === 00 && segundos === 00) {
    clearInterval(intervalo);
  }

  const seg = segundos < 10 ? "0" + segundos : segundos;
  const min = minutos < 10 ? "0" + minutos : minutos;
  const hr = horas < 10 ? "0" + horas : horas;

  horaTotal.innerHTML = `${hr}:${min}:${seg}`;
}

function iniciar() {
  intervalo = setInterval(funcionamiento, 1000);
}

function pausa() {
  clearInterval(intervalo);
}
