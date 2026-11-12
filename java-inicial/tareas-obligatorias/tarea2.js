import promptSync from "prompt-sync"
const prompt = promptSync()

// ARES MIA 48296494

//Ejercicio 1
//imprimir indice y valor
let frutas =  ["manzana", "banana", "pera", "naranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}


//Ejercicio 2
//hace falta en variable?
frutas.push("kiwi")
frutas.unshift("sandía")
frutas.pop()
frutas.shift()
console.log(frutas)
/*
//Ejercicio 3
//agregale int
numeros = [10, 20, 30, 40, 50]
numero = Number(prompt("Ingresá un número: "))

if numeros.includes(numero){
    console.log("Tu número se encuentra en el arreglo.")     
}else{
    console.log ("Tu número no se encuentra en el arreglo.")
}

//Ejercicio 4
//contador de cuantas veces aparece el 2.
//fstring en js?

numeros = [1, 2, 3, 2, 4, 2, 5]

let contador =  0;

for (let i = 0; numeros.length; i++){
    if (numeros[i] == 2){
        contador++;    
    }
}
console.log(`El dos se repite: ${contador} veces en el arreglo.`)

//Ejercicio 5
//
numeros = [5, 12, 8, 20, 3, 15]

let newArray = []
for(numero[i] > 10){
    newArray.join(numero[i])
}
console.log(newArray)



//Ejercicio 6
//recorrerlo al revez
// y guardarlos con un bluce for trad

let nombres = ["Mia", "Paula", "Ambar", "Marcos"];

//opción de nuevo array
let nombresReverso = []
for (let i = nombres.length; i >= 0; i--) {
   let nombresReverso = nombresReverso.join(nombres[i])
}

//opción de nuevo string

let nombres = nombres.reverse();
console.log(nombres)

//Ejercicio 7
let productos = [1000, 500, 4600, 1400, 10500, 67000]
let total = ()
for (let precio of productos){
    let total = total +  precio
}

let promedio = total / 6

console.log(`Total: ${total}`)
console.log (`Promedio: ${promedio}`)


//Ejercicio 8
//bucles anidados ?
const numeros = [
    [2, 65, -55],
    [1000, 0, 88],
    [-13, 89, 67]
]
.concatenate(numeros)
for numero in numeros 
0 + numero [i]


//Ejercicio 9
const oceano = [
    ["~", "~", "~"],
    ["~", "B", "~"],
    ["~", "~", "~"],
];

en los 3 x cada array merge? y buscar?
.find("B")

*/