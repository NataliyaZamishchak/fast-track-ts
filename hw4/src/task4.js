const delay = (i, time) => new Promise((resolve) => setTimeout(() => resolve(i), time));

async function showNumbers() {
    for (let i = 0; i < 10; i++) {
        const num = await delay(i, Math.floor(Math.random() * 3000));
        console.log(num);
    }
}

showNumbers();
