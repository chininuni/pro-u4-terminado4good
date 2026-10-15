for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(i + " x " + j + " = " + (i * j));}
    console.log("----------");}

let numero = parseInt(prompt("Ingresa un numero entre 1 y 8"));
for (let i = 1; i <= numero; i++) {
    let fila = "";
    for (let j = 1; j <= numero; j++) {
        fila += "*";}
    console.log(fila);}

for (let i = 1; i <= 5; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
        fila += "*";}
    console.log(fila);}

for (let i = 1; i <= 5; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
        fila += j + " ";}
    console.log(fila);}

let remeras = ["blanca", "negra", "azul"];
let pantalones = ["jeans", "cargo", "formal"];
let total = 0;
for (let i = 0; i < remeras.length; i++) {
    for (let j = 0; j < pantalones.length; j++) {
        console.log("Remera " + remeras[i] + " con " + pantalones[j]);
        total++;}}
console.log("Total de combinaciones: " + total);
