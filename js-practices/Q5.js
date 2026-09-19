const arr1 = [12,313,31,[1313,3,133,[3223445,4,24,5,24]]];

function flattenArray(arr) {
    const result = [];

    for(let i = 0 ; i<arr.length ; i++){

        if(Array.isArray(arr[i])){
            result.push(...flattenArray(arr[i]));
        }
        else{
            result.push(arr[i])
        }
    }
return result;
    
}

console.log(flattenArray(arr1))