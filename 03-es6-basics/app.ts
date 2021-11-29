// let user = {
//     email : "test@test.com",
//     age : 32,
//     friends : ["foo", "bar"],
//     address : {
//         city : "Delhi",
//         street : "201 Main Road"
//     }
// }
// let {email, age, friends : [f1, f2], address : { city, street}} = user;

// let users = [
//     {email : "test1@test.com", age : 30},
//     {email : "test2@test.com", age : 33},
//     {email : "test3@test.com", age : 36},
// ]

// let [
//     {email : e1, age: a1},
//     {email: e2, age : a2},
//     {email : e3, age : a3}
// ] = users;

// users.forEach(item => {
//     let {email,age} = item
//     console.log(email,age);
//     })
// console.log(email)

// function fn() {
//     var j = 0;
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//     j = i;
//   }
//   console.log("J : ", j)
//   var j = 123;
//   console.log(j);
// }

// fn();

// function fn(arr){
//     if(arr.length > 2){
//         let LOAD = "LOADING"
//         console.log(FLASH);             // undefined
//     }else{
//         let FLASH = "FLASHING"
//     }
// }

// fn([12,3,4,5])

// const user = {
//     name : "Foo"
// }

// user.name = "Bar"

// user = {
//     name : "Bam"
// }

// console.log(user);          // ?


// const arr = [1,2,3]

// arr.push(4);

// arr = []
// console.log(arr.length);            // ?


// Promise : Handling JavaScript Async behaviour
// - 3 States : fulfill, reject, pending


console.log("START")
setTimeout(() => {
    console.log("TIMER")
}, 0);
Promise.resolve().then(() => console.log("PROMISE"))
console.log("END")

// - START -> END -> PROMISE - TIMER

// MicroTask : Promise, queueMicrotask()
// MacroTask : Timer, XHR, OS Socket, File Reading/Writing etc