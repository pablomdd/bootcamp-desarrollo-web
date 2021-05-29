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

Si no se usa grid o flexbox, los elementos se muestran en flujo (*flow*) normal. Hay varios métodos de diseño que puede utilizar para ajustar el comportamiento y la posición de los elementos cuando están en *flow* normal.

### Floats
Si tienes una imagen que se encuentra dentro de un párrafo de texto, ¿no sería útil que ese texto envolviera esa imagen como podría ver en un periódico? Puedes hacer esto con floats.

La propiedad `float` indica a un elemento que "flote" en la dirección especificada. Se indica a la imagen de este ejemplo que flote a la izquierda, lo que permite que los elementos hermanos se "envuelvan" a su alrededor. Puede indicarle a un elemento que flote a la izquierda, a la derecha o herede.

**CSS**
```css
.countries {
  column-count: 4;
  column-gap: 1em;
}
```
**HTML**

```html
<article>
  <img src="http://source.unsplash.com/5dCC3Rfwje0/150x150" alt="A raindbow colored liquid texture" />
  <p>This image floats left, which means these paragraphs wrap around it.</p>
  <p>Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
</article>
```

**CSS**
```css
img {
  width: 150px;
  height: 150px;
  float: left;
}

/* Prevent page disruption by setting the article to have a flow root context */
article {
  display: flow-root;
}

/* Presentational styles */
img {
  margin-inline-end: 1em;
}

p + p {
  margin-top: 1em;
}
```

### Layout multicolumna


