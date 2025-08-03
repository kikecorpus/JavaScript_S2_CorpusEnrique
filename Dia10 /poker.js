let deckId = null;
let cartasHold = [];
let mano = [];   
let remaining1 = 52

// Barajar el mazo
function armarMazo() {
  const xhr = new XMLHttpRequest();
  const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    
    if (xhr.readyState === 4 && xhr.status === 200) {

       //logica aqui
      const mazoDeCartas = JSON.parse(xhr.responseText);
      deckId = mazoDeCartas.deck_id;
      console.log(mazoDeCartas) 
      console.log(deckId)

      //resetar 
      cartasHold = [];

      MazoMesa()
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
      remaining1 = cartas.remaining
      console.log(cartas);
      console.log(remaining1)
    
      //imprimir y selecionar las  5 cartas
    for (let i = 0; i < 5; i++) {
      const carta = mano[i];
      const cartaImg = document.getElementById(`carta${i + 1}`);
      cartaImg.src = carta.image;
      cartaImg.onclick = function () {
      cartaImg.classList.toggle("seleccionada");
      }
    }
  };
 
}

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
  }}

// cambiar las cartas seleccionadas no seleccionadas 
function pedir(){

  guardarHold()

let cantidadCambiar = 5 - cartasHold.length;

  
      if(cantidadCambiar === 0) {

        mano = cartasHold
        verNuevaMano()
        return
      };

        const xhr = new XMLHttpRequest();
        const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cantidadCambiar}`;

        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {

          if (xhr.readyState === 4 && xhr.status === 200) {

            const nuevasCartas = JSON.parse(xhr.responseText).cards;

            remaining1 = JSON.parse(xhr.responseText).remaining
            let nuevaMano = [];
            let contador = 0;

            for (let i = 0; i < 5; i++) {
               const cartaImg = document.getElementById(`carta${i + 1}`);

              if (cartaImg.classList.contains("seleccionada")) {
              nuevaMano.push(cartasHold.shift());}

              else {
                nuevaMano.push(nuevasCartas[contador]);
                contador++;}
            }
           
              mano = nuevaMano;
              if (mano.length === 5) {
              verNuevaMano();
            } else {
              console.error("Error: no se pudo construir la mano completa", mano);
            }

            console.log(mano)
            console.log(remaining1)
            reconocerMano()
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

function reconocerMano(){ 

const convertirCartas = {
"ACE": 14, "KING": 13, "QUEEN": 12, "JACK": 11,
"10": 10, "9": 9, "8": 8, "7": 7, "6": 6,
"5": 5, "4": 4, "3": 3, "2": 2
};

//extraer valor nuevos  y palos
let nuevosValores = mano.map(carta => convertirCartas[carta.value]);
let categoria = mano.map(palo => palo.suit);

console.log(nuevosValores)
console.log(categoria)

// contar pares o trios, o poker 
let diccionarioPares = {}

nuevosValores.forEach( valor => {diccionarioPares[valor] = (diccionarioPares[valor] || 0) + 1;

console.log(diccionarioPares)
  
}); 

//verificar si existe 1 par 
let pares = [];
let trio = [];
let poker = []

for (let valor in diccionarioPares) {

  if (diccionarioPares[valor] === 2) {
    pares.push(parseInt(valor)); 
  }
  else if (diccionarioPares[valor] === 3) {
    trio.push(parseInt(valor)); 
  }

  else if (diccionarioPares[valor] === 4) {
  poker.push(parseInt(valor)); 
  }
}
  // verificar si tiene poker
  if (poker.length === 1){
  console.log("Tienes poker")
  }
  // verificar si existe trio
  else if (trio.length === 1){
    console.log("Tienes trio")
  }
  //verificar si tiene par 
  else if (pares.length === 2) {
  console.log("Tienes doble par")
  }
 //verificar si tiene dobrepar 
  else if ((pares.length === 1) && (pares[0] > 10)) {
  console.log("Tienes un par de j o mas");
  } 
 }


// algoritmo
armarMazo()

document.getElementById("pedir").onclick = pedir;

      

