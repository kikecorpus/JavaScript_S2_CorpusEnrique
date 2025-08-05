//variables globales que voy a necesitar
let deckId = null;
let cartasHold = [];
let mano = [];
let remaining1 = 52;
let resultado = document.getElementById("resultado");

// animacion intro 

  const video = document.getElementById("intro");

  video.addEventListener("ended", () => {
    document.getElementById("contenedorIntro").style.display = "none";
    document.getElementById("todo").style.display = "block";
  });


//desactivar boton repartir 
document.getElementById("repartir").disabled = true;

// Barajar el mazo
function armarMazo() {
  const xhr = new XMLHttpRequest();
  const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      //logica aqui
      const mazoDeCartas = JSON.parse(xhr.responseText);

      //voltear cartas
      for (let i = 0; i < 5; i++) {
        const cartaImg = document.getElementById(`carta${i + 1}`);

        cartaImg.src = "https://deckofcardsapi.com/static/img/back.png";
      }

      deckId = mazoDeCartas.deck_id;
      console.log(mazoDeCartas);
      console.log(deckId);

      //resetar
      cartasHold = [];

      //activar boton repartir
      document.getElementById("repartir").disabled = false;

      //desactivar boton jugar
      document.getElementById("jugar").disabled = true;

      //poner cartas en mesa
      MazoMesa();
      //resetar resultado
      resultado.textContent = "";
      //ocultar el resultado
      document.getElementById("resultados").style.display = "none";
    }
  };
  xhr.send();
}

//poner 5 cartas en pantalla
function MazoMesa() {
  const xhr = new XMLHttpRequest();
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`;

  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      
      const cartas = JSON.parse(xhr.responseText);
      mano = cartas.cards;
      remaining1 = cartas.remaining;
      console.log(cartas);
      console.log(remaining1);

      //imprimir y selecionar las  5 cartas
      for (let i = 0; i < 5; i++) {
        const carta = mano[i];
        const cartaImg = document.getElementById(`carta${i + 1}`);
        cartaImg.src = carta.image;
        cartaImg.onclick = function () {
        cartaImg.classList.toggle("seleccionada") 

        };
      }
    }
  };

  xhr.send();
}

//guardar cartas seleccionadas
function guardarHold() {
  cartasHold = [];

  for (let i = 0; i < 5; i++) {
    const cartaImg = document.getElementById(`carta${i + 1}`);

    if (cartaImg.classList.contains("seleccionada")) {
      cartasHold.push(mano[i]);
    }
  }
}

// cambiar las cartas seleccionadas no seleccionadas
function pedir() {
  guardarHold();

  let cantidadCambiar = 5 - cartasHold.length;

  if (cantidadCambiar === 0) {
    mano = cartasHold;
    verNuevaMano();
    return;
  }

  const xhr = new XMLHttpRequest();
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cantidadCambiar}`;

  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const nuevasCartas = JSON.parse(xhr.responseText).cards;

      remaining1 = JSON.parse(xhr.responseText).remaining;
      let nuevaMano = [];
      let contador = 0;

      for (let i = 0; i < 5; i++) {
        const cartaImg = document.getElementById(`carta${i + 1}`);

        if (cartaImg.classList.contains("seleccionada")) {
          nuevaMano.push(cartasHold.shift());
        } else {
          nuevaMano.push(nuevasCartas[contador]);
          contador++;
        }
      }

      mano = nuevaMano;
      if (mano.length === 5) {
        verNuevaMano();
      } else {
        console.error("Error: no se pudo construir la mano completa", mano);
      }

      console.log(mano);
      console.log(remaining1);

      //decir resultado
      reconocerMano();
      //desabilitar boton pedir
      document.getElementById("repartir").disabled = true;
      //habilitar boton jugar
      document.getElementById("jugar").disabled = false;

      //ocultar el resultado
      document.getElementById("resultados").style.display = "block";
    }
  };

  xhr.send();
}
//mostrar nuevas cartas
function verNuevaMano() {
  for (let i = 0; i < 5; i++) {
    const carta = mano[i];
    const cartaImg = document.getElementById(`carta${i + 1}`);
    cartaImg.src = carta.image;
    cartaImg.classList.remove("seleccionada");
    cartaImg.onclick = function () {
      cartaImg.classList.toggle("seleccionada");
    };
  }
  
}

