---
id: 07-flexbox
title: Layouts
sidebar_label: Layouts 
---
CSS nos proporciona varias formas de resolver problemas de diseño, en un eje horizontal, en un eje vertical o incluso en ambos. Elegir el método de diseño adecuado para un contexto puede ser difícil y, a menudo, es posible que necesite más de un método de diseño para resolver su problema.

## La propiedad `display`
La propiedad `display` hace dos cosas. Lo primero que hace es determinar si la caja a la que se aplica actúa como *en línea* o *en bloque*.

Los elementos *en línea* se comportan como palabras en una oración. Se sientan uno al lado del otro en la dirección en línea. Los elementos como `<span>` y `<strong>`, que se utilizan normalmente para dar estilo a fragmentos de texto dentro de elementos que contienen como un `<p>` (párrafo), están integrados de forma predeterminada. También conservan los espacios en blanco circundantes.
```css
.my-element {
	display: inline;
}
```
 
![](/img/box-model-detail.png)

No puedes establecer un ancho y alto explícito en elementos en línea. Los elementos circundantes ignorarán cualquier margen y relleno a nivel de bloque.

Los elementos de bloque no se sientan uno junto al otro. Crean una nueva línea para ellos mismos. A menos que lo modifique otro código CSS, un elemento de bloque se expandirá al tamaño de la dimensión en línea, por lo tanto, abarcará todo el ancho en un modo de escritura horizontal. Se respetará el margen en todos los lados de un elemento de bloque.

```css
.my-element {
	display: block;
}
```

La propiedad de `display` también determina cómo deben comportarse los hijos de un elemento. Por ejemplo, establecer la propiedad en `display: flex` convierte la caja en una caja de nivel de *bloque* y también convierte sus elementos secundarios en elementos flex. Esto habilita las propiedades flex que controlan la alineación, el orden y el flujo.

## Flexbox

Flexbox es un mecanismo de diseño (layout) para diseños unidimensionales. Layouts en un solo eje, ya sea horizontal o verticalmente. 

De forma predeterminada, flexbox alineará los elementos hijos uno al lado del otro, en la dirección *en línea*, y los estirará (stretch) en la dirección *en bloque*, para que todos tengan la misma altura.

Los elementos permanecerán en el mismo eje y no se ajustarán cuando se queden sin espacio. En su lugar, intentarán aplastarse en la misma línea que el otro. Este comportamiento se puede cambiar usando las propiedades `align-items`, `justify-content` y `flex-wrap`.

**HTML**

```html
<div class="box">Child element 1</div>
    <div class="box">Child elemement 2</div>
    <div class="box">Child elemement 3 has a bit more text than the others</div>
    <div class="box">Child elemement 4</div>
    <div class="box">Child elemement 5</div>
    <div class="box">Child elemement 6</div>
    <div class="box">The last item</div>
</div>
```

**CSS**
```css
.my-element {
	display: flex;
}

.my-element > * {
  max-width: 280px;
}
```

Flexbox también convierte los elementos hijos en *elementos flexibles*, lo que significa que puede escribir reglas sobre cómo se comportan dentro de un *contenedor flexible*. Se puede cambiar la alineación, el orden y la justificación de un item individual. También puede cambiar la forma en que se reduce (shrink) o crece (grow) utilizando la propiedad `flex`.

```css
.my-element div {
 	flex: 1 0 auto;
}
```
La propiedad `flex` es una abreviatura de `flex-grow`, `flex-shrink` y `flex-base`. Puede expandir el ejemplo anterior de esta manera:

```css
.my-element div {
 flex-grow: 1;
 flex-shrink: 0;
 flex-basis: auto;
}
```

## Grid

Grid es similar en muchos aspectos a flexbox, pero está diseñado para controlar diseños de varios ejes en lugar de diseños de un solo eje (espacio vertical u horizontal).

Grid permite escribir reglas de diseño en un elemento que tiene `display: grid` e introduce algunas primitivas nuevas para el estilo de diseño, como las funciones `repeat ()` y `minmax ()`.

**HTML**

```html
<div class="my-element">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
    <div class="box">Item 4</div>
    <div class="box">Item 5</div>
    <div class="box">Item 6</div>
    <div class="box">Item 7</div>
    <div class="box">Item 8</div>
    <div class="box">Item 9</div>
    <div class="box">Item 10</div>
    <div class="box">Item 11</div>
    <div class="box">Item 12</div>
</div>
```

**CSS**
```css
.my-element {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}
```

Este ejemplo anterior, muestra un diseño de un solo eje. Donde flexbox trata principalmente a los elementos como un grupo, la cuadrícula le brinda un control preciso sobre su ubicación en dos dimensiones. 

Podríamos definir que el primer elemento de esta cuadrícula ocupa 2 filas y 3 columnas:

**CSS**
```css
.my-element :first-child {
  grid-row: 1/3;
  grid-column: 1/4;
}

.my-element {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  max-width: 500px;
}
```

## Flow layouts

