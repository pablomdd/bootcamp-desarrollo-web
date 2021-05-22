---
id: 02-html-css
title: Introducción al HTML & CSS
sidebar_label: Introducción al HTML
---

## Qués son HTML y CSS
HTML, **HyperText Markup Language**, proporciona estructura y significado al contenido al definir ese contenido como, por ejemplo, encabezados, párrafos o imágenes. CSS, o **hojas de estilo en cascada**, es un lenguaje de presentación creado para dar estilo a la apariencia del contenido, utilizando, por ejemplo, fuentes o colores.

Los dos lenguajes, HTML y CSS, son independientes entre sí y deberían permanecer así. CSS no debe escribirse dentro de un documento HTML y viceversa. Como regla general, HTML siempre representará contenido y CSS siempre representará la apariencia de ese contenido.

> ¿Son lenguajes de programación? 🤔

## Términos comunes de HTML

### Elementos
Los elementos son designadores que definen la estructura y el contenido de los objetos dentro de una página. Algunos de los elementos que se utilizan con más frecuencia incluyen varios niveles de encabezados (identificados como elementos `<h1>` a `<h6>`) y párrafos (identificados como el elemento `<p>`); la lista incluye los elementos `<a>`, `<div>`, `<span>`, `<strong>` y `<em>`, y muchos más.

Los elementos se identifican mediante el uso de corchetes angulares *menor que* y *mayor que*, `<>`, que rodean el nombre del elemento. 

```html
<a>
```

### Etiquetas
El uso de paréntesis angulares menor que y mayor que alrededor de un elemento crea lo que se conoce como etiqueta. Las etiquetas ocurren con mayor frecuencia en pares de etiquetas de apertura y cierre.

```html
<a>Un link</a>
```

Hay algunas etiquetas, sin embargo, que son de una sola etiqueta. Se les conoce como *self closing tags*.
- `<br>`
- `<embed>`
- `<hr>`
- `<img>`
- `<input>`
- `<link>`
- `<meta>`
- `<param>`
- `<source>`
- `<wbr>`

### Atributos
Los atributos son propiedades que se utilizan para proporcionar información adicional sobre un elemento. Los atributos más comunes incluyen el atributo id, que identifica un elemento; el atributo de clase, que clasifica un elemento; el atributo src, que especifica una fuente para contenido incrustable; y el atributo href, que proporciona una referencia de hipervínculo a un recurso vinculado.

Los atributos se definen dentro de la etiqueta de apertura, después del nombre de un elemento. Generalmente, los atributos incluyen un nombre y un valor. El formato de estos atributos consiste en el nombre del atributo seguido de un signo igual y luego un valor de atributo entre comillas.

```html
<a href="https://www.google.com/">Un link</a>
```
![](/img/html-syntax-outline.png)
<!-- <img src="../../../static/img/html-syntax-outline.png" /> -->

## El documento HTML
Los documentos HTML son documentos de texto sin formato (*plain text files*) guardados con una extensión de archivo `.html` en lugar de una extensión de archivo `.txt`.

La estructura básica se ve así.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hola Mundo</title>
  </head>
  <body>
    <h1>Mi primera página web!</h1>
    <img src="https://seojake.com/wp-content/uploads/2017/05/when-people-dont-close-html-elements-meme.jpg" alt="Título alternativo de la imagen">
  </body>
