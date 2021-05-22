---
id: 03-knowing-html
title: Conociendo HTML
sidebar_label: Conociendo HTML
---

## Qué es eso de la semántica
La semántica dentro de HTML es la práctica de dar al contenido de la página significado y estructura mediante el uso del elemento adecuado. El código semántico describe el valor del contenido en una página, independientemente del estilo o apariencia de ese contenido. 

El uso de elementos semánticos tiene varios beneficios, entre ellos, permitir que las computadoras, lectores de pantalla, motores de búsqueda y otros dispositivos lean y comprendan adecuadamente el contenido de una página web. Además, el HTML semántico es más fácil de administrar y trabajar, ya que muestra claramente de qué se trata cada contenido.

## Elementos *en bloque* vs *en línea*

Las divisiones, o `<div>`s, y `<span>` s son elementos HTML que actúan como contenedores únicamente con fines de estilo. 

Como contenedores genéricos, no tienen ningún significado general ni valor semántico. Los párrafos son semánticos en el sentido de que el contenido envuelto dentro de un elemento `<p>` se conoce y se entiende como párrafo.` <div`>s y `<span>` s no tienen ningún significado y son simplemente contenedores.

``` html
<!-- Division -->
<div class="social">
  <p>Me encuentras en.</p>
  <p>Y también, tengo un perfil en...</p>
</div>

<!-- Span -->
<p>Pronto estaremos <span class="tooltip">escribiendo HTML</span> como los mejores desarrolladores.</p>

```
## Hipervínculos
Junto con el texto, uno de los componentes centrales de Internet es el hipervínculo, que brinda la capacidad de vincular una página web o un recurso a otro. Los hipervínculos se establecen utilizando el elemento de nivel en línea delimitador, `<a>`. Para crear un enlace de una página (o recurso) a otra, se requiere el atributo href, conocido como referencia de hipervínculo. El valor del atributo `href` identifica el destino del enlace.

``` html
<!-- Relative Path -->
<a href="about.html">About</a>
```

``` html
<!-- Absolute Path -->
<a href="https://dsc.community.dev/">Conoce los Developer Stundent Clubs</a>
``` 

``` html
<!-- Email -->
<a href="mailto:shay@awesome.com?subject=Reaching%20Out&body=How%20are%20you">Email Me</a>
``` 
``` html
<!-- Abrir nueva página -->
<a href="http://shayhowe.com/" target="_blank">Shay Howe</a>
``` 

``` html
<body id="top">
  ...
  <a href="#top">Back to top</a>
  ...
</body>
``` 

## Estructura de una página web
Durante mucho tiempo, la estructura de una página web se construyó utilizando divisiones. El problema era que las divisiones no aportan ningún valor semántico y era bastante difícil determinar la intención de estas divisiones. Afortunadamente, HTML5 introdujo nuevos elementos basados en la estructura, incluidos los elementos `<header>`, `<nav>`, `<article>`, `<section>`, `<aside>` y `<footer>`.

Todos estos nuevos elementos pretenden dar sentido a la organización de nuestras páginas y mejorar nuestra semántica estructural. Todos son elementos a nivel de bloque y no tienen ninguna posición o estilo implícito. Además, todos estos elementos pueden usarse varias veces por página, siempre que cada uso refleje el significado semántico adecuado.

<img src="../../../static/img/building-structure.png" />