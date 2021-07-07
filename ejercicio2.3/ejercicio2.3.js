





const start = $("#start")
start.on("click",function(){

    var numero1
    var numero2


    do{        
        numero1 = parseInt(prompt("Introduce el primer numero", 0))
        
        if((isNaN(numero1) || numero1 < 0 )) alert("INTRODUCE NUMEROS CORRECTOS")

    } while (isNaN(numero1) || numero1 < 0);

    do {
        numero2 = parseInt(prompt("Introduce el segundo numero", 0))
        
        if((isNaN(numero2) || numero2 < 0)) alert("INTRODUCE NUMEROS CORRECTOS")
        
    } while (isNaN(numero2) || numero2 < 0)

    alert((numero1 == numero2) ? "Los numeros sin iguales" : (numero1 > numero2) ?  `EL MAYOR ES EN NUMERO: ${numero1}` : `EL MAYOR ES EL NUMERO: ${numero2}`) 
    if(numero1 != numero2) alert((numero1 > numero2) ?  `EL MENOR ES EN NUMERO: ${numero2}` : `EL MENOR ES EL NUMERO: ${numero1}`)

})