import { readConsole }  from './read-console.js';

console.log("======================================");
console.log("Task 1");
console.log("======================================");

// 1 - for
const myArray = [2, 3, 4, 5];
let sum = 0;
for (let i of myArray) {
    sum += i;
}
console.log(sum);

// 1 - while
let k = 0;
sum = 0;
while (k < myArray.length) {
    sum += myArray[k];
    k += 1;
}
console.log(sum);

console.log("======================================");
console.log("Task 2");
console.log("======================================");

for (let j = 0; j <= 15; j++) {
    if (j % 2 === 0) {
        console.log(j + " is even");
    } else {
        console.log(j + " is odd");
    }
}

console.log("======================================");
console.log("Task 3");
console.log("======================================");

function randArray(k) {
    const resArray = [];
    for (let i = 0; i < k; i++){
        let randomInt = Math.floor(Math.random() * 500) + 1;
        resArray.push(randomInt);
    }
    return resArray;
}
console.log(randArray(5));

console.log("======================================");
console.log("Task 4");
console.log("======================================");

async function calculate() {
    let retries = 3;
    let a = null;
    let b = null;
    // Loop until the user enters valid numbers or retries are exhausted
    do {
        const variables = await readConsole();
        a = parseInt(variables.a);
        b = parseInt(variables.b);
        // You can now use the variables a and b as needed
        if (isNaN(a) || isNaN(b)) {
            console.log("Invalid input. Please enter valid numbers.");
            retries--;
        } else {
            break;
        }
    } while (retries > 0);
    console.log(`You entered: a = ${a}, b = ${b}`);
}

calculate();


