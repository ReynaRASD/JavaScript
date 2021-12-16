/*
Funciones nos sirven para escribir bloques de codigo
que son reutilizables
*/

/*
let numero1 = 10;
let numero2 = 20;
let suma = numero1 + numero2;
document.write('<h1>' + suma + '</h1>');

let numero3 = 23;
let numero4 = 234;
let suma2 = numero3 + numero4;
document.write('<h1>' + suma2 + '</h1>');
*/

//En vez de hacer esto haces una funcion

/*Estructura:
function sumar () {
    
}
Palabra reservada function mas nombre de la funcion 
seguida de parenteis
seguido de llaves
*/

function sumar (numero1, numero2) {
let suma = numero1 + numero2;
document.write('<h1>' + suma + '</h1>');
}

sumar(12, 12);
sumar(10, 20);
sumar(50, 50);
//Llamas la funcion.

