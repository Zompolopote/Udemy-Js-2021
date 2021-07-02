

// necesito hace codigo que compare 2 numeros y me diga cual es mayor y cual es menor. al momento de ingresar los numeros no permitir numero negativo o un no numero

var numero1;
var numero2
do {
    //leer por teclado una variable(prompt)
    numero1 = parseInt(prompt('Introduce el primer numero', 0))
    
    if((isNaN(numero1) || numero1 < 0)) alert("INTRODUCE NUMEROS CORRECTOS")

    console.log(isNaN(numero1))

} while (numero1 < 0 || isNaN(numero1));

do {
    //leer por teclado una variable(prompt)
    numero2 = parseInt(prompt('Introduce el segundo numero', 0))
    
    if((isNaN(numero2) || numero2 < 0)) alert("INTRODUCE NUMEROS CORRECTOS")

    console.log(isNaN(numero2))

} while (numero2 < 0 || isNaN(numero2));

if(numero1 == numero2) {
    alert("LOS NUMEROS SON IGUALES");
    
}else if(numero1 > numero2){
    alert("EL NUMERO MAYOR ES: " + numero1);
    alert("EL NUMERO MENOR ES: " + numero2);
    
}else{
    alert("EL NUMERO MAYOR ES: " + numero2);
    alert("EL NUMERO MENOR ES: " + numero1);
    
}








/*
do {
    
    var numero1 = parseInt(prompt('Introduce el primer numero', 0))
    var numero2 = parseInt(prompt('Introduce el segundo numero', 0))
    var alerta =  alert("INTRODUCE NUMEROS CORRECTOS")


 if(numero1 < 0 || isNaN(numero1))
 alerta
 else(numero2 < 0 || isNaN(numero2))
 alerta
 


} while (condition);
*/