function buscarPersonaje(){

    const nombreUsar = document.getElementById("searchPokemon").value.trim().toLowerCase();
    const xhr = new XMLHttpRequest();
    const url = `https://pokeapi.co/api/v2/pokemon/${nombreUsar}`;
    console.log(url);

    xhr.open("GET",url,true);
    xhr.onreadystatechange = function (){

        if(xhr.readyState===4 && xhr.status === 200){

            try{

                const daticos = JSON.parse(xhr.responseText);

                let imgPokemon = daticos.sprites.front_default

                document.getElementById("imgPokemon").src = imgPokemon

                document.getElementById("idNombre").textContent =  daticos.id + " - " + daticos.name
            }

            catch(err){
                console.log(err.message); 
        }
    };

}

xhr.send();

 }

 document.getElementById("searchPokemon").addEventListener("input", buscarPersonaje);
