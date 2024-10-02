//RESUELVE LOS EJERCICIOS AQUÍ

//1.- Dado el objeto empleados, extrae la empleada Ana completa.
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

// Extrae el objeto completo de la empleada Ana
const ana = empleados.find(empleado => empleado.name === "Ana");

// Imprime el resultado
console.log(ana);

/* 2 - Dado el objeto empleados, extrae el email de luis
en la variable emailLuis > la variable emailLuis
tiene el valor correcto */

// Extrae el email de Luis
const emailLuis = empleados.find(empleado => empleado.name === "Luis").email;

// Imprime el email de Luis
console.log(emailLuis);

/* 3.- Usa destructuración para cambiar los valores de a y b;

// Inicialmente
let a = 5;
let b = 3;

// Al final
let a = 3;
let b = 5;
*/

const cambio = { a = 5, b = 3 } = { a: 3, b:5 };
console.log(cambio);

/*
4.- Dado el objeto HIGH_TEMPERATURES
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
Cambiar las siguientes líneas
para guardar mediante destructuración
los valores de temperaturas en las variables maximaHoy y maximaManana

const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);
*/
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};
const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);

/*
5.- Escribe una función llamada sumEveryOther
que pueda recibir cualquier cantidad de números
y devuelva la suma de todos los demás argumentos.
sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26
*/

function sumEveryOther(...rest) {
    let total = 0;
  
    for (let i = 0; i < rest.length; i++) {
      total += rest[i];
    }
    return total;
  }
console.log(sumEveryOther(6, 8, 2, 3, 1));
console.log(sumEveryOther(11, 3, 12));

/*
6.- Escribe una función llamada addOnlyNums
que pueda recibir cualquier número de argumentos
(incluyendo números y strings y retorne la suma solo de los números).
addOnlyNums(1, "perro", 2, 4); //7
*/

function addOnlyNums(...perro) {
    // Destructuramos el array y filtramos solo los números
    const [numbersOnly] = [perro.filter(arg => typeof arg === 'number')];
    
    // Sumamos los números
    return numbersOnly.reduce((sum, num) => sum + num, 0);
  }
  
  console.log(addOnlyNums(1, "perro", 2, 4, "gato", "ratón", 1, 6));

  /*
  7.- Escribe una función llamada countTheArgs
  que pueda recibir cualquier número de argumentos
  y devuelva un número que indique cuántos argumentos ha recibido.
countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4
*/
function countTheArgs(...args) {
    return args.length;
  }

console.log(countTheArgs("gato", "perro")); //2
console.log(countTheArgs("gato", "perro", "pollo", "oso")); //4

/*
8.- Escribe una función llamada
combineTwoArrays que reciba dos array
cómo argumentos y devuelva solo un array
que combine los dos (usando spread operator).
*/ 

function combineTwoArrays(array1, array2) {
    return [...array1, ...array2];
}

// Ejemplo de uso
const A = [1, 2, 3];
const B = [4, 5, 6];

const C = combineTwoArrays(A, B);
console.log(C);

/*
 9.- Escriba una función llamada onlyUniques
 que acepte cualquier número de argumentos
 y devuelva un array de elementos únicos, sin repetidos.
*/
function onlyUniques(...args) {
    let arrayVacio = [];
    args.forEach((item) => {
        if (!arrayVacio.includes(item)){
            arrayVacio.push(item);
        }
    })
    return arrayVacio;
}
console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo")); //["gato", "pollo", "cerdo"]
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); //[1, 2, 3, 6, 7, 8]

/*10.- Escriba una función llamada combineAllArrays
que pueda recibir cualquier cantidad de arrays como argumentos
y los combine todos en un solo array.
combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]);*/
function combineAllArrays(...z){
    let arr_final = [];
    z.forEach((item)=> {
        arr_final = arr_final.concat(item);
        });
        return arr_final
}

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])); // [3, 6, 7, 8, 2, 7, 3, 1]
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]));

/*
11.- Escriba una función llamada sumAndSquare
que reciba cualquier número de argumentos,
los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
*/

function sumAndSquare(...args) {
  return args.reduce((acumulador, num) => acumulador + num ** 2, 0);
}

// Ejemplo de uso
console.log(sumAndSquare(1, 2, 3));  // Output: 14 (1^2 + 2^2 + 3^2 = 1 + 4 + 9)
console.log(sumAndSquare(4, 5));     // Output: 41 (4^2 + 5^2 = 16 + 25)
