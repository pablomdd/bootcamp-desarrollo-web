---
id: 02-apis
title: ¿Qué es una API?
sidebar_label: API's
---

Una API (Aplication Programming Interface) o Interfaz de Programación de Aplicaciones en español, no es más que un set de reglas que define como se comunican dos programas entre si. ¿Todavia no queda del todo claro? pongamoslo más facil, es como si fuera un puente que conecta dos ciudades, en este caso las ciudades son pedazos de software.

Tomemos un ejemplo para afianzar el concepto; Imagina que quieres hacer que un programa que muestre en tu pagina los ultimos Twitts que haz publicado, afortunadamente para ti no tienes que copiarlos y pegarlos cada vez que publicas algo, Twitter tiene una [API](https://developer.twitter.com/en/docs/twitter-api) que te da esa información y la maravilla de esto es que no tienes porque preocuparte por saber como hace Twitter internamente para obtener los datos que tu le pides, ni en que lenguaje, solo saber como pedirselos. Esta forma de pedir está estandarizada y la más comun actualmente es la llamada REST (Representational State Transfer) o de transferencia de estado representacional, sucesora de SOAP (Simple Object Access Protocol) o protocolo simple de acceso a objetos y ahora amenzada por ser remplazada por GraphQL.

Otros ejemplos seria si es que quisieras mostrar un mapa, existe la API de Google Maps, o algún servicio de seguridad con Auth0, o una aplicación que se integre con Alexa, o quizá conocer los personajes de una serie Como Rick & Morty que es nuestro caso practico de hoy.

Pero no solo cosas asi de complejas pueden ser API's, cuando escribimos código para la web utilizamos una gran cantidad de API's para todo, desde el mismo DOM pasando por API's para manejo de audio, video, animaciones, etc, hasta Web GL para renderizado de videojuegos.

Recursos:

¿Quieres explorar una gran cantidad de API's para practicar o para usar en tu siguiente proyecto? te recomiendo revisar esta [pagina](https://apilist.fun/). Algunas de mis favoritas son: [Poke Api](https://pokeapi.co/), [Dog Api](https://dog.ceo/dog-api/), [NASA Api](https://api.nasa.gov/) y la mejor [Star Wars Api](https://swapi.dev/).

¿Quiere saber más sobre REST? te dejo este blog post de Red Hat titulado ["Qué es una API REST"](https://www.redhat.com/es/topics/api/what-is-a-rest-api).