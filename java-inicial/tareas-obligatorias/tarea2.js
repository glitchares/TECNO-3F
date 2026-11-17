import promptSync from "prompt-sync";
const prompt = promptSync();

// ARES MIA 48296494

//Ejercicio 1
const frutas =  ["manzana", "banana", "pera", "naranja"];
for (let i = 0; i < frutas.length; i++){
    console.log(i, frutas[i]);
}


//Ejercicio 2
frutas.push("kiwi");
frutas.unshift("sandía");
frutas.pop();
frutas.shift();
console.log(frutas);


//Ejercicio 3
const numeros = [10, 20, 30, 40, 50];
const numero = parseInt(prompt("Ingresá un número: "));

if (numeros.includes(numero)){
    console.log("Tu número se encuentra en el arreglo.");     
}else{
    console.log ("Tu número no se encuentra en el arreglo.");
}


//Ejercicio 4
const numeros = [1, 2, 3, 2, 4, 2, 5];

let contador =  0;

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] === 2){
        contador++;    
    }
}
console.log(`El dos se repite: ${contador} veces en el arreglo.`);


//Ejercicio 5
const numeros = [5, 12, 8, 20, 3, 15];

let nuevoArreglo = [];

for(let i = 0; i < numeros.length; i++){
    if (numeros[i] > 10){
        nuevoArreglo.push(numeros[i]);
    }
}

console.log(nuevoArreglo);


//Ejercicio 6
const nombres = ["Mia", "Paula", "Ambar", "Marcos"];

//opción de nuevo array
let nombresAlRevez = [];

for(let i = nombres.length - 1 ; i >= 0; i--){
    nombresAlRevez.push(nombres[i]);
}

console.log(nombresAlRevez);

//opción de modificar el original

nombres.reverse();
console.log(nombres);


//Ejercicio 7
const productos = [1000, 500, 4600, 1400, 10500, 67000];

let acum = 0;

for(let producto of productos){
    acum += producto ;
}

let promedio = acum / productos.length ;

console.log(`Total: $${acum}`);
console.log (`Promedio: $${Math.trunc(promedio)}`);


//Ejercicio 8
const numeros = [
    [2, 65, -55],
    [1000, 0, 88],
    [-13, 89, 67]
]

let total = 0;

for(let fila = 0; fila < numeros.length; fila++){
    for(let col = 0; col < numeros [fila].length; col++){
       total += numeros[fila][col] ;
    }
}
console.log(`Suma total: ${total}`);


//Ejercicio 9
const oceano = [
    ["~", "~", "~"],
    ["~", "B", "~"],
    ["~", "~", "~"],
]

for(let fila = 0; fila < oceano.length; fila++){
    for(let col = 0; col < oceano[fila].length; col++){
        if(oceano[fila][col] === "B"){
            console.log (`El barco está en la posición: [${fila}][${col}]`);  
        }      

    }
}   







