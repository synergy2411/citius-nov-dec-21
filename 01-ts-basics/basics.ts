// Type Inference
// let str : string = "Some String";
// console.log(typeof(str))

// str = 100;
// console.log(typeof(str))

// let isAdmin = true;

// isAdmin = 'false';

// let num1 = 123;
// num1 = true;

// str = "test"

// let arr = [1,2,3,4];
// arr.push("string");

// // arr[4] = 123
// arr[4] = ""

// let obj = {
//     name : "Foo",
//     age : 32
// }

// obj.email = "test@test.com"

// let fn = () => {}

// fn = [1,2,3]

// Explicit Type
// let fn : Function;

// fn = {}

// fn = () => {}

// fn = [];

// let str : string;
// str = "";
// str = 123;

// let obj : object;

// obj = {
//     name : "mario",
//     isBlackBelt : true
// }
// obj = [1,2,3,4];

// obj = () => {}

// obj = ""
// obj = 123;
// obj = true;

// let isAdmin : null = null;

// Structural Types
// - Class
// - Constructor Injection
// - Access Modifiers - public, protected, private, readonly

// class Foo{
//     constructor(
//         private firstName: string,
//         protected lastName : string,
//         readonly age : number
//         ){ }
//     getFullName():string{
//         return `${this.lastName}, ${this.firstName}! I am ${this.age} years old!`
//     }
// }

// class Bar extends Foo {
//     display(){
//         // super.lastName           // protected member
//     }
// }

// let foo : Foo = new Foo("Foo", "Bar", 32);
// // foo.firstName = ""               // private member
// console.log(foo.getFullName())

// foo.age = 30         // ready only

// - Interface

// interface Person {
//     email : string;
//     age? : number;
//     getDetail : (a: string, b : number) => string;
// }

// let obj : Person = {
//     email: "test@test.com",
//     age: 34,
//     getDetail : (email : string, age : number) => {
//         console.log(this.email);
//         return `Email : ${this.email}`;
//     }
// }

// let obj2 : Person = {
//     email: "",
//     getDetail: function (a: string, b: number): string {
//         throw new Error("Function not implemented.");
//     }
// }

// interface Address {
//     city : string;
//     street : string;
// }

// interface Person {
//     firstName : string;
//     lastName : string;
//     age : number;
//     // friends : string[]
//     friends : Array<string>;
//     address : Address;
//     addNewFriend : (name : string) => void;
// }

// let user : Person = {
//     firstName : "Foo",
//     lastName : "Bar",
//     age : 30,
//     friends : ["bar", "bam"],
//     address : {
//         city : "Bengaluru",
//         street : "201, Main Road, Marathahalli"
//     },
//     addNewFriend : (friendName : string) => {
//         this.friends.push(friendName);
//     }
// }

// class Student implements Person{
//     firstName: string;
//     lastName: string;
//     age: number;
//     friends: string[];
//     address: Address;
//     addNewFriend: (name: string) => void;

// }

// - type keyword

// Union Type
type MyType = number | string | boolean;

class Course {
  constructor(private id: MyType) {}
  getId() {
    return this.id;
  }
}


let react = new Course('123')
let angular = new Course(456)
let vue = new Course(true)


// enum
enum ROLE { ADMIN='abc' , USER=3, EMPLOYEE };

class Resource{
    private role : ROLE;
    constructor(private resourceType : number, role : ROLE){
        this.role = role;
    }
    display(){
        console.log("ROLE : ", this.role)
    }
}

new Resource(0,ROLE.ADMIN).display()        // ?
new Resource(1,ROLE.USER).display()
new Resource(2,ROLE.EMPLOYEE).display()