
/* 
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos 
hasta introducir un numero negativo y ahi mostrar el resultado
*/

const start = $("#start")
start.on("click",function(){

    var suma = 0
    var contador = 0
    
    do{
        var numero = parseInt(prompt('Introduce numeros hasta que metas uno negativo', 0))
        
        if (isNaN(numero)) {
            numero = 0
            
        }else if(numero >= 0){
            //suma = suma + numero
            suma += numero
            contador++
        }
        
        console.log(numero)
        console.log(contador)
        
    }while(numero >= 0)
    
    var promedio = suma/contador
    alert('La suma es de ' + suma)
    alert('El promedio es de ' + promedio)
    
})
