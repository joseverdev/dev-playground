function esParOImpar(num) {
  return num % 2 === 0;
}

// console.log(esParOImpar(0))
// console.log(esParOImpar(1))
// console.log(esParOImpar(-2))
// console.log(esParOImpar(4))

function tablaMultiplicar(num) {
  let results = [];
  for (let i = 1; i <= 10; i++) {
    results.push(`${num} * ${i} = ${num * i}`);
  }
  return results;
}

// console.log(tablaMultiplicar(4))
tablaMultiplicar(-4);

function generarNumeros(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  return arr;
}

// console.log(generarNumeros(3))
// console.log(generarNumeros(23))

function sumarArray(arr) {
  return arr.reduce((prev, curr) => prev + curr, 0);
}

// console.log(sumarArray([1,2,3]))
// console.log(sumarArray([1,2,3, -1]))

function numeroMayor(arr) {
  if (arr.length === 0) return null;
  return Math.max(...arr);
}

// console.log(numeroMayor([1, 2, 3]));
// console.log(numeroMayor([1, 2, 3, 6, 1, 2]));

function contarPares(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

function contarPares2(arr) {
  let count = 0;
  for (const num of arr) {
    if (num % 2 === 0) count++;
  }
  return count;
}

// console.log(contarPares([1, 2, 3, 4, 5]));
// console.log(contarPares([1, 2, 3, 4, 5, -2]));
// console.log(contarPares([1, 2, 3, 4, 5, 4, 4]));

function buscarNumero(arr, x) {
  let num = arr.find((el) => el === x);
  return num ? true : false;
  // return arr.includes(x);
}

//console.log(buscarNumero([1, 2, 3, 0], 0));
// console.log(buscarNumero([1, 2, 3], 5));

function contarRepetidos(arr, x) {
  let rep = arr.filter((el) => el === x);
  return rep.length;
}

function contarRepetidos2(arr, x) {
  let count = 0;

  for (let el of arr) {
    if (el === x) count++;
  }
  return count;
}

// console.log(contarRepetidos([1,2,2,3],2))
// console.log(contarRepetidos([1,2,2,3],1))
// console.log(contarRepetidos([1,2,2,3],8))

function invertirArray(arr) {
  let arrReverse = [];
  for (let i = arr.length; i > 0; i--) {
    arrReverse.push(arr[i - 1]);
  }
  return arrReverse;
}

// console.log(invertirArray([1, 2, 3]));

//esta solucion es mejor
function invertirArray2(arr) {
  let arrReverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrReverse.push(arr[i]);
  }
  return arrReverse;
}

// console.log(invertirArray2([1, 2, 3]));

//  Algoritmos clásicos de ordenamiento
// sin usar .sort()

// Ejercicio 1: Ordenar de menor a mayor (Bubble Sort)

function ordenarBurbuja(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// console.log(ordenarBurbuja([2, 6, 3, 7, 2]));
// console.log(ordenarBurbuja([1, 2, 3, 4, 5, 6]));

// Ejercicio 2: Ordenar de mayor a menor (Bubble Sort)

function ordenarBurbujaDescendente(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; ) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      } else {
        j++;
      }
    }
  }
  return arr;
}

// console.log(ordenarBurbujaDescendente([2, 6, 3, 7, 2]));
// console.log(ordenarBurbujaDescendente([1, 2, 3, 4, 5, 6]));

// Ejercicio 3: Eliminar duplicados de un array sin usar Set()

function eliminarDuplicados(arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log('primera vez ',i)
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(arr[j])
      if (arr[i] === arr[j]) {
        console.log(`SON IGUALES ${i} & ${j}`);
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}

// console.log(eliminarDuplicados([2, 3, 4, 1, 2, 1, 3, 6]));
// console.log(eliminarDuplicados([2, -3, 4, 1, 2, 1, 3, 6]));

// RECURSION

//Ejercicio 1: Factorial de un número

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// console.log(factorial(5));

// Ejercicio 2: Suma de los primeros N números naturales (recursivo)

function sumaRecursiva(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumaRecursiva(n - 1);
  }
}

// console.log(sumaRecursiva(5))

// Ejercicio 3: Invertir un string con recursión
let strReversed = '';

function invertirString(str) {
  if (str.length === 0) {
    return strReversed;
  }
  let strArr = str.split('');

  strReversed += strArr.splice(strArr.length - 1);

  return invertirString(strArr.join(''));
}

// console.log(invertirString('the world is yours'));

let twy = 'the world is yours';
let twyArr = twy.split('');
// console.log(twyArr.splice(twyArr.length - 1));
// console.log(twyArr);

function invertirStringBucle(str) {
  let stringReversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    stringReversed += str[i];
  }

  return stringReversed;
}

// console.log(invertirStringBucle('the world is yours'));

//ALGORITMOS CLASICOS

//Reto 1: FizzBuzz

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

