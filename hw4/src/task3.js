const delay = (i, time) => new Promise((resolve) => setTimeout(() => resolve(i), time));

function showNumbers() {
    let promise = Promise.resolve();

    for (let i = 0; i < 10; i++) {
        promise = promise.then(() => delay(i, Math.floor(Math.random() * 3000))).then((num) => console.log(num));
    }
}

showNumbers();
