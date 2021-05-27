---
id: 02-specificity
title: Especificidad
sidebar_label: Especificidad 
---

La especificidad es la manera mediante la cual los navegadores deciden qué valores de una propiedad CSS son más relevantes para un elemento y, por lo tanto, serán aplicados.

## Cómo se calcula
La especificidad es un peso (importancia o valor) que se le asigna a una declaración CSS dada, determinada por el número correspondiente de cada tipo de selector. Cuando varias declaraciones tienen igual especificidad, se aplicará al elemento la última declaración encontrada en el CSS. La especificidad solo se aplica cuando el mismo elemento es objetivo de múltiples declaraciones. Según las reglas de CSS, en caso de que un elemento sea objeto de una declaración directa, esta siempre tendrá preferencia sobre las reglas heredadas de su ancestro.


## Fuentes
- https://developer.mozilla.org/es/docs/Web/CSS/Specificity
- https://css-tricks.com/specifics-on-css-specificity/

## Ver más

https://web.dev/learn/css/specificity/