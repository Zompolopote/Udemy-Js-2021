


var edad;
var mensaje;

edad = parseInt(prompt('Introduce tu edad: ', 'Edad'));

// if(edad<18){
//     mensaje = "Eres menor de edad";
// }else if (edad>=18 && edad <60){
//     mensaje = "Eres mayor de edad";
// }else{
//     mensaje = "Eres de la tercera edad";
// }

// console.log(mensaje);

// Primer respuesta
// mensaje = edad<18 ? "Eres menor de edad" : "Eres mayor de edad";

// console.log(mensaje);


console.log((edad<18) ? "Eres menor de edad" : (edad>=18 && edad <60) ? "Eres mayor de edad" : "Eres de la tercera edad");