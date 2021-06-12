---
id: 05-proyecto-conjunto
title: Uso de Tailwind CSS 
sidebar_label: Hands-On p2
---

De principio puede parecer más complicado y engorroso utilizar Tailwind para nuestros proyectos porque requiere de una serie de pasos de configuración, pero con la practica veras que estos pasos son casi nada en comparación con los beneficios y el tiempo que nos ahorra en futuro. Aqui te llevaremos de la mano paso a paso para poder tener tu configuración lista y ponerte a estilizar de una manera diferente.

Primero instalamos las dependencias
```
npm install -D tailwindcss@latest postcss-cli autoprefixer@latest
````
Luego inicializamos nuestro proyecto de Tailwind
```
npx tailwindcss init
```
Despues creamos un archivo llamado postcss.config.js
```
touch postcss.config.js
```
En él escribimos la siguiente configuración
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```
Y agregamos estas lineas a nuestro archivo de estilos
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Solo nos falta configurar un script en nuestro package.json para hacer el compilado de los etilos
```js
"build": "postcss css/tailwind.css -o css/styles.css"
```
Y por utlimo lo corremos y agregamos este archivo resultante a nuestro html

Ahora podemos ver que se han aplicado los cambios en nuestro proyecto, si quisieramos más personalizacion podemos en nuestro archivo de configuración de tailwind.config.js editar los estilos por defecto que nos agrega Tailwind. En mi caso agregare una fuente y un color.

```js
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
    },
  },
```

Este archivo es opcional pero de mucha ayuda, ahora nos toca pasar a utilizar el verdadero potencial de Tailwind pero eso será editanto las clases de nuestro HTML.

Recursos:

Esta [Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet) de Tailwind es un Must en tus archivos guardados.

El proyecto final lo pueden encontrar en este [repo de github](https://github.com/Alberthor47/bootcamp-semana4/tree/main).


