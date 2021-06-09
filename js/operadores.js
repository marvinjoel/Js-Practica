/*

OPERADORES:
1.- Aritméticos
2.- Unario
3.- Comparación
4.- Lógicos
5.- Ternario


/* Operadores Aritméticos
SUMA: +
RESTA: -
MULTIPLICACION: *
DIVISION: /
RESIDUO: %
*/

// DECLARACION DE VARIABLES

var numero1 = 10, numero2 = 8, cadena = "101010";

console.log("OPERADORES ARITMETICOS")
console.log(numero1 + numero2); // Suma
console.log(numero1 - numero2); // Resta
console.log(numero1 * numero2); // Multplicacion
console.log(numero1 / numero2); // Division
console.log(numero1 % numero2); // Residuo

console.log(numero1 + cadena); // Cadena + Numero
console.log(cadena + cadena); // Cadena + cadena


/* Operador Unario: no son simbolos, son palabras
typeof: Muestra una cadena con el tipo de dato que le demos */

console.log("OPERADOR UNARIO: ")
console.log(typeof numero1);
console.log(typeof cadena);
console.log(typeof true);



/*Operadores de Comparación: retornan valores booleanos (true o false)
Exactamente igual que ===
Distinto que: !==
Menor que: <
Mayor que: >
Menor o igual que 8 <= 8 = true
Mayor o igual que 9 >= 8 = true
*/

console.log(numero1 === numero2); // false
console.log(numero1 !== numero2); // true
console.log(numero1 < numero2); // false
console.log(numero1 > numero2); // true
console.log(numero1 <= numero2); // false
console.log(10 >= 10 ) // true



/* Operadores Lógicos: Permiten realizar comparaciones mas complejas
AND (y): && Devuelve true solo cuando ambos valores son true
OR (o): || Devuelve true si cualquiera de los valores es true
NOT (no): ! invierte el valor. true produce dalse y false un true
*/

console.log("OPERADORES LOGICOS")

console.log("OPERADOR &&")
console.log(false && true); // false
console.log(false && false); // false
console.log(true && true); // true


console.log(numero1 < numero2) && (numero1 > numero2)


console.log("OPERADOR ||");
console.log(false || true); //true
console.log(false || false); //false
console.log(true || true); //true

console.log((numero1 < numero2) || (numero1 > numero2));

console.log("OPERADOR !");
console.log(!(numero1 > numero2)); // false
console.log(!(numero2 > numero1)); // true


/* OPERADOR TERNARIO: Opera sobre 3 valores
cuando es true se elige el valor medio
cuando es false se elige el de la derecha
*/

console.log("OPERADOR TERNARIO");
console.log(true ? 2 : 1); // 2
console.log(false ? 2 : 1); // 1
