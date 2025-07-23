
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
    1.Ingredientes.
    2.Pedidos
    3.Categorias
    4.Cheft
    5.salir
    ====================================`));

    if(opcionPrincipal === 1) {

    let opcionIngredientes = parseInt( prompt(`====================================
    GESTION DE INGREDIENTES

    A continuacion seleccione una opcion:
    1. Añadir Ingredientes.
    2. Eliminar Ingredientes.
    3. Consultar Ingredientes.
    4.regresar al menu Principal
    ====================================`));


    if (opcionIngredientes === 1) {

        
        let nombreIngrediente =prompt(`====================================
        AÑADIR INGREDIENTE
        
            A continuacion ingrese nombre del ingrediente`);
        

        let descripcionIngrediente =prompt(`====================================
            DESCRIPCION INGREDIENTE
        
            A continuacion ingres la descripcion del ingrediente`);
        

        let precioIngrediente =prompt(`====================================
            AÑADIR INGREDIENTE
        
            A continuacion ingrese el precio del ingrediente`);
        

        let stockIngrediente =prompt(`====================================
            AÑADIR INGREDIENTE
        
            A continuacion ingrese la cantidad del ingrediente`);

        let id = listaGastos.length > 0 ? Math.max(...listaGastos.map(g => g.id)) + 1 : 1;

        
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
    
            window.prompt(JSON.stringify(ingredientes))
       }

}

    else if (opcionIngredientes === 2) {

        let eliminarId = prompt(`Ingresa el id del gasto que deseas eliminar`)

        let nuevaListaE = ingredientes.filter((ingredientes["id"]) == eliminarId)
        prompt(JSON.stringify(nuevaListaE))
        }

      

    else if (opcionIngredientes === 3) {

        console.table(ingredientes)

    }

    else if (opcionIngredientes === 4) {


    }


}

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
            
                    window.prompt(JSON.stringify(ingredientes))
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


        boleano = false;

    }
};