/**
 * Mostrar todos los numeros divisores de un numero introduce
 * en prompt
 *
 *
 * */
const caja = $("#caja");
const start = $("#start");
start.on("click", function (e) {
  var numero = parseInt(prompt("Introduce un numero", 1));

  var texto = "";

  for (var i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      texto = texto + "<p>Divisor: " + i + "</p>";
    }
  }
  e.preventDefault();
  caja.html(texto);

});
