UNIVERSIDAD DE ORIENTE
SEGUNDO EXAMEN PARCIAL DE PROGRAMACIÓN ESTRUCTURADA
Nombre: DERIS HAZAEL HERNÁNDEZ ARGUETA

N° de carné: U20240723


Ejercicio 1: Calculadora de Promedio de Notas
1. Análisis del problema
Variables de entrada: Array de notas
Variables de proceso: suma, promedio, resultado (aprobó/reprobó)
Variables de salida: Promedio y estado del estudiante
2. Descripción de la solución
Recibo el array de notas, sumo todas y divido entre la cantidad para sacar el promedio. Uso un if para ver si el promedio es >= 6.0 y determino si aprobó o reprobó.
Ejercicio 2: Registro de Productos
1. Análisis del problema
Variables de entrada: nombre, precio, cantidad
Variables de proceso: array de productos, valorTotal
Variables de salida: Lista de productos y valor total del inventario
2. Descripción de la solución
Para agregar creo un objeto con los datos y lo agrego al array. Para mostrar recorro el array e imprimo cada producto. Para calcular el inventario multiplico precio por cantidad de cada producto y sumo todo.
Ejercicio 3: Sistema de Gestión de Estudiantes
1. Análisis del problema
Variables de entrada: nombre, carné, edad, notas
Variables de proceso: array de estudiantes, promedio de cada uno
Variables de salida: Lista de estudiantes, mejor estudiante, lista ordenada
2. Descripción de la solución
Registro estudiantes calculando su promedio al agregarlos. Para encontrar el mejor recorro todos comparando promedios. Para ordenar uso dos for anidados e intercambio posiciones según el promedio.

Ejercicio 4: Carrito de Compras
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
