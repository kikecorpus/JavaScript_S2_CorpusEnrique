
//Data 
let ingredientes = [ {
        "id": 1,
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },




    {   "id": 2,
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {   "id": 3,
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }] ;

let categorias = [
    {   "id":1,
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {   "id": 2,
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {   "id": 3,
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
];

let hamburguesas = [
    {   "id": 1, 
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {   "id": 2,
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {   "id": 3,
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }
];

let Chefs = [
    {   "id": 1,
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {   "id": 2,
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {   "id": 3,
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
];

//algoritmo


let boleano = true;

while (boleano === true) {

    let  opcionPrincipal = parseInt( prompt(`====================================
        Bienvenido a la plataforma de
        la cafeteria Campuslamds

    A continuacion seleccione una opcion:
    1. Ingredientes.
    2. Hamburguesas.
    3. Categorias.
    4. Chefs.
    5. salir.
    ====================================`));
//Ingredientes
    if(opcionPrincipal === 1) {
    //menu
    let opcionIngredientes = parseInt( prompt(`====================================
    GESTION DE INGREDIENTES

    A continuacion seleccione una opcion:
    
    1. Crear ingrediente
    2. Consultar ingredientes
    3. Actualizar ingrediente
    4. Eliminar ingrediente
    5. Volver al menú principal
    
    ====================================`));

    //crear
    if (opcionIngredientes === 1) {

        
        let nombreIngrediente =prompt(`===================================
        
            A continuacion ingrese el nombre del ingrediente`);
        

        let descripcionIngrediente =prompt(`====================================
       
        
            A continuacion ingrese la descripcion del ingrediente`);
        

        let precioIngrediente = parseFloat( prompt(`====================================
        
            A continuacion ingrese el precio del ingrediente`));
        

        let stockIngrediente = parseInt(prompt(`====================================
        
            A continuacion ingrese la cantidad del ingrediente`));

        let id = ingredientes.length > 0 ? Math.max(...ingredientes.map(g => g.id)) + 1 : 1;

        
           let  nuevoIngrediente = {
            "id": id,
            "nombre": nombreIngrediente,
            "descripcion": descripcionIngrediente,
            "precio": precioIngrediente,
            "stock": stockIngrediente
           };
            

       let guardarCancelarIng = prompt(`Ingrese 's' para guardar el ingrediente  o 'c' para cancelar `).toLowerCase();



       if (guardarCancelarIng === "s") {

            ingredientes.push(nuevoIngrediente)
    
            alert(JSON.stringify(nuevoIngrediente))
       }
}
    //consultar
    else if (opcionIngredientes === 2) {

        alert(JSON.stringify(ingredientes, null, 2))
    }

    //actualizar
    else if (opcionIngredientes === 3) {

        let idActualizar = parseInt(prompt("Ingresa el ID del ingrediente que deseas actualizar:"));

        let buscarID = ingredientes.findIndex(ingrediente => ingrediente.id === idActualizar);

        if (buscarID !== -1) {
            alert("Ingrediente actual:\n" + JSON.stringify(ingredientes[buscarID], null, 2));

        let nuevoNombre = prompt("Nuevo nombre:", ingredientes[buscarID].nombre);
        let nuevaDescripcion = prompt("Nueva descripción:", ingredientes[buscarID].descripcion);
        let nuevoPrecio = parseFloat(prompt("Nuevo precio:", ingredientes[buscarID].precio));
        let nuevoStock = parseInt(prompt("Nuevo stock:", ingredientes[buscarID].stock));

        ingredientes[buscarID].nombre = nuevoNombre;
        ingredientes[buscarID].descripcion = nuevaDescripcion;
        ingredientes[buscarID].precio = nuevoPrecio;
        ingredientes[buscarID].stock = nuevoStock;

        alert("Ingrediente actualizado con exito:\n" + JSON.stringify(ingredientes[buscarID], null, 2));
        } 
        
        else {
        alert(" No se encontro ningún ingrediente con ese ID");
        }

    }
    //eliminar
    else if (opcionIngredientes === 4) {

        let idEliminar = parseInt(prompt("Ingresa el ID del ingrediente que deseas eliminar:"));

        let buscarEliminar = ingredientes.findIndex(ingrediente => ingrediente.id === idEliminar);

    if (buscarEliminar !== -1) {

        let eliminarCancelarIng = prompt(`Si desear eliminar el ingrediente ingresa 'eliminar' de lo contrario presiona cancelar `).toLowerCase();

        if (eliminarCancelarIng === "eliminar"){
            ingredientes.splice(buscarEliminar, 1); 
            alert("Ingrediente eliminado con Exito");
        }

        else {
        alert("OperaciOn cancelada");
        }
        
    }

}
    //salir
    else if (opcionIngredientes === 5) {
       alert("Regresando al menú principal...")
    }
    //validacion
    else {
        alert(" Opción no valida, Intenta de nuevo");
};
    }
//hamburguesas
    else if (opcionPrincipal === 2) {

        let opcionPedido =  parseInt(prompt(`      HAMBURGUESAS 
        1. Crear hamburguesa
        2. Ver hamburguesas
        3. Actualizar hamburguesa
        4. Eliminar hamburguesa
        5. Volver al menú principal`));
       //crear
        if(opcionPedido === 1) {

        let ingredienteHamb=[]            
        let nombre = prompt("Nombre de la hamburguesa:");
        let categoria = prompt("Categoría:");
        
        let numIng = parseInt(prompt("cuantos ingredientes desea ingresar"))
        for (let i = 1; i <= numIng ; i++ ){

         let ingrediente1 = prompt("Ingresa el ingrediente numero" + i);
         ingredienteHamb.push(ingrediente1)
        }
      
        let precio = parseFloat(prompt("Precio:"));
        let chef = prompt("Nombre del chef:");

        let idH = hamburguesas.length > 0 ? Math.max(...hamburguesas.map(h => h.id)) + 1 : 1;


        let nuevaHamburguesa = {
                "id": idH,
                "nombre": nombre,
                "categoria": categoria,
                "ingredientes":ingredienteHamb,
                "precio":precio,
                "chef":chef
            };

        hamburguesas.push(nuevaHamburguesa);
        alert("Hamburguesa creada con éxito.\n"+ JSON.stringify(nuevaHamburguesa));
        
    }
        //consultar
        else if(opcionPedido === 2){

            alert(JSON.stringify(hamburguesas, null, 2))
        }
        //actualizar
        else if(opcionPedido === 3){

            idActualizar = parseInt(prompt("ingresa el ID de la hamburgesa que desear actualizar la informacion"))

            buscarID = hamburguesas.findIndex(hamb => hamb.id === idActualizar)

            if (buscarID !== -1) {
            alert("Hamburgesa encontrada:\n" + JSON.stringify(hamburguesas[buscarID], null, 2));
                let nuevoNombre = prompt("Nuevo nombre:", hamburguesas[buscarID].nombre);
            let nuevaCategoria = prompt("Nueva categoría:", hamburguesas[buscarID].categoria);
            
            let nuevosIngredientes = [];
            let numIngredientes = parseInt(prompt("¿Cuantos ingredientes desea ingresar nuevamente?"));
            for (let i = 1; i <= numIngredientes; i++) {
                let nuevoIng = prompt("Ingrediente #" + i);
                nuevosIngredientes.push(nuevoIng);
            }

            let nuevoPrecio = parseFloat(prompt("Nuevo precio:", hamburguesas[buscarID].precio));
            let nuevoChef = prompt("Nuevo nombre del chef:", hamburguesas[buscarID].chef);

            hamburguesas[buscarID].nombre = nuevoNombre;
            hamburguesas[buscarID].categoria = nuevaCategoria;
            hamburguesas[buscarID].ingredientes = nuevosIngredientes;
            hamburguesas[buscarID].precio = nuevoPrecio;
            hamburguesas[buscarID].chef = nuevoChef;

            alert(" Hamburguesa actualizada con exito:\n" + JSON.stringify(hamburguesas[buscarID], null, 2));
            }
        }

        //eliminar
        else if(opcionPedido === 4){

        let idEliminar = parseInt(prompt("Ingresa el ID de la hamburguesa que deseas eliminar:"));

        let buscarEliminar = hamburguesas.findIndex(hambn => hambn.id === idEliminar);

        if (buscarEliminar !== -1) {

        let eliminarCancelarIng = prompt(`Si desear eliminar la hamburguesa ingresa 'eliminar' de lo contrario presiona cancelar `).toLowerCase();

        if (eliminarCancelarIng === "eliminar"){
            hamburguesas.splice(buscarEliminar, 1); 
            alert("Hamburguesa eliminada con Exito");
        }

        else {
        alert("OperaciOn cancelada");
        }
        }
        else if(opcionPedido === 5){}
    
}
}
//categorias
    else if (opcionPrincipal === 3) {
        //menu
        let opcionPedido =  parseInt(prompt(`      CATEGORIAS
        1. Crear Categorias
        2. Ver Categorias
        3. Actualizar Categorias
        4. Eliminar Categorias
        5. Volver al menú principal`));
       //crear
        if(opcionPedido === 1) {
          
        let nombre = prompt("Nombre de la Categoria:");
        let categoria = prompt("Descripcion:");
        



        let idH = categorias.length > 0 ? Math.max(...categorias.map(h => h.id)) + 1 : 1;


        let nuevaCategoria = {
                "id": idH,
                "nombre": nombre,
                "descripcion": categoria,
            };

        categorias.push(nuevaCategoria);
        alert("Categorias creada con éxito.\n"+ JSON.stringify(nuevaCategoria));
        
        }
        //consultar
        else if(opcionPedido === 2){

            alert(JSON.stringify(categorias, null, 2))
        }
        //actualizar    
        else if(opcionPedido === 3){

            idActualizar = parseInt(prompt("ingresa el ID de la categoria que desear actualizar la informacion"))

            buscarID = categorias.findIndex(hamb => hamb.id === idActualizar)

            if (buscarID !== -1) {
            alert("Categoria encontrada:\n" + JSON.stringify(categorias[buscarID], null, 2));
                let nuevoNombre = prompt("Nuevo nombre:", categorias[buscarID].nombre);
                let nuevaDescripcion = prompt("Nueva descripcion:", categorias[buscarID].descripcion);
            
           
            categorias[buscarID].nombre = nuevoNombre;
            categorias[buscarID].descripcion = nuevaDescripcion;

            alert(" Categorias actualizada con exito:\n" + JSON.stringify(categorias[buscarID], null, 2));
            }
        }
        //eliminar
        else if (opcionPedido === 4) {

        let idEliminar = parseInt(prompt("Ingresa el ID de la categorias que deseas eliminar:"));

        let buscarEliminar = categorias.findIndex(hambn => hambn.id === idEliminar);

        if (buscarEliminar !== -1) {

        let eliminarCancelarIng = prompt(`Si desear eliminar la categorias ingresa 'eliminar' de lo contrario presiona cancelar `).toLowerCase();

        if (eliminarCancelarIng === "eliminar"){
            categorias.splice(buscarEliminar, 1); 
            alert("Categoria eliminada con Exito");
        }

        else {
        alert("OperaciOn cancelada");
        }
        }
        else if(opcionPedido === 5){}
    }

}
//chefs
    else if(opcionPrincipal === 4) {
        //menu
        let opcionPedido =  parseInt(prompt(`      CHEFS
        1. Crear Chefs
        2. Ver Chefs
        3. Actualizar Chefs
        4. Eliminar Chefs
        5. Volver al menú principal`));
        
        //crear
        if(opcionPedido === 1) {
            
            let nombre = prompt("Nombre del Chefs:");
            let especialidad = prompt("Especialidad:");
            

            let idH = Chefs.length > 0 ? Math.max(...Chefs.map(h => h.id)) + 1 : 1;


            let nuevoChefs = {
                    "id": idH,
                    "nombre": nombre,
                    "especialidad": especialidad,
                };

            Chefs.push(nuevoChefs);
            alert("Chefs creado con éxito.\n"+ JSON.stringify(nuevoChefs));
            
        }
        //consultar
        else if(opcionPedido === 2){

            alert(JSON.stringify(Chefs, null, 2))
        }
        //actualizar
        else if(opcionPedido === 3){

            idActualizar = parseInt(prompt("ingresa el ID de la Chefs que desear actualizar la informacion"))

            buscarID = Chefs.findIndex(hamb => hamb.id === idActualizar)

            if (buscarID !== -1) {
            alert("Chefs encontrado:\n" + JSON.stringify(Chefs[buscarID], null, 2));
                let nuevoNombre = prompt("Nuevo nombre:", Chefs[buscarID].nombre);
                let nuevaEspecialidad = prompt("Nueva especialidad:", Chefs[buscarID].especialidad);
            
        
                Chefs[buscarID].nombre = nuevoNombre;
                Chefs[buscarID].especialidad = nuevaEspecialidad;

            alert(" Chef actualizado con exito:\n" + JSON.stringify(Chefs[buscarID], null, 2));
            }
        }
        //eliminar
        else if (opcionPedido === 4) {

        let idEliminar = parseInt(prompt("Ingresa el ID de la Chefs que deseas eliminar:"));

        let buscarEliminar = Chefs.findIndex(hambn => hambn.id === idEliminar);

        if (buscarEliminar !== -1) {

        let eliminarCancelarIng = prompt(`Si desear eliminar la Chefs ingresa 'eliminar' de lo contrario presiona cancelar `).toLowerCase();

        if (eliminarCancelarIng === "eliminar"){
            Chefs.splice(buscarEliminar, 1); 
            alert("Chefs eliminado con exito");
        }

        else {
        alert("OperaciOn cancelada");
        }
        }
        else if(opcionPedido === 5){}
    }

}
//salir
    else if(opcionPrincipal === 5) {

         alert("cerrando el programa, vuelve pronto...")
        boleano = false;

    }
//validacion
    else {
        alert(" Opción no valida, Intenta de nuevo");
};
}