var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentValue = romanMap[s[i]];
    const nextValue = i + 1 < s.length ? romanMap[s[i + 1]] : 0;

    if( currentValue < nextValue){
      result -= currentValue;
    }else{
      result += currentValue;
    }
  }
  return result;
};

console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('IIX'));
