//! Task 1

// class Animal {
//     constructor(public name: string) { }

//     makeSound(): void {
//         console.log("Some generic sound...");
//     }
// }

// class Dog extends Animal {
//     makeSound(): void {
//         console.log("Woof! Woof!");
//     }
// }

// class Cat extends Animal {
//     makeSound(): void {
//         console.log("Meow!");
//     }
// }

// const animals: Animal[] = [new Dog("Dog"), new Cat("Cat"), new Animal("Generic")];
// animals.forEach(a => a.makeSound());

//! Task 2

// class Shape {
//     getArea(): number {
//         return 0;
//     }
// }

// class Rectangle extends Shape {
//     constructor(public width: number, public height: number) {
//         super();
//     }

//     getArea(): number {
//         return this.width * this.height;
//     }
// }

// class Circle extends Shape {
//     constructor(public radius: number) {
//         super();
//     }

//     getArea(): number {
//         return 3.14 * this.radius * this.radius;
//     }
// }

// const shapes: Shape[] = [new Rectangle(5, 10), new Circle(3)];
// shapes.forEach(s => console.log("Area:", s.getArea()));

//! Task 3

// class Employee {
//     constructor(public name: string, public baseSalary: number) {}

//     calculateSalary(): number {
//         return this.baseSalary;
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
//         console.log(`${this.name} is coding`);
//     }
// }

// class Manager extends Employee {
//     calculateSalary(): number {
//         return this.baseSalary + this.baseSalary * 0.5;
//     }
//     work(): void {
//         console.log(`${this.name} is managing`);
//     }
// }

// class Intern extends Employee {
//     work(): void {
//         console.log(`${this.name} is assisting`);
//     }
// }

// const employees: Employee[] = [
//     new Developer("Ramazan", 1000),
//     new Manager("Leyla", 2000),
//     new Intern("Ali", 500)
// ];

// employees.forEach(e => {
//     console.log(`${e.name} Salary: ${e.calculateSalary()}`);
//     e.work();
// });

//! Task 4

// interface Payment {
//     pay(): void;
// }

// class CreditCardPayment implements Payment {
//     constructor(private amount: number) { }

//     pay(): void {
//         console.log(`Paid ${this.amount}$ using Credit Card`);
//     }
// }

// class PayPalPayment implements Payment {
//     constructor(private amount: number) { }

//     pay(): void {
//         console.log(`Paid ${this.amount}$ using PayPal`);
//     }
// }

// class CryptoPayment implements Payment {
//     constructor(private amount: number) { }

//     pay(): void {
//         console.log(`Paid ${this.amount}$ using Cryptocurrency`);
//     }
// }

// const payments: Payment[] = [
//     new CreditCardPayment(100),
//     new PayPalPayment(200),
//     new CryptoPayment(300)
// ];

// payments.forEach(p => p.pay());