
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
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
];

let hamburguesas = [
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }
];

let Chefs = [
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
];

//algoritmo

boleano = true;

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

    if(opcionPrincipal === 1) {

    let opcionIngredientes = parseInt( prompt(`====================================
    GESTION DE INGREDIENTES

    A continuacion seleccione una opcion:
    
    1. Crear ingrediente
    2. Consultar ingredientes
    3. Actualizar ingrediente
    4. Eliminar ingrediente
    5. Volver al menú principal
    
    ====================================`));


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

    else if (opcionIngredientes === 2) {

        alert(JSON.stringify(ingredientes, null, 2))
    }

    
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

    else if (opcionIngredientes === 5) {
       alert("Regresando al menú principal...")
    }
    
    else {
        alert(" Opción no valida, Intenta de nuevo");
};
    }

    //

    else if (opcionPrincipal === 2) {

        let opcionPedido = parseInt( prompt(`====================================
            GESTION DE PEDIDOS

            Seleccione una opcion:
            1.Añadir Pedido
            2.Eliminar Pedido
            3.Consultar Pedido

            `));
       
        if(opcionPedido === 1) {

        
                let nombreIngrediente =prompt(`====================================
                
                    A continuacion ingrese nombre`);
                
        
                let descripcionIngrediente =prompt(`====================================
            
                
                    A continuacion ingres la descripcion`);
                
        
                let precioIngrediente =prompt(`===================================
                
                    A continuacion ingrese el precio`);
                
        
                let chef =prompt(`====================================
                
                    A continuacion ingrese el chef`);
        
                let id = listaGastos.length > 0 ? Math.max(...listaGastos.map(g => g.id)) + 1 : 1;
        
                
                   let  nuevoIngrediente = {
                    "id": id,
                    "nombre": nombreIngrediente,
                    "descripcion": descripcionIngrediente,
                    "precio": precioIngrediente,
                    "Chef": chef
                   };
                    
        
               let guardarCancelarIng = prompt(`Ingrese 's' para guardar el ingrediente  o 'c' para cancelar `).toLowerCase();
        
        
        
               if (guardarCancelarIng === "s") {
        
                    ingredientes.push(nuevoIngrediente)
            
                    alert(JSON.stringify(ingredientes))
               }
            
    }  
    
}

    else if (opcionPrincipal === 3) {

    let opcionCategorias = parseInt( prompt(`====================================
        GESTION DE CATEGORIAS

        Seleccione una opcion:
        1.Añadir Categoria
        2.Eliminar Categoria
        3.Consultar Categoria
        `));

}

    else if(opcionPrincipal === 4) {
        let opcionChefs = parseInt( prompt(`====================================
        GESTION DE CHEFS

        Seleccione una opcion:
        1.Añadir Categoria
        2.Eliminar Categoria
        3.Consultar Categoria
        `));


}

    else if(opcionPrincipal === 5) {

         alert("cerrando el programa, vuelve pronto...")
        boleano = false;

    }

    else {
        alert(" Opción no valida, Intenta de nuevo");
};
}