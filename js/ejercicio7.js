/* 
Dificultad:  🟢🟡

7- Haz un script que escriba una pirámide inversa de los números del 1 al número 
que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let numrepeat = prompt("Introduce numero de repeticiones (debe ser entre 1 y 50): ");
if (!isNaN(numrepeat)){
    if (numrepeat>0 && numrepeat<=50) {
        let repeat,i;
        for (i = numrepeat; i>=1; i--){
            for (repeat = i; repeat >= 1; repeat--) {
                document.write(i);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número introducido no es válido, debe ser entre 1 y 50");
    }
} 
else {
    alert("No has introducido un número");
}