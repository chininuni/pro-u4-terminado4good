let rondas = Number(prompt("¿Cuántas rondas jugaste?"));
let puntajeTotal = 0;
for (let i = 1; i <= rondas; i++) {
    let puntaje = Number(prompt("Ingresa el puntaje de la ronda " + i + ":"));
    puntajeTotal += puntaje;
}
let promedio = puntajeTotal / rondas;
console.log("Puntaje total: " + puntajeTotal);
console.log("Promedio por ronda: " + promedio);

let productos = Number(prompt("¿Cuántos productos quieres registrar?"));
let precioTotal = 0;
let precioMasAlto = 0;
for (let i = 1; i <= productos; i++) {
    let precio = Number(prompt("Ingresa el precio del producto " + i + ":"));
    precioTotal += precio;
    if (precio > precioMasAlto) {
        precioMasAlto = precio;}}
console.log("Precio total: $" + precioTotal);
console.log("El producto más caro cuesta: $" + precioMasAlto);

let numero = Number(prompt("Ingresa un número:"));
for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));}

let numero = Number(prompt("¿Desde qué número quieres hacer la cuenta regresiva?"));
for (let i = numero; i >= 1; i--) {
    console.log(i);}
console.log("Despegue!");

let cantidadNotas = Number(prompt("¿Cuántas notas quieres ingresar?"));
let sumaTotal = 0;
for (let i = 1; i <= cantidadNotas; i++) {
    let nota = Number(prompt("Ingresa la nota " + i + ":"));
    sumaTotal += nota;
}
let promedio = sumaTotal / cantidadNotas;
console.log("Suma total: " + sumaTotal);
console.log("Promedio: " + promedio);

