class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        const salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary: ${salary}`);
        return salary;
    }

    showSalaryWithExperience() {
        const salaryWithExp = this.dayRate * this.workingDays * this.#experience;
        console.log(`${this.fullName} salary: ${salaryWithExp}`);
        return salaryWithExp;
    }

    get showExp() {
        return this.#experience;
    }

    set setExp(value) {
        this.#experience = value;
    }
}

const worker1 = new Worker('John Johnson', 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log('New experience: ' + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log('New experience: ' + worker1.showExp);
worker1.showSalaryWithExperience();

console.log('----------------------------');

const worker2 = new Worker('Tom Thomson', 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log('New experience: ' + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log('New experience: ' + worker2.showExp);
worker2.showSalaryWithExperience();

console.log('----------------------------');

const worker3 = new Worker('Ben Boston', 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log('New experience: ' + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log('New experience: ' + worker3.showExp);
worker3.showSalaryWithExperience();

console.log('----------------------------');

const workers = [worker1, worker2, worker3];

const sortedWorkers = workers.map((worker) => ({
    fullName: worker.fullName,
    salaryWithExp: worker.showSalaryWithExperience()
}));

sortedWorkers.sort((a, b) => a.salaryWithExp - b.salaryWithExp);

console.log('Sorted salary:');
for (let worker of sortedWorkers) {
    console.log(`${worker.fullName}: ${worker.salaryWithExp}`);
}
