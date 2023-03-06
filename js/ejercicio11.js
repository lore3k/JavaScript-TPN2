/* 
Ejercicios con Math


Dificultad:  🟢🟡
11- Realiza un script que pida por teclado 3 edades y 3 nombres e 
indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

*/

let nombre1 = prompt("Nombre 1:");
let edad1 = (prompt("Edad 1:"));
if(isNaN(edad1) || edad1<0 || edad1>120){
    alert("Debe ingresar una edad válida");
}
else{
    let nombre2 = prompt("Nombre 2:");
    let edad2 = (prompt("Edad 2:"));
    if(isNaN(edad2) || edad2<0 || edad2>120){
        alert("Debe ingresar una edad válida");
    }
    else{
        let nombre3=prompt("Nombre 3:");
        let edad3=(prompt("Edad 3:"));
        let mayor=Math.max(edad1,edad2,edad3);
        
        if (mayor==edad1) {
            document.write("El mayor es: " + nombre1);
        }
        if (mayor==edad2) {
            document.write("El mayor es: " + nombre2);
        }
        if (mayor==edad3) {
            document.write("El mayor es: " + nombre3);
        }
    }
}
