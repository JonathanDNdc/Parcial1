/*
  Desarrolla la lógica para convertir los valores del textArea en minusculas: 

  Tip: Divide el problema en partes pequeñas. 

  1) Primero recupera los valores utilizando el DOM y los metodos que vimos en clase. 
  2) Parte los valores por la coma (,). TIP. Utiliza la función split
  3) convierte los valores a minuscula con alguna de las funciones de javascript. 
  4) Escribe en el textArea los nuevos valores

  Realiza todo lo anterior al hacer click en el botón. 
  */

let btn_mayusculas = document.getElementById("btn_mayusculas").addEventListener("click", convertir_minusculas)

function convertir_minusculas(e) {
  e.preventDefault()

  let namesTextArea = document.getElementById("txt_may")
  let names = namesTextArea.value.split(",")

  names.forEach((element, index) => {
    names[index] = element.toLowerCase()
  });

  namesTextArea.value = names.toString()
}


/*
  Crea una funcion llamada "calculateDogAge" que: 
 
- reciba como argumento un número representando la edad en años humanos.
- realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
- Deberá escribir en valor convertido. 
- Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
- Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
     Deberás convertir el string a Entero. 
 
*/

let btn_añoshumano = document.getElementById("btn_añoshumano").addEventListener("click", calculateDogAge)

function calculateDogAge(e) {
  e.preventDefault()

  let edadPerro = parseInt(document.getElementById("edad_humano").value) * 7
  document.getElementById("edad_perro").value = edadPerro
}


/*  OBJETOS
 
A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros
 
1) Nombre
2) Especie
3) Ataque
4) Defensa
 
 
B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokeon: 
 Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
 El Nombre y la Especie son Strings, Ataque y Defensa numericos.
 
 Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

*/

let btn_muestra = document.getElementById("btn_muestra").addEventListener("click", muestraPokemons)

function muestraPokemons(e) {
  e.preventDefault()

  document.getElementById("nombre_poke1").value = pikachu.nombre
  document.getElementById("especie_poke1").value = pikachu.especie
  document.getElementById("ataque_poke1").value = pikachu.ataque
  document.getElementById("defensa_poke1").value = pikachu.defensa
  
  document.getElementById("nombre_poke2").value = charmander.nombre
  document.getElementById("especie_poke2").value = charmander.especie
  document.getElementById("ataque_poke2").value = charmander.ataque
  document.getElementById("defensa_poke2").value = charmander.defensa
}

function Pokemon(nombre, especie, ataque, defensa) {
  this.nombre = nombre
  this.especie = especie
  this.ataque = ataque
  this.defensa = defensa
}

let pikachu = new Pokemon("Pikachu", "Electrico", 60, 70)
let charmander = new Pokemon("Charmander", "Fuego", 65, 65)
