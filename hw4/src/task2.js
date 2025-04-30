function calcArrProduct(arr) {
    return new Promise((resolve) => {
        if (arr.every((item) => typeof item === 'number')) {
            const product = arr.reduce((acc, val) => acc * val, 1);
            resolve(product);
        } else {
            resolve('Error! Incorrect array!');
        }
    });
}

calcArrProduct([3, 4, 5]).then((result) => console.log(result)); // 60
calcArrProduct([5, 'user2', 7, 12]).then((result) => console.log(result)); // "Error! Incorrect array!"
