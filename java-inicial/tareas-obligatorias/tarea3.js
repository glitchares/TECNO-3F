import promptSync from "prompt-sync";
const prompt = promptSync();

// ARES MIA 48296494

const calculadora = {
    numero1: 0,
    numero2: 0,

    sumar() {
        this.numero1 = parseFloat(prompt("Ingrese un número: "));
        this.numero2 = parseFloat(prompt("Ingrese otro número más: "));
        return this.numero1 + this.numero2;
    },

    restar() {
        this.numero1 = parseFloat(prompt("Ingrese un número: "));
        this.numero2 = parseFloat(prompt("Ingrese otro número más: "));
        return this.numero1 - this.numero2;
    },

    multiplicar() {
        this.numero1 = parseFloat(prompt("Ingrese un número: "));
        this.numero2 = parseFloat(prompt("Ingrese otro número más: "));
        return this.numero1 * this.numero2;
    },
    
    dividir(){
        this.numero1 = parseFloat(prompt("Ingrese un número: "));
        this.numero2 = parseFloat(prompt("Ingrese otro número más: "));

        while (this.numero2 == 0 ){ 
            console.log("No podés dividir por 0!");
            this.numero2 = parseFloat(prompt("Ingrese otro número más: "));
        } 
        return this.numero1 / this.numero2;
    },

    potencia(){
        this.numero1 = parseFloat(prompt("Ingrese un número: "));
        this.numero2 = parseFloat(prompt("Ingrese otro número más: "));
        return Math.pow(this.numero1 , this.numero2);
    },

    raiz(){
        this.numero1 = parseFloat(prompt("Ingrese un número: "));
        this.numero2 = parseFloat(prompt("Ingrese el índice: "));

        while (this.numero2 <= 0 ){ 
            console.log("El índice no puede ser 0 ni negativo!");
            this.numero2 = parseFloat(prompt("Ingrese otro índice: "));
        }
        return Math.pow(this.numero1,  (1 / this.numero2));
    },

    menu() {

        console.log("Calculadora");
        
        console.log("1. Sumar");
        console.log("2. Restar");
        console.log("3. Multiplicar");
        console.log("4. Dividir ");
        console.log("5. Potencia");
        console.log("6. Raíz");
        console.log("7. Salir");

        const opcion = parseInt(prompt("Elegí una opción: "));

        switch(opcion) {
            case 1:
                console.log("Resultado:", this.sumar()) ;   
                break;
            case 2:
                console.log("Resultado:", this.restar());
                break
            case 3:
                console.log("Resultado:", this.multiplicar());
                break;
            case 4:
                console.log("Resultado:", this.dividir());
                break;
            case 5:
                console.log("Resultado:", this.potencia());
                break;
            case 6:
                console.log("Resultado:", this.raiz());    
                break;
            case 7:
                console.log("Saliendo del menú...");
                break;
                
            default:
                console.log("Ingresá una opción válida");
            }

            if(opcion != 7){
                setTimeout(() => this.menu(), 3000);
            }
        }
    };

calculadora.menu();

//readline, base negativa raíz
