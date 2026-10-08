/*
Ejercicio 1: Calculadora de Compras

Crea un programa que calcule el total de una compra,
debe tener
3 variables con precios de productos
Una variable con la cantidad de dinero que tiene
la persona
Una variable con el total a pagar (la suma de los
3)
Una variable con el vuelto (dinero que le sobra
*/

let producto1 = 100;
let producto2 = 500;
let producto3 = 1700;
let dineroDisponible = 3000;
let totalAPagar = (producto1 + producto2 + producto3);
let vuelto = (dineroDisponible - totalAPagar);
console.log("Total de la compra:", totalAPagar);
console.log ("Vuelto:", vuelto)

// Si a la persona no le alcanza para comprar?
