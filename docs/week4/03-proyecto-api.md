---
id: 03-proyecto-api
title: Consumo de una API
sidebar_label: Hands-On p1 
---

En el proyecto de esta semana haremos una el consumo de la API de Rick & Morty de 3 formas distintas, con XHR (XMLHttpRequest), posteriormente con Fetch y por ulimo Axios para traer la info.

Para la primera forma tenemos que abrir declarar una nueva instancia de nuestro objeto XMLHttpResponse, nos abrimos a la escucha y declaramos los parametros de la patición para posteriormente mandarla, ahora tenemos que estar atentos a la escucha de la respuesta, todos estos procesos son asincronos y se repiten de la misma forma en los tres caso, aunque claro cada una tiene sus propias ventajas. 

El codigo para nuestra petición de XHR queda de la siguiente forma
```js
function getDataXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', BASE_URL);
  xhr.send();
  xhr.responseText = 'json';
  xhr.onload = () => {
    console.log(JSON.parse(xhr.response));
    renderData(JSON.parse(xhr.response));
  }
}
```
Ahora con Fetch
```js
function getDataFetch() {
  return fetch(BASE_URL, {method: 'POST', mode: 'no-cors'}).then(response => response.json())
}
```
¿Se puede poner más facil? Asi es, por ultimo veamos el caso de Axios
```js
function getDataAxios() {
  return axios.get(BASE_URL).then(response => response.data);
}
```
Aunque se parecen mucho, Axios utiliza por detras XHR pero lo potencializa para hacer de su uso más facil e intuitivo.

Recursos:

Enlaces para leer sobre la documentación de cada uno de los metodos que usamos: [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), [Axios](https://axios-http.com/)

Documentación de la [Api de Rick & Morty](https://rickandmortyapi.com/)