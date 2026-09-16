// Find the second largest element.

const arrya = [12, 3, 23, 34, 34, 34, 4, 54, 56, 667, 5434, 32, 232, 3, 2];

let largest = arrya[0];

let secondLargest = 0;

for (let a = 0; a < arrya.length; a++) {

    if (arrya[a] > largest) {

        secondLargest = largest;
        largest = arrya[a];

    }
    else if (arrya[a] > secondLargest && arrya[a] !== largest) {

        secondLargest = arrya[a];
    }



}

console.log(largest, secondLargest)

