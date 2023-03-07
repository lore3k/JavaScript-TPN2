/* 
Dificultad:  🟢🟡
16- Realiza un script que pida una cadena de texto y la devuelva al revés. 
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

let cadena = prompt("Ingrese una cadena");
let caracter,i;
let resultado="";

for(i=cadena.length; i>=0; i--){
    caracter = cadena.charAt(i);
    resultado=resultado+caracter;
}
document.write(resultado);
