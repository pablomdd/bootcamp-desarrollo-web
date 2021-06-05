---
id: 02-week3-whatIsJS
title: ¿Qué es Javascript?
sidebar_label: ¿Qué es Javascript? 
---

JavaScript es un lenguaje de programación que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc., puedes apostar que probablemente JavaScript está involucrado.

Es la tercera capa de las tecnologías web estándar, dos de las cuales (HTML y CSS) hemos aprendido en las semanas anteriores.

![](/img/lego_html_css_javascript.webp)

Javascript puede ser ejecutado no solo en el navegador, tambien en el servidor.

## ¿Cómo agregas JavaScript a tu página?

### Javascript interno

Puedes agregar tu código Javascript directamente en nuestro archivo html agregando la etiqueta <script> justo antes de tu etiqueta de cierre </head>: 

```html
<head>

    ....

    <script>

    // JavaScript va aquí

    </script>
</head>
```

### Javascript externo
Tambien poner nuestro JavaScript en un archivo externo. Esto cambiando nuestra etiqueta <script> de la siguiente forma:

```html
<head>

    ....

    <script src="script.js" defer></script>
</head>
```

Y posteriormente creando un archivo script.js con nuestro código.

Usamos una función de JavaScript más moderno para resolver el problema, el atributo defer, que le dice al navegador que continúe descargando el contenido HTML una vez que se ha alcanzado la etiqueta del elemento <script>.

En este caso, tanto el script como el HTML se cargarán simultáneamente y el código funcionará.

## DOM
Con ayuda de javascript podemos manipular el DOM de nuestra página web, creando, eliminando, modificando o simplemente leyendo la información que vive en el.

```javascript
const fieldFirstName = document.getElementById("firstName");
fieldFirstName.innerHTML = 'Juan'
```
## Eventos

## Fuentes
- https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript