var isPalindrome = function (x) {
  const xArr = x.toString().split('');
  const xArrReversed = xArr.slice().reverse();

  for (let i = 0; i < xArr.length; i++) {
    if (xArr[i] !== xArrReversed[i]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(121));
