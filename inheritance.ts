//! Task 1

// class Animal {
//     constructor(public name: string) { }

//     eat(): void {
//         console.log(`${this.name} is eating`);
//     }
// }

// class Dog extends Animal {
//     makeSound(): void {
//         console.log('Woof...');
//     }
// }

// class Cat extends Animal {
//     makeSound(): void {
//         console.log('Meow...');
//     }
// }

// const dog = new Dog('Dog');
// const cat = new Cat('Cat');

// dog.makeSound();
// cat.makeSound();
// dog.eat();
// cat.eat();

//! Task 2

// class Person {
//     constructor(public name: string, public age: number) { }

//     introduce(): void {
//         console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
//     }
// }

// class Student extends Person {
//     constructor(name: string, age: number, public grade: string) {
//         super(name, age);
//     }

//     study(): void {
//         console.log(`${this.name} is studying in grade ${this.grade}.`);
//     }
// }

// class Teacher extends Person {
//     constructor(name: string, age: number, public subject: string) {
//         super(name, age);
//     }

//     teach(): void {
//         console.log(`${this.name} is teaching ${this.subject}.`);
//     }
// }

// const student = new Student('Ali', 20, '3rd year');
// const teacher = new Teacher('Leyla', 35, 'Math');

// student.introduce();
// student.study();
// teacher.introduce();
// teacher.teach();     

//! Task 3

// class Vehicle {
//     constructor(public brand: string, public speed: number) {}

//     move(): void {
//         console.log(`${this.brand} is moving at ${this.speed} km/h`);
//     }
// }

// class Car extends Vehicle {
//     constructor(brand: string, speed: number, public numDoors: number) {
//         super(brand, speed);
//     }

//     honk(): void {
//         console.log(`${this.brand} is honking: Beep Beep!`);
//     }
// }

// class Motorcycle extends Vehicle {
//     constructor(brand: string, speed: number, public hasSidecar: boolean) {
//         super(brand, speed);
//     }

//     wheelie(): void {
//         console.log(`${this.brand} is doing a wheelie!`);
//     }
// }

// const car = new Car('BMW', 120, 4);
// const moto = new Motorcycle('Yamaha', 100, false);

// car.move();  
// car.honk();   
// moto.move();  
// moto.wheelie();


//! Task 4

// class Employee {
//     constructor(
//         protected id: number,
//         protected name: string,
//         protected baseSalary: number
//     ) {}

//     calculateSalary(): number {
//         return this.baseSalary; 
//     }

//     getDetails(): string {
//         return `${this.id} - ${this.name}`;
//     }

//     work(): void {
//         console.log(`${this.name} is working`);
//     }
// }

// class Developer extends Employee {
//     calculateSalary(): number {
//         return this.baseSalary + this.baseSalary * 0.2;
//     }

//     work(): void {
//         console.log(`${this.name} is writing code`);
//     }
// }

// class Manager extends Employee {
//     calculateSalary(): number {
//         return this.baseSalary + this.baseSalary * 0.5;
//     }

//     work(): void {
//         console.log(`${this.name} is managing the team`);
//     }
// }

// class Intern extends Employee {
//     calculateSalary(): number {
//         return this.baseSalary; 
//     }

//     work(): void {
//         console.log(`${this.name} is assisting the team`);
//     }
// }

// class Department {
//     private employees: Employee[] = [];

//     constructor(employees: Employee[] = []) {
//         this.employees = employees;
//     }

//     addEmployee(employee: Employee): void {
//         this.employees.push(employee);
//     }

//     removeEmployee(employee: Employee): void {
//         this.employees = this.employees.filter(e => e !== employee);
//     }

//     getTotalSalaries(): number {
//         return this.employees.reduce((total, emp) => total + emp.calculateSalary(), 0);
//     }

//     listEmployeeDetails(): void {
//         this.employees.forEach(emp => {
//             console.log(`${emp.getDetails()} → Salary: ${emp.calculateSalary()}`);
//         });
//     }

//     letEmployeesWork(): void {
//         this.employees.forEach(emp => emp.work());
//     }
// }

// const dev = new Developer(1, "Ramazan", 1000);
// const mgr = new Manager(2, "Leyla", 2000);
// const intern = new Intern(3, "Ali", 500);

// const department = new Department([dev, mgr, intern]);

// console.log("Total salaries:", department.getTotalSalaries());

// console.log("Employee details:");
// department.listEmployeeDetails();

// console.log("Employees at work:");
// department.letEmployeesWork();