// sfizzBuzz();

//Reto 2: Palíndromo

function esPalindromo(texto) {
  const cleanText = texto.toLowerCase().replace(/[a^-z0-9]/g, '');
  return cleanText.split('').reverse().join('') === cleanText;
}

// console.log(esPalindromo('helo'));
// console.log(esPalindromo('2222'));
// console.log(esPalindromo('oso'));
// console.log(esPalindromo('anita lava la tina'));

// Reto 3: Anagramas

//falla si hay caracteres repetidos
/* function sonAnagramas(str1, str2) {
  const str1Arr = str1.split('');
  const str2Arr = str2.split('');

  return str1Arr.every((char) => str2Arr.includes(char));
} */

function sonAnagramas(str1, str2) {
  const normalizar = (str) => {
    console.log(str.toLowerCase().split('').sort().join(''));
    return str.toLowerCase().split('').sort().join('');
  };
  console.log(normalizar(str1));
  console.log(normalizar(str2));
  return normalizar(str1) === normalizar(str2);
}

// console.log(sonAnagramas('roma', 'amor'));
// console.log(sonAnagramas('roma', 'amor'));
// console.log(sonAnagramas('roma', 'perro'))

//Reto 4: ¿Es primo?

function esPrimo(n) {
  if (n === 0 || n === 1) {
    return false;
  } else if (n !== 2 && n % 2 === 0) {
    return false;
  } else {
    if (n === 2) return true;
    const nSqrt = Math.sqrt(n);
    console.log('🚀 ~ esPrimo ~ nSqrt:', nSqrt);
    for (let i = 2; i <= nSqrt; i++) {
      const module = n % i;

      if (module === 0) {
        return false;
      }
    }
    return true;
  }
}

// console.log(esPrimo(113));
// console.log(esPrimo(23));
// console.log(esPrimo(5));
// console.log(esPrimo(4));
// console.log(esPrimo(0));
// console.log(esPrimo(1));

//Reto 5: Fibonacci

function fibonacciRecursivo(n) {
  if (n === 0) {
    return 'se acabo';
  } else {
  }

  console.log(``);

  n--;
}

// console.log(fibonacciRecursivo(10))

function fibonacciIterativo(n) {
  let num1 = 0,
    num2 = 1,
    result;

  for (let i = 0; i <= n; i++) {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    result = num1 + num2;
    num1 = num2;
    num2 = result;
  }
  return result;
}

// console.log(fibonacciIterativo(10));

//RETOS AVANZADOS

//Reto 1: Contar letras repetidas en una palabra

function contarLetras(palabra) {
  // const cleanText = texto.toLowerCase().replace(/[a^-z0-9]/g, '');

  const cleanWord = palabra
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/gi, '');
  // console.log('🚀 ~ contarLetras ~ cleanWord:', cleanWord);
  const counterObj = {};
  for (let i = 0; i < cleanWord.length; i++) {
    if (!counterObj.hasOwnProperty([cleanWord[i]])) {
      counterObj[cleanWord[i]] = 1;
    } else {
      counterObj[cleanWord[i]]++;
    }
  }
  return counterObj;
}

// console.log(contarLetras('canción'));
// console.log(contarLetras('banana'));

//Reto 2: Contar palabras en una frase

function contarPalabras(frase) {
  const fraseArr = frase.split(' ').map((word) => {
    const cleanWord = word
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/gi, '');
    return cleanWord;
  });
  // console.log('🚀 ~ fraseArr ~ fraseArr:', fraseArr);

  const counterObj = {};

  for (let i = 0; i < fraseArr.length; i++) {
    if (!counterObj.hasOwnProperty(fraseArr[i])) {
      counterObj[fraseArr[i]] = 1;
    } else {
      counterObj[fraseArr[i]]++;
    }
  }
  // console.log(counterObj);
  return counterObj;
}

// console.log(contarPalabras('do not be afraid'));
// console.log(contarPalabras('hello world hello'));
// console.log(contarPalabras('¡Canción Número 1!'));
// console.log(contarPalabras('¡Sí, sí, sí! ¿Tú tú tú... lo oíste? ¡Qué, qué cosa más rara: ñoño, ñoño y más ñoño!'));

//Reto 3: ¿Es isograma?

function esIsograma(palabra) {
  const cleanWord = palabra
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300]-\u036f/g, '')
    .replace(/[^a-z0-9]/gi, '');

  const wordArr = cleanWord.split('');

  const counterObj = {};

  for (let i = 0; i < wordArr.length; i++) {
    if (!counterObj.hasOwnProperty(wordArr[i])) {
      counterObj[wordArr[i]] = 1;
    } else {
      return false;
    }
  }
  return true;
}

// console.log(esIsograma('murciélago'));
// console.log(esIsograma('banano'));

// Reto 4: Generar combinaciones de una palabra corta

function generarCombinaciones(str) {
  
}
