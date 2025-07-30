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
                alert("The character is: Name: " + daticos["results"][0]["name"] +
                " Height: " + daticos["results"][0]["height"] +
                " Mass: " + daticos["results"][0]["mass"] +
                " Gender: " + daticos["results"][0]["gender"] +
                " Birth Year: " + daticos["results"][0]["birth_year"]);
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