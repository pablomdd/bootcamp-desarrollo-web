---
id: 04-knowing-css
title: Conociendo CSS
sidebar_label: Conociendo CSS
---

## La cascada

Dentro de CSS, todos los estilos van en cascada desde la parte superior de una hoja de estilo hasta la parte inferior, lo que permite agregar o sobrescribir diferentes estilos a medida que avanza la hoja de estilo.

Por ejemplo, digamos que seleccionamos todos los elementos de párrafo en la parte superior de nuestra hoja de estilo y establecemos su color de fondo en naranja y su tamaño de fuente en 24 píxeles. Luego, hacia la parte inferior de nuestra hoja de estilo, seleccionamos todos los elementos de párrafo nuevamente y establecemos su color de fondo en verde, como se ve aquí.

```css
p {
  background: orange;
  font-size: 24px;
}

p {
  background: green;
}
```

## Combinar selectores
Al combinar selectores, podemos ser más específicos sobre qué elemento o grupo de elementos nos gustaría seleccionar.

```html
<div class="hotdog">
  <p>...</p>
  <p>...</p>
  <p class="mustard">...</p>
</div>

```

```css
.hotdog p {
  background: brown;
}
.hotdog p.mustard {
  background: yellow;
}
```

Cuando se combinan los selectores, deben leerse de derecha a izquierda. El selector más a la derecha, directamente antes del corchete de apertura, se conoce como selector de llave (*key selector*).


## Modularizar estilo con varias clases

Una forma de mantener bajos los pesos de especificidad de nuestros selectores es ser lo más modular posible, compartiendo estilos similares de un elemento a otro. Y una forma de ser lo más modular posible es superponer diferentes estilos mediante el uso de varias clases.

Los elementos dentro de HTML pueden tener más de un valor de atributo de clase siempre que cada valor esté separado por espacios. Con eso, podemos colocar ciertos estilos en todos los elementos de un tipo mientras colocamos otros estilos solo en elementos específicos de ese tipo.

```html
<a class="btn btn-danger">...</a>
<a class="btn btn-success">...</a>
```

```css
.btn {
  font-size: 16px;
}
.btn-danger {
  background: red;
}
.btn-success {
  background: green;
}
```

## Propiedades comunes
### Color
Todos los valores de color dentro de CSS se definen en un espacio de color sRGB (o rojo, verde y azul estándar). Los colores dentro de este espacio se forman mezclando canales de color rojo, verde y azul, reflejando la forma en que los televisores y los monitores generan todos los diferentes colores que muestran. Al mezclar diferentes niveles de rojo, verde y azul, podemos crear millones de colores y encontrar casi cualquier color que queramos.

Actualmente, hay cuatro formas principales de representar colores sRGB dentro de CSS: palabras clave, notación hexadecimal y valores RGB y HSL.

Ejemplo:

| Color Name | Hex Values | RGB Values         | HSL Values      |
| ---------- | ---------- | ------------------ | --------------- |
| black      | #000000    | rgb(0, 0, 0)       | hsl(0, 0%, 0%)  |
| silver     | #c0c0c0    | rgb(192, 192, 192) | hsl(0, 0%, 75%) |

### Longitudes
Los valores de longitud dentro de CSS son similares a los colores en el sentido de que hay un puñado de diferentes tipos de valores para la longitud, todos los cuales sirven para distintos propósitos. Los valores de longitud vienen en dos formas diferentes, absoluta y relativa, cada una de las cuales usa diferentes unidades de medida.

#### Valores absolutos
Los valores de longitud absoluta son los valores de longitud más simples, ya que están fijados a una medida física, como pulgadas, centímetros o milímetros. La unidad de medida absoluta más popular se conoce como píxel y está representada por la notación de unidades `px`.


```css
p {
  font-size: 14px;
}
```

#### Valores relativos

Además de los valores de longitud absoluta, también existen valores de longitud relativa. Los valores de longitud relativa son un poco más complicados, ya que no son unidades de medida fijas; se basan en la longitud de otra medida

**Unidad `%`**

Los porcentajes, representados por la notación de unidad de porcentaje, son uno de los valores relativos más populares. Las longitudes porcentuales se definen en relación con la longitud de otro objeto. Por ejemplo, para establecer el ancho de un elemento al 50%, tenemos que conocer el ancho de su elemento principal, el elemento en el que está anidado y luego identificar el 50% del ancho del elemento principal.

```css
.col {
  width: 50%;
}
```

**Unidad `em`**

La unidad em también es un valor relativo muy popular. La unidad em está representada por la notación de la unidad em, y su longitud se calcula en función del tamaño de fuente de un elemento.

Una sola unidad em equivale al tamaño de fuente de un elemento. Entonces, por ejemplo, si un elemento tiene un tamaño de fuente de 14 píxeles y un ancho establecido en 5em, el ancho sería igual a 70 píxeles (14 píxeles multiplicados por 5).

```css
.banner {
  font-size: 14px;
  width: 5em;
}
```


## Resumen
Nos enfocamos en los fundamentos de CSS, cubriendo exactamente cómo funciona y algunos valores comunes.

Para recapitular brevemente, en esta lección hemos analizado lo siguiente:

- Cómo las hojas de estilo caen en cascada desde la parte superior a la inferior de un archivo
- Qué es la especificidad y cómo podemos calcularla
- Cómo combinar selectores para apuntar a elementos o grupos de elementos específicos
- Cómo usar varias clases en un solo elemento para colocar capas en diferentes estilos para obtener un código más modular
- Los diferentes valores de color disponibles para usar dentro de CSS, incluidos los valores de palabras clave, hexadecimales, RGB y HSL
- Los diferentes valores de longitud disponibles para usar dentro de CSS, incluidos píxeles, porcentajes y unidades em

## Saber más

https://web.dev/learn/css/
https://developer.mozilla.org/es/docs/Learn/CSS