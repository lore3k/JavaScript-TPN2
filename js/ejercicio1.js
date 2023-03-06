/* 
Dificultad:  🟢

1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar 
un mensaje que ya puede conducir, si la edad ingresada no es un número válido 
indicarlo en un mensaje. */

let edad = parseInt(prompt("Ingrese su edad"));

if(isNaN(edad)||(edad>120)){
    document.write("Debe ingresar una edad válida");
}
else{
    if(edad>=18){
        document.write("Puede conducir");
    }
    else{
        document.write("No puede conducir");
    }
}