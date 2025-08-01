function buscarPersonaje(){

    const nombreUsar = document.getElementById("searchInput").value.trim().toLowerCase();
    const xhr = new XMLHttpRequest();
    const url = `https://pokeapi.co/api/v2/pokemon/${nombreUsar}`;
    console.log(url);

    xhr.open("GET",url,true);


    xhr.onreadystatechange = function (){

        if(xhr.readyState===4 && xhr.status === 200){

            try{

                const daticos = JSON.parse(xhr.responseText);

                //conectar mediante el id el los parrafos para cada info 
                let name = document.getElementById("name");
           


                // modificar el dom     
                let datos = daticos.results[0]
                name.textContent = "Name: " + datos.name;

            }
            catch(err){
                console.log(err.message); 
        }
    };

}
xhr.send();
 }

 document.getElementById("botonBuscar").addEventListener("click", buscarPersonaje);
