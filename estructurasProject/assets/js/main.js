/*
* Estructuras de control simples
*/

const edad = 20;

if (edad >= 18) {
    document.getElementById("test1").innerHTML = "Eres mayor de edad";
}

/*
* Estructuras de control doble Ejemplo 1
*/

if (edad >= 18) {
    document.getElementById("test2").innerHTML = "Eres mayor de edad";
} else {
    document.getElementById("test2").innerHTML = "Eres menor de edad";
}

/*
* Estructuras de control doble Ejemplo 2
*/

const hora = new Date().getHours();
let saludo;

if (hora < 12) {
    saludo = "¡Buenos días!";
} else {
    saludo = "¡Buenas tardes!";
}

document.getElementById("test3").innerHTML = `<br>${saludo}`

/*
* Estructuras de control multiples
*/

const dia = new Date().getDay();
let queDia;

switch (dia) {
    case 0:
        queDia = "Domingo";
        break;
    case 1:
        queDia = "Lunes";
        break;
    case 2:
        queDia = "Martes";
        break;
    case 3:
        queDia = "Mierdoles";
        break;
    case 4:
        queDia = "Jueves";
        break;
    case 5:
        queDia = "Viernes";
        break;
    case 6:
        queDia = "Sábado";
        break;
    default:
        queDia = "Día no válido";
        break;
}

document.getElementById("test4").innerHTML = `<br> ${queDia}`;