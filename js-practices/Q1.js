// Find the largest and smallest element in an array.

let Arr = [1,2,3,4524245,245,2435,414,5,25635464567,4567,4,8468,467,83,56234,52,342,43];

let largest = Arr[0];
let smallest = Arr[0];

for(let i = 0; i<Arr.length; i++){

    if(Arr[i]>largest){

        let temp = Arr[i];
        Arr[i] = largest;
        largest = temp
    }
    else if(Arr[i]<smallest){
        let temp = Arr[i];
        Arr[i] = smallest;
        smallest = temp;
    }

}

console.log("the largest element is  " + largest);
console.log("the smallest element is : " + smallest)