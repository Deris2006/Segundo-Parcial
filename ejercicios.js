// EJERCICIO 1: Calculadora de Promedio de Notas

function calcularPromedio(notas) {
    // si no hay notas, mostramos error
    if (notas.length == 0) {
        console.log("Error: no hay notas");
        return;
    }
    
    let suma = 0;
    
    // sumar todas las notas
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }
    
    // calcular promedio
    let promedio = suma / notas.length;
    
    // ver si aprobo o no
    let resultado;
    if (promedio >= 6.0) {
        resultado = "Aprobó";
    } else {
        resultado = "Reprobó";
    }
    
    console.log("--- Ejercicio 1 ---");
    console.log("Promedio: " + promedio.toFixed(2));
    console.log("Estado: " + resultado);
    console.log("");
}

// prueba ejercicio 1
let misNotas = [7.5, 8.0, 6.5, 9.0, 7.0];
calcularPromedio(misNotas);



// EJERCICIO 2: Registro de Productos

let productos = []; // aqui guardamos los productos

// agregar producto nuevo
function agregarProducto(nombre, precio, cantidad) {
    if (precio <= 0 || cantidad < 0) {
        console.log("Error: precio o cantidad invalidos");
        return;
    }
    
    let producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };
    
    productos.push(producto);
    console.log("Se agrego: " + nombre);
}

// mostrar todos los productos
function mostrarProductos() {
    console.log("\n--- Lista de Productos ---");
    
    if (productos.length == 0) {
        console.log("No hay productos");
        return;
    }
    
    for (let i = 0; i < productos.length; i++) {
        console.log("\nProducto " + (i + 1) + ":");
        console.log("Nombre: " + productos[i].nombre);
        console.log("Precio: $" + productos[i].precio);
        console.log("Stock: " + productos[i].cantidad);
    }
}

// calcular cuanto vale todo
function calcularInventario() {
    let total = 0;
    
    for (let i = 0; i < productos.length; i++) {
        let valor = productos[i].precio * productos[i].cantidad;
        total = total + valor;
    }
    
    console.log("\n--- Valor Total ---");
    console.log("$" + total.toFixed(2));
    console.log("");
}

// pruebas ejercicio 2
agregarProducto("Laptop", 800, 5);
agregarProducto("Mouse", 15.5, 20);
agregarProducto("Teclado", 45, 15);
mostrarProductos();
calcularInventario();


// EJERCICIO 3: Sistema de Estudiantes

let estudiantes = [];

function registrarEstudiante(nombre, carne, edad, notas) {
    if (notas.length == 0) {
        console.log("Error: el estudiante necesita notas");
        return;
    }
    
    // calcular el promedio del estudiante
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }
    let promedio = suma / notas.length;
    
    let estudiante = {
        nombre: nombre,
        carne: carne,
        edad: edad,
        notas: notas,
        promedio: promedio
    };
    
    estudiantes.push(estudiante);
    console.log("Estudiante registrado: " + nombre);
}

function mejorEstudiante() {
    if (estudiantes.length == 0) {
        console.log("No hay estudiantes");
        return;
    }
    
    let mejor = estudiantes[0];
    
    for (let i = 1; i < estudiantes.length; i++) {
        if (estudiantes[i].promedio > mejor.promedio) {
            mejor = estudiantes[i];
        }
    }
    
    console.log("\n--- Mejor Estudiante ---");
    console.log("Nombre: " + mejor.nombre);
    console.log("Promedio: " + mejor.promedio.toFixed(2));
}

function mostrarEstudiantesOrdenados() {
    console.log("\n--- Estudiantes Ordenados por Promedio ---");
    
    // ordenar de mayor a menor
    let ordenados = estudiantes.slice();
    for (let i = 0; i < ordenados.length; i++) {
        for (let j = i + 1; j < ordenados.length; j++) {
            if (ordenados[i].promedio < ordenados[j].promedio) {
                let temp = ordenados[i];
                ordenados[i] = ordenados[j];
                ordenados[j] = temp;
            }
        }
    }
    
    for (let i = 0; i < ordenados.length; i++) {
        console.log("\n" + (i + 1) + ". " + ordenados[i].nombre);
        console.log("   Carné: " + ordenados[i].carne);
        console.log("   Promedio: " + ordenados[i].promedio.toFixed(2));
    }
    console.log("");
}

// pruebas ejercicio 3
registrarEstudiante("Juan Perez", "2024001", 19, [8.5, 7.0, 9.0, 8.0]);
registrarEstudiante("Maria Lopez", "2024002", 20, [9.5, 9.0, 8.5, 10.0]);
registrarEstudiante("Carlos Ruiz", "2024003", 18, [7.0, 6.5, 8.0, 7.5]);
mejorEstudiante();
mostrarEstudiantesOrdenados();


