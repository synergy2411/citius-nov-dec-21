// function display<T>(xyz : T): T{
//     return xyz;
// }

// let str = display<string>("Hello")

// console.log(str.split("").reverse().join(''))

// let num = display<number>(123)

// console.log(num.toFixed())

// let isNinja = display<boolean>(true)

// display("Some String");

// let num = display(123);

// display(true);


// function addAtBeegining<T>(item: T, arr: T[]) : T[]{
//     return [item, ...arr]
// }

// let strArray = addAtBeegining<string>("Hello", ["Bye", "Hola"])
// strArray.push("Goodbye")

// const numArray = addAtBeegining<number>(4, [3,2,1])

// numArray.push(123);
// numArray.push("String")

// let strArray = addAtBeegining("Hello", ["Bye", "Hola"])

// strArray.push("Goodybye")
// strArray.push(123)

// let anyArray = addAtBeegining(4, [3,2,1]);

// anyArray.push(5);
// anyArray.push("Hello")
// anyArray.push(true)


// interface Person{
//     firstName : string;
//     lastName : string;
// }

// interface Resource<T extends Person> {
//     uid : string;
//     resourceName : string;
//     data : T;
// }


// let resource : Resource<{firstName: string, lastName : string}> = {
//     uid : "123",
//     resourceName : "GET/ call",
//     data : {
//         firstName : "",
//         lastName : ""
//     }
// }


class Ninja<T,U>{
    constructor(public name: T, public isBlackBelt: U){}
}

function displayNinja<T extends Ninja<string,boolean>>(item : T): T {
    return { ...item, uid : 123 }
}

let mario : Ninja<string, boolean> = {
    isBlackBelt : true,
    name : "Mario"
}
let newNinja = displayNinja(mario);
console.log(newNinja)

// displayNinja("")
// displayNinja(123)