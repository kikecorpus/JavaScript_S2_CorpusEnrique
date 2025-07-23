//menus

function principalMenu() {
    console.log("=============================================");
    console.log("         Simulador de Gasto Diario           ");
    console.log("=============================================");
    console.log("Seleccione una opcion:\n");
    console.log("1. Modificar los gastos");
    console.log("2. Listar gastos");
    console.log("3. Calcular total de gastos");
    console.log("4. Generar reportes de gastos");
    console.log("5. Salir");
    console.log("=============================================");

    let opcionNumerica = prompt(">>> Ingresa tu opcion:\n>>> ");
    return opcionNumerica;
};

function ModificarOpcion1Menu() {
    console.log("\n=============================================");
    console.log("            Modificar los gastos             ");
    console.log("=============================================");
    console.log("1. Registrar nuevo gasto");
    console.log("2. Actualizar información de un gasto");
    console.log("3. Eliminar un gasto");
    console.log("4. Recuperar gasto eliminado");
    console.log("5. Regresar al menú principal");
    console.log("=============================================");

    let opcionModificar = prompt(">>> Ingresa tu opción:\n>>> ");
    return opcionModificar;
};

function ListarOpcion2Menu() {
    console.log("\n=============================================");
    console.log("               Listar Gastos                 ");
    console.log("=============================================");
    console.log("Seleccione una opción para filtrar los gastos:");
    console.log("1. Ver todos los gastos");
    console.log("2. Ver gasto específico");
    console.log("3. Filtrar por categoría");
    console.log("4. Filtrar por rango de fechas");
    console.log("5. Regresar al menú principal");
    console.log("=============================================");

    let opcionListar = prompt(">>> Ingresa tu opcion:\n>>> ");
    return opcionListar;
};

function CalcularOpcion3Menu() {
    console.log("\n=============================================");
    console.log("          Calcular Total de Gastos           ");
    console.log("=============================================");
    console.log("Seleccione el periodo de cálculo:");
    console.log("1. Calcular total diario");
    console.log("2. Calcular total semanal");
    console.log("3. Calcular total mes");
    console.log("4. Regresar al menú principal");
    console.log("=============================================");

    let opcionCalcular = prompt(">>> Ingresa tu opcion:\n>>> ");
    return opcionCalcular;
};

function ReporteOpcion4Menu() {
    console.log("\n=============================================");
    console.log("         Generar Reporte de Gastos           ");
    console.log("=============================================");
    console.log("Seleccione el tipo de reporte:");
    console.log("1. Reporte diario");
    console.log("2. Reporte semanal");
    console.log("3. Reporte mensual");
    console.log("4. Regresar al menú principal");
    console.log("=============================================");

    let opcionReporte = prompt(">>> Ingresa tu opcion:\n>>> ");
    return opcionReporte;
};

function verGuardarReporte() {
    console.log("*** Nota: la opcion #2 guarda el reporte en un archivo externo para consultar el reporte luego ***\n");
    console.log("Selecciona una opcion:\n");

    let opcionMostrarReporte = prompt("1. Ver Reporte \n2. Guardar Reporte en un archivo externo\n>>> ");
    return opcionMostrarReporte;
};


// DATA
const dataGastos = {
    data: [
        {
            id: 1,
            monto: 45000,
            categoria: "transporte",
            descripcion: "Taxi al trabajo",
            fecha: "2025-05-01"
        },
        {
            id: 2,
            monto: 25000,
            categoria: "comida",
            descripcion: "Almuerzo en restaurante",
            fecha: "2025-04-15"
        }
    ],


};

// FUNCIONES

function registrarGastos(dataGastos1) {
    const listaGastos = dataGastos1;

    console.log("\n=============================================");
    console.log("           Registrar Nuevo Gasto           ");
    console.log("=============================================");

    let cantidadRegistrar = parseInt(prompt("Ingresa la cantidad de gastos que deseas registrar:\n>>> "));

    for (let i = 1; i <= cantidadRegistrar; i++) {
        console.log("\n=============================================");
        console.log("           Registrar Gasto #"+ i);
        console.log("=============================================");

        let montoGasto = parseFloat(prompt("-. Ingrese el monto del gasto:\n>>> "));
        let categoriaGasto = prompt("-. Ingrese la categoria del gasto:\n>>> ").toLowerCase();
        let descripcionGasto = prompt("-. Ingrese la descripción del gasto (opcional):\n>>> ").toLowerCase();

        let fecha = "";

          while (true) {
            console.log("\n-. Ingrese la Fecha en que realizó el gasto:");
            console.log("     1. Fecha actual");
            console.log("     2. Fecha personalizada");

            let opcionFecha = parseInt(prompt(">>> Selecciona una opción:\n>>> "));

            if (opcionFecha === 1) {
                fecha = new Date().toISOString().split("T")[0];
                break;
                
            } else if (opcionFecha === 2) {
                let anio = parseInt(prompt("   Año (YYYY): "));
                let mes = parseInt(prompt("   Mes (MM): ")) - 1;
                let dia = parseInt(prompt("   Día (DD): "));
                fecha = new Date(anio, mes, dia).toISOString().split("T")[0];
                break;
            } else {
                console.log("\nOpción inválida. Ingresa una opción entre '1' y '2'.");
            }
        }

    
    let id = listaGastos.length > 0 ? Math.max(...listaGastos.map(g => g.id)) + 1 : 1;

    const nuevoGasto = {
      id: id,
      monto: montoGasto,
      categoria: categoriaGasto,
      descripcion: descripcionGasto,
      fecha: fecha
    };

      
    let guardarCancelar = "";
    while (guardarCancelar !== "salir") {
      console.log("Ingrese 'S' para guardar o 'C' para cancelar");
      guardarCancelar = prompt(">>> Ingresa tu opción:\n>>> ").toLowerCase();

      if (guardarCancelar === "s") {
        listaGastos.push(nuevoGasto); 
        console.log("\n-*--*- Gasto añadido exitosamente -*--*-");
        console.table([nuevoGasto]);
        guardarCancelar = "salir";

      } else if (guardarCancelar === "c") {
        console.log("\n-*--*- Gasto no añadido -*--*-");
        guardarCancelar = "salir";
      } else {
        console.log("\nIngresa una opción válida entre 's' o 'c'");
      }
    }

    console.log("=============================================");
   
  }

   return listaGastos;

};


function verGastos(dataGastos1) { 

  let dataGastos = dataGastos1

  console.table(dataGastos)

}

function verGastoCategoria(dataGastos1){

  let dataGastos = dataGastos1

  console.log("ingrese la Categoria que desea filtrar")
    let categoriaing = prompt("")
    listaCategorias = dataGastos.filter((categoria) == categoriaing)
    console.table =(listaCategorias)
}

function 

// PRINCIPAL


let opcionPrincipal = parseInt(principalMenu());

console.log(opcionPrincipal);

if (opcionPrincipal === 1) {
  let opcionModificar = parseInt(ModificarOpcion1Menu());
  console.log(opcionModificar)

  if (opcionModificar === 1) {
    let lista =  registrarGastos(); 
    dataGastos[data].push(lista)
    console.table(lista)
  };

}


else if (opcionPrincipal === 2) {

  let opcionListar= ListarOpcion2Menu()

  if (opcionListar === 1){

    verGastos()
  }

  else if (opcionListar ===2){


  }





  }

  else if(opcionModificar === 3){
    
  }


;
 

   