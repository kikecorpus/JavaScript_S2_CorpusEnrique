let deckId = null;
let cartasHold = [];
let mano = [];   

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
      console.log(cartas);

    
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


armarMazo()


      

