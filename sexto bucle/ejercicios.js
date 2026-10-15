let nombres = ["Ana", "Luis", "Maria", "Pedro", "Sofia"];
for (let nombre of nombres) {
    console.log(nombre.toUpperCase());}

let numeros = [4, 7, 12, 3, 18, 5, 9];
for (let numero of numeros) {
    if (numero % 2 === 0) {
        console.log(numero + " es par");
    } else {
        console.log(numero + " es impar");}}

let precios = [150, 320, 89, 450, 210];
let total = 0;
for (let precio of precios) {
    console.log(precio);
    total += precio;}
console.log("Total: " + total);

let notas = [85, 42, 91, 55, 78, 33, 67, 90];
let aprobados = 0;
for (let nota of notas) {
    if (nota >= 60) {
        console.log(nota);
        aprobados++;}}
console.log("Alumnos aprobados: " + aprobados);

let temperaturas = [22, 35, 18, 40, 27, 15, 31];
let mayor = temperaturas[0];
let menor = temperaturas[0];
for (let temperatura of temperaturas) {
    if (temperatura > mayor) {
        mayor = temperatura;}
    if (temperatura < menor) {
        menor = temperatura;}}
console.log("Maxima: " + mayor + "°C / Minima: " + menor + "°C");
