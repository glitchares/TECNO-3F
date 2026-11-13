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
        this.numero2 = parseFloat(prompt("Ingrese otro número más: "))

        while (this.numero2 == 0 ){ 
            console.log("No podés dividir por 0!")
            this.numero2 = parseFloat(prompt("Ingrese otro número más: "))
        } 
        return this.numero1 / this.numero2
    },

    potencia(){
        this.numero1 = parseFloat(prompt("Ingrese un número: "))
        this.numero2 = parseFloat(prompt("Ingrese otro número más: "))
        return Math.pow(this.numero1 , this.numero2)
    },

    raiz(){
        this.numero1 = parseFloat(prompt("Ingrese un número: "))
        this.numero2 = parseFloat(prompt("Ingrese el índice: "))

        while (this.numero2 == 0 ){ 
            console.log("El subíndice no puede ser 0!")
            this.numero2 = parseFloat(prompt("Ingrese otro número más: "))
        }
        return this.numero1 ** (1 / this.numero2)
    },

    menu() {

        console.log("Calculadora")
        
        console.log("1. Sumar")
        console.log("2. Restar")
        console.log("3. Multiplicar")
        console.log("4. Dividir ")
        console.log("5. Potencia")
        console.log("6. Raíz")
        console.log("7. Salir")

        const opcion = parseInt(prompt("Elegí una opción: ")) 

        switch(opcion) {
            case 1:
                console.log("Resultado:", this.sumar())    
                break
            case 2:
                console.log("Resultado:", this.restar())
                break
            case 3:
                console.log("Resultado:", this.multiplicar())
                break
            case 4:
                console.log("Resultado:", this.dividir())
                break
            case 5:
                console.log("Resultado:", this.potencia())
                break
            case 6:
                console.log("Resultado:", this.raiz())    
                break
            case 7:
                console.log("Saliendo del menú...")
                break
                
            default:
                console.log("Ingresá una opción válida")
            }

            if(opcion != 7){
                setTimeout(() => this.menu(), 3000)
            }
        }
    }

calculadora.menu()



/*


// while True verif logic? // while numero2 is 0, keep asking for a n > 1
        //while numero2 is not 0 stop asking for a n > 1
        // 

switch(opcion) {
    case 1:
        console.log()
}


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