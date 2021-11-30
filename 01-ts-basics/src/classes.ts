// GETTER/SETTER

// class Animal{
//     private species : string;
//     private _legs : number;

//     constructor(species : string, legs: number){
//         this.species = species;
//         this._legs = legs
//     }
//     getDetails():string{
//         return `Species : ${this.species} | Legs : ${this._legs}`
//     }
//     set legs(value : number){
//         this._legs = value;
//     }
//     get legs(){
//         return this._legs
//     }
// }

// let tiger = new Animal("Cat", 4);
// tiger.legs = 2;
// console.log(tiger.getDetails())
// console.log("Legs : ", tiger.legs)


// METHOD OVERRIDING

// class Person{
//     protected name : string;
//     constructor(name : string){
//         this.name = name;
//     }
//     eat(){
//         console.log(`${this.name} eats when hungry!`)
//     }
// }

// class Student extends Person{
//     private age : number;
//     constructor(name : string, age : number){
//         super(name);
//         this.age = age;
//     }
//     eat(){
//         console.log(`${this.name} eats during the break also!`)
//     }
// }

// let stud1 = new Student("Rohit", 30);
// stud1.eat()


// METHOD OVERLOAD
// class Course{
//     courseDetail(id: string): string;
//     courseDetail(id : number) : string;
//     courseDetail(id: number, courseName : string) : string;
//     courseDetail(id: number, courseName : string) : number;
//     courseDetail(id : any){
//         if(typeof(id) === 'number'){
//             return id;
//         }
//         return id.toString()
//     }
// }

// let react = new Course();
// react.courseDetail("123")
// react.courseDetail(456)
// let num = react.courseDetail(123, "React")
// console.log(typeof(num) === 'number');


// ABSTRACT CLASSES

// abstract class Human{
//     firstName : string;
//     lastName : string;
//     constructor(fName : string, lName: string){
//         this.firstName = fName;
//         this.lastName = lName;
//     }
//     abstract getDetails() : void;
//     abstract getFullName() :  string;
//     show(){
//         console.log("Displaying some info")
//     }
// }

// class Employee extends Human{
//     constructor(fname: string, lName : string){
//         super(fname, lName)
//     }
//     getFullName(): string {
//         return `Heloo from ${this.firstName} ${this.lastName} !`
//     }
//     getDetails(): void {
//         console.log("Getting Details...")
//     }
// }
// let emp = new Employee("Foo", "Bar");
// console.log(emp.getFullName())
// emp.show()


// STATIC METHODS AND PROPS

// class Ninja{
//     static isBlackBelt : boolean = true;
//     static numOfInstances : number = 0;
//     constructor(){
//         Ninja.numOfInstances++;
//     }
//     getBelt(){
//         return Ninja.isBlackBelt;
//     }
//     getMyNumber(){
//         return Ninja.numOfInstances;
//     }
// }

// let mario = new Ninja()
// console.log(mario.getMyNumber())
// let luigi = new Ninja()
// console.log(luigi.getMyNumber())
// let yoshi = new Ninja()
// console.log(yoshi.getMyNumber())
// console.log(mario.getBelt())
// Ninja.isBlackBelt = false;