// ========================================
// EJERCICIO 4: Carrito de Compras
// ========================================

let carrito = [];

function agregarAlCarrito(nombre, precio, cantidad) {
    if (cantidad <= 0 || precio <= 0) {
        console.log("Error: cantidad o precio invalido");
        return;
    }
    
    // buscar si ya existe
    let encontrado = false;
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre == nombre) {
            carrito[i].cantidad = carrito[i].cantidad + cantidad;
            encontrado = true;
            console.log("Se agrego mas cantidad de: " + nombre);
            break;
        }
    }
    
    // si no existe, lo agregamos
    if (!encontrado) {
        let item = {
            nombre: nombre,
            precio: precio,
            cantidad: cantidad
        };
        carrito.push(item);
        console.log("Producto agregado al carrito: " + nombre);
    }
}

function eliminarDelCarrito(nombre) {
    let indice = -1;
    
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre == nombre) {
            indice = i;
            break;
        }
    }
    
    if (indice != -1) {
        carrito.splice(indice, 1);
        console.log("Producto eliminado: " + nombre);
    } else {
        console.log("No se encontro el producto");
    }
}

function modificarCantidad(nombre, nuevaCantidad) {
    if (nuevaCantidad <= 0) {
        console.log("Error: cantidad debe ser mayor a 0");
        return;
    }
    
    let encontrado = false;
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre == nombre) {
            carrito[i].cantidad = nuevaCantidad;
            encontrado = true;
            console.log("Cantidad actualizada para: " + nombre);
            break;
        }
    }
    
    if (!encontrado) {
        console.log("Producto no encontrado");
    }
}

function calcularTotal() {
    let subtotal = 0;
    
    for (let i = 0; i < carrito.length; i++) {
        subtotal = subtotal + (carrito[i].precio * carrito[i].cantidad);
    }
    
    let descuento = 0;
    if (subtotal > 100) {
        descuento = subtotal * 0.10;
    }
    
    let total = subtotal - descuento;
    
    return {
        subtotal: subtotal,
        descuento: descuento,
        total: total
    };
}

function mostrarResumen() {
    console.log("\n--- Resumen de Compra ---");
    
    if (carrito.length == 0) {
        console.log("Carrito vacio");
        return;
    }
    
    console.log("\nProductos en el carrito:");
    for (let i = 0; i < carrito.length; i++) {
        console.log("- " + carrito[i].nombre + " x" + carrito[i].cantidad + " = $" + (carrito[i].precio * carrito[i].cantidad).toFixed(2));
    }
    
    let totales = calcularTotal();
    console.log("\nSubtotal: $" + totales.subtotal.toFixed(2));
    console.log("Descuento: $" + totales.descuento.toFixed(2));
    console.log("TOTAL: $" + totales.total.toFixed(2));
    console.log("");
}

// pruebas ejercicio 4
agregarAlCarrito("Camisa", 25, 2);
agregarAlCarrito("Pantalon", 35, 1);
agregarAlCarrito("Zapatos", 60, 1);
modificarCantidad("Camisa", 3);
mostrarResumen();


// ========================================
// EJERCICIO 5: Sistema de Citas Medicas
// ========================================

let doctores = [];
let citas = [];

function registrarDoctor(nombre, especialidad, codigo) {
    let doctor = {
        nombre: nombre,
        especialidad: especialidad,
        codigo: codigo
    };
    
    doctores.push(doctor);
    console.log("Doctor registrado: " + nombre);
}

function agendarCita(nombrePaciente, codigoDoctor, fecha, hora, motivo) {
    // verificar que el doctor existe
    let doctorExiste = false;
    for (let i = 0; i < doctores.length; i++) {
        if (doctores[i].codigo == codigoDoctor) {
            doctorExiste = true;
            break;
        }
    }
    
    if (!doctorExiste) {
        console.log("Error: el doctor no existe");
        return;
    }
    
    // verificar que no haya otra cita a esa hora
    for (let i = 0; i < citas.length; i++) {
        if (citas[i].codigoDoctor == codigoDoctor && citas[i].fecha == fecha && citas[i].hora == hora) {
            console.log("Error: el doctor ya tiene cita a esa hora");
            return;
        }
    }
    
    let cita = {
        nombrePaciente: nombrePaciente,
        codigoDoctor: codigoDoctor,
        fecha: fecha,
        hora: hora,
        motivo: motivo
    };
    
    citas.push(cita);
    console.log("Cita agendada para: " + nombrePaciente);
}

