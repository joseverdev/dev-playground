//EXPECTED APROACH: One Traversal

// ANÁLISIS DE COMPLEJIDAD - EXPECTED APPROACH:

function pushZerosToEnd(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
  return arr;
}

// Time Complexity: O(n)
// Explicación:
// - Recorremos el array una sola vez con el bucle for (de 0 a n-1)
// - En cada iteración hacemos operaciones constantes O(1): comparación, intercambio, incremento
// - Por lo tanto: n iteraciones × O(1) por iteración = O(n) tiempo total

// Auxiliary Space: O(1) - Espacio Constante
// Explicación:
// - Solo usamos variables adicionales: 'count' (1 entero) e 'i' (1 entero para el bucle)
// - No creamos arrays nuevos, ni estructuras de datos que crezcan con el tamaño de entrada
// - El intercambio [arr[i], arr[count]] = [arr[count], arr[i]] se hace in-place (en el mismo array)
// - Sin importar si el array tiene 10 o 10,000 elementos, siempre usamos la misma cantidad de memoria extra
// - Por eso es O(1): espacio constante, independiente del tamaño de entrada 'n'

//BETTER APROACH - Two Traversal

/* function pushZerosToEnd(arr) {
  let count = 0; // Count of non-zero elements

  // PASO 1: Mover todos los elementos no-cero al frente del array
  // Esta fase NO elimina los ceros, solo agrupa los no-ceros al inicio
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i]; // Sobrescribe posiciones desde el inicio con elementos no-cero
    }
  }
  console.log(arr); // Array después del primer bucle: elementos no-cero al frente + "basura" al final

  // PASO 2: Limpiar las posiciones restantes llenándolas con ceros
  // Después del primer bucle, las posiciones desde 'count' hasta el final contienen datos antiguos
  // que necesitan ser reemplazados explícitamente con ceros
  while (count < arr.length) {
    arr[count++] = 0; // Fill the remaining positions with zeros
  }
  console.log(arr); // Array final: todos los no-ceros al frente, todos los ceros al final

  return arr;
} */

// ANÁLISIS DE COMPLEJIDAD - BETTER APPROACH (Two Traversal):

// Time Complexity: O(n)
// Explicación detallada:
// - PRIMER BUCLE FOR: Recorre todo el array una vez (n iteraciones)
//   * En cada iteración: comparación if (O(1)) + asignación arr[count++] = arr[i] (O(1))
//   * Total primer bucle: n × O(1) = O(n)
// - SEGUNDO BUCLE WHILE: En el peor caso, recorre las posiciones restantes
//   * Si hay k ceros, recorre (n-k) posiciones para llenar con ceros
//   * En el peor caso k=0 (sin ceros), recorre n posiciones
//   * Total segundo bucle: O(n) en el peor caso
// - RESULTADO FINAL: O(n) + O(n) = O(n) (no O(2n) porque ignoramos constantes)
// - Aunque son "dos traversals", la complejidad sigue siendo lineal O(n)

// Auxiliary Space: O(1) - Espacio Constante
// Explicación:
// - Solo usamos variables auxiliares: 'count' (1 entero) e 'i' (1 entero para bucles)
// - No creamos arrays nuevos, ni estructuras de datos que crezcan con el tamaño de entrada
// - Todas las operaciones se hacen in-place (modificando el array original)
// - Sin importar si el array tiene 10 o 10,000 elementos, siempre usamos la misma cantidad de memoria extra
// - Por eso es O(1): espacio constante, independiente del tamaño de entrada 'n'

//NAIVE APPROACH - Using a temporary array
/* function pushZerosToEnd(arr) {
  const n = arr.length;
  const temp = new Array(n);

  let j = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      temp[j++] = arr[i];
    }
  }

  while (j < n) {
    temp[j++] = 0;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }

  return arr;
} */
// Time Complexity: O(n), Space Complexity: O(n)
// Explicación:
// - Time Complexity O(n): porque recorremos el arreglo original una vez para copiar los elementos no cero,
//   otra vez (en el peor caso) para llenar con ceros, y una vez más para copiar los elementos de temp a arr.
//   Todas estas operaciones son lineales respecto al tamaño del arreglo, así que la complejidad es O(n).
// - Space Complexity O(n): porque creamos un arreglo temporal (temp) del mismo tamaño que el arreglo original,
//   por lo tanto el uso de espacio adicional es proporcional a n.

/*
MINE
function pushZerosToEnd(arr) {
  if (!arr.includes(0)) return arr;
  if (arr.every((num) => num === 0)) return arr;

  const l = arr.length;
  let zeroCount = 0;
  for (let i = 0; i < l; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    }
  }

  const newArr = arr.filter((num) => num !== 0);

  for (let i = 0; i < zeroCount; i++) {
    newArr.push(0);
  }

  return newArr;
} */

let numbers = [1, 2, 0, 4, 3, 0, 5, 0];

console.log(pushZerosToEnd(numbers));
// console.log(numbers);
// console.log(pushZerosToEnd([10, 20, 30]));
// console.log(pushZerosToEnd([0, 0]));
