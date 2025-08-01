function getSecondLarges(arr) {
  if (arr.length < 2) return -1;

  let max = arr[0],
    second = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (arr[i] !== max && arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
}

console.log(getSecondLarges([12, 35, 1, 10, 34, 1])); //34
console.log(getSecondLarges([10, 5, 10])); //5
console.log(getSecondLarges([10, 10, 10])); //-1
