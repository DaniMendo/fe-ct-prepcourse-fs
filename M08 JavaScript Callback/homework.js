/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   var modPrimerLetra= nombre.charAt(0).toUpperCase()+nombre.slice(1);
   return modPrimerLetra;
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var invocall= function(cb1){
      return cb1();
   };
   var resulta=invocall(cb);
}
function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   var suma= function(num1, num2, cb) {
      return cb(num1, num2);
   };
   var resultado=suma(num1, num2, cb);
   return resultado;
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var sumaArray=0;
   for (i=0; i<arrayOfNumbers.length; i++){
      sumaArray+=arrayOfNumbers[i];
   };
   var operation=function(sumaArray, cb){
      return cb(sumaArray);
   };
   var resultado= operation(sumaArray, cb);

}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   var callback=function(n, cb) {
      return cb(n);
   }
   array.forEach(num => callback(num, cb));
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var callback=function(n, cb){
      return cb(n);
   }
   var nuevoArray= array.map(num => {return callback(num, cb)});
   return nuevoArray;
}  

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var aArray=arrayOfStrings.filter(str => str[0]=="a");
   return aArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
