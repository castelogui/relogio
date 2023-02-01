const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const sol = document.querySelector(".sol");
const lua = document.querySelector(".lua");
const conteudo = document.querySelector(".content");

function setClock() {
  var date = new Date();
  var hora = date.getHours();
  var minuto = date.getMinutes();
  var segundo = date.getSeconds();

  if (hora < 10) {
    hora = "0" + hora;
  }
  if (minuto < 10) {
    minuto = "0" + minuto;
  }
  if (segundo < 10) {
    segundo = "0" + segundo;
  }
  if (hora > 6 || hora < 18) {
    lua.classList.add("off");
    sol.classList.add("on");
    lua.classList.remove("on");
    sol.classList.remove("off");
    conteudo.classList.add("light");
    conteudo.classList.remove("dark");
  }
  if (hora > 18 || hora < 6) {
    lua.classList.add("on");
    sol.classList.add("off");
    lua.classList.remove("off");
    sol.classList.remove("on");
    conteudo.classList.add("dark");
    conteudo.classList.remove("light");
  }

  var clock = String(hora + ":" + minuto + ":" + segundo);
  document.querySelector(".clock-digital").innerHTML = clock;
  setClockAnalogico(hora, minuto, segundo);
}

function setClockAnalogico(hr, min, seg) {
  hr = 30 * hr + 0.5 * min;
  min = 6 * min;
  seg = 6 * seg;
  document.querySelector(
    ".pt-h"
  ).style.transform = `translate(-50%,-100%) rotate(${hr}deg)`;
  document.querySelector(
    ".pt-m"
  ).style.transform = `translate(-50%,-100%) rotate(${min}deg)`;
  document.querySelector(
    ".pt-s"
  ).style.transform = `translate(-50%,-100%) rotate(${seg}deg)`;
}

function setDate() {
  var date = new Date();
  var dia = date.getDate();
  var mes = date.getMonth();
  var ano = date.getFullYear();

  if (dia < 10) {
    dia = "0" + dia;
  }

  document.querySelector(".dia").innerHTML = dia;
  document.querySelector(".mes").innerHTML = meses[mes];
  document.querySelector(".ano").innerHTML = ano;
}

function main() {
  setClock();
  setDate();
}

var button = document.getElementById("switch-shadow");
button.addEventListener("click", () => {
  var digital = document.querySelector(".clock-digital");
  var analogico = document.querySelector(".clock-analogico");
  if (digital.classList[1] == "on") {
    digital.classList.remove("on");
    digital.classList.add("off");
    analogico.classList.add("on");
    analogico.classList.remove("off");
  } else if (analogico.classList[1] == "on") {
    digital.classList.add("on");
    digital.classList.remove("off");
    analogico.classList.remove("on");
    analogico.classList.add("off");
  }
});

main();
setInterval(() => {
  main();
}, 1000);
