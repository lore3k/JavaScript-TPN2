/* 
Dificultad:  🟢

17- Realiza un script que muestre la posición de la primera 
vocal de un texto introducido por teclado.
*/

let texto = prompt("Ingrese un texto");
let i, caracter;
texto=texto.toLowerCase();

for(i=0; i<texto.length; i++){
    caracter = texto.charAt(i);
    if(caracter==="a" || caracter==="e" || caracter==="i" 
    || caracter==="o" || caracter==="u"){
        document.write("La primera vocal está en la posición "+(i+1));
        break;
    }
}
