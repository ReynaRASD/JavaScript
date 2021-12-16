/*
Condicionales se utilizan para tomar decisiones dentro
de nuestro programa
*/

//El if solo se ejecuta si la condicion es verdadera
//Si es falso se salta todo el if
//Ejemplo:
/*
if(condicion) {
    codigo
    codigo
    codigo
    codigo
}
*/

//El else se ejecuta cuando la condicion del if es falsa
//El else no lleva condicion
//El else if nos permite ejecutar distintas condiciones
//let edad = 12;

let edad = parseInt(prompt('Ingresa tu edad'));

console.log('La edad es: ', edad);

if(edad >= 18 && edad < 30) {
    document.write('Eres joven.');
} else if(edad >= 30 && edad < 60) {
    document.write('Eres un adulto.');
} else if ( edad >= 60) {
    document.write('Eres un adulto mayor, tercera edad.');
}else {
    document.write('Eres un nene.');
}
