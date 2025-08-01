//Alternative aproach - Using Recursion - O(n) time O(n) space

/* function reverseArrayRec(arr, l, r) {
  if (l >= r) {
    return;
  }

  [arr[l], arr[r]] = [arr[r], arr[l]];

  reverseArrayRec(arr, l + 1, r - 1);
}
const arr = [1, 2, 3, 4, 5];
const n = arr.length;

reverseArrayRec(arr, 0, n - 1);

console.log(arr) */

//Expected Aproach 2 - Swapping Elements  - O(n) time O(1) space

/* function reverseArray(arr) {
  let n = arr.length;

  for (let i = 0; i < n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
  }
  return arr;
} */

// ANÁLISIS DE COMPLEJIDAD - ENFOQUE SWAPPING ELEMENTS:

// Time Complexity: O(n)
// Explicación detallada:
// - El bucle for se ejecuta exactamente n/2 veces (donde n es el tamaño del array)
// - En cada iteración del bucle:
//   * Comparación i < n/2: O(1)
//   * Creación de variable temporal: let temp = arr[i]: O(1)
//   * Primera asignación: arr[i] = arr[n - i - 1]: O(1)
//     - Cálculo de índice (n - i - 1): O(1)
//     - Acceso a elemento y asignación: O(1)
//   * Segunda asignación: arr[n - i - 1] = temp: O(1)
//   * Incremento i++: O(1)
// - Total por iteración: O(1) + O(1) + O(1) + O(1) + O(1) = O(1)
// - Número de iteraciones: n/2
// - Tiempo total: (n/2) × O(1) = O(n/2) = O(n)
//   * Las constantes (1/2) se ignoran en notación Big O
// - Aunque solo recorremos la mitad del array, cada elemento es procesado exactamente una vez
//   * Los elementos de la primera mitad se intercambian con los de la segunda mitad

// Auxiliary Space: O(1) - Espacio Constante
// Explicación detallada:
// - VARIABLES AUXILIARES:
//   * n (1 entero): O(1)
//   * i (1 entero para el bucle): O(1)
//   * temp (1 variable temporal por iteración): O(1)
// - INTERCAMBIO TRADICIONAL: Usa el patrón clásico de 3 asignaciones
//   * temp = arr[i], arr[i] = arr[other], arr[other] = temp
//   * Este patrón requiere exactamente 1 variable temporal adicional
// - NO se crean arrays adicionales, ni estructuras de datos que crezcan con n
// - MODIFICACIÓN IN-PLACE: El array original se modifica directamente
//   * No necesitamos memoria adicional proporcional al tamaño de entrada
// - ESPACIO TOTAL: O(1) + O(1) + O(1) = O(1)
//   * Sin importar si el array tiene 10 o 10,000 elementos, usamos la misma cantidad de memoria extra
// - Equivalente en eficiencia espacial al enfoque two-pointers, pero con sintaxis más explícita

//Expecte  Aproach 1 - Using Two Pointers O(n) Time Complexity, O(1) Space Complexity

/* function reverseArray(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}
 */
// ANÁLISIS DE COMPLEJIDAD - ENFOQUE TWO POINTERS:

// Time Complexity: O(n)
// Explicación detallada:
// - El bucle while se ejecuta exactamente n/2 veces (donde n es el tamaño del array)
// - En cada iteración del bucle:
//   * Comparación left < right: O(1)
//   * Intercambio [arr[left], arr[right]] = [arr[right], arr[left]]: O(1)
//     - Esta operación de destructuring es equivalente a 3 asignaciones:
//       temp = arr[left], arr[left] = arr[right], arr[right] = temp
//   * Incremento left++: O(1)
//   * Decremento right--: O(1)
// - Total por iteración: O(1) + O(1) + O(1) + O(1) = O(1)
// - Número de iteraciones: n/2
// - Tiempo total: (n/2) × O(1) = O(n/2) = O(n)
//   * Las constantes (1/2) se ignoran en notación Big O
// - Cada elemento es "visitado" exactamente una vez durante el proceso de intercambio

// Auxiliary Space: O(1) - Espacio Constante
// Explicación detallada:
// - VARIABLES AUXILIARES: left, right (2 enteros) = O(1)
// - INTERCAMBIO TEMPORAL: El destructuring [a, b] = [b, a] usa espacio constante interno
//   * JavaScript internamente puede usar una variable temporal, pero es O(1)
// - NO se crean arrays adicionales, ni estructuras de datos que crezcan con n
// - MODIFICACIÓN IN-PLACE: El array original se modifica directamente
//   * No necesitamos memoria adicional proporcional al tamaño de entrada
// - ESPACIO TOTAL: O(1) + O(1) = O(1)
//   * Sin importar si el array tiene 10 o 10,000 elementos, usamos la misma cantidad de memoria extra
// - Este es el enfoque MÁS EFICIENTE en términos de espacio

//NAIVE APROACH - Using a temporary array

/* function reverseArray(arr) {
  let n = arr.length;

  let temp = new Array(n);

  for (let i = 0; i < n; i++) temp[i] = arr[n - i - 1];

  for (let i = 0; i < n; i++) arr[i] = temp[i];

  return arr;
} */

// ANÁLISIS DE COMPLEJIDAD - ENFOQUE CON ARRAY TEMPORAL:

// Time Complexity: O(n)
// Explicación detallada:
// - PRIMER BUCLE FOR: Recorre todo el array original una vez (n iteraciones)
//   * En cada iteración: temp[i] = arr[n - i - 1] es una operación O(1)
//   * Cálculo de índice (n - i - 1) y asignación son operaciones constantes
//   * Total primer bucle: n × O(1) = O(n)
// - SEGUNDO BUCLE FOR: Recorre todo el array temporal una vez (n iteraciones)
//   * En cada iteración: arr[i] = temp[i] es una operación O(1)
//   * Acceso por índice y asignación son operaciones constantes
//   * Total segundo bucle: n × O(1) = O(n)
// - TIEMPO TOTAL: O(n) + O(n) = O(2n) = O(n)
//   * Las constantes se ignoran en notación Big O

// Auxiliary Space: O(n) - Espacio Lineal
// Explicación detallada:
// - ARRAY TEMPORAL: Creamos temp = new Array(n) que requiere exactamente n espacios de memoria
// - VARIABLES AUXILIARES: let n, let i (2 enteros) = O(1) espacio constante
// - ESPACIO TOTAL: O(n) + O(1) = O(n)
//   * El término dominante O(n) del array temporal determina la complejidad espacial
// - IMPORTANTE: Este espacio es ADICIONAL al array original
//   * No modificamos el array original hasta el segundo bucle
//   * Necesitamos almacenar temporalmente todos los elementos revertidos
//   * Por eso el espacio auxiliar crece linealmente con el tamaño de entrada

/*
//MINE
function reverseArray(arr) {
  let count = 0;
  let n = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    [arr[i], arr[n]] = [arr[n], arr[i]];
    n--;
  }
  return arr;
}
 */

// MINE
/* function reverseArray(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = newArr[i];
  }

  return arr;
} */

console.log(reverseArray([1, 2, 3, 4, 5]));
