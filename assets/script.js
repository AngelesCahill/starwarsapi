const URL_BASE = "https://swapi.dev/api/people";
let datos1;
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

  
  async function getApi(url) {
    const response = await fetch(url);
    const res = await response.json();
    return res;
}
  
function paintCard(character, fila) {
    fila.innerHTML += ` 
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <div id="tarjSola" class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${character.name}"</h5>
                <p class="card-text">Estatura: "${character.height}"</p>
                <p class="card-text">Peso: "${character.mass}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
}

  //rango 1
  async function* tarjetaGenerador1() {
    filas1.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      let personaje = await getApi(URL_BASE + '/' + i);
      paintCard(personaje, filas1);
      yield personaje.name;
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
      rango1.style.display = "none";
    }
  };
  //fin rango 1
  //rango 2
    async function* tarjetaGenerador2() {
      filas2.innerHTML = "";
      for (let i = 6; i <= 10; i++) {
        let personaje = await getApi(URL_BASE + "/" + i);
        paintCard(personaje, filas2);
        yield personaje.name;
      }
    }

    const revelaPersonaje2 = (event) => {
      event.preventDefault();
      if (!notGo) {
        const { value, done } = gen2.next();
        console.log("value:", value);
        console.log("done:", done);
        notGo = done;
      } else {
        console.log("Nada más que mostrar");
        rango2.style.display = "none";
      }
    };
  // fin rango 2

    //rango 3
    async function* tarjetaGenerador3() {
      filas3.innerHTML = "";
      for (let i = 11; i <= 15; i++) {
        let personaje = await getApi(URL_BASE + "/" + i);
        paintCard(personaje, filas3);
        yield personaje.name;
      }
    }

    const revelaPersonaje3 = (event) => {
      event.preventDefault();
      if (!notGo) {
        const { value, done } = gen3.next();
        console.log("value:", value);
        console.log("done:", done);
        notGo = done;
      } else {
        console.log("Nada más que mostrar");
        rango3.style.display = "none";
      }
    };
  // fin rango 3


document.addEventListener("DOMContentLoaded", async () => {
  gen = tarjetaGenerador1();
  rango1.addEventListener("mouseover", revelaPersonaje1);

  gen2 = tarjetaGenerador2();
  rango2.addEventListener("mouseover", revelaPersonaje2);
  
  gen3 = tarjetaGenerador3();
  rango3.addEventListener("mouseover", revelaPersonaje3);


});
