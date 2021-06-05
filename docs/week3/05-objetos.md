---
id: 05-week3-objetos
title: Objetos
sidebar_label: Objetos
---
JavaScript está diseñado en un paradigma simple basado en objetos. Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método.

Puedes definir propiedades asignándoles un valor. Por ejemplo, vamos a crear un objeto llamado myCar y le vamos a asignar propiedades denominadas make, model, y year de la siguiente manera:

```javascript
var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};
```
El ejemplo anterior también se podría escribir usando un iniciador de objeto, que es una lista delimitada por comas de cero o más pares de nombres de propiedad y valores asociados de un objeto, encerrados entre llaves ({}):

```javascript
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

```
También puedes acceder o establecer las propiedades de los objetos en JavaScript mediante la notación de corchetes ↑[]↓

```javascript
myCar['make']  = 'Ford';

myObj['fecha de creación'] = 'Cadena con espacios';
```

Puedes usar la notación de corchetes con for...in para iterar sobre todas las propiedades enumerables de un objeto. 

```javascript
for (var i in obj) {
    // obj.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
}
```

Tambien podemos asignar funciones, y se les llaman metodos.

```javascript
var Animal = {
  nombre: 'donita', 
  displayGreatting: function() {  
    console.log('¡Hola!');
  }
};
```
## Referencia
- https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects