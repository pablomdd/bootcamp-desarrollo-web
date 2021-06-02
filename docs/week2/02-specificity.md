---
id: 02-specificity
title: Especificidad
sidebar_label: Especificidad 
---

La especificidad es la manera mediante la cual los navegadores deciden qué valores de una propiedad CSS son más relevantes para un elemento y, por lo tanto, serán aplicados.

## Cómo se calcula
La especificidad es un peso (importancia o valor) que se le asigna a una declaración CSS dada, determinada por el número correspondiente de cada tipo de selector. Cuando varias declaraciones tienen igual especificidad, se aplicará al elemento la última declaración encontrada en el CSS. La especificidad solo se aplica cuando el mismo elemento es objetivo de múltiples declaraciones. Según las reglas de CSS, en caso de que un elemento sea objeto de una declaración directa, esta siempre tendrá preferencia sobre las reglas heredadas de su ancestro.

![](/img/specificity-calculation.png)

En otras palabras:

- Si el elemento tiene *estilo en línea*, automáticamente gana `(1,0,0,0 puntos)`
- Para cada valor de *ID*, aplique `0,1,0,0 puntos`
- Para cada valor de *clase* (o *pseudoclase* o *selector de atributo*), aplique `0,0,1,0 puntos`
- Para cada *referencia de elemento*, aplique `0,0,0,1 punto`

Por lo general, puede leer los valores como si fueran solo un número, como por ejemplo, `1,0,0,0` es "1000", por lo que claramente gana sobre una especificidad de `0,1,0,0` o "100". Las comas están ahí para recordarnos que este no es realmente un sistema de *"base 10"*, ya que técnicamente podría tener un valor de especificidad como ``0,1,13,4`` (y que "13" no se desborda como un sistema de base 10 lo haría).

### Ejemplos
![](/img/specificity-eg1.png)
![](/img/specificity-eg2.png)

## Fuentes
- https://developer.mozilla.org/es/docs/Web/CSS/Specificity
- https://css-tricks.com/specifics-on-css-specificity/

## Ver más

- https://web.dev/learn/css/specificity/
- Specificy calculator: https://specificity.keegan.st/

Lectura sobre la Herencia en CSS: https://web.dev/learn/css/inheritance/