const axios = require("axios").default;
const chalk = require("chalk");
const yargs = require("yargs");

const myModule = require("./utils/file-module")
const utils = require("./utils")

axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(resp => console.log(chalk.red("The Response")))
    .catch(err=>console.log(err))


    console.log("ADD : ", myModule.sum(2,4));
console.log("My Lucky Number : ", myModule.getLuckyNumber())
console.log(utils.getMyFortune());

// console.log("PROCESS : ", process.argv)
// console.log("YARGS : ", yargs.argv)