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

if (isNaN(nombre)){
        alert("Hola " + nombre +" ¿Que curso te gustaría realizar con nosotros?" 
        +"\n 1. " + t1 + " - " + precio1
        +"\n 2. " + t2 + " - " + precio2
        +"\n 3. " + t3 + " - " + precio3
        +"\n 4. " + t4 + " - " + precio4);
};

// Elección de talleres
let talleres = prompt(
    nombre + ", Ingresá el número del taller que querés realizar"
   
)
// validación del curso elegido
if (talleres >= 1 && talleres <= 4);
    if(talleres == 1){
        alert("El taller " + t1 + " tiene un valor de " + precio1);
    }
else(
    alert("¿Puede ser que te hayas equivocado?")
)




