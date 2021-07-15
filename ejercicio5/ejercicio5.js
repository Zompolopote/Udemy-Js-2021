/**
 * Mostrar todos los numeros divisores de un numero introduce
 * en prompt
 * 
 * 
 * */
 
const start = $("#start")
start.on("click",function(){
 

var numero =  parseInt(prompt("Introduce un numero", 1));

for(var i = 1; i <= numero; i++){

    if(numero%i == 0){

        document.write("<p>Divisor: "+ i + "</p>")
    }





}




  
})

