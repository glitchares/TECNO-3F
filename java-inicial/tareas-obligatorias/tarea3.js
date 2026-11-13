import promptSync from "prompt-sync"
const prompt = promptSync()

// ARES MIA 48296494

const calculadora = {
    numero1: 0,
    numero2: 0,

    sumar() {
        this.numero1 = parseFloat(prompt("Ingrese un número: "))
        this.numero2 = parseFloat(prompt("Ingrese otro número más: "))
        return this.numero1 + this.numero2
    },

    restar() {
        this.numero1 = parseFloat(prompt("Ingrese un número: "))
        this.numero2 = parseFloat(prompt("Ingrese otro número más: "))
        return this.numero1 - this.numero2 
    },

    multiplicar() {
        this.numero1 = parseFloat(prompt("Ingrese un número: "))
        this.numero2 = parseFloat(prompt("Ingrese otro número más: "))
        return this.numero1 * this.numero2 
    },
    
    dividir(){
        this.numero1 = parseFloat(prompt("Ingrese un número: "))
        while (numero2 == 0 ){ //cambialo
            this.numero2 = parseFloat(prompt("Ingrese otro número más: "))
        }
        return numero1 / numero2
    },

    potencia(){

    },

    raiz(){
    
    }



    restar: restar,
    multiplicar: multiplicar,
    dividir: dividir,
    potencia: potencia,
    menu: menu
};

menu
switch()


function sumar(){
    let numero1 = parseInt(prompt("Ingrese un número: "))
    let numero2 = parseInt(prompt("Ingrese un número más: ")) 
    return(numero1 + numero2)
}

function restar(){
    let numero1 = parseInt(prompt("Ingrese un número: "))
    let numero2 = parseInt(prompt("Ingrese un número más: "))
    return(numero1 - numero2)
}

function multiplicar(){
    let numero1 = parseInt(prompt("Ingrese un número: "))
    let numero2 = parseInt(prompt("Ingrese un número más: ")) 
    return(numero1 * numero2)
}
function dividir(){
    let numero1 = parseInt(prompt("Ingrese un número: "))
    let numero2 = parseInt(prompt("Ingrese un número más: "))
    return(numero1 / numero2 )
}

function raiz(){
    let numero1 = parseInt(prompt("Ingrese un número: "))
    let numero2 = parseInt(prompt("Ingrese un número más: ")) 
    return()


function salir(){
    setTimeout(3)
}


//no funciones separadas

2 numeros

b != 0

operaciom > menu again

readline >>
*/