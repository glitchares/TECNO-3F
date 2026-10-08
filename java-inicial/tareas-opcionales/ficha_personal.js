import promptSync from "prompt-sync"

const prompt = promptSync() 

let nombre = prompt("Insertá tu nombre: ");
let edad = prompt("Insertá tu edad: ");
let horasSemanalesProgramacion = prompt("¿Cuántas horas programás a la semana?: ");
let leGustaProgramar = prompt("¿Te gusta programar?: ");

console.log("--FICHA PERSONAL--");
console.log("Nombre:", nombre );
console.log("Cantidad de horas de programación semanales:", horasSemanalesProgramacion); 


if (leGustaProgramar == "sí" )
    console.log("Le gusta programar")
else
    console.log("No le gusta programar") 

if (edad >= 18) 
    console.log("Es mayor de edad") 
else
    console.log("Es menor de edad")

// es mayor de edad espera un booleano, quiero hacerle un condicional por string si o por no.

// Existen methods como .lower()?

// estructura condicionales, llaves sí o no? 
