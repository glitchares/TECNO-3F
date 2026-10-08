import promptSync from "prompt-sync"
const prompt = promptSync()

// ARES MIA 48296494

// Clasificación de Número Entero (1)
let numeroEntero = Number(prompt("Insertá un número entero: "));

if (numeroEntero > 0){
    console.log("Positivo");
} else if (numeroEntero < 0){
    console.log("Negativo");
} else {
    console.log("Cero");
}


// Determinar Tipo de Triángulo (2)
let longitudA = Number(prompt("Longitud de lado A del triángulo: "));
let longitudB = Number(prompt("Longitud de lado B lado del triángulo: "));
let longitudC = Number(prompt("Longitud de lado C del triángulo: "));

if (longitudA === longitudB && longitudB === longitudC){
    console.log("Equilátero");
} else if (longitudA !== longitudB && longitudB !== longitudC && longitudA !== longitudC){
    console.log("Escaleno");
} else{
    console.log("Isósceles");
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
let numeroParidad = Number(prompt("Insertá un número a determinar su paridad: "));

if(numeroParidad % 2 == 0){
    console.log("Es par");
} else {
    console.log("Es impar");
} 

// Cálculo de notas (5)
let calificacion = Number(prompt("Insertá tu nota: "));

if(calificacion > 89){
    console.log("A");
} else if(calificacion > 79){
    console.log("B");
} else if(calificacion > 69){
    console.log("C");
} else if(calificacion > 59){
    console.log("D");
} else{
    console.log("F");
}


// Número Mayor entre 2 (6)
let numero1= Number(prompt("Insertá un número: "));
let numero2= Number(prompt("Insertá un segundo número: "));

if(numero1 == numero2){
    console.log("Son iguales");
}
else if(numero1 > numero2){
    console.log("Número mayor: ", numero1);
}
else{
    console.log("Número mayor: ", numero2);
}


// Número Mayor entre 3 (6)
let primerNumero = Number(prompt("Insertá un número: "));
let segundoNumero = Number(prompt("Insertá un segundo número: "));
let tercerNumero = Number(prompt("Insertá un tercer número: "));

// En caso de que no hubiera que indicar que alguno de los tres números coincide (opción 1):
console.log("Número mayor: ", Math.max(primerNumero, segundoNumero, tercerNumero))

// Si algún número coincide entre sí (opción 2):

let mayor = primerNumero;

if (segundoNumero > mayor) {
    mayor = segundoNumero;
}
if (tercerNumero  > mayor) {
    mayor = tercerNumero;
}

if (primerNumero === segundoNumero && segundoNumero === tercerNumero ) {
    console.log("Los tres números son iguales: ", primerNumero);
} else {

    if (primerNumero === segundoNumero){
        console.log("El primero y el segundo son iguales: ", primerNumero);
    }
    if (primerNumero === tercerNumero ) {
        console.log("El primero y el tercero son iguales: ", primerNumero);
    }
    if (segundoNumero === tercerNumero ) {
        console.log("El segundo y el tercero son iguales: ", tercerNumero);
    }
    console.log("Número mayor: ", mayor);
}


