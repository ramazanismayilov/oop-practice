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

interface Course {
    id: number
    name: string
    description: string
    price: number
}

class Student {
    private id: number = 1
    private name?: string
    private courses?: Course[]

    constructor(initialName: string, initialCourses: Course[]) {
        this.id += 1
        this.name = initialName
        this.courses = initialCourses
    }

    enroll(course: Course[]) {

    }

    drop(course: Course) {

    }

    listCourses() {

    }
}

class Teacher {

}

class Course {

}