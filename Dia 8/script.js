function buscarPersonaje(){
    const nombreUsar= prompt("Ingresar el nombre del personaje a buscar:");
    const xhr = new XMLHttpRequest();
    const url = `https://swapi.py4e.com/api/people/?search=${nombreUsar}`;
    console.log(url);
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function (){

        if(xhr.readyState===4 && xhr.status === 200){

            try{

                const daticos = JSON.parse(xhr.responseText);

                //conectar mediante el id el los parrafos para cada info 
                let name = document.getElementById("name");
                let height = document.getElementById("height");
                let mass = document.getElementById("mass");
                let hair_color = document.getElementById("hair_color");
                let skin_color = document.getElementById("skin_color");
                let eye_color = document.getElementById("eye_color");
                let birth_year = document.getElementById("birth_year");
                let gender = document.getElementById("gender");
                let homeworld = document.getElementById("homeworld");
                let films = document.getElementById("films");
                let species = document.getElementById("species");
                let vehicles = document.getElementById("vehicles");
                let starships = document.getElementById("starships");
                let created = document.getElementById("created");
                let edited = document.getElementById("edited");
                let url = document.getElementById("url");


                // modificar el dom     
                let dataExacta = daticos.results[0]
                name.textContent = "Name: " + datos.name;
                height.textContent = "Height: " + datos.height;
                mass.textContent = "Mass: " + datos.mass;
                hair_color.textContent = "Hair Color: " + datos.hair_color;
                skin_color.textContent = "Skin Color: " + datos.skin_color;
                eye_color.textContent = "Eye Color: " + datos.eye_color;
                birth_year.textContent = "Birth Year: " + datos.birth_year;
                gender.textContent = "Gender: " + datos.gender;
                homeworld.textContent = "Homeworld: " + datos.homeworld;
                films.textContent = "Films: " + datos.films.join(", ");
                species.textContent = "Species: " + datos.species.join(", ");
                vehicles.textContent = "Vehicles: " + datos.vehicles.join(", ");
                starships.textContent = "Starships: " + (datos.starships.length > 0 ? datos.starships.join(", ") : "None");
                created.textContent = "Created: " + datos.created;
                edited.textContent = "Edited: " + datos.edited;
                url.textContent = "URL: " + datos.url;



            }
            catch(err){
                console.log(err.message); 
        }
    };
    xhr.send();
}


buscarPersonaje();
 }

 /*
 "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "name": "Leia Organa",
            "height": "150",
            "mass": "49",
            "hair_color": "brown",
            "skin_color": "light",
            "eye_color": "brown",
            "birth_year": "19BBY",
            "gender": "female",
            "homeworld": "https://swapi.py4e.com/api/planets/2/",
            "films": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/2/",
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/6/",
                "https://swapi.py4e.com/api/films/7/"
            ],
            "species": [
                "https://swapi.py4e.com/api/species/1/"
            ],
            "vehicles": [
                "https://swapi.py4e.com/api/vehicles/30/"
            ],
            "starships": [],
            "created": "2014-12-10T15:20:09.791000Z",
            "edited": "2014-12-20T21:17:50.315000Z",
            "url": "https://swapi.py4e.com/api/people/5/"
       */