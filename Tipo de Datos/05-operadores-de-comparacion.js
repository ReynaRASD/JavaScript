/*
Operadores relacionales o de comparacion
Mayor que: a > b a es mayor que b
Menor que: a < b a es menor que b
Mayor o igual que: a >= b a es mayor o igual que b
Menor o igual que: a <= b a es menor o igual que b
Igual: ==
Distinto: a != b a es diferente de b
-Operador estricto: ===
-Operador diferente estricto: !==
*/

let numero1 = 22;
let numero2 = 15;

console.log('El numero 1 es: ' +numero1);
console.log('El numero 2 es: ' +numero2);

const mayor = numero1 > numero2;
const menor = numero1 < numero2;
const mayorigual = numero1 >= numero2;
const menorigual = numero1 <= numero2;
const igual = numero1 == numero2;
const distinto = numero1 != numero2;

//formas de codigo pero es lo mismo
//console.log('¿El numero 1 es mayor al numero 2? ' , + numero1 > numero2); //true
//console.log('¿El numero 1 es mayor al numero 2? ' + (numero1 > numero2)); //true

console.log('¿El numero 1 es mayor al numero 2? ' + mayor); //true
console.log('¿El numero 1 es menor al numero 2? ' + menor); //false
console.log('¿El numero 1 es mayor o igual al numero 2? ' + mayorigual); //true
console.log('¿El numero 1 es menor o igual al numero 2? ' + menorigual); //false
console.log('¿El numero 1 es igual al numero 2? ' + igual); //false
console.log('¿El numero 1 es distinto al numero 2? ' + distinto); //true


