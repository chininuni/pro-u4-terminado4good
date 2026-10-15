for (let numero = 1; numero <= 100; numero++) {
    if (numero % 7 === 0) {
        console.log(numero);
        break;}}

for (let numero = 1; numero <= 20; numero++) {
    if (numero % 3 === 0) {
        continue;}
    console.log(numero);}

let suma = 0;
while (true) {
    let numero = Number(prompt("Ingresá un número:"));
    if (numero < 0) {
        break;}
    suma += numero;}
console.log("La suma total es:", suma);

let nombres = ["Ana", "Luis", "Maria", "Pedro", "Sofia", "Carlos"];
let buscado = prompt("Ingresá un nombre a buscar");
let encontrado = false;
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === buscado) {
        console.log("El nombre está en la posición:", i);
        encontrado = true;
        break;}}
if (!encontrado) {
    console.log("Nombre no encontrado");}

let suma = 0;
for (let i = 1; i <= 8; i++) {
    let numero = Number(prompt("Ingresá un número:"));
    if (numero === 0) {
        console.log("Saltando el cero");
        continue;}
    if (numero < 0) {
        break;}
    suma += numero;}
console.log("La suma total es:", suma);