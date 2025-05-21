// Solicitar la edad de la persona e imprimir si es mayor de edad o no, si es mayor o igual a 18
let mayorEdad = parseInt(prompt("Ingrese su edad: "));

if (mayorEdad >= 18) {
  console.log("Es mayor de edad!");
} else {
  console.log("Es menor de edad!");
}

// Ingresar una nota, imprimir Excelente si es >= 9, Bien >= 6 y sin Necesita mejorar
let nota = parseInt(prompt("Ingrese la nota: "));

if (nota >= 9) {
  alert("Excelente!");
} else if (nota >= 6) {
  alert("Bien!");
} else {
  alert("Necesita Mejorar!");
}

// Utilizar switch para evaluar si un número es 0: imprimir "Nada", 1 o 2: "Pequeño", default: "No pasó nada"
let num = parseInt(prompt("Ingrese un número: "));

switch (num) {
  case 0:
    console.log("Nada");
    break;
  case 1:
  case 2:
    console.log("Pequeño");
    break;
  default:
    console.log("No pasó nada!");
}

//Imprimir los números del 1 al 10 usando for
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// Imprimir los números del 0 al 9 usando while
let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}

// Imprimir i mientras sea menor a 5
let i = 7;
do {
  console.log(i);
  i++;
} while (i < 5);

// Pide al usuario una temperatura en grados Celsius y conviértela a Fahrenheit.
let celsius = parseFloat(prompt("Ingrese la t° en grados Celsius:"));
let far = celsius * 9 / 5 + 32;
console.log("El equivalente a °C en F° es: ", far);

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));
let operacion = prompt("Ingrese la operación (+, -, *, /");
let resultado;

// Pide dos números y una operación (+, -, *, /) e imprime el resultado.
switch (operacion) {
  case "+":
    resultado = num1 + num2;
    break;
  case "-":
    resultado = num1 - num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    if (num2 !== 0) {
      resultado = num1 / num2;
    } else {
      resultado = "Error: división por cero, vuelva a intentar";
    }
    break;
  default:
    resultado = "Operación no válida.";
}
console.log("Resultado: ", resultado);

let a = parseInt(prompt("Ingrese el primer número:"));
let b = parseInt(prompt("Ingrese el segundo número: "));

// Pide dos números e indica cuál es mayor o si son iguales.
if (a > b) {
  console.log(a + " es mayor que " + b);
} else if (b > a) {
  console.log(b + " es mayor que " + a);
} else {
  console.log("Ambos son iguales.");
}

// Pedir un número y mostrar su tabla de multiplicar del 1 al 10 usando un for.
let numer = parseInt(
  prompt("Ingrese un número para ver su tabla de multiplicar: ")
);
console.log("Tabla del " + numer);

for (let i = 1; i <= 10; i++) {
  console.log(numer + " x " + i + " = ", numer * i);
}

// Del 1 al 50, mostrar cuántos números son pares y cuántos impares.
let pares = 0;
let impares = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}
console.log("Cantidad de números pares ", pares);
console.log("Cantidad de números impares ", impares);

// Pedir un número n y luego solicitar n números para sumarlos. Usar un bucle while o for.
let n = parseInt(prompt("¿Cuántos números deseas sumar? "));
let suma = 0;

for (let i = 1; i <= n; i++) {
  let num = parseFloat(prompt("Ingrese el número: "));
  suma += num;
}

console.log("La suma total es: ", suma);

// Pide un número del 1 al 7 y muestra el día correspondiente usando switch.
let dia = parseInt(
  prompt("Ingrese un n° del 1 al 7 para saber día de la semana")
);
let nom;

switch (dia) {
  case 1: nom = "Lunes"; break;
  case 2: nom = "Martes"; break;
  case 3: nom = "Miércoles"; break;
  case 4: nom = "Jueves"; break;
  case 5: nom = "Viernes"; break;
  case 6: nom = "Sábado"; break;
  case 7: nom = "Domingo"; break;
  default: nom = "Ingrese un número entre 1 y 7"; break;
}
console.log("El día de la semana correspondiente es: ", nom);

/* Pide una nota del 0 al 10 y muestra un mensaje:
0 a 2: Muy deficiente
3 a 4: Insuficiente
5: Suficiente
6: Bueno
7 a 8: Notable
9 a 10: Sobresaliente */

let notas = parseInt(prompt("Ingresa una nota del 0 al 10:"));
let mensaje;

if (notas >= 9 && notas <= 2) {
  mensaje = "Muy deficiente";
}else if (notas >= 3 && notas <= 4) {
  mensaje = "Insuficiente";
}else if (notas === 5) {
  mensaje = "Suficiente";
}else if (notas === 6) {
  mensaje = "Bueno";
}else if (notas >= 7 && notas <= 8) {
  mensaje = "Notable";
}else if (notas >= 9 && notas <= 10) {
  mensaje = "Sobresaliente";
}else {
  mensaje = "Nota no válida";
}
console.log("Resultado: ", mensaje);
