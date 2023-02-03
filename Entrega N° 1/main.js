// Talleres a ofrecer
let t1 = "Inteligencia emocional";
let t2 = "Coaching Ontológico";
let t3 ="Coaching Ejevutivo";
let t4 ="Mindfullnes";


//Precios
let precio1 = 1000;
let precio2 = 2000;
let precio3 = 3000;
let precio4 = 4000;

let nombre = prompt("¡Bienvenido!¿Cuál es tu nombre?");

let talleres = ( prompt("Hola " + nombre +" ¿Que curso te gustaría realizar con nosotros?. Digita el número" 
        +"\n 1. " + t1 + " - " + precio1
        +"\n 2. " + t2 + " - " + precio2
        +"\n 3. " + t3 + " - " + precio3
        +"\n 4. " + t4 + " - " + precio4)
        );
if (talleres >= 1 && talleres <= 4);
    if(talleres == 1){
        alert("El taller " + t1 + " tiene un valor de " + precio1);
        let cantidad = Number(
            prompt("¿Cuantas membresías de " + t1 + " queres comprar?")
        );
        alert("El total a pagar es U$" + precio1 * cantidad);
    }
    else if(talleres == 2){
        alert("El taller " + t2 + " tiene un valor de " + precio2);
        let cantidad = Number(
            prompt("¿Cuantas membresías de " + t2 + " queres comprar?")
        );
        alert("El total a pagar es U$" + precio2 * cantidad);
    }
    else if(talleres == 3){
        alert("El taller " + t3 + " tiene un valor de " + precio3);
        let cantidad = Number(
            prompt("¿Cuantas membresías de " + t3 + " queres comprar?")
        );
        alert("El total a pagar es U$" + precio3 * cantidad);
    }
    else if(talleres == 4){
        alert("El taller " + t4 + " tiene un valor de " + precio4);
        let cantidad = Number(
            prompt("¿Cuantas membresías de " + t4 + " queres comprar?")
        );
        alert("El total a pagar es U$" + precio4 * cantidad);
    }
else(
    alert("¿Puede ser que te hayas equivocado?")
);




