/*
1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

alert("Un mensaje")


2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

document.write("Hello World!");

3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

document.write("la suma de 3+5 es " + 8);

4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

let person = prompt("hola nombre de usuario ");
console.log("hola coder ")

5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

let numero1 = 4;
let numero2 = 6;
let suma;


suma = numero1 + numero2
console.log(suma);
console.log("el resultado es de la suma es " + suma);


6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

var num3 = prompt ("ingresa el numero ");
var num4 = prompt (" ingresa el numero ");


if  ((num3) > (num4)) {

    console.log(num3 + " es el mayor");
}
 else {
    console.log(num4 + " Es el mayor.");
}

7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

var n1,n2,n3,t,mayor;
n1 = parseInt(prompt("Número 1"));
n2 = parseInt(prompt("Número 2"));
n3 = parseInt(prompt("Número 3"));

if (n1 > n2) {
    t = n1;
}else{
    t = n2;
}

if (t > n3) {
    mayor = t;
}else{
    mayor = n3;
}

document.write("El mayor es "+mayor)

8.- Escribe un programa que pida un número y diga si es divisible por 2

var n1 = prompt("Escribe un número");
if (n1 % 2 === 0) {
document.write("Es divisible por 2");
} else {
document.write("No es divisible por 2");
}

9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

let str "hola mundo!" ;
for (let i=0; i < str.length; i++) {
    let vocal= str.chartAt(i); 

    if(vocal =="a" || vocal == "e" || vocal == "i" || vocal == "o" || vocal == "u")
    {console.log (src.chartAt(i));
    
    }


}

10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

var n1 = prompt("Escribe un número");

 if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
 document.write("Es divisible por 2, 3, 5 o 7");
 } else {
 document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
 }


11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)


 var n1 = prompt("Escribe un número");
 var n1 = prompt("Escribe un número");
 if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
 if (n1 % 2 === 0) {
 document.write("Es divisible por 2. ");
 }
 if (n1 % 3 === 0) {
 document.write("Es divisible por 3. ");
 }
 if (n1 % 5 === 0) {
 document.write("Es divisible por 5. ");
 }
 if (n1 % 7 === 0) {
 document.write("Es divisible por 7. ");
 }
 } else {
 document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
 }
*/