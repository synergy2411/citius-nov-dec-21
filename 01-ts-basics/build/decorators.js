"use strict";
// Decorators : 
// - Prefixed with '@'
// - Simple functions for met-programming
// - Classes, Methods, Properties, Parameters & Getters/Setters
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Decorator Function
// function log(target: any, key : string){
//     console.log("LOG : works")
//     console.log("TARGET : ", target)
//     console.log("KEY : ", key);
// }
// Decorator Factory
// function theFactory(){
//     console.log("Decorator Factory")
//     return function(target: any, key : string){
//         console.log("Decorator Function")
//         console.log("PROP TARGET : ", target)
//         console.log("PROP KEY : ", key);
//     }
// }
// function configurable(value : boolean){
//     return function(target : any, key:  string){
//         Object.defineProperty(target, key, {
//             configurable : value,
//             writable : value
//         })
//     }
// }
// class Foo{
//     @configurable(true)
//     title : string = "An Awesome App";
//     // @theFactory()
//     // xyz : number = 101;
//     @log
//     myMethod(){
//         console.log("My method executed")
//     }
// }
// let foo = new Foo()
// console.log("TITLE : ", foo.title);
// foo.myMethod();
// function seal(constructor : any){
//     Object.seal(constructor)
//     Object.seal(constructor.prototype)
// }
// @seal
// class Animal{
//     constructor(private legs : number){}
// }
function First() {
    console.log("First Decorator Factory");
    return function (target, key) {
        console.log("First Decorator Function");
    };
}
function Second() {
    console.log("Second Decorator Factory");
    return function (target, key) {
        console.log("Second Decorator Function");
    };
}
class Person {
    constructor() {
        this.name = "Foo";
    }
}
__decorate([
    First(),
    Second(),
    __metadata("design:type", String)
], Person.prototype, "name", void 0);
