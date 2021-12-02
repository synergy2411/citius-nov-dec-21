const axios = require("axios").default;
const chalk = require("chalk");
const yargs = require("yargs");
const https = require("https");

// const myModule = require("./utils/file-module");
// const utils = require("./utils");

// axios
//   .get("https://jsonplaceholder.typicode.com/todos/1", {
//     httpAgent: new https.Agent({
//       rejectUnauthorized: false,
//     }),
//   } )
//   .then((resp) => console.log(chalk.red("The Response")))
//   .catch((err) => console.log(err));

// console.log("ADD : ", myModule.sum(2, 4));
// console.log("My Lucky Number : ", myModule.getLuckyNumber());
// console.log(utils.getMyFortune());

// console.log("PROCESS : ", process.argv[2])
// console.log("YARGS : ", yargs.argv.body)


const coreModule = require("./core-module")
const utils = require("./utils/file-module")
const utilObj = utils();

console.log("External Module Loaded")
console.log("Lucky Number : ", utilObj.getLuckyNumber())