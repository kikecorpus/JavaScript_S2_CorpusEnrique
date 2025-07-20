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
}

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
}

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
}

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
}

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
}

function verGuardarReporte() {
    console.log("*** Nota: la opcion #2 guarda el reporte en un archivo externo para consultar el reporte luego ***\n");
    console.log("Selecciona una opcion:\n");

    let opcionMostrarReporte = prompt("1. Ver Reporte \n2. Guardar Reporte en un archivo externo\n>>> ");
    return opcionMostrarReporte;
}


