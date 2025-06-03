// rewrite this code in TypeScript
type Employee = {
    name: string;
    profession: string;
    workingHoursPerDay: number;
};

type PremiumData = {
    isPremium: boolean;
    premium: number;
};

const employee: Employee = {
    name: 'Alex Brown',
    profession: 'doctor',
    workingHoursPerDay: 10
};

const premiumData: PremiumData = {
    isPremium: true,
    premium: 1000
};

const payPerHour = 32;
const workingDays = 14;

const experienceСoefficients: number[] = [1, 1.1, 1.2, 1.3, 1.5];

const getSalaryInfo = (
    employeeData: Employee,
    employeePremiumData: PremiumData,
    employeePayPerHour: number,
    employeeWorkingDays: number,
    employeeExperienceСoefficient: number
): string => {
    let salary: number;
    if (premiumData.isPremium) {
        salary = employeeData.workingHoursPerDay * employeePayPerHour * employeeWorkingDays * employeeExperienceСoefficient + employeePremiumData.premium;
    } else {
        salary = employeeData.workingHoursPerDay * employeePayPerHour * employeeWorkingDays * employeeExperienceСoefficient;
    }
    return `${employee.profession} ${employee.name} has a salary of ${salary}$ this month`;
};

const salaryInfo: string = getSalaryInfo(employee, premiumData, payPerHour, workingDays, experienceСoefficients[2]);

console.log(salaryInfo);
