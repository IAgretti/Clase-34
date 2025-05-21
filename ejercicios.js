// Pedir la edad del usuario e indicar si puede votar. Considerar como edad para votar como mayor o igual a 16 años.

let edad = parseInt(prompt("Ingresa tu edad:"));

if (edad >= 16) {
  alert("Puedes votar.");
} else {
  alert("No puedes votar.");
}





// Crear un juego donde el usuario tiene que adivinar un número entre 1 y 10. (Utilizar un valor predefinido a su criterio).
const numeroSecreto = 7; // puedes cambiar este número
let intento = parseInt(prompt("Adivina un número entre 1 y 10:"));

if (intento === numeroSecreto) {
  alert("¡Correcto! Adivinaste el número.");
} else {
  alert("Incorrecto. El número era " + numeroSecreto);
}


// Solicitar al usuario que ingrese valores enteros y éstos que vayan sumándose, el bucle termina cuando el usuario ingresa 0.
let suma = 0;
let num;

do {
  num = parseInt(prompt("Ingresa un número (0 para salir):"));
  suma += num;
} while (num !== 0);

alert("La suma total es: " + suma);

// Realizar un script que solicite al usuario una contraseña y mostrar un mensaje informando si fue correcta o no. Termina el bucle cuando la contraseña ingresada sea la correcta.
const contraseñaCorrecta = "1234";
let contraseña;

do {
  contraseña = prompt("Ingresa la contraseña:");
  if (contraseña !== contraseñaCorrecta) {
    alert("Contraseña incorrecta.");
  }
} while (contraseña !== contraseñaCorrecta);

alert("Contraseña correcta. Acceso concedido.");

// Mostrar los números mayores a 20 y menores a 45.
for (let i = 21; i < 45; i++) {
  console.log(i);
}

// Crear un script que permita al usuario ingresar varios números enteros, cuando el mismo sea mayor a 100 termina, mostrar una leyenda aclarativa. Mientras no sea mayor a 100 mostrar el valor ingresado.
let numero;

do {
  numero = parseInt(prompt("Ingresa un número:"));
  if (numero <= 100) {
    alert("Número ingresado: " + numero);
  } else {
    alert("Número mayor a 100. Fin del programa.");
  }
} while (numero <= 100);

// Mostrar el siguiente menú y mostrar la leyenda según la opción seleccionada:
// 1. Saludar -> mostrar la leyenda: (“Hola, ¿cómo estás?”)
// 2. Mostrar frase -> mostrar: (“Me gusta JavaScript!”)
// 3. Salir -> mostrar: (“Saliendo del programa...”)
let opcion = prompt("Selecciona una opción:\n1. Saludar\n2. Mostrar frase\n3. Salir");

switch(opcion) {
  case "1":
    alert("Hola, ¿cómo estás?");
    break;
  case "2":
    alert("Me gusta JavaScript!");
    break;
  case "3":
    alert("Saliendo del programa...");
    break;
  default:
    alert("Opción no válida.");
}

// Solicitar al usuario que ingrese una hora, imprimir las siguientes leyendas según se muestra a continuación:
// Si hora es menor o igual a 12 -> “Buenos días”
// Si hora es mayor a 12 y menor a 19 -> “Buenas tardes”
// Si hora es mayor o igual a 19 -> “Buenas noches”
let hora = parseInt(prompt("Ingresa la hora (0 a 23):"));

if (hora <= 12) {
  alert("Buenos días");
} else if (hora < 19) {
  alert("Buenas tardes");
} else {
  alert("Buenas noches");
}
