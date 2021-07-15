/**
 * Que nos diga si es par o impar.
 * 1. Ventana prompt
 * 2. Si no es valido que nos pida de nuevo el numero
 *
 */

const start = $("#start");
start.on("click", function () {
  var numero = parseInt(prompt("Introduce un numero", 0));

  while (isNaN(numero)) {
      alert ("no es un numero valido");
    numero = parseInt(prompt("Introduce un numero", 0));
  }

  alert(
    numero % 2 == 0 ? numero + " es numero par" : numero + " es numero impar"
  );
});

    //   | El ejemplo de el es asi
    //   |
    //  \|/
     
// if (numero % 2 == 0) {
//     alert("Es un numero par")
    
// } else {
//     alert("Es impar")
// }

