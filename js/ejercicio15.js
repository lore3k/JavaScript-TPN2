/* 
Dificultad:  🟢🟡

15- Realiza un script que cuente el número de vocales
 que tiene un texto.
*/

let texto = prompt("Ingrese un texto");
let i, contador=0;
let caracter;
texto=texto.toLowerCase();

for(i=0; i<texto.length; i++){
    caracter = texto.charAt(i);
    if(caracter==="a" || caracter==="e" || caracter==="i" 
    || caracter==="o" || caracter==="u"){
        contador++;
    }
}

document.write("Hay "+contador+" vocales en el texto");