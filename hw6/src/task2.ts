interface WithRating {
    rating: number;
}

function identity<Type extends WithRating>(arr: Type[]): number {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, item) => acc + item.rating, 0);
    return sum / arr.length;
}

const result = identity([]);
console.log('Average rating:', result); // Average rating: 0

const result1 = identity([
    { name: 'A', rating: 5 },
    { name: 'B', rating: 3 }
]);
console.log('Average rating:', result1); // Average rating: 4

const result2 = identity([
    { fullName: 'Alice', rating: 2 },
    { name: 'B', rating: 2 }
]);
console.log('Average rating:', result2); // Average rating: 2
