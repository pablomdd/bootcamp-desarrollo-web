---
id: 03-week3-arrays
title: Arrays
sidebar_label: Arrays
---

Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables. 

### Crear un Array
```javascript
let frutas = ["Manzana", "Banana"]

console.log(frutas.length)
// 2
```

### Acceder a un elemento de Array mediante su índice
```javascript
let primero = frutas[0]
// Manzana

let ultimo = frutas[frutas.length - 1]
// Banana
```

### Recorrer un Array
```javascript
frutas.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})
// Manzana 0
// Banana 1
```

### Añadir un elemento al final de un Array
```javascript
let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]
```

## Material de apoyo

### Referencia arrays
- https://www.w3schools.com/jsref/jsref_obj_array.asp