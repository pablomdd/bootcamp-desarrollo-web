---
id: 03-week3-fundamentals
title: Fundamentos de Javascript
sidebar_label: Fundamentos
---

## Variables
Las variables son usadas para almacenar datos.

```javascript
let mensaje = 'Hola'; //guardar el string
```

El string esta ahora guardado en la memoria asociada a la variable y podemos acceder a el con el nombre asignado.

Existen tambien las variables const para declarar una variable constante (que no va a cambiar).

```javascript
const COLOR_ROJO = '#F00'; //no va a cambiar
```

Existen algunas restricciones al declarar el nombre de la variable:
* Solo debe contener letras, digitos y los simbolos $ y _
* El primer caracter no debe ser un digito
* Son sensitivas entre mayusculas y minusculas
* No permiten el uso de guiones medios -
* No se pueden usar nombres reservados

## Tipos de datos
En javascrip podemos cambiar el tipo de dato almacenado en una variable sin ningun problema.

```javascript
// no error
let message = "hello";
message = 123456;
```

### Number
Representa ambos tipos de numeros, el entero y el flotante. Hay muchas operaciones para números: multiplicación (*), división (/), resta (-), suma (+), etc.

```javascript
let n = 123;
n = 12.345;
```

Además exiten "valores numericos especiales" que pertenecen a este tipo de dato: Infinity, -Infinity y NaN.

### BigInt
El dato "number" no puede representar valores mayores que (2e53 - 1) (osea 9007199254740991) o menos que -(2e53 - 1) para los negativos.

Generalmente eso es suficiente pero en caso de que no existe BigInt.

```javascript
const bigInt = 1234567890123456789012345678901234567890n;
```

### String
Un string en javascript va rodeado de comillas, pueden ser comillas simples, comillas dobles o backticks. 

```javascript
let nombre = "Juan";

let saludo = `Hola, ${nombre}!` ); // Hola, Juan!

let cita = 'Ella dijo "asi es esto"'
```

### Boolean
El tipo boolean puede tomar solo 2 valores: true y false.

```javascript
let edadSeleccionada = true; 
let botonSeleccionado = false;
```

### Null
El valor especial null es un tipo independiente de los otros que contiene unicamente el valor null.
En Javascript es una referencia a un objeto no existente. Representa "nada", "vacio" o "valor desconocido".

```javascript
let edad = null;
```

### Undefined
El valor especial undefined tambien es independiente del resto. 
Su significado es "valor no asignado". Si una variable es declarada pero no asignada-

```javascript
let age;
console.log(age); // "undefined"
```

### Operador typeof
Regresa el tipo de dato de una variable.
```javascript
typeof 0 // "number"
typeof(true) // "boolean"
```

## Condicionales
En cualquier lenguaje de programación, el código necesita realizar decisiones y llevar a cabo diferentes acciones acordes dependiendo de distintas entradas. Para esto tenemos las siguientes sentencias.

### If ... else
Una sintaxis básica if...else luce así

```javascript
let compraRealizada = false;

if (compraRealizada === 'pan') { //no necesitas especificar explícitamente '=== true'
   let costo = 10;
} else if (compraRealizada === 'fruta') {
   let costo = 5;
} else {
    let costo = 7;
}
```

### Switch
Los switch statements son de gran ayuda — toman una sola expresión / valor como una entrada, y luego pasan a través de una serie de opciones hasta que encuentran una que coincida con ese valor, ejecutando el código correspondiente que va junto con ella

```javascript
switch (expresion) {
  case choice1:
    ejecuta este código
    break;

  case choice2:
    ejecuta este código
    break;

  // Se pueden incluir todos los casos que quieras

  default:
    por si acaso, corre este código
}
```

### Operador terneario
El operador ternario o condicional es una pequeña sintaxis que prueba una condición y devuelve un valor/expresión, si es true, y otro si es false — Esto puede ser útil en algunas situaciones, y puede ocupar mucho menos código que un bloque if...else si simplemente tienes dos opciones.

```javascript
(condición ) ? ejecuta este código : ejecuta este código en su lugar

actividad = dia === 'domingo' ? 'descansar' : 'estudiar'
```

## Loops
```javascript
while (condition) {
  // code
  // so-called "loop body"
}
```

```javascript
do {
  // loop body
} while (condition);
```

```javascript
for (begin; condition; step) {
  // ... loop body ...
}
```
Para romper un ciclo existe la sentencia break.
Para salta a la siguiente iteración existe la sentencia continue.

## Funciones
Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.

Pueden declararse como declaración

```javascript
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
```

O pueden declararse como expresiones

```javascript
const square = function(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
```

### Arrow funcitions
Otra forma de declarar funcionas es de la siguiente forma.

```javascript
const square = (a,b) => (a + b);
```

## Referencias
- https://javascript.info/

## Material de apoyo

### Referencia string
- https://www.w3schools.com/jsref/jsref_obj_string.asp