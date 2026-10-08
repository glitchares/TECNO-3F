import promptSync from "prompt-sync"
const prompt = promptSync()

/*// Clasificación de Número Entero (1)
let numeroEntero = prompt("Insertá un número entero: ")

if (numeroEntero > 0){
    console.log("Positivo")
} else if (numeroEntero < 0){
    console.log("Negativo")
} else {
    console.log("Cero")
}


// Determinar Tipo de Triángulo (2)
let longitud1 = prompt("Longitud de primer lado del triángulo: ")
let longitud2 = prompt("Longitud de primer lado del triángulo: ")
let longitud3 = prompt("Longitud de primer lado del triángulo: ")

if (longitud1 == longitud2 == longitud3){
    console.log("Equilátero")
} else if (longitud1 !== longitud2 && longitud2 !== longitud3 && longitud1 !== longitud3){
    console.log("Escaleno")
} else{
    console.log("Isósceles")
}

// Clasificación de edad (3)
let edad = Number(prompt("Insertá tu edad: "));

if(edad < 12){
    console.log("Niño");
} else if(edad < 18){
    console.log("Adolescente");
} else if(edad < 65){
    console.log("Adulto");
} else{
    console.log("Adulto mayor");
}

// Determinar si un número es Par o Impar (4)

let numeroParidad = prompt("Insertá un número a determinar su paridad: ")

if (numeroParidad % 2 == 0){
    console.log("Es par")
}else{
    console.log("Es impar")
} 

/*
// Cálculo de notas (5)

let calificacion = Number(prompt("Insertá tu calificación: ")) 

if(calificacion > 89){
    console.log("A")
} else if(calificacion > 79){
    console.log("B")
} else if(calificacion > 69){
    console.log("c")
} else if(calificacion > 59){
    console.log("D")
} else{
    console.log("F")
}
    */

// Número Mayor (6)
let numeroMayor1= prompt("Insertá un número: ")
let numeroMayor2= prompt("Insetá un segundo número: ")
let numeroMayor3= prompt("Insertá un tercer número: ")

if(numeroMayor1 > numeroMayor2 && numeroMayor3){
    console.log("Numero mayor: ", numeroMayor1 )
}
else if(numeroMayor1 > numeroMayor2 && numeroMayor3){
    console.log("Numero mayor: ", numeroMayor1 )
}
else if(numeroMayor1 > numeroMayor2 && numeroMayor3){
    console.log("Numero mayor: ", numeroMayor1 )
}
