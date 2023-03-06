/* 
Dificultad:  🟢🟡🔴
9- Crea un script que escriba los números del 1 al 500, 
que indique cuáles son múltiplos de 4 y de 9 y que cada 5 
líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10

*/

let i, repeat=0;

for(i=1; i<=500; i++){
    document.write(i);
    if(i%4==0){
        document.write(" Múltilplo de 4" );
    }
    if(i%9==0){
        document.write(" Múltiplo de 9 ");
    }
    document.write("<br>");
    if(i%5==0){
        document.write("<hr>");
    }
}