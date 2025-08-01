//Ejercicio 1: Si tengo un array de numeros y necesito sumarlos

//solucion iterativa

function sumNumbers(arr) {
  let total = 0;
  for (num of arr) {
    // console.log(num);
    total += num;
  }

  return total;
}

// console.log(sumNumbers([12, 45, 66, 10]));

//solucion recursiva

function sumNumbersRecursive(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  return arr[0] + sumNumbersRecursive(arr.slice(1));
}

// console.log(sumNumbersRecursive([12, 45, 66, 10]));

//E2: contar hacia atras

function contar(n) {
  if (n === 0) {
    return n;
  }
  console.log(n);
  return contar(n - 1);
}

// console.log(contar);

//E3: sumar numeros de 1 a n

function sumToN(n) {
  if (n === 1) return 1;
  return n + sumToN(n - 1);
}

// console.log(sumToN(3));

function generarCombinaciones(n, k) {
  let soluciones = [];

  function backtrack(camino) {
    if (camino.length === k) {
      soluciones.push([...camino]);
      return;
    }

    for (let i = 1; i <= n; i++) {
      console.log(`i: ${i}, camino: ${camino}`);
      if (!camino.includes(i)) {
        camino.push(i);
        backtrack(camino);
        camino.pop(); // aquí hacemos "backtrack"
      }
    }
  }

  backtrack([]);
  return soluciones;
}

console.log(generarCombinaciones(3, 2));