function cancelarCita(nombrePaciente, fecha) {
    let indice = -1;
    
    for (let i = 0; i < citas.length; i++) {
        if (citas[i].nombrePaciente == nombrePaciente && citas[i].fecha == fecha) {
            indice = i;
            break;
        }
    }
    
    if (indice != -1) {
        citas.splice(indice, 1);
        console.log("Cita cancelada");
    } else {
        console.log("No se encontro la cita");
    }
}

function buscarPorEspecialidad(especialidad) {
    console.log("\n--- Citas de " + especialidad + " ---");
    let encontradas = 0;
    
    for (let i = 0; i < citas.length; i++) {
        // buscar el doctor de esta cita
        for (let j = 0; j < doctores.length; j++) {
            if (doctores[j].codigo == citas[i].codigoDoctor && doctores[j].especialidad == especialidad) {
                console.log("\nPaciente: " + citas[i].nombrePaciente);
                console.log("Fecha: " + citas[i].fecha + " " + citas[i].hora);
                console.log("Doctor: " + doctores[j].nombre);
                encontradas++;
                break;
            }
        }
    }
    
    if (encontradas == 0) {
        console.log("No hay citas para esa especialidad");
    }
}

function mostrarCitasOrdenadas() {
    console.log("\n--- Todas las Citas (ordenadas) ---");
    
    if (citas.length == 0) {
        console.log("No hay citas");
        return;
    }
    
    // ordenar por fecha
    let ordenadas = citas.slice();
    for (let i = 0; i < ordenadas.length; i++) {
        for (let j = i + 1; j < ordenadas.length; j++) {
            if (new Date(ordenadas[i].fecha) > new Date(ordenadas[j].fecha)) {
                let temp = ordenadas[i];
                ordenadas[i] = ordenadas[j];
                ordenadas[j] = temp;
            }
        }
    }
    
    for (let i = 0; i < ordenadas.length; i++) {
        console.log("\nCita " + (i + 1) + ":");
        console.log("Paciente: " + ordenadas[i].nombrePaciente);
        console.log("Fecha: " + ordenadas[i].fecha + " " + ordenadas[i].hora);
        console.log("Motivo: " + ordenadas[i].motivo);
    }
}

function calcularEstadisticas() {
    console.log("\n--- Estadisticas ---");
    
    // contar por especialidad
    let porEspecialidad = {};
    
    for (let i = 0; i < citas.length; i++) {
        for (let j = 0; j < doctores.length; j++) {
            if (doctores[j].codigo == citas[i].codigoDoctor) {
                let esp = doctores[j].especialidad;
                if (porEspecialidad[esp]) {
                    porEspecialidad[esp]++;
                } else {
                    porEspecialidad[esp] = 1;
                }
                break;
            }
        }
    }
    
    console.log("\nCitas por especialidad:");
    for (let esp in porEspecialidad) {
        console.log("- " + esp + ": " + porEspecialidad[esp]);
    }
    
    // doctor con mas citas
    let porDoctor = {};
    
    for (let i = 0; i < citas.length; i++) {
        let codigo = citas[i].codigoDoctor;
        if (porDoctor[codigo]) {
            porDoctor[codigo]++;
        } else {
            porDoctor[codigo] = 1;
        }
    }
    
    let maxCitas = 0;
    let codigoMax = "";
    
    for (let codigo in porDoctor) {
        if (porDoctor[codigo] > maxCitas) {
            maxCitas = porDoctor[codigo];
            codigoMax = codigo;
        }
    }
    
    // buscar el doctor
    for (let i = 0; i < doctores.length; i++) {
        if (doctores[i].codigo == codigoMax) {
            console.log("\nDoctor con mas citas:");
            console.log("- " + doctores[i].nombre + " (" + doctores[i].especialidad + "): " + maxCitas + " citas");
            break;
        }
    }
    console.log("");
}

// pruebas ejercicio 5
registrarDoctor("Dr. Garcia", "Cardiologia", "DOC001");
registrarDoctor("Dra. Martinez", "Pediatria", "DOC002");
registrarDoctor("Dr. Rodriguez", "Cardiologia", "DOC003");

agendarCita("Ana Lopez", "DOC001", "2025-11-15", "10:00", "Revision");
agendarCita("Pedro Gomez", "DOC002", "2025-11-16", "11:00", "Control");
agendarCita("Sofia Diaz", "DOC001", "2025-11-17", "09:00", "Consulta");
agendarCita("Luis Castro", "DOC003", "2025-11-15", "14:00", "Chequeo");

buscarPorEspecialidad("Cardiologia");
mostrarCitasOrdenadas();
calcularEstadisticas();