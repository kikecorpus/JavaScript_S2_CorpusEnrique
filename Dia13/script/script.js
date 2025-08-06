function buscarPersonaje () {

    let input = document.getElementById("valorInput");
    valorInput = input.value 
    
    let imgbase = document.getElementById("imgHero")
    imgbase.src = ""
    
    
    let api = new XMLHttpRequest();
    
    let url = `https://superheroapi.com/api.php/f702cf4ae56af61e1c8943a621c6637b/search/${valorInput}`;  


    api.open("GET", url, true) ;

    api.onreadystatechange = function() {

        if(api.readyState === 4 && api.status === 200 ) {

        console.log("cargo la api")
        let  data =  JSON.parse(api.responseText);
        let heroe = data.results[0]
        let imgHero = heroe.image.url
        
        imgbase.src = imgHero
       
        document.getElementById("nombre").textContent = heroe.name;
    
        document.getElementById("nombreReal").textContent = heroe.biography["full-name"];
        document.getElementById("primeraAparicion").textContent = heroe.biography["first-appearance"];
        document.getElementById("afiliacion").textContent = heroe.connections["group-affiliation"];
        document.getElementById("base").textContent = heroe.work.base;

        document.getElementById("inteligencia").textContent = heroe.powerstats.intelligence;
        document.getElementById("fuerza").textContent = heroe.powerstats.strength;
        document.getElementById("velocidad").textContent = heroe.powerstats.speed;
        document.getElementById("durabilidad").textContent = heroe.powerstats.durability;
        document.getElementById("poder").textContent = heroe.powerstats.power;
        document.getElementById("combate").textContent = heroe.powerstats.combat;

        };
    };

    api.send()
}

let botonBuscar = document.getElementById("botonBuscar");
botonBuscar.addEventListener("click",buscarPersonaje )