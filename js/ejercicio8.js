/* 
Dificultad:  🟢🟡

8- Crea script para generar pirámide siguiente con los números 
del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……

*/

let numrepeat = prompt("Introduce numero de repeticiones (debe ser entre 1 y 50): ");
if (!isNaN(numrepeat)){
    if (numrepeat>0 && numrepeat<=50) {
        let repeat,i;
        for (i=0; i<=numrepeat; i++){
            for (repeat=1; repeat<=i; repeat++){
                document.write(repeat);
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