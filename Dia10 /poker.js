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
  
      if (remaining1 <= 5) {
        console.log("No hay suficientes cartas, barajando nuevo mazo...");
        cargarNuevoMazo(() => {
          pedir(); 
        });
        return;
      };
  
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

//impedir que se acaben las cartas
//no me funciona esta pendiente por arreglar 
function cargarNuevoMazo(callback){ const xhr = new XMLHttpRequest();
  const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
  
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    
    if (xhr.readyState === 4 && xhr.status === 200) {

      let rebarajado = JSON.parse(xhr.responseText);
      remaining1 = rebarajado.remaining;
      
      deckId = rebarajado.deck_id;

      callback()

    }
}
xhr.send(); 
}

armarMazo()

document.getElementById("pedir").onclick = pedir;

      

