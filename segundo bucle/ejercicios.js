let numero = Number(prompt("Ingresa un número."));
while(numero!==0){
    console.log(numero);
    numero = Number(prompt("Ingresa otro número."));}
console.log("Terminado.")

let correcta = "js2026";
let contraseña = prompt("Ingresa la contraseña.");
while(contraseña!==correcta){
    contraseña = prompt("Contraseña incorrecta. Intenta de nuevo.");}
console.log("Acceso permitido. Bienvenido.")

let suma = 0;
let cantidad = 0;
while(suma<=100){
    let numero = Number(prompt("Ingresa un número"));
    suma += numero;
    cantidad++;}
console.log("Total:" suma);
console.log("Cantidad de números ingresados:" cantidad);

let saldo = 5000;
while(saldo>0){
    let retiro = Number(prompt("¿Cuánto desea retirar?"));
if (retiro>saldo){
    console.log("Saldo insuficiente.");
} else {
    saldo-=retiro;
    console.log("Saldo restante: $"saldo);}}
console.log("Cuenta vaciada.")

let numero = Number(prompt("Ingrese un número entero positivo."));
let original = numero;
let cantidadDigitos = 0;
while(numero>0){
    numero= Math.floor(numero/10);
    cantidadDigitos++;}
console.log("El número" + original + "tiene" + cantidadDigitos + "dígitos");