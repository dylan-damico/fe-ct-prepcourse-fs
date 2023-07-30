/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayDeEntries = Object.entries(objeto);

   return arrayDeEntries;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto = {};
   var suma = 0;
   
   for(i = 0; i < string.length; i++){
      
      for(j = 0; j < string.length; j++){
         
         if(string.charAt(i) === string.charAt(j)) suma++;

      }

      objeto[string.charAt(i)] = suma;
      suma = 0;
   }

   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayusc = "";
   var minusc = "";

   for(i = 0; i < string.length; i++){
      
      if(string.charAt(i) === string.charAt(i).toUpperCase()) mayusc += string.charAt(i);
      else minusc += string.charAt(i);
   }

   return mayusc + minusc;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var fraseSplited = frase.split(" ");
   var fraseInvertida = "";
   var palabraSplited;

   for(i = 0; i < fraseSplited.length; i++){
      fraseSplited[i] += " ";
   }

   for(i = 0; i < fraseSplited.length; i++){
      palabraSplited = fraseSplited[i].split("").reverse();
      fraseInvertida += palabraSplited.join("");
   }

   return fraseInvertida.slice(1);
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var string = numero.toString();
   var isCapicua = true;

   for(i = 0; i < string.length / 2; i++){  
      if(string.charAt(i) === string.charAt(string.length - i - 1)) continue;
      else isCapicua = false;
      break;
   }

   if(isCapicua == true) return "Es capicua";
   else return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var stringSinABC = "";

   for(i = 0; i < string.length; i++){
      if(string.charAt(i) != "a" && string.charAt(i) != "b" && string.charAt(i) != "c"){
         stringSinABC += string.charAt(i);
      }
   }

   return stringSinABC;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var arrayOrdenado = [];
   arrayOrdenado = arrayOfStrings.sort((a, b) => a.length - b.length); 
   
   return arrayOrdenado;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arrayIntersecciones = [];
   arrayIntersecciones = array1.filter((num) => array2.includes(num));

   return arrayIntersecciones;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
