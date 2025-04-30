class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return `${this.surname} ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(middleName) {
        return `${this.surname} ${this.name} ${middleName}`;
    }

    showCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.year;
        if (course >= 1 && course <= 6) {
            return course;
        } else {
            return 'Not a student';
        }
    }
}

const stud1 = new Student('Petro', 'Petrenko', 2024);
console.log(stud1.showFullName('Petrovych'));
console.log('Current course: ' + stud1.showCourse());

const stud2 = new Student('Ivan', 'Ivanenko', 2025);
console.log(stud2.showFullName('Ivanovych'));
console.log('Current course: ' + stud2.showCourse());
