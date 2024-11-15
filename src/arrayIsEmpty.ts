export const arrayIsEmpty = <T>(array: Array<T>): boolean => {
    const isArray = Array.isArray(array);
    const hasElements = Boolean(array.length);

    return !isArray || !hasElements;
};

const array1 = [ { key: 'value' }]
const test1 = arrayIsEmpty(array1)
console.log({result: test1})

const array2 = [];
const test2 = arrayIsEmpty(array2)
console.log({result: test2})

const array3 = 'a';
const test3 = arrayIsEmpty(array3)
console.log({result: test3})

const array4 = ['a'];
const test4 = arrayIsEmpty(array4)
console.log({result: test4})
