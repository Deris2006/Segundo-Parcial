UNIVERSIDAD DE ORIENTE
SEGUNDO EXAMEN PARCIAL DE PROGRAMACIÓN ESTRUCTURADA
Nombre: DERIS HAZAEL HERNÁNDEZ ARGUETA

N° de carné: U20240723


EJERCICIO 1: Calculadora de Promedio de Notas

1. Análisis del problema
Variables de entrada: Array de notas
Variables de proceso: suma, promedio, resultado (aprobó/reprobó)
Variables de salida: Promedio y estado del estudiante
2. Descripción de la solución
Recibo el array de notas, sumo todas y divido entre la cantidad para sacar el promedio. Uso un if para ver si el promedio es >= 6.0 y determino si aprobó o reprobó.

EJERCICIO 2: Registro de Productos

1. Análisis del problema
Variables de entrada: nombre, precio, cantidad
Variables de proceso: array de productos, valorTotal
Variables de salida: Lista de productos y valor total del inventario
2. Descripción de la solución
Para agregar creo un objeto con los datos y lo agrego al array. Para mostrar recorro el array e imprimo cada producto. Para calcular el inventario multiplico precio por cantidad de cada producto y sumo todo.

EJERCICIO 3: Sistema de Gestión de Estudiantes

1. Análisis del problema
Variables de entrada: nombre, carné, edad, notas
Variables de proceso: array de estudiantes, promedio de cada uno
Variables de salida: Lista de estudiantes, mejor estudiante, lista ordenada
2. Descripción de la solución
Registro estudiantes calculando su promedio al agregarlos. Para encontrar el mejor recorro todos comparando promedios. Para ordenar uso dos for anidados e intercambio posiciones según el promedio.

EJERCICIO 4: Carrito de Compras

1. ¿Qué estructura usarás? Array de objetos con nombre, precio y cantidad.
2. ¿Cómo buscarás un producto? Recorro el array comparando nombres.
3. ¿Qué validaciones? Cantidad > 0, precio > 0, que el producto exista.
4. Proceso para calcular total: Sumo precio × cantidad de cada producto = subtotal. Si subtotal > $100 aplico 10% de descuento. Total = subtotal - descuento.
1. Análisis del problema
Variables de entrada: nombre, precio, cantidad
Variables de proceso: array carrito, subtotal, descuento, total
Variables de salida: Carrito, subtotal, descuento, total
2. Descripción de la solución
Para agregar busco si existe, si sí sumo cantidad, si no lo agrego nuevo. Para eliminar busco por nombre y uso splice. Para modificar busco y actualizo la cantidad. Para el total recorro multiplicando precio por cantidad, sumo todo, si pasa de $100 aplico descuento.

EJERCICIO 5: Sistema de Citas Médicas

1. ¿Qué estructuras? Array de doctores (nombre, especialidad, código) y array de citas (paciente, codigoDoctor, fecha, hora, motivo).
2. ¿Variables de entrada? Registrar doctor: nombre, especialidad, código. Agendar: paciente, codigoDoctor, fecha, hora, motivo.
3. ¿Validaciones? Que el doctor exista y que no haya cita en esa fecha/hora.
4. ¿Buscar y eliminar? Recorro comparando paciente y fecha, si encuentro uso splice.
5. ¿Ordenar? Uso for anidados comparando fechas con Date y las intercambio.
6. ¿Estadísticas? Creo objeto para contar, recorro citas sumando por especialidad y por doctor, busco el máximo.
1. Análisis del problema
Variables de entrada: Doctores: nombre, especialidad, código. Citas: paciente, codigoDoctor, fecha, hora, motivo
Variables de proceso: arrays doctores y citas, objetos contadores
Variables de salida: Listas, citas por especialidad, estadísticas
2. Descripción de la solución
Registro doctores agregándolos al array. Para agendar valido que el doctor existe y no tenga cita a esa hora, luego agrego. Para cancelar busco por paciente y fecha y elimino. Para buscar por especialidad recorro las citas y muestro las que coincidan. Para ordenar comparo fechas e intercambio. Para estadísticas cuento con objetos y busco máximos.
