//! Task 1

// abstract class Vehicle {
//     constructor(protected brand: string) { }

//     abstract start(): void

//     public getBrand(): string {
//         return this.brand
//     }
// }

// class Car extends Vehicle {
//     start(): void {
//         console.log(`${this.brand} car started!`)
//     }
// }

// class Motorcycle extends Vehicle {
//     start(): void {
//         console.log(`${this.brand} motorcycle started!`)
//     }
// }

// const bmw = new Car("BMW")
// bmw.start()
// console.log(bmw.getBrand());

// const yamaha = new Motorcycle("Yamaha")
// yamaha.start()
// console.log(yamaha.getBrand());

//! Task 2

// abstract class Shape {
//     abstract getArea(): number;
//     abstract getPerimeter(): number;
// }

// class Rectangle extends Shape {
//     constructor(private width: number, private height: number) {
//         super();
//     }

//     getArea(): number {
//         return this.width * this.height;
//     }

//     getPerimeter(): number {
//         return 2 * (this.width + this.height);
//     }
// }

// class Circle extends Shape {
//     constructor(private radius: number) {
//         super();
//     }

//     getArea(): number {
//         return Math.PI * this.radius * this.radius;
//     }

//     getPerimeter(): number {
//         return 2 * Math.PI * this.radius;
//     }
// }

// const rectangle = new Rectangle(10, 5);
// console.log("Rectangular area:", rectangle.getArea());
// console.log("Perimeter of a rectangle:", rectangle.getPerimeter());

// const circle = new Circle(7);
// console.log("Area of ​​the circle:", circle.getArea());
// console.log("Perimeter of a circle:", circle.getPerimeter());

//! Task 3

// abstract class Animal {
//     constructor(protected name: string) { }

//     abstract makeSound(): string

//     public getName(): string {
//         return this.name
//     }
// }

// class Dog extends Animal {
//     makeSound(): string {
//         return "Woof..."
//     }
// }

// class Cat extends Animal {
//     makeSound(): string {
//         return "Meow..."
//     }
// }

// class Cow extends Animal {
//     makeSound(): string {
//         return "Moo..."
//     }
// }

// const animals: Animal[] = [
//     new Dog("Rex"),
//     new Cat("Misty"),
//     new Cow("Bella")
// ]

// for (const animal of animals) {
//     console.log(`${animal.getName()} says: ${animal.makeSound()}`);
// }

//! Task 3

// abstract class Payment {
//     constructor(protected amount: number) { }

//     abstract pay(): void

//     getAmount(): number {
//         return this.amount
//     }
// }

// class CreditCardPayment extends Payment {
//     pay(): void {
//         console.log(`Paid $${this.amount} using Credit Card`);
//     }
// }

// class PayPalPayment extends Payment {
//     pay(): void {
//         console.log(`Paid $${this.amount} using PayPal`);
//     }
// }

// class CryptoPayment extends Payment {
//     pay(): void {
//         console.log(`Paid $${this.amount} using Cryptocurrency`);
//     }
// }

// const payments: Payment[] = [
//     new CreditCardPayment(100),
//     new PayPalPayment(250),
//     new CryptoPayment(500)
// ]

// for (const payment of payments) {
//     payment.pay()
// }

//! Task 4

// abstract class Employee {
//     constructor(protected id: number, protected name: string, protected baseSalary: number) { }

//     abstract calculateSalary(): number;

//     getDetails(): string {
//         return `${this.id} - ${this.name}`;
//     }
// }

// class Developer extends Employee {
//     calculateSalary(): number {
//         return this.baseSalary + this.baseSalary * 0.2;
//     }
// }

// class Manager extends Employee {
//     calculateSalary(): number {
//         return this.baseSalary + this.baseSalary * 0.5;
//     }
// }

// class Intern extends Employee {
//     calculateSalary(): number {
//         return this.baseSalary;
//     }
// }

// class Department {
//     private employees: Employee[];

//     constructor(employees: Employee[]) {
//         this.employees = employees;
//     }

//     getTotalSalaries(): number {
//         return this.employees.reduce(
//             (total, emp) => total + emp.calculateSalary(),
//             0
//         );
//     }

//     listEmployeeDetails() {
//         return this.employees.map(emp =>
//             `${emp.getDetails()} → Salary: ${emp.calculateSalary()}`
//         );
//     }
// }

// const dev = new Developer(1, "Ramazan", 1000);
// const mgr = new Manager(2, "Leyla", 2000);
// const intern = new Intern(3, "Ali", 500);
// const department = new Department([dev, mgr, intern]);

// console.log("Total salaries:", department.getTotalSalaries());
// console.log("Employee details:");
// console.log(department.listEmployeeDetails());
