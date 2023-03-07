/* 
Dificultad:  🟢🟡
14- Realiza un script que pida una cadena de texto y 
lo muestre poniendo el signo – entre cada carácter sin usar el 
método replace. Por ejemplo, si tecleo “hola qué tal”, 
deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/

let cadena = prompt("Ingrese un texto");
let i;
let resultado;


for(i=0; i<cadena.length; i++){
    resultado = cadena.charAt(i);
    if(i!=cadena.length-1){
        document.write(resultado+"-");
    }
    else{
        document.write(resultado);
    }
}