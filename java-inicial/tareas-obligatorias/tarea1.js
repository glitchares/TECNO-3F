import promptSync from "prompt-sync";
const prompt = promptSync();

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
let longitudA = parseInt(prompt("Longitud de lado A del triángulo: "));
let longitudB = parseInt(prompt("Longitud de lado B del triángulo: "));
let longitudC = parseInt(prompt("Longitud de lado C del triángulo: "));

if (Number.isNaN(longitudA)|| Number.isNaN(longitudB) || Number.isNaN(longitudC)){
    console.log("Solo se aceptan numeros naturales como longitudes.");
}else{

    if (longitudA === longitudB && longitudB === longitudC){
        console.log("Equilátero");
    } else if (longitudA !== longitudB && longitudB !== longitudC && longitudA !== longitudC){
        console.log("Escaleno");
    } else{
        console.log("Isósceles");
    }
}

//Clasificación de edad (3)
let edad = parseInt(prompt("Insertá tu edad: "));

if (Number.isFinite(edad) && edad > 0){ 
    if(edad < 12){
        console.log("Niño");
    } else if(edad < 18){
        console.log("Adolescente");
    } else if(edad < 65){
        console.log("Adulto");
    }else{
        console.log("Adulto mayor");
    }
}else{
    console.log("Ingresá una edad válida.");
}


// Determinar si un número es Par o Impar (4)
let numeroParidad = parseInt(prompt("Insertá un número a determinar su paridad: "));

if (Number.isFinite(numeroParidad)){
    if(numeroParidad % 2 === 0){
        console.log("Es par");
    }else{
        console.log("Es impar");
    }
}else{
    console.log("Ingresá un número válido la próxima.");
}


// Cálculo de notas (5)
let calificacion = Number(prompt("Insertá tu nota: "));

if((-1 < calificacion && calificacion < 101) && (Number.isFinite(calificacion))){
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
}else{
    console.log("Deberías haber ingresado una nota válida.");
}


// Número Mayor entre 2 (6)
let numero1 = Number(prompt("Insertá un número: "));
let numero2 = Number(prompt("Insertá un segundo número: "));

if ((Number.isNaN(numero1)) || Number.isNaN(numero2)){
    console.log("Deberías haber ingresado valores válidos."); 
}
else{
    if(numero1 === numero2){
        console.log("Son iguales");
    }
    else if(numero1 > numero2){
        console.log("Número mayor: ", numero1);
    }
    else{
        console.log("Número mayor: ", numero2);
    }   
}


// Número Mayor entre 3 (6)
let primerNumero = Number(prompt("Insertá un número: "));
let segundoNumero = Number(prompt("Insertá un segundo número: "));
let tercerNumero = Number(prompt("Insertá un tercer número: "));

// En caso de que no hubiera que indicar que alguno de los tres números coincide (opción 1):
console.log("Número mayor: ", Math.max(primerNumero, segundoNumero, tercerNumero));

//Versión de jenny

let n1 = Number(prompt("Ingrese el primer número:"));
let n2 = Number(prompt("Ingrese el segundo número:"));
let n3 = Number(prompt("Ingrese el tercer número:"));

if (Number.isFinite(n1) && Number.isFinite(n2) && Number.isFinite(n3)){
    let mayor = n1;

    if (n2 > mayor) {
        mayor = n2;
    }

    if (n3 > mayor) {
        mayor = n3;
    }

    console.log("El número mayor es: " + mayor);
}else{
    console.log("La próxima ingrese valores válidos.");
}



