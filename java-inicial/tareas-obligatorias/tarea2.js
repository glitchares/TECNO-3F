import promptSync from "prompt-sync";
const prompt = promptSync();

// ARES MIA 48296494

//Ejercicio 1
const frutas =  ["manzana", "banana", "pera", "naranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}


//Ejercicio 2
frutas.push("kiwi")
frutas.unshift("sandía")
frutas.pop()
frutas.shift()
console.log(frutas)


//Ejercicio 3
const numeros = [10, 20, 30, 40, 50];
const numero = parseInt(prompt("Ingresá un número: "))

if (numeros.includes(numero)){
    console.log("Tu número se encuentra en el arreglo.")     
} else{
    console.log ("Tu número no se encuentra en el arreglo.")
}


//Ejercicio 4
const numeros = [1, 2, 3, 2, 4, 2, 5]

let contador =  0;

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] == 2){
        contador++;    
    }
}
console.log(`El dos se repite: ${contador} veces en el arreglo.`)


//Ejercicio 5
/*En el bucle for of, te falto declarar como const la variable numero, ademas, no filtraste por los numeros mayores a 10 en el mismo, es decir, en el bucle tenes que poner un condicional para fitrar que el numero de esa iteraccion sea mayor a 10, si lo es, lo agregas a newArray, sino no lo agregas. No tenes que usar i ya que esa variable no existe, eso se usa en el bucle for normal, donde ahi creamos i (aunque le podemos poner otro nombre, pero por convencion se le pone ese*/
numeros = [5, 12, 8, 20, 3, 15]

let newArray = []
for(numero of numeros){
    newArray.unshift(numeros[i])
}
console.log(newArray)



//Ejercicio 6
/*Aca redeclaraste la funcion nombreReverso, fijate que le pusiste 2 veces let, solo se declara una vez, ademas podes ponerle CONST, ya que por mas que le modfiques elementos al array la vriables sigue apuntando al mismo array. Tambien confundiste join() con push() para agregar un elemento al ARRAY.

Y tambien arrancaste el bucle en i = nombres.length en vez de nombres.length - 1 (el primer índice queda undefined).

La idea esta bien pero faltan esos detalles

Seria cambiar el valor de i , no declarar dos veces la variables nombresReverso y agregar al array con push() y no con join()
*/
let nombres = ["Mia", "Paula", "Ambar", "Marcos"]

//opción de nuevo array
let nombresReverso = []
for (let i = nombres.length; i >= 0; i--) {
   let nombresReverso = nombresReverso.join(nombres[i])
}

//opción de nuevo string

let nombres = nombres.reverse();
console.log(nombres)

//Ejercicio 7
/*Inicializaste let total = () con paréntesis vacíos en lugar de let total = 0; 

Dentro del bucle , volviste a declarar let total = total + precio, redeclarando una variable local nueva en cada vuelta en lugar de acumular sobre la externa. Acordate, una vwz que declaras una funcion, con let o const, no se vuelve a hacer, sino, si esta en otro ambito es una nueva funcion

Dividiste por un número fijo (6) en lugar de usar productos.length

Inicializa total con 0, no la declaras dos veces y al final dividi por la longitud del array de productos */
let productos = [1000, 500, 4600, 1400, 10500, 67000]
let total = ()
for (let precio of productos){
    let total = total +  precio
}

let promedio = total / 6

console.log(`Total: ${total}`)
console.log (`Promedio: ${promedio}`)


//Ejercicio 8
/*
    sumaTotal al principio no la declaras, ni let ni const, lo correcto es let. Luego en el bucle la declaras devuelta, mismo error que ej 7, en cada iteracione s uuna nueva variable. Declarala solo al principio antes del bucle

Luego el bucle anidado tiene la diea correctaa, pero en el for interno declaraste la variable col, pero adentro intentaste leer numeros[fila][columna] , columna no existe, tendrias que poner col ahi


*/ 
const numeros = [
    [2, 65, -55],
    [1000, 0, 88],
    [-13, 89, 67]
]
sumaTotal = 0

for (let fila = 0; fila < numeros.length; fila++) {
    for (let col = 0; col < numeros [fila].length; col++){
        let sumaTotal = sumaTotal + numeros[fila][columna] 
    }
}
console.log(`Suma total: ${sumaTotal}`)

//Ejercicio 9
/*
    Mismo error que ej 8, pusiste columna en el if y console.log, los cuales no existe, ya que declaraste col

Son errores pequeños que repetis en el codigo, si usas VScode , deberias instalar la extension Eror Lens que estos errores te los va marcando a medida que programas para que no los repitas

*/
const oceano = [
    ["~", "~", "~"],
    ["~", "B", "~"],
    ["~", "~", "~"],
];

for (let fila = 0; fila < oceano.length; fila++) {
    for (let col = 0; col < oceano[fila].length; col++){
        if(oceano[fila][columna] === "B"){
            console.log (`El barco está en la posición: ${[(fila)][(columna)]}`)
            break
        } 
    }
}