function reconocerMano() {
  const puntajeParrafo = document.getElementById("puntaje");
  let puntaje = parseInt(puntajeParrafo.textContent);
  const convertirCartas = {
    ACE: 14,
    KING: 13,
    QUEEN: 12,
    JACK: 11,
    10: 10,
    9: 9,
    8: 8,
    7: 7,
    6: 6,
    5: 5,
    4: 4,
    3: 3,
    2: 2,
  };

  //extraer valor nuevos  y palos
  let nuevosValores = mano.map((carta) => convertirCartas[carta.value]);
  let categoria = mano.map((palo) => palo.suit);

  console.log(nuevosValores);
  console.log(categoria);

  //mirar si hay escalera
//ordernar
  let valoresOrdenados = [...nuevosValores].sort((a, b) => a - b);


  //mirar si hay esclaera baja 
  let esEscaleraBaja = false;

  if (
  valoresOrdenados.includes(14) &&
  valoresOrdenados.includes(2) &&
  valoresOrdenados.includes(3) &&
  valoresOrdenados.includes(4) &&
  valoresOrdenados.includes(5)
  ) {
  esEscaleraBaja = true;
  }
  let esEscalera = true;

  for (let i = 0; i < valoresOrdenados.length - 1; i++) {
    if (valoresOrdenados[i + 1] !== valoresOrdenados[i] + 1) {
      esEscalera = false;
      break;
    }
  }

  //mirar si hay color
  const manoColor = categoria.every((palo) => palo === categoria[0]);

  // contar pares o trios, o poker
  let diccionarioPares = {};

  nuevosValores.forEach((valor) => {
    diccionarioPares[valor] = (diccionarioPares[valor] || 0) + 1;

    console.log(diccionarioPares);
  });

  //mirar si existe 1 par
  let pares = [];
  let trio = [];
  let poker = [];

  for (let valor in diccionarioPares) {
    if (diccionarioPares[valor] === 2) {
      pares.push(parseInt(valor));
    } else if (diccionarioPares[valor] === 3) {
      trio.push(parseInt(valor));
    } else if (diccionarioPares[valor] === 4) {
      poker.push(parseInt(valor));
    }
  }


  //verificar si tiene escalera real 

  if ((esEscalera  == true) && (manoColor == true) && (valoresOrdenados[0]> 9)) {
    resultado.textContent ="Tienes Escalera Real";
    puntaje += 250;

     const rEscalera = document.getElementById("rEscalera");
      rEscalera.style.display = "block"
      
    document.getElementById("contenedorR").style.display = "block";

    rEscalera.addEventListener("ended", () => {
      document.getElementById("contenedorR").style.display = "none";
      rEscalera.style.display = "none"})


  } 

  //verificar si tiene escalera color 
  else if ((esEscalera  == true) && (manoColor == true)) {
    resultado.textContent ="Tienes Escalera Color";
    puntaje += 50;

     const rEscalera = document.getElementById("rEscalera");
      rEscalera.style.display = "block"
      
    document.getElementById("contenedorR").style.display = "block";

    rEscalera.addEventListener("ended", () => {
      document.getElementById("contenedorR").style.display = "none";
      rEscalera.style.display = "none"})

    if(puntaje === 20) {

      document.getElementById()

    }

  } 

   // verificar si tiene poker
 else if (poker.length === 1) {
    resultado.textContent = "Tienes Poker";
    puntaje += 25;

     const rEscalera = document.getElementById("rEscalera");
      rEscalera.style.display = "block"
      
    document.getElementById("contenedorR").style.display = "block";

    rEscalera.addEventListener("ended", () => {
      document.getElementById("contenedorR").style.display = "none";
      rEscalera.style.display = "none"})

  }
  //varificar FullHouse
  else if (trio.length === 1 && pares.length === 1) {
    resultado.textContent = "Tienes Full House";
    puntaje += 9;

     const rEscalera = document.getElementById("rEscalera");
      rEscalera.style.display = "block"
      
    document.getElementById("contenedorR").style.display = "block";

    rEscalera.addEventListener("ended", () => {
      document.getElementById("contenedorR").style.display = "none";
      rEscalera.style.display = "none"})

  }

  //verificar si tiene color
  else if (manoColor == true) {
    resultado.textContent = "Tienes Color";
    puntaje += 6;

    const rEscalera = document.getElementById("rEscalera");
      rEscalera.style.display = "block"
      
    document.getElementById("contenedorR").style.display = "block";

    rEscalera.addEventListener("ended", () => {
      document.getElementById("contenedorR").style.display = "none";
      rEscalera.style.display = "none"})


  }
  //verifica si es escalera
  else if (esEscalera || esEscaleraBaja) {
    resultado.textContent ="Tienes escalera";
    puntaje += 4;

    const rTrio = document.getElementById("rTrio");
      rTrio.style.display = "block"
      
    document.getElementById("contenedorR").style.display = "block";

    rTrio.addEventListener("ended", () => {
      document.getElementById("contenedorR").style.display = "none";
      rTrio.style.display = "none"})

  } 
 
  // verificar si existe trio
  else if (trio.length === 1) {
    resultado.textContent = "Tienes trio";
    puntaje += 3;

     const rTrio = document.getElementById("rTrio");
      rTrio.style.display = "block"
      
    document.getElementById("contenedorR").style.display = "block";

    rTrio.addEventListener("ended", () => {
      document.getElementById("contenedorR").style.display = "none";
      rTrio.style.display = "none"})

  }

  //verificar si tiene dobrepar
  else if (pares.length === 2) {
    resultado.textContent = "Tienes doble par";
    puntaje += 2;
     const rPar = document.getElementById("rPar");
      rPar.style.display = "block"
      
    document.getElementById("contenedorR").style.display = "block";

    rPar.addEventListener("ended", () => {
      document.getElementById("contenedorR").style.display = "none";
      rPar.style.display = "none"

  })}

  //verificar si tiene par
  else if (pares.length === 1 && pares[0] > 10) {
    resultado.textContent = "Tienes un par de j o mas";
    puntaje += 1;
      const rPar = document.getElementById("rPar");
      rPar.style.display = "block"
      
    document.getElementById("contenedorR").style.display = "block";

    rPar.addEventListener("ended", () => {
      document.getElementById("contenedorR").style.display = "none";
      rPar.style.display = "none"
  });
  }

  //mano perdida
  else {
    resultado.textContent = "mano perdida";
    puntaje -= 1;
  }
  puntajeParrafo.textContent = puntaje;
}

// algoritmo

document.getElementById("jugar").addEventListener("click", armarMazo);

document.getElementById("repartir").onclick = pedir;

//Abrir modal de reglas y tabla
document.addEventListener('DOMContentLoaded', () => {

  const abrirTabla = document.getElementById('apuesta');
  const cerrar = document.querySelector('.cerrar');
  const ventanita = document.getElementById('tarifas');

  abrirTabla.addEventListener('click', () => {
    ventanita.style.display = 'block';
  });

  cerrar.addEventListener('click', () => {
    ventanita.style.display = 'none';
  });

  const botoncitoReglas = document.getElementById("reglas");
  const ventanitaReglas = document.getElementById("ventanitaReglas");
  const cerrarReglas = ventanitaReglas.querySelector(".cerrar");

  botoncitoReglas.addEventListener("click", () => {
    ventanitaReglas.style.display = "block";
  });

  cerrarReglas.addEventListener("click", () => {
    ventanitaReglas.style.display = "none";
  });

});



