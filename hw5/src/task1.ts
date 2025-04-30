type SortFunction = (arr: string[], sortDirection: 'asc' | 'desc') => string[];

function superSort(arr: string[], sortDirection: 'asc' | 'desc'): string[] {
    const copy = [...arr];
    return copy.sort((a, b) => {
        return sortDirection === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
    });
}

const names = ['Vlad', 'Ira', 'Nina', 'Alex'];
console.log(superSort(names, 'asc')); // [ 'Alex', 'Ira', 'Nina', 'Vlad' ]

const func: SortFunction = superSort;
const result = func(['A', 'C', 'D', 'B'], 'desc');
console.log(result); // [ 'D', 'C', 'B', 'A' ]
