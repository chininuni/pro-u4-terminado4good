let numero = Math.floor(Math.random() * 100) + 1;
alert(numero);
console.log(numero);

let dado1 = Math.floor(Math.random() * 6) + 1;
let dado2 = Math.floor(Math.random() * 6) + 1;
let suma = dado1 + dado2;
console.log("Dado 1: " + dado1);
console.log("Dado 2: " + dado2);
console.log("Suma: " + suma);
if (suma === 7) {
    console.log("Numero de la suerte!");
} else {
    console.log("Resultado: " + suma);}

let mayor = 0;
for (let i = 1; i <= 10; i++) {
    let numero = Math.floor(Math.random() * 50) + 1;
    console.log(numero);
    if (numero > mayor) {
        mayor = numero;}}
console.log("El mayor es: " + mayor);

let mayor = 0;
let menor = 101;
let suma = 0;
for (let i = 1; i <= 20; i++) {
    let numero = Math.floor(Math.random() * 100) + 1;
    console.log(numero);
    if (numero > mayor) {
        mayor = numero;}
    if (numero < menor) {
        menor = numero;}
    suma += numero;}
let promedio = suma / 20;
console.log("Mayor: " + mayor);
console.log("Menor: " + menor);
console.log("Promedio: " + promedio);

let cara1 = 0;
let cara2 = 0;
let cara3 = 0;
let cara4 = 0;
let cara5 = 0;
let cara6 = 0;
for (let i = 1; i <= 100; i++) {
    let dado = Math.floor(Math.random() * 6) + 1;
    if (dado === 1) {
        cara1++;
    } else if (dado === 2) {
        cara2++;
    } else if (dado === 3) {
        cara3++;
    } else if (dado === 4) {
        cara4++;
    } else if (dado === 5) {
        cara5++;
    } else if (dado === 6) {
        cara6++;}}
console.log("El 1 salio " + cara1 + " veces");
console.log("El 2 salio " + cara2 + " veces");
console.log("El 3 salio " + cara3 + " veces");
console.log("El 4 salio " + cara4 + " veces");
console.log("El 5 salio " + cara5 + " veces");
console.log("El 6 salio " + cara6 + " veces");
