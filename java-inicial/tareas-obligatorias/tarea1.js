import promptSync from "prompt-sync";
const prompt = promptSync();

// ARES MIA 48296494

// Clasificación de Número Entero (1)
/*let numeroEntero = Number(prompt("Insertá un número entero: "));

if (numeroEntero > 0){
    console.log("Positivo");
} else if (numeroEntero < 0){
    console.log("Negativo");
} else {
    console.log("Cero");
}*/


// Determinar Tipo de Triángulo (2)
/*
Ej 2: la lógica de equilátero, isósceles y escaleno es correcta. Un detalle en el texto de la consigna: “Longitud de lado B lado del triángulo” tiene una palabra repetida. Probá con letras en lugar de números. Qué tipo de triángulo te dice el programa? 
yo: negativos?
*/

/*let longitudA = parseInt(prompt("Longitud de lado A del triángulo: "));
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
}*/

//Clasificación de edad (3)
/*
Ej 3: el orden de las condiciones está bien pensado, y 12 y 18 caen en el grupo correcto. Probá con -5 y con letras. Qué mensaje aparece en cada caso? 
*/ 
/*let edad = parseInt(prompt("Insertá tu edad: "));

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
    console.log("Ingresá una edad válida.")
}*/

// Determinar si un número es Par o Impar (4)
/*
Ej 4: correcto para números enteros. Probá con letras y fijate qué resultado da.


let numeroParidad = parseInt(prompt("Insertá un número a determinar su paridad: "));

if (Number.isFinite(numeroParidad)){
    if(numeroParidad % 2 == 0){
        console.log("Es par");
    }else{
        console.log("Es impar");
    }
}else{
    console.log("Ingresá un número válido la próxima.")
}
*/

// Cálculo de notas (5)
/*
Ej 5: acá hay un detalle para revisar. Probá con 89.5: en qué categoría cae? Y con 105, qué muestra? Pensá en cómo podrías cerrar los rangos para que las notas decimales queden bien clasificadas y las que están fuera de 0 a 100 se marquen como error.
*/ 
/*
let calificacion = Number(prompt("Insertá tu nota: "));

if((-1 < calificacion && calificacion < 101) && (Number.isFinite(calificacion) && Number.isInteger(calificacion))){
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
    console.log("Deberías haber ingresado una nota válida.")
}
*/

// Número Mayor entre 2 (6)
/*
Ej 6 con dos números: funciona bien para valores válidos. Probá con letras: qué muestra? 
*/ 

/*
let numero1 = Number(prompt("Insertá un número: "));
let numero2 = Number(prompt("Insertá un segundo número: "));

if ((Number.isNaN(numero1)) || Number.isNaN(numero2)){
    console.log("Deberías haber ingresado valores válidos."); 
}
else{
    if(numero1 == numero2){
        console.log("Son iguales");
    }
    else if(numero1 > numero2){
        console.log("Número mayor: ", numero1);
    }
    else{
        console.log("Número mayor: ", numero2);
    }   
}
*/

// Número Mayor entre 3 (6)
let primerNumero = Number(prompt("Insertá un número: "));
let segundoNumero = Number(prompt("Insertá un segundo número: "));
let tercerNumero = Number(prompt("Insertá un tercer número: "));

// En caso de que no hubiera que indicar que alguno de los tres números coincide (opción 1):
console.log("Número mayor: ", Math.max(primerNumero, segundoNumero, tercerNumero))
/*
// Si algún número coincide entre sí (opción 2):

let mayor = primerNumero;

if (segundoNumero > mayor) {
mayor = segundoNumero;
}
if (tercerNumero > mayor) {
mayor = tercerNumero;
}

if (primerNumero === segundoNumero && segundoNumero === tercerNumero ) {
console.log("Los tres números son iguales: ", primerNumero);
} else {


/*

Versión de jenny

let n1 = Number(prompt("Ingrese el primer número:"));
let n2 = Number(prompt("Ingrese el segundo número:"));
let n3 = Number(prompt("Ingrese el tercer número:"));

let mayor = n1;

if (n2 > mayor) {
    mayor = n2;
}

if (n3 > mayor) {
    mayor = n3;
}

console.log("El número mayor es: " + mayor);
*/ 



