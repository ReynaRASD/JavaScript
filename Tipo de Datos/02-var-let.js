/*
Variable var se utilizaba anteriormente, son variables globales.
Variable let es una variable de contexto, solo vive en un bloque.
*/
var numero = 40;
console.log(numero); //40

if(true) {
    var numero = 50;
    console.log(numero); //50
}
console.log(numero); //50

//Variable let es variable particulares, que solo vivan en una parte del codigo

var texto = 'Bootcamp Java';
console.log(texto);

if(true){
let texto = 'Cohorte 8';
console.log(texto);
let numeroFavorito = 6;
console.log(numeroFavorito);
}
console.log(texto);
console.log(numeroFavorito); /*Aqui marcara error porque la variable let solo vive dentro del if,
 si fuera variable var si lo imprimiria por estar declrada y ser global este dentro o fuera del if*/