```html
<ul class="countries">
  <li>Afghanistan</li>
  <li>Aland Islands</li>
  <li>Albania</li>
  <li>Algeria</li>
  <li>American Samoa</li>
  <li>Andorra</li>
  <li>Angola</li>
  <li>Anguilla</li>
  <li>Antarctica</li>
  <li>Antigua and Barbuda</li>
  <li>Argentina</li>
  <li>Armenia</li>
  <li>Aruba</li>
  <li>Australia</li>
  <li>Austria</li>
  <li>Azerbaijan</li>
  <li>Bahamas</li>
  <li>Bahrain</li>
  <li>Bangladesh</li>
  <li>Barbados</li>
  <li>Belarus</li>
  <li>Belgium</li>
  <li>Belize</li>
  <li>Benin</li>
  <li>Bermuda</li>
  <li>Bhutan</li>
  <li>Bolivia</li>
  <li>Bonaire, Sint Eustatius and Saba</li>
  <li>Bosnia and Herzegovina</li>
  <li>Botswana</li>
  <li>Bouvet Island</li>
  <li>Brazil</li>
  <li>British Indian Ocean Territory</li>
  <li>Brunei Darussalam</li>
  <li>Bulgaria</li>
  <li>Burkina Faso</li>
  <li>Burundi</li>
  <li>Cambodia</li>
  <li>Cameroon</li>
  <li>Canada</li>
  <li>Cape Verde</li>
  <li>Cayman Islands</li>
  <li>Central African Republic</li>
  <li>Chad</li>
  <li>Chile</li>
  <li>China</li>
  <li>Christmas Island</li>
  <li>Cocos (Keeling) Islands</li>
  <li>Colombia</li>
  <li>Comoros</li>
  <li>Congo</li>
  <li>Congo, the Democratic Republic of the</li>
  <li>Cook Islands</li>
  <li>Costa Rica</li>
  <li>Cote D'Ivoire</li>
  <li>Croatia</li>
  <li>Cuba</li>
  <li>Curacao</li>
  <li>Cyprus</li>
  <li>Czech Republic</li>
  <li>Denmark</li>
  <li>Djibouti</li>
  <li>Dominica</li>
  <li>Dominican Republic</li>
  <li>Ecuador</li>
  <li>Egypt</li>
  <li>El Salvador</li>
  <li>Equatorial Guinea</li>
  <li>Eritrea</li>
  <li>Estonia</li>
  <li>Ethiopia</li>
  <li>Falkland Islands (Malvinas)</li>
  <li>Faroe Islands</li>
  <li>Fiji</li>
  <li>Finland</li>
  <li>France</li>
  <li>French Guiana</li>
  <li>French Polynesia</li>
  <li>French Southern Territories</li>
  <li>Gabon</li>
  <li>Gambia</li>
  <li>Georgia</li>
  <li>Germany</li>
  <li>Ghana</li>
  <li>Gibraltar</li>
  <li>Greece</li>
  <li>Greenland</li>
  <li>Grenada</li>
  <li>Guadeloupe</li>
  <li>Guam</li>
  <li>Guatemala</li>
  <li>Guernsey</li>
  <li>Guinea</li>
  <li>Guinea-Bissau</li>
  <li>Guyana</li>
  <li>Haiti</li>
  <li>Heard Island and Mcdonald Islands</li>
  <li>Holy See (Vatican City State)</li>
  <li>Honduras</li>
  <li>Hong Kong</li>
  <li>Hungary</li>
  <li>Iceland</li>
  <li>India</li>
  <li>Indonesia</li>
  <li>Iran, Islamic Republic of</li>
  <li>Iraq</li>
  <li>Ireland</li>
  <li>Isle of Man</li>
  <li>Israel</li>
  <li>Italy</li>
  <li>Jamaica</li>
  <li>Japan</li>
  <li>Jersey</li>
  <li>Jordan</li>
  <li>Kazakhstan</li>
  <li>Kenya</li>
  <li>Kiribati</li>
  <li>Korea, Democratic People"s Republic of</li>
  <li>Korea, Republic of</li>
  <li>Kosovo</li>
  <li>Kuwait</li>
  <li>Kyrgyzstan</li>
  <li>Lao People's Democratic Republic</li>
  <li>Latvia</li>
  <li>Lebanon</li>
  <li>Lesotho</li>
  <li>Liberia</li>
  <li>Libyan Arab Jamahiriya</li>
  <li>Liechtenstein</li>
  <li>Lithuania</li>
  <li>Luxembourg</li>
  <li>Macao</li>
  <li>Macedonia, the Former Yugoslav Republic of</li>
  <li>Madagascar</li>
  <li>Malawi</li>
  <li>Malaysia</li>
  <li>Maldives</li>
  <li>Mali</li>
  <li>Malta</li>
  <li>Marshall Islands</li>
  <li>Martinique</li>
  <li>Mauritania</li>
  <li>Mauritius</li>
  <li>Mayotte</li>
  <li>Mexico</li>
  <li>Micronesia, Federated States of</li>
  <li>Moldova, Republic of</li>
  <li>Monaco</li>
  <li>Mongolia</li>
  <li>Montenegro</li>
  <li>Montserrat</li>
  <li>Morocco</li>
  <li>Mozambique</li>
  <li>Myanmar</li>
  <li>Namibia</li>
  <li>Nauru</li>
  <li>Nepal</li>
  <li>Netherlands</li>
  <li>Netherlands Antilles</li>
  <li>New Caledonia</li>
  <li>New Zealand</li>
  <li>Nicaragua</li>
  <li>Niger</li>
  <li>Nigeria</li>
  <li>Niue</li>
  <li>Norfolk Island</li>
  <li>Northern Mariana Islands</li>
  <li>Norway</li>
  <li>Oman</li>
  <li>Pakistan</li>
  <li>Palau</li>
  <li>Palestinian Territory, Occupied</li>
  <li>Panama</li>
  <li>Papua New Guinea</li>
  <li>Paraguay</li>
  <li>Peru</li>
  <li>Philippines</li>
  <li>Pitcairn</li>
  <li>Poland</li>
  <li>Portugal</li>
  <li>Puerto Rico</li>
  <li>Qatar</li>
  <li>Reunion</li>
  <li>Romania</li>
  <li>Russian Federation</li>
  <li>Rwanda</li>
  <li>Saint Barthelemy</li>
  <li>Saint Helena</li>
  <li>Saint Kitts and Nevis</li>
  <li>Saint Lucia</li>
  <li>Saint Martin</li>
  <li>Saint Pierre and Miquelon</li>
  <li>Saint Vincent and the Grenadines</li>
  <li>Samoa</li>
  <li>San Marino</li>
  <li>Sao Tome and Principe</li>
  <li>Saudi Arabia</li>
  <li>Senegal</li>
  <li>Serbia</li>
  <li>Serbia and Montenegro</li>
  <li>Seychelles</li>
  <li>Sierra Leone</li>
  <li>Singapore</li>
  <li>Sint Maarten</li>
  <li>Slovakia</li>
  <li>Slovenia</li>
  <li>Solomon Islands</li>
  <li>Somalia</li>
  <li>South Africa</li>
  <li>South Georgia and the South Sandwich Islands</li>
  <li>South Sudan</li>
  <li>Spain</li>
  <li>Sri Lanka</li>
  <li>Sudan</li>
  <li>Suriname</li>
  <li>Svalbard and Jan Mayen</li>
  <li>Swaziland</li>
  <li>Sweden</li>
  <li>Switzerland</li>
  <li>Syrian Arab Republic</li>
  <li>Taiwan, Province of China</li>
  <li>Tajikistan</li>
  <li>Tanzania, United Republic of</li>
  <li>Thailand</li>
  <li>Timor-Leste</li>
  <li>Togo</li>
  <li>Tokelau</li>
  <li>Tonga</li>
  <li>Trinidad and Tobago</li>
  <li>Tunisia</li>
  <li>Turkey</li>
  <li>Turkmenistan</li>
  <li>Turks and Caicos Islands</li>
  <li>Tuvalu</li>
  <li>Uganda</li>
  <li>Ukraine</li>
  <li>United Arab Emirates</li>
  <li>United Kingdom</li>
  <li>United States</li>
  <li>United States Minor Outlying Islands</li>
  <li>Uruguay</li>
  <li>Uzbekistan</li>
  <li>Vanuatu</li>
  <li>Venezuela</li>
  <li>Viet Nam</li>
  <li>Virgin Islands, British</li>
  <li>Virgin Islands, U.s.</li>
  <li>Wallis and Futuna</li>
  <li>Western Sahara</li>
  <li>Yemen</li>
  <li>Zambia</li>
  <li>Zimbabwe</li>
</ul>
```

### Positioning
Lo último en esta sección es sobre el posicionamiento. La propiedad de posición (*position*) cambia cómo se comporta un elemento en el flujo normal del documento y cómo se relaciona con otros elementos. Las opciones disponibles son `relative`, `absolute`, `fixed` y `sticky`, siendo el valor predeterminado el `static`.

**HTML**
```html
 <div class="parent">
    <p>I am a sibling element.</p>
    <div class="box">Change my position value</div>
    <p>I am another sibling element so you can see how we reflow when the position value is changed</p>
</div>
```

**CSS**
```css
.parent {
  padding: 0.5rem 2rem 2rem;
  height: 1000px;
  /* position property */
  position: relative;
  background: aliceblue;
  border: 1px solid tomato;
}

.box {
  top: 1.5rem;
  left: 1.5rem;
}

.parent p {
  margin: 1em 0;
}

```