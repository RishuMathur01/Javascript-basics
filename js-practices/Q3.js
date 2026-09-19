// Remove duplicates from an array.

const arr = [12,12,32,423,321,2,21,2,2,3,3,4,5,54,3,2,3];

const strArr = ['apple', 'apple', 'banana', 'banana', 'mango']

let removeDuplicae = [...new  Set(arr)]
let removeDupliStr = [...new Set(strArr)]

console.log(removeDuplicae);
console.log(removeDupliStr)





const unique = arr.filter((item, index)=> arr.indexOf() === item);
