let deckId = null;
let carta1 = null
let carta2 = null
let carta3 = null
let carta4 = null
let carta5 = null
// Barajar el mazo
function armarMazo() {
  const xhr = new XMLHttpRequest();
  const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const mazoDeCartas = JSON.parse(xhr.responseText);
      deckId = mazoDeCartas.deck_id;
      console.log(mazoDeCartas) 
      console.log(deckId)
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
      console.log(cartas)
    
 for (let i = 0; i < 5; i++) {
  const carta = cartas.cards[i];
  const cartaImg = document.getElementById(`carta${i + 1}`);
  cartaImg.src = carta.image;
}

    }
  };
  xhr.send();
}

//seleecionar cartas 

function hold(){



}

armarMazo()
console.log(carta1)
console.log(carta2)
console.log(carta3)
console.log(carta4)
console.log(carta5)
      

