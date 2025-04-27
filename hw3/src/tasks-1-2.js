function propsCount(currentObject) {
    let count = 0;
    for (let prop in currentObject) {
        if (currentObject.hasOwnProperty(prop)) {
            count++;
        }
    }
    return count;
}

const mentor = {
    course: 'JS fundamental',
    duration: 3,
    direction: 'web development'
};

console.log(propsCount(mentor));

console.log('==========================');

const book = {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    pages: 223
};

function showProps(obj) {
    console.log('Properties:', Object.keys(obj));
    console.log('Values:', Object.values(obj));
}

showProps(book);

console.log('==========================');