</html>
```
## Práctica con HTML

> ¿Estás listo? ¡Vamos desde 0!

## Términos de CSS

### Selectores
A medida que se agregan elementos a una página web, se pueden diseñar con CSS. Un selector designa exactamente a qué elemento o elementos dentro de nuestro HTML apuntar y aplicar estilos (como color, tamaño y posición). Los selectores pueden incluir una combinación de diferentes calificadores para seleccionar elementos únicos, todo dependiendo de cuán específicos queramos ser. Por ejemplo, es posible que queramos seleccionar todos los párrafos de una página o que queramos seleccionar solo un párrafo específico en una página.

Los selectores generalmente apuntan a un valor de atributo, como un id o un valor de clase, o apuntan al tipo de elemento, como `<h1>` o `<p>`.

```css
p { ... }
```
### Propiedades

Una vez que se selecciona un elemento, una propiedad determina los estilos que se aplicarán a ese elemento. Los nombres de las propiedades van después de un selector, entre llaves, `{}` e inmediatamente antes de dos puntos, `:`. Hay numerosas propiedades que podemos usar, como fondo, color, tamaño de fuente, alto y ancho, y a menudo se agregan nuevas propiedades.

```css
p {
  color: ...;
  font-size: ...;
}
```

### Valores
Hasta ahora, seleccionamos un elemento con un selector y determinamos qué estilo nos gustaría aplicar con una propiedad. Ahora podemos determinar el comportamiento de esa propiedad con un valor. Los valores se pueden identificar como el texto entre dos puntos,`:` y punto y coma,`;`.

```css
p {
  color: orange;
  font-size: 16px;
}
```

## Cómo se estiliza
Los selectores, como se mencionó anteriormente, indican qué elementos HTML se están aplicando. Es importante comprender completamente cómo usar los selectores y cómo se pueden aprovechar. El primer paso es familiarizarse con los diferentes tipos de selectores.

### Selectores de tipo
Los **selectores de tipo** apuntan a los elementos por su tipo de elemento. Por ejemplo, si quisiéramos apuntar a todos los elementos de división, `<div>`, usaríamos un selector de tipo de div.

CSS
```css
div { ... }
```

              
HTML
```html
<div>...</div>          
<div>...</div>
```

### Selectore de clase
Los **selectores de clase** nos permiten seleccionar un elemento en función del valor del atributo de clase del elemento. Los selectores de clases son un poco más específicos que los selectores de tipo, ya que seleccionan un grupo particular de elementos en lugar de todos los elementos de un tipo.

Los selectores de clase nos permiten aplicar los mismos estilos a diferentes elementos a la vez utilizando el mismo valor de atributo de clase en varios elementos.

Dentro de CSS, las clases se indican con un punto inicial,`.`, Seguido del valor del atributo de clase.

CSS
```css
.awesome { ... }
```
      
HTML
```html
<div class="awesome">...</div>
<p class="awesome">...</p>
```

### Selectores de ID
Los **selectores de ID** son incluso más precisos que los selectores de clases, ya que solo apuntan a un elemento único a la vez. Así como los selectores de clase usan el valor de atributo de clase de un elemento como selector, los selectores de ID usan el valor de atributo de id de un elemento como selector.

Independientemente del tipo de elemento en el que aparezcan, los valores de atributo de id solo se pueden usar una vez por página. Si se utilizan, deben reservarse para elementos significativos.

Dentro de CSS, los selectores de ID se indican con un signo de almohadilla inicial, #, seguido del valor del atributo id.

CSS
```css
#dscipnupiita { ... }
```
      
HTML
```html
<div id="dscipnupiita">...</div>
```

### Selectores adicionales
Los selectores son extremadamente poderosos y los selectores que se describen aquí son los selectores más comunes con los que nos encontraremos. Estos selectores también son solo el comienzo. 

Puesde leer más [aquí](https://web.dev/learn/css/selectors/).

## Cómo incluir el CSS
Para que nuestro CSS hable con nuestro HTML, necesitamos hacer referencia a nuestro archivo CSS dentro de nuestro HTML. La mejor práctica para hacer referencia a nuestro CSS es incluir todos nuestros estilos en una sola hoja de estilo externa, a la que se hace referencia desde el elemento `<head>` de nuestro documento HTML. El uso de una única hoja de estilo externa nos permite utilizar los mismos estilos en todo un sitio web y realizar cambios rápidamente en todo el sitio.

HTML
```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="main.css">
</head>
```


**Otras opciones para agregar CSS**

Otras opciones incluyen el uso de *estilos internos* y *en línea*. Puedes encontrar estas opciones en por ahí, pero generalmente están mal vistas, ya que hacen que la actualización de los sitios web sea engorrosa y difícil de mantener.

## CSS Resets

Cada navegador web tiene sus propios estilos predeterminados para diferentes elementos. La forma en que Google Chrome representa los encabezados, párrafos, listas, etc. puede ser diferente de la forma en que lo hace Internet Explorer. Para garantizar la compatibilidad entre navegadores, los restablecimientos de CSS se han vuelto muy utilizados.

Los resets de CSS toman todos los elementos HTML comunes con un estilo predefinido y proporcionan un estilo unificado para todos los navegadores. Estos restablecimientos generalmente implican eliminar cualquier tamaño, márgenes, rellenos o estilos adicionales y atenuar estos valores. Debido a que CSS cae en cascada de arriba a abajo, nuestro restablecimiento debe estar en la parte superior de nuestra hoja de estilo. Al hacerlo, se garantiza que esos estilos se lean primero y que todos los diferentes navegadores web funcionen desde una línea de base común.

```css
/* main.css */
/* http://meyerweb.com/eric/tools/css/reset/ 2. v2.0 | 20110126
  License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

```

## Resumen
Uff, ¡mucha información para la primera vez no?
Solo piensa que ahora conoces los conceptos básicos de HTML y CSS. A medida que continuemos y dediques más tiempo a escribir HTML y CSS, te sentirás mucho más cómodo con los dos lenguajes.

En resumen, hasta ahora hemos cubierto lo siguiente:

-La diferencia entre HTML y CSS
-Familiarizarse con los elementos, las etiquetas y los atributos HTML
-Configurar la estructura de tu primera página web
-Familiarizarse con los selectores, las propiedades y los valores de CSS
-Trabajar con selectores CSS
-Hacer referencia a CSS en HTML
-El valor de los CSS resets