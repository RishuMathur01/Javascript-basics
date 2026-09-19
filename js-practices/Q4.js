// Find duplicate elements in an array.

const arr = [1, 2, 2, 3, 4, 4, 5];
const duplicateArr = [];

for(let i =0 ; i <arr.length ; i++){

    for(let j = i+1 ; j<arr.length ; j++){
        

        if(arr[i] === arr[j] && !duplicateArr.includes(arr[i])){
            duplicateArr.push(arr[i]);
        }
    }
}

console.log(duplicateArr)