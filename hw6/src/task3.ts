function withEmploymentDate<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        employmentDate = '2024-04-12';
    };
}

@withEmploymentDate
class Manager {
    task: string = 'Simple task';
    project: string = 'Simple project';

    constructor() {
        console.log('Initializing the Manager class');
    }
}

// const manager = new Manager();
// console.log(manager.employmentDate); // not working, because the property is not defined in the class

const manager = new Manager() as Manager & { employmentDate: string };
console.log(manager.employmentDate);
console.log(manager.task);
console.log(manager.project);
