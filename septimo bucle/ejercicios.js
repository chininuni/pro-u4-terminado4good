let i = 0;
while (i < 5) {
    console.log(i);
    i++;}
for (let i = 10; i > 0; i--) {
    console.log(i);}
let j = 1;
while (j < 10) {
    console.log(j);
    j += 3;}

for (let i = 0; i <= 100; i += 10) {
    console.log(i);}
let x = 100;
while (x > 0) {
    x -= 25;
    console.log(x);}    
for (let i = 1; i < 100; i *= 2) {
    console.log(i);}    

for (let i = 7; i <= 70; i += 7) {
    console.log(i);}

let total = 0;
let i = 1;
while (i < 10) {
    total += i;
    i++; // era incorrecto usar i-- porque alejaba a i de la condicion de corte.
    }
console.log(total);

let contador = 0;
let suma = 0;
let numero;
while (contador < 20) {
    numero = Number(prompt("Ingresa un numero (-1 para terminar):"));
    if (numero === -1) {
        break;}
    suma += numero;
    contador++;}
console.log("Numeros ingresados: " + contador);
console.log("Suma total: " + suma);
