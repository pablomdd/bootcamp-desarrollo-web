---
id: 03-box-model
title: Modelo de la Caja
sidebar_label: Box Model 
---
Todo en CSS tiene una caja alrededor, y comprender estas cajas es clave para poder crear diseños con CSS o para alinear elementos con otros elementos.

## ¿Cómo se muestran los elementos?
Para recapitular rápidamente, los elementos a *nivel de bloque* (*block*) ocupan cualquier ancho disponible, independientemente de su contenido, y comienzan en una nueva línea. Los elementos de *nivel en línea* (*in-line*) ocupan solo el ancho que requiere su contenido y se alinean en la misma línea, uno tras otro. 

Los elementos a nivel de bloque se utilizan generalmente para piezas de contenido más grandes, como encabezados y elementos estructurales. Los elementos de nivel en línea se utilizan generalmente para piezas de contenido más pequeñas, como algunas palabras seleccionadas para estar en negrita o en cursiva.

## El *Box Model*

De acuerdo con el concepto del **modelo de caja**, cada elemento de una página es una caja rectangular y puede tener ancho (*width*), alto (*height*), relleno (*padding*), bordes (*borders*) y márgenes (*margins*).

![](/img/box-model.svg)

### Parte del *Box Model*
- *Content box*: el área donde se muestra su contenido, que se puede dimensionar usando propiedades como *weight* (ancho) y `height` (alto).
  
- *Padding box*: el relleno se coloca alrededor del contenido como un espacio en blanco; su tamaño se puede controlar mediante el `padding` y las propiedades relacionadas.
  
- *Border box*: la caja de borde envuelve el contenido y cualquier relleno. Su tamaño y estilo se pueden controlar mediante el `border` y las propiedades relacionadas.
  
- *Margin box*: el margen es la capa más externa, que envuelve el contenido, el relleno y el borde como un espacio en blanco entre este caja y otros elementos. Su tamaño se puede controlar mediante el `margin` (margen) y las propiedades relacionadas.

## Propiedades

![](/img/margin-shorthand.svg)
### Margin
- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

### Borders
Para establecer las propiedades de cada lado individualmente, puede utilizar:
- `border-top`
- `border-right`
- `border-bottom`
- `border-left`

Para establecer el ancho, el estilo o el color de todos los lados, utilice lo siguiente:

- `border-width`
- `border-style`
- `border-color`

Para establecer el ancho, el estilo o el color de un solo lado, puede usar una de las propiedades a mano alzada más granulares:

- `border-top-width`
- `border-top-style`
- `border-top-color`
- `border-right-width`
- `border-right-style`
- `border-right-color`
- `border-bottom-width`
- `border-bottom-style`
- `border-bottom-color`
- `border-left-width`
- `border-left-style`
- `border-left-color`


```css
code {
  background: #eaeaed;
  color: #666;
  font: 14px/24px "Source Code Pro", Inconsolata, "Lucida Console", Terminal, "Courier New", Courier;
  display: inline-block;
  height: 70px;
  margin: 0 14px;
  padding-top: 20px;
  text-align: center;
  width: 90px;
}
.border-solid {
  border: 2px solid #9799a7;
}
.border-double {
  border: 6px double #9799a7;
}
.border-dashed {
  border: 8px dashed #9799a7;
}
.border-dotted {
  border: 4px dotted #9799a7;
}
```

```html
<code class="border-solid">2px <br> solid</code>

<code class="border-double">6px <br> double</code>

<code class="border-dashed">8px <br> dashed</code>

<code class="border-dotted">4px <br> dotted</code>
```


**Border Radius**

La propiedad *border-radius* acepta unidades de longitud, incluidos porcentajes y píxeles, que identifican el radio por el que se redondearán las esquinas de un elemento. 

Un solo valor redondeará las cuatro esquinas de un elemento por igual; dos valores redondearán las esquinas superior izquierda / inferior derecha y superior derecha / inferior izquierda en ese orden; cuatro valores redondearán las esquinas superior izquierda, superior derecha, inferior derecha e inferior izquierda en ese orden.

```css
code {
  background: #eaeaed;
  color: #666;
  font: 14px/24px "Source Code Pro", Inconsolata, "Lucida Console", Terminal, "Courier New", Courier;
  display: inline-block;
  height: 90px;
  line-height: 90px;
  margin: 0 14px;
  text-align: center;
  width: 90px;
}
.border-rounded {
  border-radius: 5px;
}
.border-circle {
  border-radius: 50%;
}
.border-football {
  border-radius: 15px 75px;
}
```

```html
<code class="border-rounded">5px</code>

<code class="border-circle">50%</code>

<code class="border-football">15px 75px</code>
```

### Padding

Podemos controlar el relleno en cada lado de un elemento individualmente usando la propiedad padding, o cada lado individualmente usando las propiedades equivalentes a mano.

- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`
## Box Sizing
Podrías pensar que es bastante inconveniente tener que sumar el borde y el relleno para obtener el tamaño real de la caja. Por esta razón, CSS introdujo un *modelo de caja alternativo* algún tiempo después del modelo de caja estándar. Con este modelo, cualquier ancho es el ancho del cuadro visible en la página, por lo tanto, el ancho del área de contenido es ese ancho menos el ancho del relleno y el borde.

```css
.box {
  box-sizing: border-box;
} 

/* o más general */

html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
```

![](/img/box-sizing.png)

## Fuentes
- https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model

## Ver más

- https://web.dev/learn/css/specificity/
- Specificy calculator: https://specificity.keegan.st/
