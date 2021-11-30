"use strict";
// Decorators : 
// - Prefixed with '@'
// - Simple functions for met-programming
// - Classes, Methods, Properties, Parameters & Getters/Setters
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
//         // descriptor.configurable = value
//         // descriptor.writable = value;
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
// function First(){
//     console.log("First Decorator Factory")
//     return function(target: any, key : string){
//         console.log("First Decorator Function")
//     }
// }
// function Second(){
//     console.log("Second Decorator Factory")
//     return function(target: any, key : string){
//         console.log("Second Decorator Function")
//     }
// }
// class Person {
//     @First()
//     @Second()
//     name : string = "Foo"
// }
