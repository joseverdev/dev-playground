var lengthOfLongestSubstring = function (str) {
  let strArr = str.split('');

  let newStrArr = [];
  let anotherStrArr = [];

  let index = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (newStrArr.includes(strArr[i])) {
      index = newStrArr.indexOf(strArr[i]);
      break;
    }

    newStrArr.push(strArr[i]);
  }

  for (let i = index; i < strArr.length; i++) {
    if (anotherStrArr.includes(strArr[i])) {
      index = anotherStrArr.indexOf(strArr[i]);
      break;
    }
    anotherStrArr.push(strArr[i]);
  }

  if (newStrArr.length > anotherStrArr.length) {
    console.log('newStrArr', newStrArr);

    return newStrArr.length;
  } else {
    console.log('anotherStrArr', anotherStrArr);
    return anotherStrArr.length;
  }
};

// console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
