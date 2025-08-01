export function createCounter() {
  let counter = 0;

  return {
    increment: function() {
      counter ++;
      return counter;
    },
    get: function() {
      return counter;
    }
  };
}