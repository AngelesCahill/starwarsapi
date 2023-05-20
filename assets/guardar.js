const URL_BASE1 = "https://swapi.dev/api/people/?page=1";
const URL_BASE2 = "https://swapi.dev/api/people/?page=2";
let datos;
let datos2;
let datos3;
let group1 = [];
let group2 = [];
let group3 = [];
let notGo = false;
let notGo2 = false;
let notGo3 = false;
let filas1 = document.getElementById("filas1");
let filas2 = document.getElementById("filas2");
let filas3 = document.getElementById("filas3");
let rango1 = document.getElementById("rango1");
let rango2 = document.getElementById("rango2");
let rango3 = document.getElementById("rango3");

async function getApi1() {
  const response = await fetch(URL_BASE1);
  const res = await response.json();
  datos = res.results;
  for (i = 0; i < 5; i++) {
    let data1 = datos[i];
    let transf = group1.push(data1);
  }
}
getApi1();

async function getApi2() {
  const response = await fetch(URL_BASE1);
  const res = await response.json();
  datos1 = res.results;
  for (i = 5; i < 10; i++) {
    let data1 = datos1[i];
    let transf = group2.push(data1);
  }
}
getApi2();

async function getApi3() {
  const response = await fetch(URL_BASE2);
  const res = await response.json();
  datos2 = res.results;
  for (i = 0; i < 5; i++) {
    let data = datos2[i];
    let transf = group3.push(data);
  }
}
getApi3();

console.log("group1: ", group1);
console.log("group2: ", group2);
console.log("group3: ", group3);
//rango 1
function* tarjetaGenerador1(datos) {
  filas1.innerHTML = "";
  for (i = 0; i < 5; i++) {
    yield i.name;
    filas1.innerHTML += ` 
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <div id="tarjSola" class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${datos[i].name}"</h5>
                <p class="card-text">Estatura: "${datos[i].height}"</p>
                <p class="card-text">Peso: "${datos[i].mass}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

const revelaPersonaje1 = (event) => {
  event.preventDefault();
  if (!notGo) {
    const { value, done } = gen.next();
    console.log("value:", value);
    console.log("done:", done);
    notGo = done;
  } else {
    console.log("Nada más que mostrar");
    datos = undefined;
    rango1.style.display = "none";
  }
};
//fin rango 1

document.addEventListener("DOMContentLoaded", async () => {
  const results = await fetch(URL_BASE1);
  const response = await results.json();
  datos = response.results;
  console.log("datos:", datos);
  gen = tarjetaGenerador1(datos);
  gen.next();
  rango1.addEventListener("mouseover", revelaPersonaje1);
});
