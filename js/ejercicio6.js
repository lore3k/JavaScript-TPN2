/* 
Dificultad:  🟢🟡
6- Realiza un script que escriba una pirámide del 1 al 30 de 
la siguiente forma :

1
22
333
4444
55555
666666
…….

*/

let i, repeat;
    for (i = 1; i <= 30; i++) {
        for (repeat = 0; repeat < i; repeat++) {
            document.write(i);
        }
        document.write("<br>");
    }
    