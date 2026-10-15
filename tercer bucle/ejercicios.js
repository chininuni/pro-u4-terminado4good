let numero;
do {
    numero = Number(prompt("Ingresa un número entre 1 y 100:"));
} while (numero < 1 || numero > 100);
console.log("Número ingresado: " + numero);

let secreto = Math.floor(Math.random() * 10) + 1;
let numero;
let intentos = 0;
do {
    numero = Number(prompt("Adivina el número (entre 1 y 10):"));
    intentos++;
    if (numero < secreto) {
        console.log("El número es mayor.");
    } else if (numero > secreto) {
        console.log("El número es menor.");
    }
} while (numero !== secreto);
console.log("¡Adivinaste!");
console.log("Necesitaste " + intentos + " intentos.");

let opcion;
do {
    opcion = Number(prompt(
        "MENÚ\n" +
        "1. Saludar\n" +
        "2. Mostrar la fecha actual\n" +
        "3. Salir\n\n" +
        "Elige una opción:"
    ));
    if (opcion === 1) {
        console.log("¡Hola!");
    } else if (opcion === 2) {
        console.log(new Date());
    } else if (opcion === 3) {
        console.log("Saliendo...");
    } else {
        console.log("Opción inválida.");
    }
} while (opcion !== 3);

let continuar;
do {
    let numero1 = Number(prompt("Ingresa el primer número:"));
    let numero2 = Number(prompt("Ingresa el segundo número:"));
    let operacion = prompt("Ingresa una operación (+, -, *, /):");
    let resultado;
    if (operacion === "+") {
        resultado = numero1 + numero2;
    } else if (operacion === "-") {
        resultado = numero1 - numero2;
    } else if (operacion === "*") {
        resultado = numero1 * numero2;
    } else if (operacion === "/") {
        resultado = numero1 / numero2;
    } else {
        console.log("Operación inválida.");
        resultado = null;
    }
    if (resultado !== null) {
        console.log("Resultado: " + resultado);
    }
    continuar = prompt("¿Quieres hacer otro cálculo? (si/no)");
} while (continuar === "si");
console.log("Hasta luego.");

let pin = "1234";
let intento;
let intentos = 0;
do {
    intento = prompt("Ingresa el PIN:");
    intentos++;
    if (intento === pin) {
        console.log("Acceso permitido");
    }
} while (intento !== pin && intentos < 3);
if (intento !== pin) {
    console.log("Cuenta bloqueada");}