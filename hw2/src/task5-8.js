
console.log("===============================================================");
console.log("Task 5");
console.log("============");

function findMin(...args) {
    let min = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] < min) {
            min = args[i];
        }
    }
    return min;
}

console.log(findMin(12, 14, 4, -4, 0.2));
console.log(findMin(-0.008, 14, 4, 0.11, 0.2, -0.2));

console.log("===============================================================");
console.log("Task 6");
console.log("============");

function findUnique(arr) {
    const uniqueElements = new Set(arr);
    return uniqueElements.size === arr.length;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11 ]));

console.log("===============================================================");
console.log("Task 7");
console.log("============");

function lastElement(arr, n) {
    if (arr.length === 0) {
        return undefined;
    }
    if (isNaN(n) || n <= 0) {
        return arr[arr.length - 1];
    }
    return arr.slice(-n);
}

console.log(lastElement([ 3, 4, 10, - 5 ])); // - 5
console.log(lastElement([ 3, 4, 10, - 5 ], 2 )); // [ 1 0, - 5 ]
console.log(lastElement([ 3, 4, 10, - 5 ], 8 )); // [ 3 , 4 , 10, - 5 ]

console.log("===============================================================");
console.log("Task 8");
console.log("============");

function uppercaseFirstLetter(str) {
    if (str.length === 0) {
        return '';
    }

    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');
}

console.log(uppercaseFirstLetter("i love java script")); // I Love Java Script
console.log(uppercaseFirstLetter("hello world")); // Hello World
console.log(uppercaseFirstLetter("a")); // A

console.log("===============================================================");
