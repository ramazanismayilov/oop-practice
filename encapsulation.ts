//! Task 1

// class User {
//   private password: string;

//   constructor(initialPassword: string) {
//     this.password = initialPassword;
//   }

//   setPassword(newPassword: string) {
//     this.password = newPassword;
//   }

//   getPassword() {
//     return "*".repeat(this.password.length); 
//   }
// }

// let x = new User("ramazan123");
// console.log(x.getPassword()); 

//! Task 2

// class Car {
//     private fuel: number;

//     constructor(initialFuel: number) {
//         this.fuel = initialFuel;
//     }

//     public addFuel(amount: number) {
//         this.fuel += amount;
//         if (this.fuel > 100) {
//             this.fuel = 100;
//             console.log("Yanacaq 100 litrdən çox ola bilməz, maksimum 100-lik təyin edildi.");
//         }
//     }

//     public drive(distance: number) {
//         const neededFuel = distance / 10;
//         if (neededFuel <= this.fuel) {
//             this.fuel -= neededFuel;
//             console.log(`Maşın ${distance} km sürdü, qalan yanacaq: ${this.fuel}`);
//         } else {
//             console.log("Not enough fuel!");
//         }
//     }

//     public getFuel() {
//         return this.fuel;
//     }
// }

// const myCar = new Car(50);
// myCar.addFuel(30);
// myCar.drive(100);
// console.log(myCar.getFuel());
// myCar.drive(800);       

//! Task 3

// class Library {
//   private books: string[];

//   constructor(initialBooks: string[]) {
//     this.books = initialBooks;
//   }

//   addBook(newBook: string) {
//     this.books.push(newBook);  
//   }

//   removeBook(bookName: string) {
//     const index = this.books.indexOf(bookName);
//     if (index !== -1) {
//       this.books.splice(index, 1);  
//     } else {
//       console.log("Book not found");
//     }
//   }

//   listBooks() {
//     return this.books;
//   }
// }

// const myLibrary = new Library(["a", "b"]);
// myLibrary.addBook("c");
// console.log(myLibrary.listBooks()); 
// myLibrary.removeBook("a");
// console.log(myLibrary.listBooks()); 

//! Task 4

// class Course {
//     private title: string;
//     private description: string;
//     private price: number;
//     private teacher: Teacher | null = null;
//     private students: Student[] = [];

//     constructor(title: string, description: string, price: number) {
//         this.title = title;
//         this.description = description;
//         this.price = price;
//     }

//     addStudent(student: Student) {
//         this.students.push(student);
//     }

//     removeStudent(student: Student) {
//         this.students = this.students.filter(s => s !== student);
//     }

//     setTeacher(teacher: Teacher) {
//         this.teacher = teacher;
//     }

//     listStudents() {
//         return this.students.map(s => s.getName());
//     }

//     getTitle() {
//         return this.title;
//     }
// }

// class Student {
//     private name: string;
//     private courses: Course[] = [];

//     constructor( name: string) {
//         this.name = name;
//     }

//     enroll(course: Course) {
//         this.courses.push(course);
//         course.addStudent(this);
//     }

//     drop(course: Course) {
//         this.courses = this.courses.filter(c => c !== course);
//         course.removeStudent(this);
//     }

//     listCourses() {
//         return this.courses.map(c => c.getTitle());
//     }

//     getName() {
//         return this.name;
//     }
// }

// class Teacher {
//     private id: number;
//     private name: string;
//     private courses: Course[] = [];

//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     }

//     assignCourse(course: Course) {
//         this.courses.push(course);
//         course.setTeacher(this);
//     }

//     listCourses() {
//         return this.courses.map(c => c.getTitle());
//     }

//     getName() {
//         return this.name;
//     }
// }

// const math = new Course("Math 101", "Basic Mathematics", 200);
// const physics = new Course("Physics 101", "Intro to Physics", 300);
// const ramazan = new Student("Ramazan");
// const teacherAli = new Teacher(1, "Ali");

// ramazan.enroll(math);
// ramazan.enroll(physics);
// teacherAli.assignCourse(math);

// console.log("Math kursunun tələbələri:", math.listStudents());
// console.log("Ramazanın kursları:", ramazan.listCourses());
// console.log("Ali müəllimin kursları:", teacherAli.listCourses());
