/*
Operadores aritmeticos nos sirven para hacer operaciones
+ Sumar o concatenar
- Sirven para restar numeros
* Sirven para multiplicar 2 numeros
% Modulo nor sirve para obtener el residuo de una operacion de division : 12%5=2
/ Sirve para dividir 2 numeros
*/

const numero1 = parseInt(prompt('Ingresa numero 1'));
const numero2 = parseInt(prompt('Ingresa numero 2'));
//Todo lo que pongas en prompt es un texto, hay que onvertirlo a numero
//Para convertirlo es necesario hacer lo de parseInt para que sea un numero.

//console.log(numero1 + numero2);

const suma = numero1 + numero2; 
/*Recuerda que + es para texto y numeros, si no conviertes lo datos ingresados a numero hara esto:
1 + 1 = 11  lo une como cadena
*/
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;
const residuo = numero1 % numero2;

console.log('Numero 1: ' + numero1);
console.log('Numero 2: ' + numero2);
console.log('Suma: ' + suma);
console.log('Resta: ' + resta);
console.log('Multiplicacion: ' + multiplicacion);
console.log('Division: ' + division);
console.log('Residuo: ' + residuo);

/*
Operadores logicos
&& AND  y
|| OR o
! NOT no
*/
